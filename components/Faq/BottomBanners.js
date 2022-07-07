import Link from 'next/link'
export default function BottomBanners() {
    return (
        <>
            <div className="mt-20 mb-10">
                <div className="bg-zinc-600 shadow-lg py-3">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex md:items-center items-start justify-between flex-wrap">
                            <div className="w-0 flex-1 flex items-center">
                                <span className="flex p-2 rounded-lg bg-zinc-500 md:block hidden">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15ZM4 15V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </span>
                                <p className="md:ml-3 font-medium text-white">
                                    We use third-party cookies in order to personalise your experience <span className="text-gray-300">Read our <a href="#" className="underline">Cookie Policy.</a></span>
                                </p>
                            </div>
                            <div className="order-3 mt-4 flex-shrink-0 w-full flex md:flex-row flex-col-reverse md:order-2 md:mt-0 md:w-auto">
                            <Link href="/"><a  className="flex items-center justify-center px-4 py-2 md:mr-2 md:mt-0 mt-2 border border-slate-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white">
                                    Decline
                                </a></Link>
                                <Link href="/"><a className="flex items-center justify-center px-4 py-2 border border-slate-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-gray-50">
                                    Allow
                                </a></Link>
                            </div>
                            <div className="order-2 flex-shrink-0 md:order-3 sm:ml-2">
                                <button type="button" className="-mr-1 flex p-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-white">
                                    <span className="sr-only">Dismiss</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative bg-gray-50 border-b border-slate-300 py-3 mb-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="pr-16 sm:text-center sm:px-16">
                        <p className="font-medium text-gray-800">
                            We’ve just launched a new feature! <span className="text-gray-600">Check out the <Link href="/"><a className="underline">new dashboard.</a></Link></span>
                        </p>
                    </div>
                    <div className="absolute inset-y-0 right-0 pt-1 pr-2 flex items-start">
                        <button
                            type="button"
                            className="flex p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <span className="sr-only">Dismiss</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#666"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative bg-zinc-600 border-b border-slate-300 py-3 mb-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="pr-16 sm:text-center sm:px-16">
                        <p className="font-medium text-white">
                            We’ve just launched a new feature! <span className="text-gray-300">Check out the <Link href="/"><a className="underline">new dashboard.</a></Link></span>
                        </p>
                    </div>
                    <div className="absolute inset-y-0 right-0 pt-1 pr-2 flex items-start">
                        <button
                            type="button"
                            className="flex p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <span className="sr-only">Dismiss</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" /></svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className="mb-10">
                <div className="bg-zinc-600 shadow-lg py-3">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex md:items-center items-start justify-between flex-wrap">
                            <div className="w-0 flex-1 flex items-center">
                                <span className="flex p-2 rounded-lg bg-zinc-500 md:block hidden">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <div className="md:ml-3">
                                    <p className="font-medium text-white">
                                        Stay up to date with the latest news and updates
                                    </p>
                                    <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="order-3 mt-4 flex-shrink-0 w-full flex md:flex-row flex-col-reverse md:order-2 md:mt-0 md:w-auto">
                                <div className="flex md:flex-row flex-col">
                                    <input
                                        id="email-address"
                                        name="email-address"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="w-full border border-gray-300 shadow-xs px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-lg"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        className="mt-3 w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow text-base font-medium rounded-md text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white md:mt-0 md:ml-3 md:w-auto md:flex-shrink-0"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <div className="order-2 flex-shrink-0 md:order-3 sm:ml-2">
                                <button type="button" className="-mr-1 flex p-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-white">
                                    <span className="sr-only">Dismiss</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="mb-10">
                <div className="bg-gray-50 border-b border-slate-300 py-3">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex md:items-center items-start justify-between flex-wrap">
                            <div className="w-0 flex-1 flex items-center">
                                <span className="flex p-2 rounded-lg bg-zinc-500 md:block hidden">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <div className="md:ml-3">
                                    <p className="font-medium text-gray-600">
                                        Stay up to date with the latest news and updates
                                    </p>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="order-3 mt-4 flex-shrink-0 w-full flex md:flex-row flex-col-reverse md:order-2 md:mt-0 md:w-auto">
                                <div className="flex md:flex-row flex-col">
                                    <input
                                        id="email-address"
                                        name="email-address"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="w-full border border-gray-300 shadow-xs px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-lg"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        className="mt-3 w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow text-base font-medium rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white md:mt-0 md:ml-3 md:w-auto md:flex-shrink-0"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <div className="order-2 flex-shrink-0 md:order-3 sm:ml-2">
                                <button type="button" className="-mr-1 flex p-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-white">
                                    <span className="sr-only">Dismiss</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}