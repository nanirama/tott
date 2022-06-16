export default function Stats() {
    return (
        <div className="bg-zinc-900 py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center flex items-center flex-col">
                    <svg width="56" height="56" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 33C5 17.536 17.536 5 33 5C48.464 5 61 17.536 61 33C61 48.464 48.464 61 33 61C17.536 61 5 48.464 5 33Z" fill="#504F4F" />
                        <path d="M34.1667 21.333L22.5 35.333H33L31.8333 44.6663L43.5 30.6663H33L34.1667 21.333Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33 56C20.2975 56 10 45.7025 10 33H0C0 51.2254 14.7746 66 33 66V56ZM56 33C56 45.7025 45.7025 56 33 56V66C51.2254 66 66 51.2254 66 33H56ZM33 10C45.7025 10 56 20.2975 56 33H66C66 14.7746 51.2254 0 33 0V10ZM33 0C14.7746 0 0 14.7746 0 33H10C10 20.2975 20.2975 10 33 10V0Z" fill="#323232" />
                    </svg>
                    <h2 className="text-3xl font-extrabold text-white md:text-4xl mt-5">
                        Build something great
                    </h2>
                    <p className="mt-3 mb-5 text-xl text-gray-200 font-light sm:mt-4">
                        Everything you need to build modern UI and great products.
                    </p>
                </div>
                <dl className="sm:grid sm:grid-cols-4 md:mt-10 mt-3">
                    <div className="flex flex-col border-b border-gray-500 lg:px-6 px-4 md:py-2 py-4 sm:border-0 sm:border-r-2 sm:border-l-2">
                        <dt className="order-3 mt-2 text-lg leading-6 font-medium text-gray-500">
                            <a href="#" className="flex items-center text-gray-600 visited:text-zinc-700 font-medium">Learn More
                                <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </a>
                        </dt>
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 mb-2">Projects completed</dt>
                        <dd className="order-1 lg:text-5xl text-3xl font-extrabold text-white tracking-tighter mb-2">400+</dd>
                    </div>
                    <div className="flex flex-col border-b border-gray-500 lg:px-6 px-4 md:py-2 py-4 sm:border-0">
                        <dt className="order-3 mt-2 text-lg leading-6 font-medium text-gray-500">
                            <a href="#" className="flex items-center text-gray-600 visited:text-zinc-700 font-medium">Learn More
                                <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </a>
                        </dt>
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 mb-2">Return on investment</dt>
                        <dd className="order-1 lg:text-5xl text-3xl font-extrabold text-white tracking-tighter mb-2">600%</dd>
                    </div>
                    <div className="flex flex-col border-b border-gray-500 lg:px-6 px-4 md:py-2 py-4 sm:border-0 sm:border-l-2">
                        <dt className="order-3 mt-2 text-lg leading-6 font-medium text-gray-500">
                            <a href="#" className="flex items-center text-gray-600 visited:text-zinc-700 font-medium">Learn More
                                <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </a>
                        </dt>
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 mb-2">Global downloads</dt>
                        <dd className="order-1 lg:text-5xl text-3xl font-extrabold text-white tracking-tighter mb-2">10K</dd>
                    </div>
                    <div className="flex flex-col border-t border-gray-500 lg:px-6 px-4 md:py-2 py-4 sm:border-0 sm:border-l-2">
                        <dt className="order-3 mt-2 text-lg leading-6 font-medium text-gray-500">
                            <a href="#" className="flex items-center text-gray-600 visited:text-zinc-700 font-medium">Learn More
                                <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </a>
                        </dt>
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 mb-2">5-star reviews</dt>
                        <dd className="order-1 lg:text-5xl text-3xl font-extrabold text-white tracking-tighter mb-2">200+</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}