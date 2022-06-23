import ImgLoader from '../Image';

import BenifitImg1 from "../../assets/images/benifit-img1.png";
import BenifitImg2 from "../../assets/images/benifit-img2.png";

export default function FeatureSection1() {
    return (
        <div className="w-full lg:mt-20 mt-16">
            <div className="max-w-4xl mx-auto flex flex-col px-4 lg:py-20 py-5 text-center">
                <h6 className="text-base font-semibold mb-4">Features</h6>
                <h2 className="md:text-5xl text-3xl font-semibold mb-5">Beautiful analytics to grow smarter</h2>
                <p className="text-xl text-gray-500">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </div>
            <div className="pt-2 overflow-hidden xl:pt-12 lg:relative lg:mb-20  xl:block lg:flex lg:flex-row flex-col mb-5">
                <div className="mx-auto px-4 sm:max-w-3xl lg:max-w-7xl xl:pt-8 xl:pb-12">
                    <div className='xl:w-1/2 w-full xl:flex hidden'></div>
                    <div className='xl:w-1/2 w-full'>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z" fill="#D9D8D8" />
                            <path d="M38 22C38 20.9 37.1 20 36 20H20C18.9 20 18 20.9 18 22M38 22V34C38 35.1 37.1 36 36 36H20C18.9 36 18 35.1 18 34V22M38 22L28 29L18 22" stroke="#504F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z" fill="#F1F0F0" />
                        </svg>
                        <div className="mt-6 sm:max-w-xl mb-10">
                            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight sm:text-3xl">
                                Share team inboxes
                            </h1>
                            <p className="mt-4 mb-6 text-lg text-gray-500">
                                Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                            </p>
                            <ul>
                                <li className='flex gap-3 text-lg text-gray-500 mb-5'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="#D9D8D8" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9476 8.62193L11.5943 16.6836L9.37763 14.3153C8.9693 13.9303 8.32763 13.9069 7.86096 14.2336C7.40596 14.5719 7.27763 15.1669 7.55763 15.6453L10.1826 19.9153C10.4393 20.3119 10.8826 20.5569 11.3843 20.5569C11.8626 20.5569 12.3176 20.3119 12.5743 19.9153C12.9943 19.3669 21.0093 9.81193 21.0093 9.81193C22.0593 8.7386 20.7876 7.7936 19.9476 8.61027V8.62193Z" fill="#6A6969" />
                                </svg> Leverage automation to move fast</li>
                                <li className='flex gap-3 text-lg text-gray-500 mb-5'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="#D9D8D8" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9476 8.62193L11.5943 16.6836L9.37763 14.3153C8.9693 13.9303 8.32763 13.9069 7.86096 14.2336C7.40596 14.5719 7.27763 15.1669 7.55763 15.6453L10.1826 19.9153C10.4393 20.3119 10.8826 20.5569 11.3843 20.5569C11.8626 20.5569 12.3176 20.3119 12.5743 19.9153C12.9943 19.3669 21.0093 9.81193 21.0093 9.81193C22.0593 8.7386 20.7876 7.7936 19.9476 8.61027V8.62193Z" fill="#6A6969" />
                                </svg> Always give customers a human to chat to</li>
                                <li className='flex gap-3 text-lg text-gray-500 mb-5'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="#D9D8D8" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9476 8.62193L11.5943 16.6836L9.37763 14.3153C8.9693 13.9303 8.32763 13.9069 7.86096 14.2336C7.40596 14.5719 7.27763 15.1669 7.55763 15.6453L10.1826 19.9153C10.4393 20.3119 10.8826 20.5569 11.3843 20.5569C11.8626 20.5569 12.3176 20.3119 12.5743 19.9153C12.9943 19.3669 21.0093 9.81193 21.0093 9.81193C22.0593 8.7386 20.7876 7.7936 19.9476 8.61027V8.62193Z" fill="#6A6969" />
                                </svg>Automate customer support and close leads faster</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" sm:relative xl:absolute xl:inset-y-0 xl:right-0 lg:w-1/2">
                    <div className="relative px-4 flex justify-center lg:-mr-32 sm:mx-auto sm:max-w-4xl lg:px-0 lg:h-full ">
                        <ImgLoader className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none" src={BenifitImg1} alt=""
                            width={676}
                            height={520}
                        />
                    </div>
                </div>
            </div>
            <div className="pt-2 overflow-hidden xl:pt-12 lg:relative lg:mb-20  xl:block lg:flex md:flex-row  md:flex-row-reverse flex-col-reverse mb-5 gap-10">
                <div className="mx-auto px-4 lg:max-w-7xl xl:pt-8 xl:pb-12 flex">
                    <div className='xl:w-1/2 w-full xl:flex hidden'></div>
                    <div className='xl:w-1/2 w-full'>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z" fill="#D9D8D8" />
                            <path d="M29 18L19 30H28L27 38L37 26H28L29 18Z" stroke="#504F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z" fill="#F1F0F0" />
                        </svg>
                        <div className="mt-6 sm:max-w-xl mb-10">
                            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight sm:text-3xl">
                                Deliver instant answers
                            </h1>
                            <p className="mt-4 mb-6 text-lg text-gray-500">
                                An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                            </p>
                            <ul>
                                <li className='flex gap-3 text-lg text-gray-500 mb-5'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="#D9D8D8" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9476 8.62193L11.5943 16.6836L9.37763 14.3153C8.9693 13.9303 8.32763 13.9069 7.86096 14.2336C7.40596 14.5719 7.27763 15.1669 7.55763 15.6453L10.1826 19.9153C10.4393 20.3119 10.8826 20.5569 11.3843 20.5569C11.8626 20.5569 12.3176 20.3119 12.5743 19.9153C12.9943 19.3669 21.0093 9.81193 21.0093 9.81193C22.0593 8.7386 20.7876 7.7936 19.9476 8.61027V8.62193Z" fill="#6A6969" />
                                </svg> Keep your customers in the loop with live chat</li>
                                <li className='flex gap-3 text-lg text-gray-500 mb-5'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="#D9D8D8" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9476 8.62193L11.5943 16.6836L9.37763 14.3153C8.9693 13.9303 8.32763 13.9069 7.86096 14.2336C7.40596 14.5719 7.27763 15.1669 7.55763 15.6453L10.1826 19.9153C10.4393 20.3119 10.8826 20.5569 11.3843 20.5569C11.8626 20.5569 12.3176 20.3119 12.5743 19.9153C12.9943 19.3669 21.0093 9.81193 21.0093 9.81193C22.0593 8.7386 20.7876 7.7936 19.9476 8.61027V8.62193Z" fill="#6A6969" />
                                </svg> Embed help articles right on your website</li>
                                <li className='flex gap-3 text-lg text-gray-500 mb-5'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="#D9D8D8" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9476 8.62193L11.5943 16.6836L9.37763 14.3153C8.9693 13.9303 8.32763 13.9069 7.86096 14.2336C7.40596 14.5719 7.27763 15.1669 7.55763 15.6453L10.1826 19.9153C10.4393 20.3119 10.8826 20.5569 11.3843 20.5569C11.8626 20.5569 12.3176 20.3119 12.5743 19.9153C12.9943 19.3669 21.0093 9.81193 21.0093 9.81193C22.0593 8.7386 20.7876 7.7936 19.9476 8.61027V8.62193Z" fill="#6A6969" />
                                </svg>Customers never have to leave the page to find an answer</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" sm:relative xl:absolute xl:inset-y-0 xl:left-0 lg:w-1/2">
                    <div className="relative px-4 flex justify-center lg:-ml-32 sm:mx-auto sm:max-w-4xl lg:px-0 lg:h-full ">
                        <ImgLoader className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none" src={BenifitImg2} alt=""
                            width={676}
                            height={520}
                        />
                    </div>
                </div>
            </div>
            <div className="pt-2 overflow-hidden xl:pt-12 lg:relative lg:mb-20  xl:block lg:flex lg:flex-row flex-col mb-5">
                <div className="mx-auto px-4 sm:max-w-3xl lg:max-w-7xl xl:pt-8 xl:pb-12">
                    <div className='xl:w-1/2 w-full xl:flex hidden'></div>
                    <div className='xl:w-1/2 w-full'>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z" fill="#D9D8D8" />
                            <path d="M34 36V26M28 36V20M22 36V30" stroke="#504F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z" fill="#F1F0F0" />
                        </svg>
                        <div className="mt-6 sm:max-w-xl mb-10">
                            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight sm:text-3xl">
                                Manage your team with reports
                            </h1>
                            <p className="mt-4 mb-6 text-lg text-gray-500">
                                Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
                            </p>
                            <ul>
                                <li className='flex gap-3 text-lg text-gray-500 mb-5'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="#D9D8D8" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9476 8.62193L11.5943 16.6836L9.37763 14.3153C8.9693 13.9303 8.32763 13.9069 7.86096 14.2336C7.40596 14.5719 7.27763 15.1669 7.55763 15.6453L10.1826 19.9153C10.4393 20.3119 10.8826 20.5569 11.3843 20.5569C11.8626 20.5569 12.3176 20.3119 12.5743 19.9153C12.9943 19.3669 21.0093 9.81193 21.0093 9.81193C22.0593 8.7386 20.7876 7.7936 19.9476 8.61027V8.62193Z" fill="#6A6969" />
                                </svg> Filter, export, and drilldown on the data quickly</li>
                                <li className='flex gap-3 text-lg text-gray-500 mb-5'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="#D9D8D8" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9476 8.62193L11.5943 16.6836L9.37763 14.3153C8.9693 13.9303 8.32763 13.9069 7.86096 14.2336C7.40596 14.5719 7.27763 15.1669 7.55763 15.6453L10.1826 19.9153C10.4393 20.3119 10.8826 20.5569 11.3843 20.5569C11.8626 20.5569 12.3176 20.3119 12.5743 19.9153C12.9943 19.3669 21.0093 9.81193 21.0093 9.81193C22.0593 8.7386 20.7876 7.7936 19.9476 8.61027V8.62193Z" fill="#6A6969" />
                                </svg> Save, schedule, and automate reports to your inbox</li>
                                <li className='flex gap-3 text-lg text-gray-500 mb-5'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="#D9D8D8" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9476 8.62193L11.5943 16.6836L9.37763 14.3153C8.9693 13.9303 8.32763 13.9069 7.86096 14.2336C7.40596 14.5719 7.27763 15.1669 7.55763 15.6453L10.1826 19.9153C10.4393 20.3119 10.8826 20.5569 11.3843 20.5569C11.8626 20.5569 12.3176 20.3119 12.5743 19.9153C12.9943 19.3669 21.0093 9.81193 21.0093 9.81193C22.0593 8.7386 20.7876 7.7936 19.9476 8.61027V8.62193Z" fill="#6A6969" />
                                </svg>Connect the tools you already use with 100+ integrations</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" sm:relative xl:absolute xl:inset-y-0 xl:right-0 lg:w-1/2">
                    <div className="relative px-4 flex justify-center lg:-mr-32 sm:mx-auto sm:max-w-4xl lg:px-0 lg:h-full ">
                        <ImgLoader className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none" src={BenifitImg1} alt=""
                            width={676}
                            height={520}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
