
export default function SignupForm() {
    return (
        <div className='w-full'>
            <div className='xl:w-96 mx-auto w-full p-4'>
                <h2 className='text-gray-900 font-semibold md:text-3xl text-2xl mb-2'>Signup</h2>
                <p className='text-gray-500 font-normal text-base mb-5'>Start your 30-day free trial.</p>
                <div className="flex flex-wrap  mb-3">
                    <label className="block  tracking-wide text-gray-500 text-sm font-medium mb-2">
                        Name*
                    </label>
                    <input className="appearance-none block text-sm w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Name" />
                </div>
                <div className="flex flex-wrap mb-3">
                    <label className="block  tracking-wide text-gray-500 text-sm font-medium mb-2">
                        Email*
                    </label>
                    <input className="appearance-none text-sm block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Email" />
                </div>
                <div className="flex flex-wrap mb-3">
                    <label className="block  tracking-wide text-gray-500 text-xs font-medium mb-2">
                        Password*
                    </label>
                    <input className="appearance-none block text-sm mb-1 w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="password" required placeholder="Create a password" />
                    <p className='text-xs text-gray-500 text-normal mb-4'>Must be at least 8 characters.</p>
                </div>
                <button type="submit" className="w-full mb-4 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Get started
                </button>
                <button type="submit" className="w-full flex justify-center py-3 px-4 mb-5 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_420_134740)">
                            <path d="M23.7663 12.2763C23.7663 11.4605 23.7001 10.6404 23.559 9.83789H12.2402V14.4589H18.722C18.453 15.9492 17.5888 17.2676 16.3233 18.1054V21.1037H20.1903C22.4611 19.0137 23.7663 15.9272 23.7663 12.2763Z" fill="#4285F4" />
                            <path d="M12.2391 24.0013C15.4756 24.0013 18.205 22.9387 20.1936 21.1044L16.3266 18.106C15.2507 18.838 13.8618 19.2525 12.2435 19.2525C9.11291 19.2525 6.45849 17.1404 5.50607 14.3008H1.51562V17.3917C3.55274 21.4439 7.70192 24.0013 12.2391 24.0013Z" fill="#34A853" />
                            <path d="M5.50277 14.3007C5.00011 12.8103 5.00011 11.1965 5.50277 9.70618V6.61523H1.51674C-0.185266 10.006 -0.185266 14.0009 1.51674 17.3916L5.50277 14.3007Z" fill="#FBBC04" />
                            <path d="M12.2391 4.74966C13.9499 4.7232 15.6034 5.36697 16.8425 6.54867L20.2685 3.12262C18.0991 1.0855 15.2198 -0.034466 12.2391 0.000808666C7.70192 0.000808666 3.55274 2.55822 1.51562 6.61481L5.50166 9.70575C6.44967 6.86173 9.1085 4.74966 12.2391 4.74966Z" fill="#EA4335" />
                        </g>
                        <defs>
                            <clipPath id="clip0_420_134740">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    Sign up with Google
                </button>

                <p className='text-center text-sm'>Already have an account? <a href="#">Log in</a></p>
            </div>




        </div>

    )
}