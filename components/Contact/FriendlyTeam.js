import React from 'react';
import ContactForm from "../Elements/ContactForm"
export default function FriendlyTeamsection() {
    return (
        <div className='bg-neutral-800 mx-auto md:py-24 py-10 px-4 sm:mt-20 mt-16'>
            <div className="max-w-7xl mx-auto">
                <div className='w-100 text-base font-semibold text-neutral-200'>Contact us</div>
                <h2 className='text-4xl text-white font-semibold py-3'>Chat to our friendly team</h2>
                <p className='text-xl font-normal text-neutral-200'>We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                <div className='w-100 flex md:flex-row flex-col gap-20 mt-20'>
                    <div className='md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-5'>
                        <div className='w-100'>
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 3C21 1.9 20.1 1 19 1H3C1.9 1 1 1.9 1 3M21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3M21 3L11 10L1 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className='text-xl font-medium text-white mt-5'>Email</div>
                            <p className='text-base text-neutral-200 font-normal mb-4 pt-2'>Our friendly team is here to help.</p>
                            <a href='#' className='font-medium text-white hover:text-green-400 text-base'>hi@untitledui.com</a>
                        </div>
                        <div className='w-100'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 9.50003C19.0034 10.8199 18.6951 12.1219 18.1 13.3C17.3944 14.7118 16.3098 15.8992 14.9674 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18013 18.0035 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.50003C2.00061 7.92179 2.44061 6.37488 3.27072 5.03258C4.10083 3.69028 5.28825 2.6056 6.7 1.90003C7.87812 1.30496 9.18013 0.996587 10.5 1.00003H11C13.0843 1.11502 15.053 1.99479 16.5291 3.47089C18.0052 4.94699 18.885 6.91568 19 9.00003V9.50003Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className='text-xl font-medium text-white mt-5'>Live chat</div>
                            <p className='text-base text-neutral-200 font-normal mb-4 pt-2'>Our friendly team is here to help.</p>
                            <a href='#' className='font-medium text-white hover:text-green-400 text-base'>Start new chat</a>
                        </div>
                        <div className='w-100'>
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className='text-xl font-medium text-white mt-5'>Office</div>
                            <p className='text-base text-neutral-200 font-normal mb-4 pt-2'>Come say hello at our office HQ.</p>
                            <div className='font-medium text-white text-base'>100 Smith Street<br />Collingwood VIC 3066 AU</div>
                        </div>
                        <div className='w-100'>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0004 15.9201V18.9201C21.0016 19.1986 20.9445 19.4743 20.8329 19.7294C20.7214 19.9846 20.5577 20.2137 20.3525 20.402C20.1473 20.5902 19.905 20.7336 19.6412 20.8228C19.3773 20.912 19.0978 20.9452 18.8204 20.9201C15.7433 20.5857 12.7874 19.5342 10.1904 17.8501C7.77425 16.3148 5.72576 14.2663 4.19042 11.8501C2.5004 9.2413 1.44866 6.27109 1.12042 3.1801C1.09543 2.90356 1.1283 2.62486 1.21692 2.36172C1.30555 2.09859 1.44799 1.85679 1.63519 1.65172C1.82238 1.44665 2.05023 1.28281 2.30421 1.17062C2.5582 1.05843 2.83276 1.00036 3.11042 1.0001H6.11042C6.59573 0.995321 7.06621 1.16718 7.43418 1.48363C7.80215 1.80008 8.0425 2.23954 8.11042 2.7201C8.23704 3.68016 8.47187 4.62282 8.81042 5.5301C8.94497 5.88802 8.97408 6.27701 8.89433 6.65098C8.81457 7.02494 8.62928 7.36821 8.36042 7.6401L7.09042 8.9101C8.51398 11.4136 10.5869 13.4865 13.0904 14.9101L14.3604 13.6401C14.6323 13.3712 14.9756 13.1859 15.3495 13.1062C15.7235 13.0264 16.1125 13.0556 16.4704 13.1901C17.3777 13.5286 18.3204 13.7635 19.2804 13.8901C19.7662 13.9586 20.2098 14.2033 20.527 14.5776C20.8441 14.9519 21.0126 15.4297 21.0004 15.9201Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className='text-xl font-medium text-white mt-5'>Phone</div>
                            <p className='text-base text-neutral-200 font-normal mb-4 pt-2'>Mon-Fri from 8am to 5pm.</p>
                            <div className='font-medium text-white text-base'>+1 (555) 000-0000</div>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full bg-white sm:p-10 p-5 rounded-2xl'>
                        <div className="mt-10 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div className="grid grid-cols-12 sm:gap-6 gap-2">
                                    <div className="md:col-span-6 col-span-12">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="mt-1 block w-full py-2 px-3  placeholder-gray-500  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="First name" />
                                    </div>
                                    <div className="md:col-span-6 col-span-12">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Last name" />
                                    </div>
                                    <div className="col-span-12">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            Email address
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="you@company.com" />
                                    </div>
                                    <div className="col-span-12">
                                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                                            Message
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                rows={4}
                                                name="comment"
                                                id="comment"
                                                className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-32 p-3 block w-full sm:text-sm border-gray-300 border rounded-md" placeholder="Leave us a message..."
                                                defaultValue={''}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <fieldset className="">
                                            <legend className="sr-only">Notifications</legend>
                                            <div className="relative flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id="comments"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="comments" className="font-medium text-gray-500 text-base">
                                                        You agree to our friendly <a href='#' className='underline'>privacy policy.</a>
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="col-span-12">
                                        <button
                                            type="submit"
                                            className="w-full text-center bg-green-400 border border-transparent rounded-lg shadow-sm py-3 px-4 inline-flex justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Send message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}