import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Popup() {
    const [open, setOpen] = useState(true)
    const [enabled, setEnabled] = useState(false)
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black transition-opacity" />
                </Transition.Child>
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-start min-h-full p-4 text-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative my-10 bg-black sm:px-10 sm:py-24 py-12 px-5 text-left overflow-hidden shadow-xl transform transition-all max-w-3xl mx-auto">
                                <div className="absolute sm:top-5 top-0 sm:right-5 right-0 pt-4 pr-4">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="focus:outline-none"
                                    >
                                        <span className="sr-only">Close</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" /></svg>
                                    </button>
                                </div>
                                <div className="flex items-start flex-col">
                                    <Dialog.Title as="h3" className="sm:text-3xl text-2xl font-semibold text-white sm:mb-6 mb-4 tracking-tight">
                                        Start your 14 day free trial of Trady
                                    </Dialog.Title>
                                    <div className="form w-full">
                                        <div className="sm:mb-8 mb-4">
                                            <label htmlFor="email" className="text-sm text-white">
                                                Email Address
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="py-3 px-3 bg-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full border border-gray-300 text-sm rounded-lg"
                                                    placeholder="you@example.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:mb-8 mb-4">
                                            <label htmlFor="mobile-number" className="text-sm text-white">
                                                Mobile Number
                                            </label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
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
                                        <div className="sm:mb-8 mb-4">
                                            <label htmlFor="company-website" className="text-white text-sm">
                                                Existing Website URL
                                            </label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <input
                                                    type="text"
                                                    name="company-website"
                                                    id="company-website"
                                                    className="py-3 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full text-sm border border-gray-300 rounded-lg"
                                                    placeholder="www.example.com"
                                                />
                                            </div>
                                        </div>
                                        <p className="text-white text-sm sm:mb-8 mb-4">I agree to the Trady <a href="#" className='underline'>Terms of Service</a> and <a href="#" className='underline'>Privacy Policy</a></p>
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                        >
                                            Create your site
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
