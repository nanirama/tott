import ImgLoader from '../Image';
import Mountain from "../../assets/images/mountain.jpg"
import MountainMobile from "../../assets/images/mountain-mobile.jpg"


export default function Example() {
    return (

        <div className="bg-white md:py-14 py-10 mb-10">
            <div className="max-w-7xl mx-auto flex lg:flex-row flex-col">
                <div className="lg:w-1/2 w-full px-4">
                    <h6 className="text-base font-semibold text-gray-700 mb-3">404 error</h6>
                    <h2 className="xl:text-6xl md:text-5xl text-3xl font-extrabold text-gray-900 tracking-tight mb-6">We lost this page</h2>
                    <p className="mt-2 md:text-xl text-base text-gray-500 md:mb-12 mb-6">Sorry, the page you are looking for doesn't exist.</p>
                    <div className="w-full flex lg:flex-row flex-col items-stretch xl:pr-28 gap-3 mb-12">
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-3 focus:outline-none focus:border " type="text" aria-label="Search" placeholder="Search..." />
                        </div>
                        <button className="w-auto bg-green-400 rounded-lg text-base font-medium leading-none text-white py-3 px-5 shadow h-12">Search</button>
                    </div>
                    <div className="md:mb-12 mb-6">
                        <h5 className="text-gray-700 text-base font-medium flex mb-2">Documentation <svg className="ml-2 mt-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16602 10.0003H15.8327M15.8327 10.0003L9.99935 4.16699M15.8327 10.0003L9.99935 15.8337" stroke="#323232" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></h5>
                        <p className="text-gray-500 text-base">Dive in to learn all about our product.</p>
                    </div>
                    <div className="md:mb-12 mb-6">
                        <h5 className="text-gray-700 text-base font-medium flex mb-2">Our blog <svg className="ml-2 mt-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16602 10.0003H15.8327M15.8327 10.0003L9.99935 4.16699M15.8327 10.0003L9.99935 15.8337" stroke="#323232" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></h5>
                        <p className="text-gray-500 text-base">Read the latest posts on our blog.</p>
                    </div>
                    <div className="md:mb-12 mb-6">
                        <h5 className="text-gray-700 text-base font-medium flex mb-2">Chat to support <svg className="ml-2 mt-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16602 10.0003H15.8327M15.8327 10.0003L9.99935 4.16699M15.8327 10.0003L9.99935 15.8337" stroke="#323232" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></h5>
                        <p className="text-gray-500 text-base">Our friendly team is here to help.</p>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full px-4">
                    <div className="md:block hidden relative">
                        <div className="absolute -bottom-16 z-30 inset-x-0">
                        <svg width="100%" height="330" viewBox="0 0 886 332" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_827_122092)">
                                <path d="M17 197.476C20.5468 187.102 27.5418 179.346 35.331 170.849C69.2441 133.852 110.092 101.75 156.096 76.6871C252.68 24.0695 368.551 -2.67021 478.228 33.8537C540.924 54.7325 609.711 101.118 619.246 163.679C624.661 199.206 605.298 230.04 577.709 254.888C548.144 281.518 509.9 302.764 468.685 312.06C436.812 319.249 381.348 320.515 377.853 280.974C375.914 259.043 388.466 238.393 403.255 221.694C434.066 186.908 478.785 165.903 526.218 153.618C608.668 132.265 696.702 140.585 768.088 183.741C795.214 200.137 849.993 248.755 869 279.076" stroke="white" stroke-opacity=".25" stroke-width="32" stroke-linecap="round" />
                            </g>
                            <defs>
                                <filter id="filter0_b_827_122092" x="-23.0039" y="-23.0073" width="900" height="370" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImage" stdDeviation="12" />
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_827_122092" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_827_122092" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                        </div>
                        <ImgLoader src={Mountain} width={1180} height={1200} alt="" />
                    </div>
                    <div className="md:hidden block mt-6">
                        <ImgLoader src={MountainMobile} width={686} height={530} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
