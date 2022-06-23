export default function Pricing3() {

    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto flex flex-col px-4 xl:py-20 py-10">
                <div className="w-full lg:mb-12 mb-8 text-center flex flex-col">
                    <h6 className="text-base font-semibold mb-3">Pricing</h6>
                    <h2 className="lg:text-4xl text-2xl font-semibold tracking-tight mb-4">Plans that fit your scale</h2>
                    <p className="text-xl text-gray-500 leading-8">Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
                    <div className="relative border bg-gray-50 self-center mt-6 rounded-lg p-1 flex sm:mt-8 items-center">
                        <button
                            type="button"
                            className="relative bg-white border border-slate-300 mr-3 rounded-md py-2 text-base font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto px-2"
                        >
                            Monthly billing
                        </button>
                        <button
                            type="button"
                            className="relative border border-transparent mr-3 rounded-md py-2 text-base font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto px-2"
                        >
                            Annual billing
                        </button>
                        <div className="h-6 flex items-center hidden md:flex justify-between bg-gray-100 rounded-2xl p-1 w-auto text-gray-700 text-sm font-medium py-1 px-2">Save 20%</div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    <div className='border rounded-lg shadow-lg'>
                        <div className='flex gap-3 sm:flex-row justify-between flex-col-reverse mb-3 p-8 border-b'>
                            <div>
                                <div className='flex flex-row gap-2 mb-1'>
                                    <h5 className="font-semibold text-2xl">Basic plan</h5>
                                    <a href='#' className='flex items-center hidden md:flex justify-between bg-gray-50 rounded-2xl p-1 w-auto text-gray-700 text-base font-medium py-1 px-2'>Popular</a>
                                </div>
                                <p className='text-base font-normal text-gray-500'>Our most popular plan for small teams.</p>
                            </div>
                            <div>
                                <p><span className="md:text-5xl text-4xl font-extrabold text-gray-900">$10</span> <span className="text-base font-normal text-gray-500">per month</span></p>
                            </div>
                        </div>
                        <div className='py-5 px-8 border-b'>
                            <h5 className='text-base font-semibold text-gray-900'>FEATURES</h5>
                            <p className='text-base font-normal text-gray-400 mb-5'>Everything in our <b>free plan</b> plus....</p>
                            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-5">
                                <ul>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">Access to basic features</span>
                                    </li>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">Basic reporting + analytics</span>
                                    </li>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">Up to 10 individual users</span>
                                    </li>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">20GB individual data</span>
                                    </li>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">Basic chat support</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">Attend events</span>
                                    </li>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">Automatic updates</span>
                                    </li>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">Backup your account</span>
                                    </li>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">Audit log and notes</span>
                                    </li>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">Feature requests</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='p-8 flex'>
                            <a href="#" className="text-center rounded-lg bg-zinc-600 border border-zinc-600 py-3 px-5 text-white text-base font-medium w-full">Start Free Trail</a>
                        </div>
                    </div>
                    <div className='border rounded-lg shadow-lg'>
                        <div className='flex gap-3 sm:flex-row justify-between flex-col-reverse mb-3 p-8 border-b'>
                            <div>
                                <div className='flex flex-row gap-2 mb-1'>
                                    <h5 className="font-semibold text-2xl">Business plan</h5>
                                    <a href='#' className='flex items-center hidden md:flex justify-between bg-gray-50 rounded-2xl p-1 w-auto text-gray-700 text-base font-medium py-1 px-2'>Popular</a>
                                </div>
                                <p className='text-base font-normal text-gray-500'>Advanced features and reporting.</p>
                            </div>
                            <div>
                                <p><span className="md:text-5xl text-4xl font-extrabold text-gray-900">$10</span> <span className="text-base font-normal text-gray-500">per month</span></p>
                            </div>
                        </div>
                        <div className='py-5 px-8 border-b'>
                            <h5 className='text-base font-semibold text-gray-900'>FEATURES</h5>
                            <p className='text-base font-normal text-gray-400 mb-5'>Everything in our <b>free plan</b> plus....</p>
                            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-5">
                                <ul>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">200+ integrations</span>
                                    </li>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">Advanced reporting</span>
                                    </li>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">Up to 20 individual users</span>
                                    </li>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">40GB individual data</span>
                                    </li>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">Priority chat support</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">Advanced custom fields</span>
                                    </li>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">Audit log and data history</span>
                                    </li>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">Backup your account</span>
                                    </li>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">Personalised service</span>
                                    </li>
                                    <li className="flex gap-3 items-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A" />
                                        </svg>
                                        <span className="text-base text-gray-500">+ many more...</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='p-8 flex'>
                            <a href="#" className="text-center rounded-lg bg-zinc-600 border border-zinc-600 py-3 px-5 text-white text-base font-medium w-full">Start Free Trail</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}