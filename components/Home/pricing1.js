import React from 'react';

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
        nametop: 'Business plan',
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
        nametop: 'Enterprise plan',
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

export default function Pricing1({ data }) {
    return (

        <div>
            <div className="bg-gray-50 ">
                <div className="max-w-7xl mx-auto md:pt-24 pt-10 md:pb-52 pb-44 px-4 sm:px-6 lg:px-4">
                    <div className="sm:flex sm:flex-col sm:align-center">
                        <div className='text-base capitalize text-slate-600 text-center pb-2.5'>pricing</div>
                        <h1 className="md:text-5xl text-3xl font-bold text-gray-900 text-center">Simple, transparent pricing</h1>
                        <p className="mt-5 text-xl text-gray-500 text-center">
                            We believe Untitled should be accessible to all companies, no matter the size.
                        </p>
                        <div className="relative self-center mt-6 rounded-lg p-0.5 flex sm:mt-8">
                            <button
                                type="button"
                                className="relative w-1/2 bg-white border border-slate-300 mr-4 rounded-md py-2 text-base font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
                            >
                                Chat to sales
                            </button>
                            <button
                                type="button"
                                className="ml-0.5 relative w-1/2 text-white bg-slate-600 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
                            >
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
   
            <div className="max-w-7xl mx-auto md:px-6 px-4 -mt-48 mb-14">
                <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0  sm:grid sm:grid-cols-2 sm:gap-6 md:max-w-4xl md:mx-auto md:max-w-none md:mx-0 md:grid-cols-3">
                   
                    {tiers.map((tier) => (
                     
                        <div key={tier.name} className="bg-white border border-gray-200 shadow-lg rounded-lg lg:p-8 p-4 pb-8 divide-y divide-gray-200">
                            <div className="py-6 flex flex-col">
                                <div className='text-sm px-4 bg-slate-100 rounded-full text-center mx-auto py-1'>{tier.nametop}</div>
                                <p className="mt-8 text-center">
                                    <span className="lg:text-5xl text-2xl font-extrabold text-gray-900">${tier.priceMonthly}</span>{' '}
                                    <span className="lg:text-5xl text-2xl font-extrabold text-gray-900">/mth</span>
                                </p>
                               

                                <p className="mt-4 text-base text-gray-500 text-center">{tier.description}</p>

                                <a
                                    href={tier.href}
                                    className="mt-8 block w-full bg-gray-500 border bg-slate-600 rounded-md py-3 text-sm font-semibold text-white text-center hover:bg-gray-900"
                                >
                                    Get Started
                                </a>

                                <button
                                    type="button"
                                    className="w-full border border-slate-300 mr-4 mt-4 rounded-md py-3 text-base font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-full sm:px-8"
                                >
                                    Chat to sales
                                </button>

                            </div>
                            <div className="pt-6">
                                <ul role="list" className="mt-6 space-y-4">
                                    {tier.includedFeatures.map((feature) => (
                                        <li key={feature} className="flex space-x-3">
                                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#D1FADF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#12B76A"/>
</svg>
<span className="text-base text-gray-500">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            </div>
                          
                      
                    ))}
                </div>
            </div>

        </div>

    )
}