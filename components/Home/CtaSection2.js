import ImgLoader from '../Image';

import CtaImg from "../../assets/images/cta-image.jpg"



export default function CtaSection2() {

    return (

        <div className="w-full bg-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col px-4 lg:py-20 py-10">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className='bg-white p-10 flex flex-col justify-center'> 
                        <h2 className='text-gray-900 lg:text-4xl text-2xl font-semibold tracking-tight leading-tight mb-8'>Join over 4,000+ startups growing with Untitled</h2>
                       <ul>
                        <li className='gap-3 flex text-zinc-500 text-lg mb-5'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="#D9D8D8"/>
<path fillRule="evenodd" clipRule="evenodd" d="M19.9459 8.62096L11.5926 16.6826L9.37592 14.3143C8.96759 13.9293 8.32592 13.906 7.85925 14.2326C7.40425 14.571 7.27592 15.166 7.55592 15.6443L10.1809 19.9143C10.4376 20.311 10.8809 20.556 11.3826 20.556C11.8609 20.556 12.3159 20.311 12.5726 19.9143C12.9926 19.366 21.0076 9.81096 21.0076 9.81096C22.0576 8.73762 20.7859 7.79262 19.9459 8.60929V8.62096Z" fill="#6A6969"/>
</svg> 30-day free trial
</li>
<li className='gap-3 flex text-zinc-500 text-lg mb-5'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="#D9D8D8"/>
<path fillRule="evenodd" clipRule="evenodd" d="M19.9459 8.62096L11.5926 16.6826L9.37592 14.3143C8.96759 13.9293 8.32592 13.906 7.85925 14.2326C7.40425 14.571 7.27592 15.166 7.55592 15.6443L10.1809 19.9143C10.4376 20.311 10.8809 20.556 11.3826 20.556C11.8609 20.556 12.3159 20.311 12.5726 19.9143C12.9926 19.366 21.0076 9.81096 21.0076 9.81096C22.0576 8.73762 20.7859 7.79262 19.9459 8.60929V8.62096Z" fill="#6A6969"/>
</svg> Peronalized onboarding
</li>
<li className='gap-3 flex text-zinc-500 text-lg mb-5'><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z" fill="#D9D8D8"/>
<path fillRule="evenodd" clipRule="evenodd" d="M19.9459 8.62096L11.5926 16.6826L9.37592 14.3143C8.96759 13.9293 8.32592 13.906 7.85925 14.2326C7.40425 14.571 7.27592 15.166 7.55592 15.6443L10.1809 19.9143C10.4376 20.311 10.8809 20.556 11.3826 20.556C11.8609 20.556 12.3159 20.311 12.5726 19.9143C12.9926 19.366 21.0076 9.81096 21.0076 9.81096C22.0576 8.73762 20.7859 7.79262 19.9459 8.60929V8.62096Z" fill="#6A6969"/>
</svg> Access to all features
</li>
                       </ul>
                       
                       
                        
                        <div className=" flex md:flex-row flex-col justify-start mt-4">
                            <a href="#" target="_blank" className="inline-block rounded-lg bg-white border border-slate-300 py-3 px-5 text-gray-600 text-base font-medium md:mr-3 md:mb-0 mb-3 md:w-auto w-full">Learn More</a>
                            <a href="#" target="_blank" className="inline-block rounded-lg bg-zinc-600 border border-zinc-600 py-3 px-5 text-white text-base font-medium md:w-auto w-full">Get Started</a></div>
                    </div>

                    <div className="flex lg:flex-row flex-wrap  justify-center gap-5 items-center">

                        <div className=' w-auto text-center flex items-center'>
                            <ImgLoader src={CtaImg} width={720} height={720} alt="Client1" />
                        </div>

                      
                    </div>
                </div>
            </div>
        </div>
    )
}
