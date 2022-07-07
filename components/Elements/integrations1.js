import React from 'react';
import Link from 'next/link'
import ImgLoader from '../Image';

import Integrationimg1 from "../../assets/images/integration-img1.png";
import Integrationimg2 from "../../assets/images/integration-img2.png";
import Integrationimg3 from "../../assets/images/integration-img3.png";
import Integrationimg4 from "../../assets/images/integration-img4.png";
import Integrationimg5 from "../../assets/images/integration-img5.png";
import Integrationimg6 from "../../assets/images/integration-img6.png";
import Integrationimg7 from "../../assets/images/integration-img7.png";
import Integrationimg8 from "../../assets/images/integration-img8.png";

import Button from "../../components/Button/index"

export default function Integrations1({ data }) {

    return (

<div className='py-10 '>
        <div className="max-w-7xl mx-auto  flex md:flex-row flex-col justify-between px-4 ">
            <div className="md:w-1/2 w-full">
                <div className='flex mb-3'><a href='#' className='flex items-center justify-between bg-gray-50 rounded-2xl w-auto text-gray-700 text-base font-medium py-1 px-3'>Integrations</a></div>
                <h2 className='md:text-4xl text-2xl text-gray-900 font-extrabold'>Get more value from your tools</h2>
                <p className='width-1/2 text-xl text-gray-500 pt-5 mb-8'>Connect your tools, connect your teams. With over 100 <br />apps already available in our directory, your team’s <br />favourite tools are just a click away.</p>
                <div className="flex md:flex-row flex-col justify-start mb-5">
                <Link href="/"><a className="flex justify-center items-center gap-2 inline-block text-center rounded-lg bg-white border border-slate-300 py-2 px-5 text-gray-600 text-base font-medium md:mr-3 md:mb-0 mb-3 md:w-auto w-full"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0001 18.3332C14.6025 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665C5.39771 1.6665 1.66675 5.39746 1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332Z" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.33342 6.6665L13.3334 9.99984L8.33342 13.3332V6.6665Z" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path></svg> Demo</a></Link>
                     <Button/>
                </div>
            </div>
            <div className="md:w-1/2 w-full grid flex justify-center items-center">
                <div className='grid grid-cols-4 lg:gap-8 gap-4 pt-4 sm:grid-cols-4 justify-center items-center'>
                <div>
                <ImgLoader src={Integrationimg1} width={96} height={96} alt="Integration Image" />
                </div>
                <div>
                <ImgLoader src={Integrationimg2} width={96} height={96} alt="Integration Image" />
                </div>
                <div>
                <ImgLoader src={Integrationimg3} width={96} height={96} alt="Integration Image" />
                </div>
                <div>
                <ImgLoader src={Integrationimg4} width={96} height={96} alt="Integration Image" />
                </div>
                <div>
                <ImgLoader src={Integrationimg5} width={96} height={96} alt="Integration Image" />
                </div>
                <div>
                <ImgLoader src={Integrationimg6} width={96} height={96} alt="Integration Image" />
                </div>
                <div>
                <ImgLoader src={Integrationimg7} width={96} height={96} alt="Integration Image" />
                </div>
                <div>
                <ImgLoader src={Integrationimg8} width={96} height={96} alt="Integration Image" />
                </div>
                </div>
            </div>
        </div>
        </div>

    )
}