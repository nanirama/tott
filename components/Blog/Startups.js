import Link from 'next/link'
import Image from 'next/image'
import BlogHeroImg from "../../assets/images/startup-img.png"

export default function StratUpBlk() {

    return (

        <>

            <div className="lg:pt-20 pt-5 relative md:mb-20">

                <div className="max-w-7xl mx-auto flex md:flex-row flex-col">

                    <div className="md:w-1/2 w-full px-4 ">
                        <h2 className="lg:text-5xl text-3xl text-gray-900 font-semibold mb-8">Join 4,000+ startups growing with Untitled</h2>
                        <ul className='flex flex-col gap-5 px-4 mb-10'>
                            <li className='flex text-lg text-gray-500 gap-3'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="#D9D8D8" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.9457 8.62193L11.5923 16.6836L9.37568 14.3153C8.96734 13.9303 8.32568 13.9069 7.85901 14.2336C7.40401 14.5719 7.27568 15.1669 7.55568 15.6453L10.1807 19.9153C10.4373 20.3119 10.8807 20.5569 11.3823 20.5569C11.8607 20.5569 12.3157 20.3119 12.5723 19.9153C12.9923 19.3669 21.0073 9.81193 21.0073 9.81193C22.0573 8.7386 20.7857 7.7936 19.9457 8.61027V8.62193Z" fill="#6A6969" />
                            </svg> 30-day free trial</li>
                            <li className='flex text-lg text-gray-500 gap-3'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="#D9D8D8" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.9457 8.62193L11.5923 16.6836L9.37568 14.3153C8.96734 13.9303 8.32568 13.9069 7.85901 14.2336C7.40401 14.5719 7.27568 15.1669 7.55568 15.6453L10.1807 19.9153C10.4373 20.3119 10.8807 20.5569 11.3823 20.5569C11.8607 20.5569 12.3157 20.3119 12.5723 19.9153C12.9923 19.3669 21.0073 9.81193 21.0073 9.81193C22.0573 8.7386 20.7857 7.7936 19.9457 8.61027V8.62193Z" fill="#6A6969" />
                            </svg> Peronalized onboarding</li>
                            <li className='flex text-lg text-gray-500 gap-3'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="#D9D8D8" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.9457 8.62193L11.5923 16.6836L9.37568 14.3153C8.96734 13.9303 8.32568 13.9069 7.85901 14.2336C7.40401 14.5719 7.27568 15.1669 7.55568 15.6453L10.1807 19.9153C10.4373 20.3119 10.8807 20.5569 11.3823 20.5569C11.8607 20.5569 12.3157 20.3119 12.5723 19.9153C12.9923 19.3669 21.0073 9.81193 21.0073 9.81193C22.0573 8.7386 20.7857 7.7936 19.9457 8.61027V8.62193Z" fill="#6A6969" />
                            </svg> Access to all features</li>
                        </ul>

                        <div class="flex flex-row gap-5">
                            <a href="#" class="inline-block text-center rounded-lg bg-white border border-slate-300 py-3 md:px-5 px-2 text-gray-600 text-base font-medium md:mb-0 mb-4 md:w-auto w-full">Learn More</a>
                            <a href="#" class="inline-block text-center rounded-lg bg-zinc-600 border border-zinc-600 py-3 md:px-5 px-2 text-white text-base font-medium md:mb-0 mb-4 md:w-auto w-full">Get Started</a>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full px-4 ">
                        <div className='xl:hidden block'>
                            <Image className='z-0' src={BlogHeroImg}
                                alt=""
                                width={620}
                                height={456}
                                layout="intrinsic"
                            />
                        </div>
                    </div>


                </div>
                <div className='xl:absolute xl:right-0 xl:top-10 hidden xl:flex'>
                    <Image className='z-0' src={BlogHeroImg}
                        alt=""
                        width={620}
                        height={456}
                        layout="intrinsic"
                    />
                </div>
            </div>

        </>

    )
}