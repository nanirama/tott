import { CheckIcon } from '@heroicons/react/solid'
import Link from 'next/link'

import ImgLoader from '../Image';
import Logo from "../../assets/images/logo-white.png"

const steps = [
    { name: 'Your details', description: 'Please provide your name and email', href: '#', status: 'complete' },
    {
      name: 'Choose a password',
      description: 'Choose a secure password',
      href: '#',
      status: 'current',
    },
    { name: 'Invite your team', description: 'Start collaborating with your team', href: '#', status: 'upcoming' },
    { name: 'Add your socials', description: 'Share posts to your social accounts', href: '#', status: 'upcoming' },
  
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function SignUpSteps() {
    return (
      <div className=' bg-black lg:p-10 lg:p-10 p-5 w-full flex flex-col'>
        <div className="py-3 flex items-left flex-col justify-start h-full md:mb-28 mb-10">
            <div className='lg:mb-10 mb-5'><ImgLoader src={Logo} width={158} height={50} alt="Logo" /></div>
        <nav aria-label="Progress">
          <ol role="list" className="overflow-hidden">
            {steps.map((step, stepIdx) => (
              <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
                {step.status === 'complete' ? (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
                    ) : null}
                    <Link href={step.href}>
                    <a  className="relative flex items-start group">
                      <span className="h-9 flex items-center">
                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-gray-400">
                          <CheckIcon className="w-5 h-5 text-gray-700" aria-hidden="true" />
                        </span>
                      </span>
                      <span className="ml-4 min-w-0 flex flex-col">
                        <span className="text-base font-medium tracking-wide text-white">{step.name}</span>
                        <span className="text-base text-gray-300">{step.description}</span>
                      </span>
                    </a>
                    </Link>
                  </>
                ) : step.status === 'current' ? (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
                    ) : null}
                    <Link href={step.href}><a className="relative flex items-start group" aria-current="step">
                      <span className="h-9 flex items-center" aria-hidden="true">
                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-600 rounded-full">
                          <span className="h-2.5 w-2.5 bg-gray-600 rounded-full" />
                        </span>
                      </span>
                      <span className="ml-4 min-w-0 flex flex-col">
                        <span className="text-base font-medium tracking-wide text-white">{step.name}</span>
                        <span className="text-base text-gray-300">{step.description}</span>
                      </span>
                    </a>
                    </Link>
                  </>
                ) : (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
                    ) : null}
                    <Link href={step.href}>
                    <a className="relative flex items-start group">
                      <span className="h-9 flex items-center" aria-hidden="true">
                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                          <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                        </span>
                      </span>
                      <span className="ml-4 min-w-0 flex flex-col">
                        <span className="text-base font-medium tracking-wide text-white">{step.name}</span>
                        <span className="text-base text-gray-300">{step.description}</span>
                      </span>
                    </a>
                    </Link>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
        </div>

        <div className='flex md:flex-row justify-between w-full gap-2 items-center'>
            <p className='text-gray-500 text-sm'>© Untitled UI 2077</p>
            <p className='flex items-center text-gray-500 text-sm'><svg className='mr-2' width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6673 2.00033C14.6673 1.26699 14.0673 0.666992 13.334 0.666992H2.66732C1.93398 0.666992 1.33398 1.26699 1.33398 2.00033M14.6673 2.00033V10.0003C14.6673 10.7337 14.0673 11.3337 13.334 11.3337H2.66732C1.93398 11.3337 1.33398 10.7337 1.33398 10.0003V2.00033M14.6673 2.00033L8.00065 6.66699L1.33398 2.00033" stroke="#667085" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg> help@untitledui.com</p>
          </div>

          </div>

    )
}