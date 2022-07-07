import Link from 'next/link'
import ImgLoader from '../Image';
import Client1 from "../../assets/images/client1.png"
import Client2 from "../../assets/images/client2.png"
import Client3 from "../../assets/images/client3.png"
import Client4 from "../../assets/images/client4.png"
import Client5 from "../../assets/images/client5.png"
import Client6 from "../../assets/images/client6.png"
import Client7 from "../../assets/images/client12.png"
import Client8 from "../../assets/images/client13.png"
import Client9 from "../../assets/images/client14.png"
import Button from "../../components/Button/index"


export default function CtaSection6() {

    return (

        <div className="w-full bg-black">
        <div className="max-w-7xl mx-auto flex flex-col px-4 lg:py-20 py-10">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                <div><h2 className='text-white text-3xl font-semibold tracking-tight leading-tight mb-3'>Start your 30-day free trial</h2>
                    <p className='text-zinc-300 text-base mb-8'>Join over 4,000+ startups already growing with Untitled.</p>
                    <div className="flex lg:flex-row flex-wrap  md:justify-start justify-center gap-5 items-center">
                   
                    <div className=' w-auto text-center flex items-center'>
                        <ImgLoader src={Client1} width={112} height={40} alt="Client1" />
                    </div>

                    <div className='w-auto text-center flex items-center'>
                        <ImgLoader src={Client2} width={116} height={40} alt="Client2" />
                    </div>

                    <div className='w-auto text-center flex items-center'>
                        <ImgLoader src={Client3} width={100} height={40} alt="Client3" />
                    </div>
                    <div className='w-auto text-center flex items-center'>
                        <ImgLoader src={Client4} width={135} height={40} alt="Client4" />
                    </div>
                    <div className='w-auto text-center flex items-center'>
                        <ImgLoader src={Client5} width={100} height={40} alt="Client5" />
                    </div>
                    <div className='w-auto text-center flex items-center'>
                        <ImgLoader src={Client6} width={78} height={40} alt="Client5" />
                    </div>

                    <div className='w-auto text-center flex items-center'>
                        <ImgLoader src={Client7} width={66} height={27} alt="Client4" />
                    </div>

                    <div className='w-auto text-center flex items-center'>
                        <ImgLoader src={Client8} width={135} height={40} alt="Client5" />
                    </div>
                  
                </div>
                </div>

                <div className="flex lg:flex-row flex-wrap  md:justify-end justify-center md:gap-5 items-start">

                  
                <Link href="/"><a className="inline-block rounded-lg bg-white border border-slate-300 py-3 px-5 text-gray-600 text-base font-medium md:mr-3 md:mb-0 mb-3 md:w-auto w-full">Learn More</a></Link>
                        <Button/>
                      
                    
                </div>
            </div>
        </div>
    </div>
    )
}

