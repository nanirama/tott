import Link from 'next/link'
export default function Faq1() {

    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto flex flex-col px-4 lg:py-20 py-5">
                <div className="xl:w-3/5 w-full lg:mb-12 mb-8">

                    <h2 className="md:text-4xl text-2xl font-semibold tracking-tight mb-4">FAQs</h2>
                    <div className="md:text-xl text-lg text-gray-500 md:leading-8">
                        <p>Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-10 gap-5">
                    <div className='w-full flex flex-col'>

                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z" fill="#D9D8D8" />
                            <path d="M36.8401 20.61C36.3294 20.099 35.7229 19.6936 35.0555 19.4171C34.388 19.1405 33.6726 18.9982 32.9501 18.9982C32.2276 18.9982 31.5122 19.1405 30.8448 19.4171C30.1773 19.6936 29.5709 20.099 29.0601 20.61L28.0001 21.67L26.9401 20.61C25.9084 19.5783 24.5092 18.9987 23.0501 18.9987C21.5911 18.9987 20.1918 19.5783 19.1601 20.61C18.1284 21.6417 17.5488 23.041 17.5488 24.5C17.5488 25.959 18.1284 27.3583 19.1601 28.39L20.2201 29.45L28.0001 37.23L35.7801 29.45L36.8401 28.39C37.3511 27.8792 37.7565 27.2728 38.033 26.6053C38.3096 25.9379 38.4519 25.2225 38.4519 24.5C38.4519 23.7775 38.3096 23.0621 38.033 22.3946C37.7565 21.7272 37.3511 21.1208 36.8401 20.61V20.61Z" stroke="#504F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z" fill="#F1F0F0" />
                        </svg>

                        <h3 className="text-xl font-medium text-gray-900 mt-4">
                            Is there a free trial available?
                        </h3>
                        <p className="mt-3 mb-5 text-base text-gray-500">
                            Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.
                        </p>
                        <Link href="/"><a className="flex items-center text-gray-600 visited:text-gray-600 font-medium">Learn More <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </a></Link>

                    </div>
                    <div className='w-full flex flex-col'>

                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z" fill="#D9D8D8" />
                            <path d="M17 20V26M17 26H23M17 26L21.64 21.64C22.7147 20.5647 24.0444 19.7792 25.5048 19.3567C26.9652 18.9343 28.5089 18.8887 29.9917 19.2242C31.4745 19.5597 32.8482 20.2654 33.9845 21.2754C35.1209 22.2854 35.9828 23.5667 36.49 25M39 36V30M39 30H33M39 30L34.36 34.36C33.2853 35.4352 31.9556 36.2207 30.4952 36.6432C29.0348 37.0656 27.4911 37.1112 26.0083 36.7757C24.5255 36.4402 23.1518 35.7345 22.0155 34.7245C20.8791 33.7145 20.0172 32.4332 19.51 31" stroke="#504F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z" fill="#F1F0F0" />
                        </svg>

                        <h3 className="text-xl font-medium text-gray-900 mt-4">
                            Can I change my plan later?
                        </h3>
                        <p className="mt-3 mb-5 text-base text-gray-500">
                            Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.
                        </p>
                        <Link href="/"><a className="flex items-center text-gray-600 visited:text-gray-600 font-medium">Learn More <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </a></Link>

                    </div>
                    <div className='w-full flex flex-col'>

                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z" fill="#D9D8D8" />
                            <path d="M20.93 20.93L35.07 35.07M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z" stroke="#504F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z" fill="#F1F0F0" />
                        </svg>

                        <h3 className="text-xl font-medium text-gray-900 mt-4">
                            What is your cancellation policy?
                        </h3>
                        <p className="mt-3 mb-5 text-base text-gray-500">
                            We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.
                        </p>
                        <Link href="/"><a className="flex items-center text-gray-600 visited:text-gray-600 font-medium">Learn More <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </a></Link>

                    </div>
                    <div className='w-full flex flex-col'>

                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z" fill="#D9D8D8" />
                            <path d="M28 24V32M24 28H32M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z" stroke="#504F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z" fill="#F1F0F0" />
                        </svg>

                        <h3 className="text-xl font-medium text-gray-900 mt-4">
                            Can other info be added to an invoice?
                        </h3>
                        <p className="mt-3 mb-5 text-base text-gray-500">
                            At the moment, the only way to add additional information to invoices is to add the information to the workspace&lsquo;s name.
                        </p>
                        <Link href="/"><a className="flex items-center text-gray-600 visited:text-gray-600 font-medium">Learn More <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </a></Link>

                    </div>
                    <div className='w-full flex flex-col'>

                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z" fill="#D9D8D8" />
                            <path d="M17 26H39M19 20H37C38.1046 20 39 20.8954 39 22V34C39 35.1046 38.1046 36 37 36H19C17.8954 36 17 35.1046 17 34V22C17 20.8954 17.8954 20 19 20Z" stroke="#504F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z" fill="#F1F0F0" />
                        </svg>


                        <h3 className="text-xl font-medium text-gray-900 mt-4">
                            How does billing work?
                        </h3>
                        <p className="mt-3 mb-5 text-base text-gray-500">
                            Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.
                        </p>
                        <Link href="/"><a className="flex items-center text-gray-600 visited:text-gray-600 font-medium">Learn More <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </a></Link>
                    </div>

                    <div className='w-full flex flex-col'>

                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z" fill="#D9D8D8" />
                            <path d="M38 22C38 20.9 37.1 20 36 20H20C18.9 20 18 20.9 18 22M38 22V34C38 35.1 37.1 36 36 36H20C18.9 36 18 35.1 18 34V22M38 22L28 29L18 22" stroke="#504F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z" fill="#F1F0F0" />
                        </svg>


                        <h3 className="text-xl font-medium text-gray-900 mt-4">
                            How do I change my account email?
                        </h3>
                        <p className="mt-3 mb-5 text-base text-gray-500">
                            You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.
                        </p>
                        <Link href="/"><a className="flex items-center text-gray-600 visited:text-gray-600 font-medium">Learn More <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </a></Link>
                    </div>
                </div>
            </div>

        </div>





    )
}