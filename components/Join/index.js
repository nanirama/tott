import { React, useCallback, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import { Switch } from '@headlessui/react'

import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo';


const JoinIndex = (props) => {
    const router = useRouter()
    const { query } = useRouter();
    const [activeStep, setActiveStep] = useState(1)
    const [webValue, setWebValue] = useState(false)
    const [enabled, setEnabled] = useState(false)

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            router.push('/')
        }
    }, []);



    useEffect(() => {
        document.addEventListener("keydown", escFunction);
    }, [webValue, escFunction, activeStep]);
    return (
        <>
            <Link href="/">
                <a className="fixed top-0 right-0 mt-3 mr-6 z-50 h-10 w-10">
                    <svg clipRule="evenodd" stroke="#fff" fill="#fff" fillRule="evenodd" strokeLinejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
                </a>
            </Link>
            <div
                className="flex overflow-hidden overflow-y-auto fixed inset-0 z-40 my-14 outline-none focus:outline-none"
            >
                {activeStep === 1 ? <StepOne setActiveStep={setActiveStep} query={query} /> : <StepTwo query={query} />}
            </div>
            <div className="fixed inset-0 z-30 bg-black"></div>
        </>
    )
}

export default JoinIndex;