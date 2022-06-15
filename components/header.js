import { useState, Fragment, } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import Logo from "../assets/images/logo.png"
import ImgLoader from './Image'

function NavLink({ to, children }) {
  return <a href={to} className={`mx-4`}>
    {children}
  </a>
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function MobileNav({ open, setOpen }) {
  return (
    <div className={` z-50 absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter`}>
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
        <Link href="/">
          <a>
            <ImgLoader src={Logo} width={145} height={38}/>
          </a>
        </Link>
      </div>
      <div className="flex flex-col p-4 bg-white">

        {/* <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 text-base font-medium">

          Home

        </a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 text-base font-medium">

          Benifits
        </a>

        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 text-base font-medium">

          Resources
        </a>

        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 text-base font-medium">

          Pricing
        </a>

        <a href="#" className="mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 text-base font-medium">
          Login</a> */}





        <Menu as="div" className="relative text-left flex flex-col">
          <Menu.Item>

            <a
              href="#"
              className={classNames(

                'block mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 text-base font-medium'
              )}
            >
              Home
            </a>

          </Menu.Item>


          <div className="relative inline-block text-left z-50">
            <Menu>
              {({ open }) => (
                <>
                  <span className="rounded-md shadow-sm">
                    <Menu.Button className="mt-4 lg:mt-0 text-gray-500 mr-10 text-base font-medium flex  items-center">
                      <span>Benifits</span>
                      <svg
                        className="w-5 h-5 ml-2 -mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Menu.Button>
                  </span>

                  <Transition
                    show={open}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="absolute left-0 w-40 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                    >
                      <div className="">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#account-settings"
                              className={`${active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                                } flex justify-between w-full px-4 py-3 text-sm leading-5 text-left`}
                            >
                              Account settings
                            </a>

                          )}
                        </Menu.Item>

                      </div>


                      <div className="">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#account-settings"
                              className={`${active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                                } flex justify-between w-full px-4 py-3 text-sm leading-5 text-left`}
                            >
                              Account settings
                            </a>

                          )}
                        </Menu.Item>

                      </div>

                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>



          <div className="relative inline-block text-left z-10">
            <Menu>
              {({ open }) => (
                <>
                  <span className="rounded-md shadow-sm">
                    <Menu.Button className="mt-4 lg:mt-0 text-gray-500 mr-10 text-base font-medium flex items-center">
                      <span>Resources</span>
                      <svg
                        className="w-5 h-5 ml-2 -mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Menu.Button>
                  </span>

                  <Transition
                    show={open}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="absolute left-0 w-40 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                    >

                      <div className="">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#account-settings"
                              className={`${active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                                } flex justify-between w-full px-4 py-3 text-sm leading-5 text-left`}
                            >
                              Account settings
                            </a>

                          )}
                        </Menu.Item>

                      </div>
                      <div className="">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#settings"
                              className={`${active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            >
                              settings
                            </a>
                          )}
                        </Menu.Item>
                      </div>

                    </Menu.Items>


                  </Transition>
                </>
              )}
            </Menu>
          </div>



          <Menu.Item>

            <a
              href="#"
              className={classNames(

                'block mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 text-base font-medium'
              )}
            >
              Pricing
            </a>

          </Menu.Item>

        </Menu>








      </div>

    </div>
  )
}

export default function Header() {

  const [open, setOpen] = useState(false)
  return (
    <div className='border border-t-0 border-l-0 border-r-0 relative z-50'>
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex py-4 h-20 items-center">

          <MobileNav open={open} setOpen={setOpen} />
          <div className="flex items-center flex-no-shrink lg:mr-6">
          <ImgLoader src={Logo} width={140} height={50}/>
  

          </div>
          <div className="w-full block flex-grow flex items-center lg:w-auto float-right lg:flex-row flex-row-reverse gap-5">

            <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center lg:hidden" onClick={() => {
              setOpen(!open)
            }}>
              {/* hamburger button */}
              <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
              <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
              <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
            </div>


            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto flex   hidden lg:flex">


              <Menu as="div" className="relative text-left flex">
                <Menu.Item>

                  <a
                    href="#"
                    className={classNames(

                      'block mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 text-base font-medium'
                    )}
                  >
                    Home
                  </a>

                </Menu.Item>


                <div className="relative inline-block text-left">
                  <Menu>
                    {({ open }) => (
                      <>
                        <span className="rounded-md shadow-sm">
                          <Menu.Button className="mt-4 lg:mt-0 text-gray-500 mr-10 text-base font-medium flex  items-center">
                            <span>Benefits</span>
                            <svg
                              className="w-5 h-5 ml-2 -mr-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Menu.Button>
                        </span>

                        <Transition
                          show={open}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="absolute -right-24 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                          >
                            <div className="">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#account-settings"
                                    className={`${active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                      } flex justify-between w-full px-4 py-3 text-sm leading-5 text-left`}
                                  >
                                    Account settings
                                  </a>

                                )}
                              </Menu.Item>

                            </div>


                            <div className="">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#account-settings"
                                    className={`${active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                      } flex justify-between w-full px-4 py-3 text-sm leading-5 text-left`}
                                  >
                                    Account settings
                                  </a>

                                )}
                              </Menu.Item>

                            </div>

                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>



                <div className="relative inline-block text-left">
                  <Menu>
                    {({ open }) => (
                      <>
                        <span className="rounded-md shadow-sm">
                          <Menu.Button className="mt-4 lg:mt-0 text-gray-500 mr-10 text-base font-medium flex items-center ">
                            <span>Resources</span>
                            <svg
                              className="w-5 h-5 ml-2 -mr-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Menu.Button>
                        </span>

                        <Transition
                          show={open}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="absolute -right-20 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                          >

                            <div className="">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#account-settings"
                                    className={`${active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                      } flex justify-between w-full px-4 py-3 text-sm leading-5 text-left`}
                                  >
                                    Account settings
                                  </a>

                                )}
                              </Menu.Item>

                            </div>
                            <div className="">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#settings"
                                    className={`${active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                      } flex justify-between w-full px-4 py-3 text-sm leading-5 text-left`}
                                  >
                                    settings
                                  </a>
                                )}
                              </Menu.Item>
                            </div>

                          </Menu.Items>


                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>



                <Menu.Item>

                  <a
                    href="#"
                    className={classNames(

                      'block mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 text-base font-medium'
                    )}
                  >
                    Pricing
                  </a>

                </Menu.Item>

              </Menu>



            </div>

            <div className='flex'>
              <a href="#" className="lg:flex inline-block text-sm rounded text-gray-500  py-2.5 md:px-4 px-2 text-base font-medium">Login</a>
              <a href="#" className="inline-block text-sm rounded text-white text-center bg-black py-2.5 md:px-4 px-2 text-base font-medium">Sign Up</a>
            </div>

          </div>


        </nav>
      </div>

    </div>
  )
}