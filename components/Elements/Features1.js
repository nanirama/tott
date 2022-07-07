import Link from 'next/link'
import ImgLoader from '../Image';
import FeatureImg1 from "../../assets/images/features-img1.jpg";
import Button from "../../components/Button/index"

export default function Features1() {
    return (
        <div className="w-full">
            <div className="max-w-4xl mx-auto flex flex-col px-4 lg:py-20 pb-5 pt-10 text-center">
                <h6 className="text-base font-semibold mb-4">Features</h6>
                <h2 className="md:text-4xl text-3xl font-semibold mb-5">Beautiful analytics to grow smarter</h2>
                <p className="text-xl text-gray-500">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </div>
            <div className="mx-auto lg:max-w-7xl w-full px-4">
                <div className=' flex lg:flex-row flex-col lg:gap-20 gap-5'>
                    <div className='lg:w-1/2 w-full'>
                        <div className='lg:mt-10 xl:mb-0 mb-3'>
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z" fill="#D9D8D8" />
                                <path d="M38 22C38 20.9 37.1 20 36 20H20C18.9 20 18 20.9 18 22M38 22V34C38 35.1 37.1 36 36 36H20C18.9 36 18 35.1 18 34V22M38 22L28 29L18 22" stroke="#504F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z" fill="#F1F0F0" />
                            </svg>
                            <h1 className="text-2xl font-semibold text-gray-900 mt-6">
                                Share team inboxes
                            </h1>
                            <p className="mt-4 mb-6 text-lg text-gray-500">
                                Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop. Leverage automation to move fast, while always giving customers a human, helpful experience.
                            </p>
                            <div className="flex md:flex-row flex-col justify-start">
                            <Link href="/"><a className="flex justify-center items-center gap-2 inline-block text-center rounded-lg bg-white border border-slate-300 py-3 px-5 text-gray-600 text-base font-medium md:mr-3 md:mb-0 mb-3 md:w-auto w-full"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0001 18.3332C14.6025 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665C5.39771 1.6665 1.66675 5.39746 1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332Z" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.33342 6.6665L13.3334 9.99984L8.33342 13.3332V6.6665Z" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> Demo</a></Link>
                                <Button />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <div className='bg-gray-100 md:p-8 p-4 rounded-lg relative pattern lg:mb-28 mb-5 flex justify-center'>
                            <ImgLoader src={FeatureImg1} width={488} height={328} alt="Team member" />
                        </div>
                    </div>
                </div>
                <div className=' flex lg:flex-row flex-col-reverse  lg:gap-20 gap-5'>
                    <div className='lg:w-1/2 w-full'>
                        <div className='bg-gray-100 md:p-8 p-4 rounded-lg relative pattern-left lg:mb-28 mb-5 flex justify-center'>
                            <ImgLoader src={FeatureImg1} width={488} height={328} alt="Team member" />
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <div className='lg:mt-10 xl:mb-0 mb-3'>
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z" fill="#D9D8D8" />
                                <path d="M29 18L19 30H28L27 38L37 26H28L29 18Z" stroke="#504F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z" fill="#F1F0F0" />
                            </svg>
                            <h1 className="text-2xl font-semibold text-gray-900 mt-6">
                                Deliver instant answers
                            </h1>
                            <p className="mt-4 mb-6 text-lg text-gray-500">
                                Keep your customers in the flow by embedding help articles right on your website. With Beacon, they never have to leave the page to find an answer.
                            </p>
                            <div className="flex md:flex-row flex-col justify-start">
                            <Link href="/"><a className="flex justify-center items-center gap-2 inline-block text-center rounded-lg bg-white border border-slate-300 py-3 px-5 text-gray-600 text-base font-medium md:mr-3 md:mb-0 mb-3 md:w-auto w-full"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0001 18.3332C14.6025 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665C5.39771 1.6665 1.66675 5.39746 1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332Z" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.33342 6.6665L13.3334 9.99984L8.33342 13.3332V6.6665Z" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> Demo</a></Link>
                                {/* <a href="#" className="inline-block text-center rounded-lg bg-zinc-600 border border-zinc-600 py-3 px-5 text-white text-base font-medium md:w-auto w-full">Learn more</a> */}
                                <Button />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex lg:flex-row flex-col lg:gap-20 gap-5'>
                    <div className='lg:w-1/2 w-full'>
                        <div className='lg:mt-10 xl:mb-0 mb-3'>
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z" fill="#D9D8D8" />
                                <path d="M34 36V26M28 36V20M22 36V30" stroke="#504F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z" fill="#F1F0F0" />
                            </svg>
                            <h1 className="text-2xl font-semibold text-gray-900 mt-6">
                                Manage your team with reports
                            </h1>
                            <p className="mt-4 mb-6 text-lg text-gray-500">
                                Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
                            </p>
                            <div className="flex md:flex-row flex-col justify-start">
                            <Link href="/"><a className="flex justify-center items-center gap-2 inline-block text-center rounded-lg bg-white border border-slate-300 py-3 px-5 text-gray-600 text-base font-medium md:mr-3 md:mb-0 mb-3 md:w-auto w-full"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0001 18.3332C14.6025 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665C5.39771 1.6665 1.66675 5.39746 1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332Z" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.33342 6.6665L13.3334 9.99984L8.33342 13.3332V6.6665Z" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> Demo</a></Link>
                                {/* <a href="#" className="inline-block text-center rounded-lg bg-zinc-600 border border-zinc-600 py-3 px-5 text-white text-base font-medium md:w-auto w-full">Learn more</a> */}
                                <Button />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <div className='bg-gray-100 md:p-8 p-4 rounded-lg relative pattern-top lg:mb-28 mb-5 flex justify-center'>
                            <ImgLoader src={FeatureImg1} width={488} height={328} alt="Team member" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}