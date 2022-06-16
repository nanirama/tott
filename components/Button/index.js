import { React, useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Button = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [open, setOpen] = useState(true)
    const [enabled, setEnabled] = useState(false)

    return (

        <>
            <a href="#" onClick={() => setShowModal(true)} className="md:w-auto w-full inline-block rounded-lg text-white text-center flex items-center justify-center sm:text-base text-sm font-medium bg-green-400 border border-green-400 py-3 md:px-5 px-2">Start Free Trial</a>

            {showModal ? (
                <>
                    <div
                        className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="mx-auto max-w-3xl my-6">
                            <div className="relative flex flex-col w-full bg-black sm:px-10 lg:py-24 sm:py-16 py-12 px-5 outline-none focus:outline-none">
                                <div className="flex items-start justify-between">
                                    <h3 className="sm:text-3xl text-2xl font-semibold text-white sm:mb-6 mb-4 tracking-tight">
                                        Start your 14 day free trial of Trady
                                    </h3>
                                    <button
                                        className="absolute sm:top-6 top-0 sm:right-5 right-0 pt-6 pr-4"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" /></svg>
                                    </button>
                                </div>
                                <div className="form w-full text-left">
                                    <div className="sm:mb-10 mb-5">
                                        <label htmlFor="email" className="text-sm text-white">
                                            Email Address
                                        </label>
                                        <div className="mt-1.5">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="py-3 px-3 bg-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full border border-gray-300 text-sm rounded-lg"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:mb-10 mb-5">
                                        <label htmlFor="mobile-number" className="text-sm text-white">
                                            Mobile Number
                                        </label>
                                        <div className="mt-1.5 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 flex items-center">
                                                <label htmlFor="country" className="sr-only">
                                                    Country
                                                </label>
                                                <select
                                                    id="country"
                                                    name="country"
                                                    autoComplete="country"
                                                    className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-1 border-transparent bg-transparent text-gray-500 text-sm rounded-lg"
                                                >
                                                    <option>US</option>
                                                    <option>CA</option>
                                                    <option>EU</option>
                                                </select>
                                            </div>
                                            <input
                                                type="text"
                                                name="phone-number"
                                                id="phone-number"
                                                className="py-3 px-3 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-16 text-sm bg-white border border-gray-300 rounded-lg"
                                                placeholder="+1 (415) 688-5737"
                                            />
                                        </div>
                                    </div>
                                    <Switch.Group as="div" className="flex items-center sm:mb-8 mb-4">
                                        <Switch
                                            checked={enabled}
                                            onChange={setEnabled}
                                            className={classNames(
                                                enabled ? 'bg-green-400' : 'bg-green-400',
                                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200'
                                            )}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    enabled ? 'translate-x-5' : 'translate-x-0',
                                                    'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                )}
                                            />
                                        </Switch>
                                        <Switch.Label as="span" className="ml-3">
                                            <span className="sm:text-base text-sm text-white">I have an existing website </span>
                                        </Switch.Label>
                                    </Switch.Group>
                                    <div className="sm:mb-10 mb-5">
                                        <label htmlFor="company-website" className="text-white text-sm">
                                            Existing Website URL
                                        </label>
                                        <div className="mt-1.5 relative rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="company-website"
                                                id="company-website"
                                                className="py-3 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full text-sm border border-gray-300 rounded-lg"
                                                placeholder="www.example.com"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-white text-sm sm:mb-10 mb-5">I agree to the Trady <a href="#" className='underline'>Terms of Service</a> and <a href="#" className='underline'>Privacy Policy</a></p>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                    >
                                        Create your site
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

        </>

    )
}

export default Button;