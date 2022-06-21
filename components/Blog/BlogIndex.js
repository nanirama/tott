import React, { useReact, useState } from "react"
import Sidebar from './sidebar'
import Pagination from './Pagination'

import BlogItem from './BlogItem'
import BlogFirstItem from './BlogFirstItem'

export default function BlogIndex({ data, paginationPath, slug = '' }) {
    const { blogs, page, numOfPages, categoriesList, total } = data

    const emptyQuery = ""

    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery,
    })

    const handleInputChange = event => {        
        const query = event.target.value
        const posts = blogs || []
    
        const filteredData = posts.filter(post => {
          const { title} = post.attributes
          return (
            title.toLowerCase().includes(query.toLowerCase())
          )
        })    
        setState({
          query,
          filteredData,
        })
      }
      const { filteredData, query } = state
      const hasSearchResults = filteredData && query !== emptyQuery
      const posts = hasSearchResults ? filteredData : blogs
    return (
        <div className="lg:pb-10 pb-5 md:mt-20 mt-16">
            <div className="max-w-7xl mx-auto flex md:flex-row flex-col px-4">
                <div className="lg:py-20 py-10 w-full">
                    <h6 className="text-base font-semibold mb-3">Our blog</h6>
                    <h2 className="md:text-5xl text-3xl font-semibold tracking-tight md:mb-8 mb-4">Resources and insights</h2>
                    <p className="text-xl text-gray-500 leading-8">The latest industry news, interviews, technologies, and resources.</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto flex md:flex-row flex-col px-4 relative">
                    <div className='md:w-1/4 w-full'>
                      <Sidebar
                        data={categoriesList}
                        slug={slug}
                        handleInputChange={handleInputChange}
                      />
                    </div>
                <div className='md:w-3/4 w-full'>
                    <div className='flex  flex-wrap'>
                        {posts.length == 0 && (
                            <div className="w-full bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                                <p className="font-bold text-sm">No Posts found</p>
                            </div>
                        )}
                        {posts && posts.map((blog, index) => {
                            if (index === 0) {
                                return <BlogFirstItem key={index} data={blog} />
                            }
                            else {
                                return <BlogItem key={index} data={blog} />
                            }
                        })}
                    </div>
                </div>
            </div>
            {posts.length > 0 && (
                <div className="max-w-7xl mx-auto flex items-center justify-center py-10 px-4">
                    <Pagination currentPage={page} numberOfPages={numOfPages} paginationPath={paginationPath} />
                </div>
            )}
        </div>
    )
}