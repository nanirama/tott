import ImgLoader from '../Image';

import Dashboard from "../../assets/images/dashbord.png";
import Iphone from "../../assets/images/iphone3.png";

export default function FeatureSection2() {
    return (
        <div className="w-full py-10">
            <div className="lg:max-w-3xl mx-auto w-full lg:mb-14 mb-10 text-center px-4">
                <h6 className="text-sm text-gray-600 rounded-xl py-1 px-2 font-semibold mb-3 bg-gray-100 inline-block">Features</h6>
                <h2 className="lg:text-4xl text-2xl text-gray-900 font-semibold tracking-tight mb-4">Cutting-edge features for advanced analytics</h2>
                <p className='text-lg text-gray-400 text-normal'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </div>
            <div className="lg:max-w-5xl mx-auto w-full lg:mb-14 mb-10 text-center px-4">
                <div className='relative '>
                    <div className='relative flex justify-center'>
                        <div className='-mr-28 z-20 md:mt-24 mt-10 justify-start flex'> <ImgLoader src={Iphone} width={244} height={497} alt="feature image" /></div>
                        <ImgLoader src={Dashboard} width={816} height={616} alt="feature image" />
                    </div>
                </div>
            </div>
            <div className="lg:max-w-7xl mx-auto w-full text-center px-4">
                <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-10 gap-5">
                    <div className='w-full flex flex-col items-center'>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z" fill="#D9D8D8" />
                            <path d="M38 22C38 20.9 37.1 20 36 20H20C18.9 20 18 20.9 18 22M38 22V34C38 35.1 37.1 36 36 36H20C18.9 36 18 35.1 18 34V22M38 22L28 29L18 22" stroke="#504F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z" fill="#F1F0F0" />
                        </svg>
                        <h3 className="text-xl font-medium text-gray-900 mt-4">
                            Share team inboxes
                        </h3>
                        <p className="mt-3 mb-5 text-base text-gray-500">
                            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                        </p>
                        <a className="flex items-center text-gray-600 visited:text-gray-600 font-medium">Learn More <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </a>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z" fill="#D9D8D8" />
                            <path d="M29 18L19 30H28L27 38L37 26H28L29 18Z" stroke="#504F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z" fill="#F1F0F0" />
                        </svg>
                        <h3 className="text-xl font-medium text-gray-900 mt-4">
                            Deliver instant answers
                        </h3>
                        <p className="mt-3 mb-5 text-base text-gray-500">
                            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                        </p>
                        <a className="flex items-center text-gray-600 visited:text-gray-600 font-medium">Learn More <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </a>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z" fill="#D9D8D8" />
                            <path d="M34 36V26M28 36V20M22 36V30" stroke="#504F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z" fill="#F1F0F0" />
                        </svg>
                        <h3 className="text-xl font-medium text-gray-900 mt-4">
                            Manage your team with reports
                        </h3>
                        <p className="mt-3 mb-5 text-base text-gray-500">
                            Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
                        </p>
                        <a className="flex items-center text-gray-600 visited:text-gray-600 font-medium">Learn More <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}