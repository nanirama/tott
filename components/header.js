import { useState } from 'react'
import Image from 'next/image'
import Logo from "../assets/images/logo.png"

function NavLink({ to, children }) {
  return <a href={to} className={`mx-4`}>
    {children}
  </a>
}

function MobileNav({ open, setOpen }) {
  return (
    <div className={` z-50 absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter`}>
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
      <Image className=' ' src={Logo}
              alt=""
              width={145}
              height={38}
            />
      </div>
      <div className="flex flex-col px-4 bg-white">
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 text-base font-medium">
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

        <a href="#" className="mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 text-base font-medium">Login</a>


      </div>

    </div>
  )
}

export default function Header() {

  const [open, setOpen] = useState(false)
  return (
    <div className='border border-t-0 border-l-0 border-r-0'>
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex py-4 h-20 items-center">

          <MobileNav open={open} setOpen={setOpen} />
          <div className="flex items-center flex-no-shrink text-white mr-6">
            <Image className=' ' src={Logo}
              alt=""
              width={145}
              height={38}
            />

          </div>
          <div className="w-full block flex-grow flex items-center lg:w-auto float-right flex-row-reverse gap-5">

            <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center lg:hidden" onClick={() => {
              setOpen(!open)
            }}>
              {/* hamburger button */}
              <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
              <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
              <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
            </div>


            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto flex justify-end ">
              <div className="text-sm flex-grow hidden lg:flex">
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 text-base font-medium">
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
              </div>
              <div className='flex'>
                <a href="#" className="hidden lg:flex inline-block text-sm px-4 py-2 rounded text-gray-500  py-2.5 p-4 text-base font-medium">Login</a>
                <a href="#" className="inline-block text-sm px-4 py-2 rounded text-white bg-black py-2.5 p-4 text-base font-medium">Sign Up</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}