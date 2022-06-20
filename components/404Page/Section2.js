export default function Section2() {
    return (
        <div className="bg-white md:py-20 py-10 mb-10">
            <div className="flex-grow flex flex-col justify-center max-w-2xl w-full mx-auto px-4">
                <div className="text-center">
                    <h6 className="text-base font-semibold text-gray-700 mb-3">404 error</h6>
                    <h2 className="xl:text-6xl md:text-5xl text-3xl font-extrabold text-gray-900 tracking-tight mb-6">We lost this page</h2>
                    <p className="md:text-xl text-base text-gray-500 md:mb-12 mb-6">We searched high and low, but couldn’t find what you’re looking for. Let’s find a better place for you to go.</p>
                    <div className="flex justify-center md:flex-row flex-col-reverse">
                        <a href="#" className="flex text-lg font-medium text-gray-700 items-center justify-center rounded-lg shadow-xs border border-gray-300 py-3 px-8 md:mr-3 md:mt-0 mt-3">
                            <svg className="mr-2 mt-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>  Go back
                        </a>
                        <a href="#" className="flex text-lg font-medium text-white items-center justify-center rounded-lg shadow-xs border border-transparent bg-green-400 py-3 px-8">
                            Take me home
                        </a>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className="mx-auto px-4 max-w-7xl">
                    <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
                        <div className="bg-gray-50 p-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8M14 2L20 8M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="#504F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h5 className="md:mt-12 mt-8 text-xl font-medium text-gray-900">Documentation</h5>
                            <p className="mt-2 text-base text-gray-500">Dive in to learn all about our product.</p>
                            <a href="#" className="text-base text-gray-900 font-medium flex mt-5">Start learning <svg className="ml-2 mt-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16602 10.0003H15.8327M15.8327 10.0003L9.99935 4.16699M15.8327 10.0003L9.99935 15.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                            </svg></a>
                        </div>
                        <div className="bg-gray-50 p-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 7C12 5.93913 11.5786 4.92172 10.8284 4.17157C10.0783 3.42143 9.06087 3 8 3H2V18H9C9.79565 18 10.5587 18.3161 11.1213 18.8787C11.6839 19.4413 12 20.2044 12 21M12 7V21M12 7C12 5.93913 12.4214 4.92172 13.1716 4.17157C13.9217 3.42143 14.9391 3 16 3H22V18H15C14.2044 18 13.4413 18.3161 12.8787 18.8787C12.3161 19.4413 12 20.2044 12 21" stroke="#504F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h5 className="md:mt-12 mt-8 text-xl font-medium text-gray-900">Our blog</h5>
                            <p className="mt-2 text-base text-gray-500">Read the latest posts on our blog.</p>
                            <a href="#" className="text-base text-gray-900 font-medium flex mt-5">View lastest posts <svg className="ml-2 mt-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16602 10.0003H15.8327M15.8327 10.0003L9.99935 4.16699M15.8327 10.0003L9.99935 15.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                            </svg></a>
                        </div>
                        <div className="bg-gray-50 p-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="#504F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h5 className="md:mt-12 mt-8 text-xl font-medium text-gray-900">Chat to us</h5>
                            <p className="mt-2 text-base text-gray-500">Can’t find what you’re looking for?</p>
                            <a href="#" className="text-base text-gray-900 font-medium flex mt-5">Chat to our team<svg className="ml-2 mt-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16602 10.0003H15.8327M15.8327 10.0003L9.99935 4.16699M15.8327 10.0003L9.99935 15.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                            </svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
