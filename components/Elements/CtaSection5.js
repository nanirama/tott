import Link from 'next/link'
import ImgLoader from '../Image';
import FeatureImg from "../../assets/images/feature-img5.jpg";

import Button from "../../components/Button/index"



export default function CtaSection5() {

    return (
        <div className="w-full lg:px-0 px-4 md:mb-20 mb-10">
            <div className="max-w-7xl mx-auto flex flex-col md:pl-14 pl-5 lg:py-14 py-8 bg-gray-50 rounded-3xl">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    <div className='pr-10 flex flex-col justify-center'>
                        <h2 className='text-gray-900 lg:text-4xl text-2xl font-semibold tracking-tight leading-tight mb-3'>Join over 4,000+ startups growing with Untitled</h2>
                        <p className='text-zinc-500 text-xl mb-8'>Start your 30-day free trial today.</p>
                        <div className=" flex md:flex-row flex-col justify-start">
                        <Link href="/"><a className="inline-block rounded-lg bg-white border border-slate-300 py-3 px-5 text-gray-600 text-base font-medium md:mr-3 md:mb-0 mb-3 md:w-auto w-full">Learn More</a></Link>
                            <Button />
                        </div>
                    </div>
                    <div className=''>
                        <ImgLoader src={FeatureImg} width={600} height={430} alt="feature image" />
                    </div>
                </div>
            </div>
        </div>
    )
}