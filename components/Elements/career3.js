import ImgLoader from '../Image';
import CareerImg from "../../assets/images/career-img.jpg"

export default function Career3() {
    return (

        <div className="lg:py-14 py-10  bg-black">
            <div className="max-w-7xl mx-auto flex flex-col px-4">

                <div className="lg:w-3/5 w-full mb-10">
                    <h6 className="text-gray-500 text-base font-semibold mb-2">We're hiring!</h6>
                    <h2 className="md:text-4xl text-3xl text-white font-semibold tracking-tight md:mb-6 mb-4">Start doing work that matters</h2>
                    <p className="text-xl text-gray-500">Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.</p>

                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-5">

                    <div>
                        <div className="border-t border-zinc-700 py-6">
                            <h5 className="font-medium lg:text-lg text-white mb-2">Product Designer</h5>
                            <p className="font-normal text-gray-400 text-base mb-5">We're looking for a mid-level product desgner to join our team.</p>
                            <div className="flex flex-row gap-5">
                                <p className="text-base text-gray-500 font-medium  flex gap-2 items-center"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8.33337C16.5 14.1667 9 19.1667 9 19.1667C9 19.1667 1.5 14.1667 1.5 8.33337C1.5 6.34425 2.29018 4.4366 3.6967 3.03007C5.10322 1.62355 7.01088 0.833374 9 0.833374C10.9891 0.833374 12.8968 1.62355 14.3033 3.03007C15.7098 4.4366 16.5 6.34425 16.5 8.33337Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 10.8334C10.3807 10.8334 11.5 9.71409 11.5 8.33337C11.5 6.95266 10.3807 5.83337 9 5.83337C7.61929 5.83337 6.5 6.95266 6.5 8.33337C6.5 9.71409 7.61929 10.8334 9 10.8334Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> Remote</p>
                                <p className="text-base text-gray-500 font-medium flex gap-2 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0003 5.00033V10.0003L13.3337 11.667M18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> Full-time</p>
                            </div>
                        </div>

                        <div className="border-t border-zinc-700 py-6">
                            <h5 className="font-medium lg:text-lg text-white mb-2">Engineering Designer</h5>
                            <p className="font-normal text-gray-400 text-base mb-5">We're looking for a mid-level product desgner to join our team.</p>
                            <div className="flex flex-row gap-5">
                                <p className="text-base text-gray-500 font-medium  flex gap-2 items-center"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8.33337C16.5 14.1667 9 19.1667 9 19.1667C9 19.1667 1.5 14.1667 1.5 8.33337C1.5 6.34425 2.29018 4.4366 3.6967 3.03007C5.10322 1.62355 7.01088 0.833374 9 0.833374C10.9891 0.833374 12.8968 1.62355 14.3033 3.03007C15.7098 4.4366 16.5 6.34425 16.5 8.33337Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 10.8334C10.3807 10.8334 11.5 9.71409 11.5 8.33337C11.5 6.95266 10.3807 5.83337 9 5.83337C7.61929 5.83337 6.5 6.95266 6.5 8.33337C6.5 9.71409 7.61929 10.8334 9 10.8334Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> Remote</p>
                                <p className="text-base text-gray-500 font-medium flex gap-2 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0003 5.00033V10.0003L13.3337 11.667M18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> Full-time</p>
                            </div>
                        </div>

                        <div className="border-t border-zinc-700 py-6">
                            <h5 className="font-medium lg:text-lg text-white mb-2">Customer Success Manager</h5>
                            <p className="font-normal text-gray-400 text-base mb-5">We're looking for a mid-level product desgner to join our team.</p>
                            <div className="flex flex-row gap-5">
                                <p className="text-base text-gray-500 font-medium  flex gap-2 items-center"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8.33337C16.5 14.1667 9 19.1667 9 19.1667C9 19.1667 1.5 14.1667 1.5 8.33337C1.5 6.34425 2.29018 4.4366 3.6967 3.03007C5.10322 1.62355 7.01088 0.833374 9 0.833374C10.9891 0.833374 12.8968 1.62355 14.3033 3.03007C15.7098 4.4366 16.5 6.34425 16.5 8.33337Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 10.8334C10.3807 10.8334 11.5 9.71409 11.5 8.33337C11.5 6.95266 10.3807 5.83337 9 5.83337C7.61929 5.83337 6.5 6.95266 6.5 8.33337C6.5 9.71409 7.61929 10.8334 9 10.8334Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> Remote</p>
                                <p className="text-base text-gray-500 font-medium flex gap-2 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0003 5.00033V10.0003L13.3337 11.667M18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> Full-time</p>
                            </div>
                        </div>
                        <div className="border-t border-zinc-700 py-6">
                            <h5 className="font-medium lg:text-lg text-white mb-2">Account Executive</h5>
                            <p className="font-normal text-gray-400 text-base mb-5">We're looking for a mid-level product desgner to join our team.</p>
                            <div className="flex flex-row gap-5">
                                <p className="text-base text-gray-500 font-medium  flex gap-2 items-center"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8.33337C16.5 14.1667 9 19.1667 9 19.1667C9 19.1667 1.5 14.1667 1.5 8.33337C1.5 6.34425 2.29018 4.4366 3.6967 3.03007C5.10322 1.62355 7.01088 0.833374 9 0.833374C10.9891 0.833374 12.8968 1.62355 14.3033 3.03007C15.7098 4.4366 16.5 6.34425 16.5 8.33337Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 10.8334C10.3807 10.8334 11.5 9.71409 11.5 8.33337C11.5 6.95266 10.3807 5.83337 9 5.83337C7.61929 5.83337 6.5 6.95266 6.5 8.33337C6.5 9.71409 7.61929 10.8334 9 10.8334Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> Remote</p>
                                <p className="text-base text-gray-500 font-medium flex gap-2 items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0003 5.00033V10.0003L13.3337 11.667M18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> Full-time</p>
                            </div>
                        </div>





                    </div>

                    <div>
                        <ImgLoader src={CareerImg} width={576} height={624} alt="Team" />
                    </div>
                </div>











            </div>
        </div>
    )
}
