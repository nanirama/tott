import { React, useState, Fragment, } from 'react'
import Logo from './Logo'
import NavBar from './navbar'

export default function Header() {
  return (
    <div className='border border-t-0 border-l-0 border-r-0 z-30 fixed top-0 left-0 right-0 mx-auto bg-white'>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex pt-3 pb-1 h-16 items-center">
          <div className="flex items-center flex-no-shrink lg:mr-6">
            <Logo />
          </div>
          <NavBar />
        </div>
      </div>
    </div>
  )
}