import React, { Fragment, useState } from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sidebar({ data, slug, handleInputChange }) {
    const router = useRouter()

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const handleCatChange = (e) => {
        if (e.target.value == 0) {
            router.push(`/blog/`)
        }
        else {
            router.push(`/blog/category/${e.target.value}`)
        }
    }
    return (

        <div className="lg:pr-10 mb-4 sticky top-0">
            <form className="flex items-center mb-8">
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input
                        className="searchInput bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5 focus:outline-none focus:border "
                        type="text"
                        aria-label="Search"
                        placeholder="Search..."
                        onChange={handleInputChange}
                    />
                </div>
            </form>
            <h6 className="font-semibold text-sm mb-5">Blog categories</h6>
            <div>
                <div className="md:hidden md:mb-0 mb-10">
                    <label htmlFor="tabs" className="sr-only">
                        Select a tab
                    </label>
                    <select
                        id="tabs"
                        name="tabs"
                        onChange={handleCatChange}
                        className="block w-full border border-gray-200 py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                    >
                        <option value="0">View All</option>
                        {data && data.map((tab, index) => (
                            <option key={index} value={tab.attributes.slug}>{tab.attributes.name}</option>
                        ))}
                    </select>
                </div>
                <div className="hidden md:block">
                    <nav className="flex flex-col" aria-label="Tabs">
                        <Link href={`/blog/`}><a className={slug === '' ? 'py-3 px-3 text-gray-700 text-base font-medium mb-2 bg-gray-100 rounded-md' : 'py-3 px-3 text-gray-700 text-base font-medium mb-2 hover:bg-gray-100 rounded-md'}>View all</a></Link>
                        {data && data.map((tab, index) => (
                            <Link key={tab.attributes.slug} href={`/blog/category/${tab.attributes.slug}`}><a
                                className={classNames(
                                    slug === tab.attributes.slug ? 'py-3 px-3 text-gray-700 text-base font-medium mb-3 bg-gray-100 rounded-md' : 'py-3 px-3 text-gray-700 text-base font-medium mb-2 hover:bg-gray-100 rounded-md'
                                )}
                            >
                                {tab.attributes.name}
                            </a>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}