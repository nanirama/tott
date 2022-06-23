import React from 'react';
import ImgLoader from '../Image';
import Contactimg3 from "../../assets/images/contact-img3.jpg";

export default function FriendlyTeamsection2() {
    return (
        <>
            <div className='bg-neutral-800 md:pt-16 pt-10 md:pb-44 pb-32 px-4 lg:mt-20 mt-16'>
                <div className="max-w-7xl mx-auto flex md:flex-row flex-col justify-between items-center gap-10">
                    <div className='md:w-1/2 w-full'>
                        <div className='w-100 text-base font-semibold text-neutral-200'>Contact us</div>
                        <h2 className='text-4xl text-white font-semibold py-3'>Chat to our friendly team</h2>
                        <p className='text-lg font-normal text-neutral-200'>We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                    </div>
                    <div className='md:w-1/2 w-full flex flex-col'>
                        <div className='w-100 flex flex-row gap-5 text-white text-xl text-medium'>
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className='w-100 flex flex-col'>
                                <div className=''>Melbourne</div>
                                <div className='w-full text-gray-200 pt-3 text-base'>100 Flinders Street, Melbourne VIC 3000 AU</div>
                            </div>
                        </div>
                        <div className='w-100 flex flex-row gap-5 text-white text-xl text-medium mt-12'>
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className='w-100 flex flex-col'>
                                <div className=''>Sydney</div>
                                <div className='w-full text-gray-200 pt-3 text-base'>100 George Street, Sydney NSW 2000 AU</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4">
                <div className='w-100 shadow-2xl flex md:-mt-32 -mt-20 mb-10'>
                    <ImgLoader src={Contactimg3} width={1250} height={480} alt="Contact image" />
                </div>
            </div>
        </>
    )
}