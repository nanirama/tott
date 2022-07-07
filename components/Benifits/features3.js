import Link from 'next/link'
import ImgLoader from '../Image';

import Benifitimg3 from "../../assets/images/benifit-img3.png";

export default function FeatureSection2() {
    return (
        <div className="w-full py-14">
            <div className="lg:max-w-4xl mx-auto w-full lg:mb-14 mb-10 text-center px-4">
                <h6 className="text-sm text-gray-600 rounded-xl py-1 px-2 font-semibold mb-3 bg-gray-100 inline-block">Features</h6>
                <h2 className="lg:text-4xl text-2xl text-gray-900 font-semibold tracking-tight mb-4">Cutting-edge features for advanced analytics</h2>
                <p className='text-lg text-gray-400 text-normal mb-10'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                <div className='relative flex justify-center'>
                    <ImgLoader src={Benifitimg3} width={656} height={652} alt="feature image" />
                </div>
            </div>
            <div className="lg:max-w-7xl mx-auto w-full text-center px-4">
                <div className="grid lg:grid-cols-3 grid-cols-1">
                    <div className='w-full flex flex-col items-center border-t-4 border-gray-100 hover:border-gray-900 p-4'>
                        <h3 className="text-xl font-medium text-gray-900 mt-4">
                            Share team inboxes
                        </h3>
                        <p className="mt-3 mb-5 text-base text-gray-500">
                            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                        </p>
                        <Link href="/"><a href="#" className="flex items-center text-gray-600 visited:text-gray-600 font-medium">Learn More <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </a></Link>
                    </div>
                    <div className='w-full flex flex-col items-center border-t-4 border-gray-100 hover:border-gray-900 p-4'>
                        <h3 className="text-xl font-medium text-gray-900 mt-4">
                            Deliver instant answers
                        </h3>
                        <p className="mt-3 mb-5 text-base text-gray-500">
                            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                        </p>
                        <Link href="/"><a href="#" className="flex items-center text-gray-600 visited:text-gray-600 font-medium">Learn More <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </a></Link>
                    </div>
                    <div className='w-full flex flex-col items-center border-t-4 border-gray-100 hover:border-gray-900 p-4'>
                        <h3 className="text-xl font-medium text-gray-900 mt-4">
                            Manage your team with reports
                        </h3>
                        <p className="mt-3 mb-5 text-base text-gray-500">
                            Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
                        </p>
                        <Link href="/"><a href="#" className="flex items-center text-gray-600 visited:text-gray-600 font-medium">Learn More <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}