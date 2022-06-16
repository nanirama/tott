import ImgLoader from '../Image';
import Banner from "../../assets/images/banner-img.jpg"



export default function Career1() {
    return (


        <>
            <div className="lg:py-14 py-10 w-full border-b border-slate-200">
                <div className="max-w-7xl mx-auto flex flex-col px-4">


                    <div className="flex md:flex-row flex-col gap-4 mb-14 justify-bwetween">
                        <div className="md:w-3/5 w-full">

                            <h2 className="md:text-4xl text-3xl font-semibold tracking-tight md:mb-6 mb-3 text-gray-900">Start doing work that matters</h2>
                            <p className="text-xl text-gray-500 font-normal leading-8">Want to work with some of the best global talent and build software used by all the companies you know and love? Join the team — we're hiring!</p>
                        </div>
                        <div className="md:w-2/5 w-full">
                            <div className="flex flex-row gap-3 items-center justify-end">
                                <label>Location:</label>
                                <div className='lg:w-48 w-full flex border p-2 rounded-lg'><svg className=' mr-3' width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8.33301C16.5 14.1663 9 19.1663 9 19.1663C9 19.1663 1.5 14.1663 1.5 8.33301C1.5 6.34388 2.29018 4.43623 3.6967 3.02971C5.10322 1.62318 7.01088 0.833008 9 0.833008C10.9891 0.833008 12.8968 1.62318 14.3033 3.02971C15.7098 4.43623 16.5 6.34388 16.5 8.33301Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 10.833C10.3807 10.833 11.5 9.71372 11.5 8.33301C11.5 6.9523 10.3807 5.83301 9 5.83301C7.61929 5.83301 6.5 6.9523 6.5 8.33301C6.5 9.71372 7.61929 10.833 9 10.833Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                    <select className="w-full block border-0 text-gray-700 mr-3 focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">

                                        <option>Worldwide</option>
                                        <option>National</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-200 lg:pt-14 lg:pb-10 py-5">

                        <div className="flex md:flex-row flex-col gap-3">
                            <div className="md:w-2/5 w-full">
                                <h5 className="text-xl font-medium mb-3">Design</h5>
                                <p className="text-gray-500 text-base">Open positions in our design team.</p>
                            </div>
                            <div className="md:w-3/5 w-full">
                                <div className="border border-slate-200 p-5 rounded-lg mb-5">
                                    <div className='flex gap-3 sm:flex-row flex-col mb-3'>
                                        <h5 className="font-medium lg:text-lg">Product Designer</h5>
                                        <div className='flex sm:justify-between sm:grow gap-3'>
                                            <a href='#' className='flex items-center justify-between gap-1 bg-cyan-100 rounded-2xl p-1 w-auto text-blue-700 text-xs font-medium py-1 px-2'><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="3" cy="3" r="3" fill="#2E90FA" />
                                            </svg> Design</a>
                                            <div>
                                                <a href='#' className='bg-gray-100 rounded-2xl flex gap-1 w-auto text-gray-700 text-xs font-medium py-1 px-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_223_130433)">
                                                        <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58175 16 0 12.4183 0 8C0 8.00187 8 0.00090625 8 0C12.4183 0 16 3.58175 16 8Z" fill="#0052B4" />
                                                        <path d="M7.97852 7.99996H7.99996C7.99996 7.9927 7.99996 7.98575 7.99996 7.97852C7.99283 7.98568 7.98569 7.99282 7.97852 7.99996Z" fill="#F0F0F0" />
                                                        <path d="M8 4.17488C8 2.76723 8 1.84482 8 0.000976562H7.99865C3.581 0.00169531 0 3.5831 0 8.00094H4.1739V5.65057L6.52428 8.00094H7.97862C7.98578 7.99382 7.9929 7.98669 8.00003 7.97954C8.00003 7.44057 8.00003 6.95966 8.00003 6.52529L5.64962 4.17488H8Z" fill="#F0F0F0" />
                                                        <path d="M4.04782 1.04395C2.7966 1.75641 1.75641 2.7966 1.04395 4.04782V8.00048H3.13091V3.13095V3.13091H8.00048C8.00048 2.4727 8.00048 1.84563 8.00048 1.04395H4.04782Z" fill="#D80027" />
                                                        <path d="M8.00086 7.01707L5.15858 4.17482H4.1748C4.1748 4.17479 4.1748 4.17482 4.1748 4.17482L8.00083 8.00085H8.00086C8.00086 8.00085 8.00086 7.32257 8.00086 7.01707Z" fill="#D80027" />
                                                        <path d="M4.82486 9.39062L5.26392 10.3087L6.25539 10.0795L5.81139 10.9952L6.6087 11.6275L5.61598 11.8512L5.61877 12.8689L4.82486 12.2322L4.03098 12.8689L4.03377 11.8512L3.04102 11.6275L3.83836 10.9952L3.3943 10.0795L4.38583 10.3087L4.82486 9.39062Z" fill="#F0F0F0" />
                                                        <path d="M11.9778 11.1299L12.1974 11.5889L12.6931 11.4743L12.4711 11.9322L12.8698 12.2483L12.3734 12.3602L12.3748 12.869L11.9778 12.5507L11.5809 12.869L11.5823 12.3602L11.0859 12.2483L11.4846 11.9322L11.2626 11.4743L11.7583 11.5889L11.9778 11.1299Z" fill="#F0F0F0" />
                                                        <path d="M9.93491 6.26074L10.1544 6.7198L10.6502 6.60518L10.4282 7.06302L10.8268 7.37918L10.3305 7.49105L10.3318 7.99987L9.93491 7.68152L9.53797 7.99987L9.53931 7.49105L9.04297 7.37918L9.44162 7.06302L9.21963 6.60518L9.71537 6.7198L9.93491 6.26074Z" fill="#F0F0F0" />
                                                        <path d="M11.9778 3.47852L12.1974 3.93758L12.6931 3.82298L12.4711 4.28083L12.8697 4.59695L12.3734 4.70886L12.3748 5.21767L11.9778 4.89933L11.5809 5.21767L11.5823 4.70886L11.0859 4.59695L11.4846 4.28083L11.2626 3.82298L11.7583 3.93758L11.9778 3.47852Z" fill="#F0F0F0" />
                                                        <path d="M13.7611 5.56543L13.9806 6.02449L14.4763 5.90987L14.2543 6.36771L14.653 6.68387L14.1566 6.79577L14.158 7.30455L13.7611 6.98624L13.3641 7.30455L13.3655 6.79577L12.8691 6.68387L13.2678 6.36771L13.0458 5.90987L13.5415 6.02449L13.7611 5.56543Z" fill="#F0F0F0" />
                                                        <path d="M12.4864 8L12.659 8.53144H13.2178L12.7657 8.85991L12.9384 9.39131L12.4864 9.06288L12.0343 9.39131L12.2069 8.85991L11.7549 8.53144H12.3137L12.4864 8Z" fill="#F0F0F0" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_223_130433">
                                                            <rect width="16" height="16" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                    Melbourne, Australia</a>
                                            </div>
                                        </div>
                                    </div>



                                    <p className="font-normal text-gray-500 text-base mb-8">We're looking for a mid-level product desgner to join our team.</p>

                                    <div className="flex flex-row gap-5">
                                        <p className="text-base text-gray-500 font-medium flex gap-2 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0003 5.00033V10.0003L13.3337 11.667M18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> Full-time</p>
                                        <p className="text-base text-gray-500 font-medium  flex gap-2 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0.833008V19.1663M14.1667 4.16634H7.91667C7.14312 4.16634 6.40125 4.47363 5.85427 5.02061C5.30729 5.56759 5 6.30946 5 7.08301C5 7.85656 5.30729 8.59842 5.85427 9.1454C6.40125 9.69238 7.14312 9.99967 7.91667 9.99967H12.0833C12.8569 9.99967 13.5987 10.307 14.1457 10.8539C14.6927 11.4009 15 12.1428 15 12.9163C15 13.6899 14.6927 14.4318 14.1457 14.9787C13.5987 15.5257 12.8569 15.833 12.0833 15.833H5" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> 80k - 100k</p>
                                    </div>

                                </div>

                                <div className="border border-slate-200 p-5 rounded-lg mb-5">
                                    <div className='flex gap-3 sm:flex-row flex-col mb-3'>
                                        <h5 className="font-medium lg:text-lg">UX Designer</h5>
                                        <div className='flex sm:justify-between sm:grow gap-3'>
                                            <a href='#' className='flex items-center justify-between gap-1 bg-cyan-100 rounded-2xl p-1 w-auto text-blue-700 text-xs font-medium py-1 px-2'><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="3" cy="3" r="3" fill="#2E90FA" />
                                            </svg> Design</a>
                                            <div>
                                                <a href='#' className='bg-gray-100 rounded-2xl flex gap-1 w-auto text-gray-700 text-xs font-medium py-1 px-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_223_130433)">
                                                        <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58175 16 0 12.4183 0 8C0 8.00187 8 0.00090625 8 0C12.4183 0 16 3.58175 16 8Z" fill="#0052B4" />
                                                        <path d="M7.97852 7.99996H7.99996C7.99996 7.9927 7.99996 7.98575 7.99996 7.97852C7.99283 7.98568 7.98569 7.99282 7.97852 7.99996Z" fill="#F0F0F0" />
                                                        <path d="M8 4.17488C8 2.76723 8 1.84482 8 0.000976562H7.99865C3.581 0.00169531 0 3.5831 0 8.00094H4.1739V5.65057L6.52428 8.00094H7.97862C7.98578 7.99382 7.9929 7.98669 8.00003 7.97954C8.00003 7.44057 8.00003 6.95966 8.00003 6.52529L5.64962 4.17488H8Z" fill="#F0F0F0" />
                                                        <path d="M4.04782 1.04395C2.7966 1.75641 1.75641 2.7966 1.04395 4.04782V8.00048H3.13091V3.13095V3.13091H8.00048C8.00048 2.4727 8.00048 1.84563 8.00048 1.04395H4.04782Z" fill="#D80027" />
                                                        <path d="M8.00086 7.01707L5.15858 4.17482H4.1748C4.1748 4.17479 4.1748 4.17482 4.1748 4.17482L8.00083 8.00085H8.00086C8.00086 8.00085 8.00086 7.32257 8.00086 7.01707Z" fill="#D80027" />
                                                        <path d="M4.82486 9.39062L5.26392 10.3087L6.25539 10.0795L5.81139 10.9952L6.6087 11.6275L5.61598 11.8512L5.61877 12.8689L4.82486 12.2322L4.03098 12.8689L4.03377 11.8512L3.04102 11.6275L3.83836 10.9952L3.3943 10.0795L4.38583 10.3087L4.82486 9.39062Z" fill="#F0F0F0" />
                                                        <path d="M11.9778 11.1299L12.1974 11.5889L12.6931 11.4743L12.4711 11.9322L12.8698 12.2483L12.3734 12.3602L12.3748 12.869L11.9778 12.5507L11.5809 12.869L11.5823 12.3602L11.0859 12.2483L11.4846 11.9322L11.2626 11.4743L11.7583 11.5889L11.9778 11.1299Z" fill="#F0F0F0" />
                                                        <path d="M9.93491 6.26074L10.1544 6.7198L10.6502 6.60518L10.4282 7.06302L10.8268 7.37918L10.3305 7.49105L10.3318 7.99987L9.93491 7.68152L9.53797 7.99987L9.53931 7.49105L9.04297 7.37918L9.44162 7.06302L9.21963 6.60518L9.71537 6.7198L9.93491 6.26074Z" fill="#F0F0F0" />
                                                        <path d="M11.9778 3.47852L12.1974 3.93758L12.6931 3.82298L12.4711 4.28083L12.8697 4.59695L12.3734 4.70886L12.3748 5.21767L11.9778 4.89933L11.5809 5.21767L11.5823 4.70886L11.0859 4.59695L11.4846 4.28083L11.2626 3.82298L11.7583 3.93758L11.9778 3.47852Z" fill="#F0F0F0" />
                                                        <path d="M13.7611 5.56543L13.9806 6.02449L14.4763 5.90987L14.2543 6.36771L14.653 6.68387L14.1566 6.79577L14.158 7.30455L13.7611 6.98624L13.3641 7.30455L13.3655 6.79577L12.8691 6.68387L13.2678 6.36771L13.0458 5.90987L13.5415 6.02449L13.7611 5.56543Z" fill="#F0F0F0" />
                                                        <path d="M12.4864 8L12.659 8.53144H13.2178L12.7657 8.85991L12.9384 9.39131L12.4864 9.06288L12.0343 9.39131L12.2069 8.85991L11.7549 8.53144H12.3137L12.4864 8Z" fill="#F0F0F0" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_223_130433">
                                                            <rect width="16" height="16" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                    Melbourne, Australia</a>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="font-normal text-gray-500 text-base mb-8">We're looking for a mid-level UX designer to join our team.</p>

                                    <div className="flex flex-row gap-5">
                                        <p className="text-base text-gray-500 font-medium flex gap-2 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0003 5.00033V10.0003L13.3337 11.667M18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> Full-time</p>
                                        <p className="text-base text-gray-500 font-medium  flex gap-2 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0.833008V19.1663M14.1667 4.16634H7.91667C7.14312 4.16634 6.40125 4.47363 5.85427 5.02061C5.30729 5.56759 5 6.30946 5 7.08301C5 7.85656 5.30729 8.59842 5.85427 9.1454C6.40125 9.69238 7.14312 9.99967 7.91667 9.99967H12.0833C12.8569 9.99967 13.5987 10.307 14.1457 10.8539C14.6927 11.4009 15 12.1428 15 12.9163C15 13.6899 14.6927 14.4318 14.1457 14.9787C13.5987 15.5257 12.8569 15.833 12.0833 15.833H5" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> 80k - 100k</p>
                                    </div>

                                </div>



                            </div>
                        </div>



                    </div>



                    <div className="border-t border-slate-200 lg:pt-14 lg:pb-10 py-5">

                        <div className="flex md:flex-row flex-col gap-3">
                            <div className="md:w-2/5 w-full">
                                <h5 className="text-xl font-medium mb-3">Software Development</h5>
                                <p className="text-gray-500 text-base">Open positions in our software team.</p>
                            </div>
                            <div className="md:w-3/5 w-full">
                                <div className="border border-slate-200 p-5 rounded-lg mb-5">
                                    <div className='flex gap-3 sm:flex-row flex-col mb-3'>
                                        <h5 className="font-medium lg:text-lg">Engineering Manager</h5>
                                        <div className='flex sm:justify-between sm:grow gap-3'>
                                            <a href='#' className='flex items-center justify-between gap-1 bg-pink-50 rounded-2xl p-1 w-auto text-pink-700 text-xs font-medium py-1 px-2'><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="3" cy="3" r="3" fill="#EE46BC" />
                                            </svg> Software</a>
                                            <div>
                                                <a href='#' className='bg-gray-100 rounded-2xl flex gap-1 w-auto text-gray-700 text-xs font-medium py-1 px-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_223_130433)">
                                                        <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58175 16 0 12.4183 0 8C0 8.00187 8 0.00090625 8 0C12.4183 0 16 3.58175 16 8Z" fill="#0052B4" />
                                                        <path d="M7.97852 7.99996H7.99996C7.99996 7.9927 7.99996 7.98575 7.99996 7.97852C7.99283 7.98568 7.98569 7.99282 7.97852 7.99996Z" fill="#F0F0F0" />
                                                        <path d="M8 4.17488C8 2.76723 8 1.84482 8 0.000976562H7.99865C3.581 0.00169531 0 3.5831 0 8.00094H4.1739V5.65057L6.52428 8.00094H7.97862C7.98578 7.99382 7.9929 7.98669 8.00003 7.97954C8.00003 7.44057 8.00003 6.95966 8.00003 6.52529L5.64962 4.17488H8Z" fill="#F0F0F0" />
                                                        <path d="M4.04782 1.04395C2.7966 1.75641 1.75641 2.7966 1.04395 4.04782V8.00048H3.13091V3.13095V3.13091H8.00048C8.00048 2.4727 8.00048 1.84563 8.00048 1.04395H4.04782Z" fill="#D80027" />
                                                        <path d="M8.00086 7.01707L5.15858 4.17482H4.1748C4.1748 4.17479 4.1748 4.17482 4.1748 4.17482L8.00083 8.00085H8.00086C8.00086 8.00085 8.00086 7.32257 8.00086 7.01707Z" fill="#D80027" />
                                                        <path d="M4.82486 9.39062L5.26392 10.3087L6.25539 10.0795L5.81139 10.9952L6.6087 11.6275L5.61598 11.8512L5.61877 12.8689L4.82486 12.2322L4.03098 12.8689L4.03377 11.8512L3.04102 11.6275L3.83836 10.9952L3.3943 10.0795L4.38583 10.3087L4.82486 9.39062Z" fill="#F0F0F0" />
                                                        <path d="M11.9778 11.1299L12.1974 11.5889L12.6931 11.4743L12.4711 11.9322L12.8698 12.2483L12.3734 12.3602L12.3748 12.869L11.9778 12.5507L11.5809 12.869L11.5823 12.3602L11.0859 12.2483L11.4846 11.9322L11.2626 11.4743L11.7583 11.5889L11.9778 11.1299Z" fill="#F0F0F0" />
                                                        <path d="M9.93491 6.26074L10.1544 6.7198L10.6502 6.60518L10.4282 7.06302L10.8268 7.37918L10.3305 7.49105L10.3318 7.99987L9.93491 7.68152L9.53797 7.99987L9.53931 7.49105L9.04297 7.37918L9.44162 7.06302L9.21963 6.60518L9.71537 6.7198L9.93491 6.26074Z" fill="#F0F0F0" />
                                                        <path d="M11.9778 3.47852L12.1974 3.93758L12.6931 3.82298L12.4711 4.28083L12.8697 4.59695L12.3734 4.70886L12.3748 5.21767L11.9778 4.89933L11.5809 5.21767L11.5823 4.70886L11.0859 4.59695L11.4846 4.28083L11.2626 3.82298L11.7583 3.93758L11.9778 3.47852Z" fill="#F0F0F0" />
                                                        <path d="M13.7611 5.56543L13.9806 6.02449L14.4763 5.90987L14.2543 6.36771L14.653 6.68387L14.1566 6.79577L14.158 7.30455L13.7611 6.98624L13.3641 7.30455L13.3655 6.79577L12.8691 6.68387L13.2678 6.36771L13.0458 5.90987L13.5415 6.02449L13.7611 5.56543Z" fill="#F0F0F0" />
                                                        <path d="M12.4864 8L12.659 8.53144H13.2178L12.7657 8.85991L12.9384 9.39131L12.4864 9.06288L12.0343 9.39131L12.2069 8.85991L11.7549 8.53144H12.3137L12.4864 8Z" fill="#F0F0F0" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_223_130433">
                                                            <rect width="16" height="16" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                    Melbourne, Australia</a>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="font-normal text-gray-500 text-base mb-8">We're looking for a mid-level product desgner to join our team.</p>

                                    <div className="flex flex-row gap-5">
                                        <p className="text-base text-gray-500 font-medium flex gap-2 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0003 5.00033V10.0003L13.3337 11.667M18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> Full-time</p>
                                        <p className="text-base text-gray-500 font-medium  flex gap-2 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0.833008V19.1663M14.1667 4.16634H7.91667C7.14312 4.16634 6.40125 4.47363 5.85427 5.02061C5.30729 5.56759 5 6.30946 5 7.08301C5 7.85656 5.30729 8.59842 5.85427 9.1454C6.40125 9.69238 7.14312 9.99967 7.91667 9.99967H12.0833C12.8569 9.99967 13.5987 10.307 14.1457 10.8539C14.6927 11.4009 15 12.1428 15 12.9163C15 13.6899 14.6927 14.4318 14.1457 14.9787C13.5987 15.5257 12.8569 15.833 12.0833 15.833H5" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> 80k - 100k</p>
                                    </div>

                                </div>

                                <div className="border border-slate-200 p-5 rounded-lg mb-5">
                                    <div className='flex gap-3 sm:flex-row flex-col mb-3'>
                                        <h5 className="font-medium lg:text-lg">Fronend developer</h5>
                                        <div className='flex sm:justify-between sm:grow gap-3'>
                                            <a href='#' className='flex items-center justify-between gap-1 bg-pink-50 rounded-2xl p-1 w-auto text-pink-700 text-xs font-medium py-1 px-2'><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="3" cy="3" r="3" fill="#EE46BC" />
                                            </svg> Software</a>
                                            <div>
                                                <a href='#' className='bg-gray-100 rounded-2xl flex gap-1 w-auto text-gray-700 text-xs font-medium py-1 px-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_223_130433)">
                                                        <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58175 16 0 12.4183 0 8C0 8.00187 8 0.00090625 8 0C12.4183 0 16 3.58175 16 8Z" fill="#0052B4" />
                                                        <path d="M7.97852 7.99996H7.99996C7.99996 7.9927 7.99996 7.98575 7.99996 7.97852C7.99283 7.98568 7.98569 7.99282 7.97852 7.99996Z" fill="#F0F0F0" />
                                                        <path d="M8 4.17488C8 2.76723 8 1.84482 8 0.000976562H7.99865C3.581 0.00169531 0 3.5831 0 8.00094H4.1739V5.65057L6.52428 8.00094H7.97862C7.98578 7.99382 7.9929 7.98669 8.00003 7.97954C8.00003 7.44057 8.00003 6.95966 8.00003 6.52529L5.64962 4.17488H8Z" fill="#F0F0F0" />
                                                        <path d="M4.04782 1.04395C2.7966 1.75641 1.75641 2.7966 1.04395 4.04782V8.00048H3.13091V3.13095V3.13091H8.00048C8.00048 2.4727 8.00048 1.84563 8.00048 1.04395H4.04782Z" fill="#D80027" />
                                                        <path d="M8.00086 7.01707L5.15858 4.17482H4.1748C4.1748 4.17479 4.1748 4.17482 4.1748 4.17482L8.00083 8.00085H8.00086C8.00086 8.00085 8.00086 7.32257 8.00086 7.01707Z" fill="#D80027" />
                                                        <path d="M4.82486 9.39062L5.26392 10.3087L6.25539 10.0795L5.81139 10.9952L6.6087 11.6275L5.61598 11.8512L5.61877 12.8689L4.82486 12.2322L4.03098 12.8689L4.03377 11.8512L3.04102 11.6275L3.83836 10.9952L3.3943 10.0795L4.38583 10.3087L4.82486 9.39062Z" fill="#F0F0F0" />
                                                        <path d="M11.9778 11.1299L12.1974 11.5889L12.6931 11.4743L12.4711 11.9322L12.8698 12.2483L12.3734 12.3602L12.3748 12.869L11.9778 12.5507L11.5809 12.869L11.5823 12.3602L11.0859 12.2483L11.4846 11.9322L11.2626 11.4743L11.7583 11.5889L11.9778 11.1299Z" fill="#F0F0F0" />
                                                        <path d="M9.93491 6.26074L10.1544 6.7198L10.6502 6.60518L10.4282 7.06302L10.8268 7.37918L10.3305 7.49105L10.3318 7.99987L9.93491 7.68152L9.53797 7.99987L9.53931 7.49105L9.04297 7.37918L9.44162 7.06302L9.21963 6.60518L9.71537 6.7198L9.93491 6.26074Z" fill="#F0F0F0" />
                                                        <path d="M11.9778 3.47852L12.1974 3.93758L12.6931 3.82298L12.4711 4.28083L12.8697 4.59695L12.3734 4.70886L12.3748 5.21767L11.9778 4.89933L11.5809 5.21767L11.5823 4.70886L11.0859 4.59695L11.4846 4.28083L11.2626 3.82298L11.7583 3.93758L11.9778 3.47852Z" fill="#F0F0F0" />
                                                        <path d="M13.7611 5.56543L13.9806 6.02449L14.4763 5.90987L14.2543 6.36771L14.653 6.68387L14.1566 6.79577L14.158 7.30455L13.7611 6.98624L13.3641 7.30455L13.3655 6.79577L12.8691 6.68387L13.2678 6.36771L13.0458 5.90987L13.5415 6.02449L13.7611 5.56543Z" fill="#F0F0F0" />
                                                        <path d="M12.4864 8L12.659 8.53144H13.2178L12.7657 8.85991L12.9384 9.39131L12.4864 9.06288L12.0343 9.39131L12.2069 8.85991L11.7549 8.53144H12.3137L12.4864 8Z" fill="#F0F0F0" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_223_130433">
                                                            <rect width="16" height="16" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                    Melbourne, Australia</a>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="font-normal text-gray-500 text-base mb-8">We're looking for a mid-level UX designer to join our team.</p>

                                    <div className="flex flex-row gap-5">
                                        <p className="text-base text-gray-500 font-medium flex gap-2 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0003 5.00033V10.0003L13.3337 11.667M18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> Full-time</p>
                                        <p className="text-base text-gray-500 font-medium  flex gap-2 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0.833008V19.1663M14.1667 4.16634H7.91667C7.14312 4.16634 6.40125 4.47363 5.85427 5.02061C5.30729 5.56759 5 6.30946 5 7.08301C5 7.85656 5.30729 8.59842 5.85427 9.1454C6.40125 9.69238 7.14312 9.99967 7.91667 9.99967H12.0833C12.8569 9.99967 13.5987 10.307 14.1457 10.8539C14.6927 11.4009 15 12.1428 15 12.9163C15 13.6899 14.6927 14.4318 14.1457 14.9787C13.5987 15.5257 12.8569 15.833 12.0833 15.833H5" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> 80k - 100k</p>
                                    </div>

                                </div>

                                <div className="border border-slate-200 p-5 rounded-lg mb-5">
                                    <div className='flex gap-3 sm:flex-row flex-col mb-3'>
                                        <h5 className="font-medium lg:text-lg">Backend Developer</h5>
                                        <div className='flex sm:justify-between sm:grow gap-3'>
                                            <a href='#' className='flex items-center justify-between gap-1 bg-pink-50 rounded-2xl p-1 w-auto text-pink-700 text-xs font-medium py-1 px-2'><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="3" cy="3" r="3" fill="#EE46BC" />
                                            </svg> Software</a>
                                            <div>
                                                <a href='#' className='bg-gray-100 rounded-2xl flex gap-1 w-auto text-gray-700 text-xs font-medium py-1 px-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_223_130433)">
                                                        <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58175 16 0 12.4183 0 8C0 8.00187 8 0.00090625 8 0C12.4183 0 16 3.58175 16 8Z" fill="#0052B4" />
                                                        <path d="M7.97852 7.99996H7.99996C7.99996 7.9927 7.99996 7.98575 7.99996 7.97852C7.99283 7.98568 7.98569 7.99282 7.97852 7.99996Z" fill="#F0F0F0" />
                                                        <path d="M8 4.17488C8 2.76723 8 1.84482 8 0.000976562H7.99865C3.581 0.00169531 0 3.5831 0 8.00094H4.1739V5.65057L6.52428 8.00094H7.97862C7.98578 7.99382 7.9929 7.98669 8.00003 7.97954C8.00003 7.44057 8.00003 6.95966 8.00003 6.52529L5.64962 4.17488H8Z" fill="#F0F0F0" />
                                                        <path d="M4.04782 1.04395C2.7966 1.75641 1.75641 2.7966 1.04395 4.04782V8.00048H3.13091V3.13095V3.13091H8.00048C8.00048 2.4727 8.00048 1.84563 8.00048 1.04395H4.04782Z" fill="#D80027" />
                                                        <path d="M8.00086 7.01707L5.15858 4.17482H4.1748C4.1748 4.17479 4.1748 4.17482 4.1748 4.17482L8.00083 8.00085H8.00086C8.00086 8.00085 8.00086 7.32257 8.00086 7.01707Z" fill="#D80027" />
                                                        <path d="M4.82486 9.39062L5.26392 10.3087L6.25539 10.0795L5.81139 10.9952L6.6087 11.6275L5.61598 11.8512L5.61877 12.8689L4.82486 12.2322L4.03098 12.8689L4.03377 11.8512L3.04102 11.6275L3.83836 10.9952L3.3943 10.0795L4.38583 10.3087L4.82486 9.39062Z" fill="#F0F0F0" />
                                                        <path d="M11.9778 11.1299L12.1974 11.5889L12.6931 11.4743L12.4711 11.9322L12.8698 12.2483L12.3734 12.3602L12.3748 12.869L11.9778 12.5507L11.5809 12.869L11.5823 12.3602L11.0859 12.2483L11.4846 11.9322L11.2626 11.4743L11.7583 11.5889L11.9778 11.1299Z" fill="#F0F0F0" />
                                                        <path d="M9.93491 6.26074L10.1544 6.7198L10.6502 6.60518L10.4282 7.06302L10.8268 7.37918L10.3305 7.49105L10.3318 7.99987L9.93491 7.68152L9.53797 7.99987L9.53931 7.49105L9.04297 7.37918L9.44162 7.06302L9.21963 6.60518L9.71537 6.7198L9.93491 6.26074Z" fill="#F0F0F0" />
                                                        <path d="M11.9778 3.47852L12.1974 3.93758L12.6931 3.82298L12.4711 4.28083L12.8697 4.59695L12.3734 4.70886L12.3748 5.21767L11.9778 4.89933L11.5809 5.21767L11.5823 4.70886L11.0859 4.59695L11.4846 4.28083L11.2626 3.82298L11.7583 3.93758L11.9778 3.47852Z" fill="#F0F0F0" />
                                                        <path d="M13.7611 5.56543L13.9806 6.02449L14.4763 5.90987L14.2543 6.36771L14.653 6.68387L14.1566 6.79577L14.158 7.30455L13.7611 6.98624L13.3641 7.30455L13.3655 6.79577L12.8691 6.68387L13.2678 6.36771L13.0458 5.90987L13.5415 6.02449L13.7611 5.56543Z" fill="#F0F0F0" />
                                                        <path d="M12.4864 8L12.659 8.53144H13.2178L12.7657 8.85991L12.9384 9.39131L12.4864 9.06288L12.0343 9.39131L12.2069 8.85991L11.7549 8.53144H12.3137L12.4864 8Z" fill="#F0F0F0" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_223_130433">
                                                            <rect width="16" height="16" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                    Melbourne, Australia</a>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="font-normal text-gray-500 text-base mb-8">We're looking for a mid-level UX designer to join our team.</p>

                                    <div className="flex flex-row gap-5">
                                        <p className="text-base text-gray-500 font-medium flex gap-2 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0003 5.00033V10.0003L13.3337 11.667M18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> Full-time</p>
                                        <p className="text-base text-gray-500 font-medium  flex gap-2 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0.833008V19.1663M14.1667 4.16634H7.91667C7.14312 4.16634 6.40125 4.47363 5.85427 5.02061C5.30729 5.56759 5 6.30946 5 7.08301C5 7.85656 5.30729 8.59842 5.85427 9.1454C6.40125 9.69238 7.14312 9.99967 7.91667 9.99967H12.0833C12.8569 9.99967 13.5987 10.307 14.1457 10.8539C14.6927 11.4009 15 12.1428 15 12.9163C15 13.6899 14.6927 14.4318 14.1457 14.9787C13.5987 15.5257 12.8569 15.833 12.0833 15.833H5" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> 80k - 100k</p>
                                    </div>

                                </div>


                            </div>
                        </div>



                    </div>



                    <div className="border-t border-slate-200 lg:pt-14 lg:pb-10 py-5">

                        <div className="flex md:flex-row flex-col gap-3">
                            <div className="md:w-2/5 w-full">
                                <h5 className="text-xl font-medium mb-3">Customer Success</h5>
                                <p className="text-gray-500 text-base">Open positions in our CX team.</p>
                            </div>
                            <div className="md:w-3/5 w-full">
                                <div className="border border-slate-200 p-5 rounded-lg mb-5">
                                    <div className='flex gap-3 sm:flex-row flex-col mb-3'>
                                        <h5 className="font-medium lg:text-lg">Customer Success Manager</h5>
                                        <div className='flex sm:justify-between sm:grow gap-3'>
                                            <a href='#' className='flex items-center justify-between gap-1 bg-green-50 rounded-2xl p-1 w-auto text-green-700 text-xs font-medium py-1 px-2'><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="3" cy="3" r="3" fill="#12B76A" />
                                            </svg> Customer Success</a>
                                            <div>
                                                <a href='#' className='bg-gray-100 rounded-2xl flex gap-1 w-auto text-gray-700 text-xs font-medium py-1 px-2'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_223_130433)">
                                                        <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58175 16 0 12.4183 0 8C0 8.00187 8 0.00090625 8 0C12.4183 0 16 3.58175 16 8Z" fill="#0052B4" />
                                                        <path d="M7.97852 7.99996H7.99996C7.99996 7.9927 7.99996 7.98575 7.99996 7.97852C7.99283 7.98568 7.98569 7.99282 7.97852 7.99996Z" fill="#F0F0F0" />
                                                        <path d="M8 4.17488C8 2.76723 8 1.84482 8 0.000976562H7.99865C3.581 0.00169531 0 3.5831 0 8.00094H4.1739V5.65057L6.52428 8.00094H7.97862C7.98578 7.99382 7.9929 7.98669 8.00003 7.97954C8.00003 7.44057 8.00003 6.95966 8.00003 6.52529L5.64962 4.17488H8Z" fill="#F0F0F0" />
                                                        <path d="M4.04782 1.04395C2.7966 1.75641 1.75641 2.7966 1.04395 4.04782V8.00048H3.13091V3.13095V3.13091H8.00048C8.00048 2.4727 8.00048 1.84563 8.00048 1.04395H4.04782Z" fill="#D80027" />
                                                        <path d="M8.00086 7.01707L5.15858 4.17482H4.1748C4.1748 4.17479 4.1748 4.17482 4.1748 4.17482L8.00083 8.00085H8.00086C8.00086 8.00085 8.00086 7.32257 8.00086 7.01707Z" fill="#D80027" />
                                                        <path d="M4.82486 9.39062L5.26392 10.3087L6.25539 10.0795L5.81139 10.9952L6.6087 11.6275L5.61598 11.8512L5.61877 12.8689L4.82486 12.2322L4.03098 12.8689L4.03377 11.8512L3.04102 11.6275L3.83836 10.9952L3.3943 10.0795L4.38583 10.3087L4.82486 9.39062Z" fill="#F0F0F0" />
                                                        <path d="M11.9778 11.1299L12.1974 11.5889L12.6931 11.4743L12.4711 11.9322L12.8698 12.2483L12.3734 12.3602L12.3748 12.869L11.9778 12.5507L11.5809 12.869L11.5823 12.3602L11.0859 12.2483L11.4846 11.9322L11.2626 11.4743L11.7583 11.5889L11.9778 11.1299Z" fill="#F0F0F0" />
                                                        <path d="M9.93491 6.26074L10.1544 6.7198L10.6502 6.60518L10.4282 7.06302L10.8268 7.37918L10.3305 7.49105L10.3318 7.99987L9.93491 7.68152L9.53797 7.99987L9.53931 7.49105L9.04297 7.37918L9.44162 7.06302L9.21963 6.60518L9.71537 6.7198L9.93491 6.26074Z" fill="#F0F0F0" />
                                                        <path d="M11.9778 3.47852L12.1974 3.93758L12.6931 3.82298L12.4711 4.28083L12.8697 4.59695L12.3734 4.70886L12.3748 5.21767L11.9778 4.89933L11.5809 5.21767L11.5823 4.70886L11.0859 4.59695L11.4846 4.28083L11.2626 3.82298L11.7583 3.93758L11.9778 3.47852Z" fill="#F0F0F0" />
                                                        <path d="M13.7611 5.56543L13.9806 6.02449L14.4763 5.90987L14.2543 6.36771L14.653 6.68387L14.1566 6.79577L14.158 7.30455L13.7611 6.98624L13.3641 7.30455L13.3655 6.79577L12.8691 6.68387L13.2678 6.36771L13.0458 5.90987L13.5415 6.02449L13.7611 5.56543Z" fill="#F0F0F0" />
                                                        <path d="M12.4864 8L12.659 8.53144H13.2178L12.7657 8.85991L12.9384 9.39131L12.4864 9.06288L12.0343 9.39131L12.2069 8.85991L11.7549 8.53144H12.3137L12.4864 8Z" fill="#F0F0F0" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_223_130433">
                                                            <rect width="16" height="16" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                    Melbourne, Australia</a>
                                            </div>
                                        </div>
                                    </div>


                                    <p className="font-normal text-gray-500 text-base mb-8">We're looking for a mid-level product desgner to join our team.</p>

                                    <div className="flex flex-row gap-5">
                                        <p className="text-base text-gray-500 font-medium flex gap-2 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0003 5.00033V10.0003L13.3337 11.667M18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> Full-time</p>
                                        <p className="text-base text-gray-500 font-medium  flex gap-2 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0.833008V19.1663M14.1667 4.16634H7.91667C7.14312 4.16634 6.40125 4.47363 5.85427 5.02061C5.30729 5.56759 5 6.30946 5 7.08301C5 7.85656 5.30729 8.59842 5.85427 9.1454C6.40125 9.69238 7.14312 9.99967 7.91667 9.99967H12.0833C12.8569 9.99967 13.5987 10.307 14.1457 10.8539C14.6927 11.4009 15 12.1428 15 12.9163C15 13.6899 14.6927 14.4318 14.1457 14.9787C13.5987 15.5257 12.8569 15.833 12.0833 15.833H5" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg> 80k - 100k</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                      <ImgLoader src={Banner} width={1216} height={400} alt="Team" />  
                </div>













                











            </div>







        </>

    )
}