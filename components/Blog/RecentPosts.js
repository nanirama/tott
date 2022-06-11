import Link from 'next/link'
import Image from 'next/image'
import RecentBlogItem from './RecentBlogItem'
import BlogImg1 from "../../assets/images/blog-img1.jpg"

export default function RecentPost({data}) {

    return (

        <>
            <div className="lg:py-10 py-5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="lg:py-10 py-5 w-full text-center">
                        <h6 className="text-base font-semibold mb-4">Latest posts</h6>
                        <h2 className="md:text-5xl text-3xl font-semibold mb-5">Untitled blog</h2>
                        <p className="text-xl text-gray-500">Interviews, tips, guides, industry best practices, and news.</p>
                    </div>

                    <div className='flex lg:flex-row flex-col md:gap-8 gap-2'>
                        { data && data.map((item, index)=> <RecentBlogItem data={item} key={index}/>)}                        
                    </div>
                    <div className='text-center lg:mt-10 mt-5 lg:mb-20 mb-5'>
                    <Link href={`/blog`}><a className="inline-flex justify-center items-center rounded-lg bg-zinc-600 border border-zinc-600 py-3 px-5 text-white text-base font-medium  text-center">View All Posts</a></Link>
                    </div>
                    <hr className="my-8" />
                </div>

            </div>
        </>

    )
}