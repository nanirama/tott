import React from 'react';
import ImgLoader from '../Image';
import Contactmap from "../../assets/images/contact-map.png";
import ContactForm from "../Elements/ContactForm"
export default function Contactussection() {
    return (
        <div className="max-w-7xl mx-auto md:pt-16 px-4 flex md:flex-row flex-col justify-between items-center lg:mt-5 mt-16 xl:gap-24 gap-5">
            <div className="md:w-1/2 w-full">
                <div className='w-100 text-gray-900 text-4xl font-semibold'>Contact us</div>
                <div className='text-xl text-gray-500 pt-5'>Our friendly team would love to hear from you.</div>
                <div className="mt-10 md:col-span-2">
                    <ContactForm/>
                </div>
            </div>
            <div className="md:w-1/2 w-full">
                <div className='w-100 md:mt-0 mt-8'>
                    <ImgLoader src={Contactmap} width={576} height={800} alt="Contact Map" />
                </div>
            </div>
        </div>
    )
}
