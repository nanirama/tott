import Link from "next/link";
import ImgLoader from '../Image';

import CtaImg from "../../assets/images/cta-image.jpg"
import CtaImgMobile from "../../assets/images/cta-image_mobile.jpg"

import Button from "../../components/Button/index"

export default function CtaSection3() {

    return (

        <div className="w-full bg-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col px-4 lg:py-20 py-10">
                <div className="lg:grid lg:grid-cols-2 grid-cols-1 flex lg:flex-row flex-col-reverse">
                    <div className="flex lg:flex-row flex-wrap justify-center gap-5 items-center">
                        <div className="w-auto text-center flex items-center">
                            <div className="relative">
                                <div className="md:block hidden">
                                    <ImgLoader src={CtaImg} width={720} height={720} alt="Client1" />
                                </div>
                                <div className="md:hidden block">
                                    <ImgLoader src={CtaImgMobile} width={363} height={600} alt="Client1" />
                                </div>
                                <div className="absolute bottom-6 left-5 right-5 border text-left py-5 px-4 bg-white/[0.4]">
                                    <p className="md:text-2xl sm:text-xl text-lg text-white font-semibold md:mb-8 mb-6">“Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.”</p>
                                    <div className="flex justify-between items-center md:mb-4 mb-3">
                                        <h3 className="xl:text-4xl text-2xl font-semibold text-white mb-0">Noah Pierre</h3>
                                        <a className="flex md:flex hidden" href="#"><svg className='mr-1' width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646445 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z" fill="white" />
                                        </svg>
                                            <svg className="mr-1" width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646445 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z" fill="white" />
                                            </svg>
                                            <svg className="mr-1" width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646445 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z" fill="white" />
                                            </svg>
                                            <svg className="mr-1" width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646445 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z" fill="white" />
                                            </svg>
                                            <svg className="mr-1" width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646445 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z" fill="white" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="flex md:flex-row flex-col justify-between md:items-center">
                                        <div className="flex flex-col md:mb-0 mb-5">
                                            <p className="sm:text-lg text-base font-semibold text-white mb-0">Head of Design, Layers</p>
                                            <p className="text-base text-white">UX Agency</p>
                                        </div>
                                        <div className="flex">
                                            <div className="flex justify-center items-center border sm:w-14 sm:h-14 w-9 h-9 rounded-full cursor-pointer">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="flex justify-center items-center border sm:w-14 sm:h-14 w-9 h-9 rounded-full ml-5 cursor-pointer">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white sm:p-10 py-10 px-5 flex flex-col justify-center">
                        <h2 className="text-gray-900 lg:text-4xl text-3xl font-semibold tracking-tight leading-tight mb-3">Join over 4,000+ startups growing with Untitled</h2>
                        <ul role="list" className="mt-6 mb-10 space-y-4">
                            <li className="flex space-x-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z" fill="#D9D8D8" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.38967L9.9365 14.2997L8.0365 12.2697C7.6865 11.9397 7.1365 11.9197 6.7365 12.1997C6.3465 12.4897 6.2365 12.9997 6.4765 13.4097L8.7265 17.0697C8.9465 17.4097 9.3265 17.6197 9.7565 17.6197C10.1665 17.6197 10.5565 17.4097 10.7765 17.0697C11.1365 16.5997 18.0065 8.40967 18.0065 8.40967C18.9065 7.48967 17.8165 6.67967 17.0965 7.37967V7.38967Z" fill="#6A6969" />
                                </svg>
                                <span className="text-base text-gray-500">30-day free trial</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z" fill="#D9D8D8" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.38967L9.9365 14.2997L8.0365 12.2697C7.6865 11.9397 7.1365 11.9197 6.7365 12.1997C6.3465 12.4897 6.2365 12.9997 6.4765 13.4097L8.7265 17.0697C8.9465 17.4097 9.3265 17.6197 9.7565 17.6197C10.1665 17.6197 10.5565 17.4097 10.7765 17.0697C11.1365 16.5997 18.0065 8.40967 18.0065 8.40967C18.9065 7.48967 17.8165 6.67967 17.0965 7.37967V7.38967Z" fill="#6A6969" />
                                </svg>
                                <span className="text-base text-gray-500">Peronalized onboarding</span>
                            </li>
                            <li className="flex space-x-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z" fill="#D9D8D8" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.38967L9.9365 14.2997L8.0365 12.2697C7.6865 11.9397 7.1365 11.9197 6.7365 12.1997C6.3465 12.4897 6.2365 12.9997 6.4765 13.4097L8.7265 17.0697C8.9465 17.4097 9.3265 17.6197 9.7565 17.6197C10.1665 17.6197 10.5565 17.4097 10.7765 17.0697C11.1365 16.5997 18.0065 8.40967 18.0065 8.40967C18.9065 7.48967 17.8165 6.67967 17.0965 7.37967V7.38967Z" fill="#6A6969" />
                                </svg>
                                <span className="text-base text-gray-500">Access to all features</span>
                            </li>
                        </ul>
                        <div className="flex md:flex-row flex-col justify-start">
                            <Link href="/"><a target="_blank" className="inline-block text-center rounded-lg bg-white border border-slate-300 py-3 px-5 text-gray-600 text-base font-medium md:mr-3 md:mb-0 mb-3 md:w-auto w-full">Learn More</a></Link>
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

