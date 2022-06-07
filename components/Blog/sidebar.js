import Link from 'next/link'

export default function Sidebar({ data, slug, handleInputChange }) {
    console.log('props cat', data)
    return (
        <div className="lg:pr-10 mb-4 sticky top-0">
            <form class="flex items-center mb-8">
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input
                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5 focus:outline-none focus:border "
                        className="searchInput"
                        type="text"
                        aria-label="Search"
                        placeholder="Search..."
                        onChange={handleInputChange}
                    />
                </div>
            </form>
            <h6 className="font-semibold text-sm mb-5">Blog categories</h6>
            <ul>
                <li className={slug === '' ? 'py-3 px-3 text-gray-700 text-base font-medium mb-2 bg-gray-100 rounded-md' : 'py-3 px-3 text-gray-700 text-base font-medium mb-2 hover:bg-gray-100 rounded-md'}><Link href={`/blog/`}><a>View all</a></Link></li>
                {data && data.map((item, index) => (
                    <li className={slug === item.attributes.slug ? 'py-3 px-3 text-gray-700 text-base font-medium mb-2 bg-gray-100 rounded-md' : 'py-3 px-3 text-gray-700 text-base font-medium mb-2 hover:bg-gray-100 rounded-md'}><Link href={`/blog/category/${item.attributes.slug}`}><a>{item.attributes.name}</a></Link></li>
                ))}
            </ul>
        </div>
    )
}