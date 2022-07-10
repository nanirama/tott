import React from 'react';
import Link from "next/link";
const tiers = [
    {
        nametop: 'Basic plan',
        name: 'Hobby',
        href: '#',
        priceMonthly: 10,
        description: 'Our most popular plan.',
        includedFeatures: ['Access to all basic features', 'Basic reporting and analytics', 'Up to 10 individual users', '20GB individual data each user', 'Basic chat and email support'],
    },
    {
        nametop: 'Basic plan',
        name: 'Business plan',
        href: '#',
        priceMonthly: 20,
        description: 'Growing teams up to 20 users.',
        includedFeatures: [
            '200+ integrations ',
            'Advanced reporting and analytics',
            'Up to 20 individual users',
            '40GB individual data each user',
            'Priority chat and email support',
        ],
    },
    {
        nametop: 'Basic plan',
        name: 'Startup',
        href: '#',
        priceMonthly: 40,
        description: 'Advanced features + unlimited users.',
        includedFeatures: [
            'Advanced custom fields ',
            'Audit log and data history',
            'Unlimited individual users',
            'Unlimited individual data',
            'Personalised+priotity service',
        ],
    },
]

export default function Pricing2({ data }) {
    return (

        <div>
            <div className="bg-neutral-800">
                <div className="max-w-7xl mx-auto md:pt-24 pt-10 md:pb-52 pb-44 px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:flex-col sm:align-center">
                        <div className='text-base capitalize text-neutral-200 text-center pb-2.5'>pricing</div>
                        <h1 className="md:text-5xl text-3xl font-bold text-white text-center">Pricing plans</h1>
                        <p className="mt-5 text-xl text-neutral-200 text-center">
                            We believe Untitled should be accessible to all companies, no matter the size.
                        </p>
                        <div className="relative border self-center mt-6 rounded-lg p-1 flex sm:mt-8">
                            <button
                                type="button"
                                className="relative w-1/2 bg-white border border-slate-300 mr-4 rounded-md py-2 text-base font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
                            >
                                Monthly billing
                            </button>
                            <button
                                type="button"
                                className="ml-0.5 relative w-1/2 text-white rounded-md py-2 text-base font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
                            >
                                Annual billing
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto md:px-6 px-4 -mt-48 mb-14">
                <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0  sm:grid sm:grid-cols-2 sm:gap-6 md:max-w-4xl md:mx-auto md:max-w-none xl:mx-0 md:grid-cols-3">

                    {tiers.map((tier) => (

                        <div key={tier.name} className="bg-white border border-gray-200 shadow-lg rounded-lg lg:p-8 px-4 py-8 divide-y divide-gray-200">
                            <div className="pb-6 flex flex-col">
                                <div className='text-sm px-1 bg-slate-100 rounded-full flex flex-row text-center mx-auto py-1'>
                                <span className="text-sm text-gray-900 bg-white py-1 px-4 rounded-full">{tier.nametop}</span>{' '}
                               {' '}<span className="text-sm text-gray-900 px-3 py-1">Most popular</span>
                                </div>
                                <p className="mt-8 text-center">
                                    <span className="lg:text-5xl text-2xl font-extrabold text-gray-900">${tier.priceMonthly}</span>{' '}
                                    <span className="lg:text-5xl text-2xl font-extrabold text-gray-900">/mth</span>
                                </p>
                                {/* <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2> */}

                                <p className="mt-4 text-base text-gray-500 text-center">{tier.description}</p>


                                </div>
                            <div className="pt-2">
                                <ul role="list" className="mt-6 space-y-4  border-b pb-8">
                                    {tier.includedFeatures.map((feature) => (
                                        <li key={feature} className="flex space-x-3">
                                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z" fill="#D9D8D8"/>
<path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.38967L9.9365 14.2997L8.0365 12.2697C7.6865 11.9397 7.1365 11.9197 6.7365 12.1997C6.3465 12.4897 6.2365 12.9997 6.4765 13.4097L8.7265 17.0697C8.9465 17.4097 9.3265 17.6197 9.7565 17.6197C10.1665 17.6197 10.5565 17.4097 10.7765 17.0697C11.1365 16.5997 18.0065 8.40967 18.0065 8.40967C18.9065 7.48967 17.8165 6.67967 17.0965 7.37967V7.38967Z" fill="#6A6969"/>
</svg>

                                            <span className="text-base text-gray-500">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={tier.href}
                                    className="mt-8 block w-full bg-gray-500 border bg-slate-600 rounded-md mt-4 py-3 text-sm font-semibold text-white text-center hover:bg-gray-900"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>


                    ))}
                </div>
            </div>

        </div>

    )
}