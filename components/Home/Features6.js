import Image from 'next/image'

import ImgLoader from '../Image';
import FeatureImg4 from "../../assets/images/features-img4.jpg";




export default function Features6() {

    return (
        <div className="w-full bg-black lg:pt-20 pt-10 px-4">
            <div class="lg:max-w-3xl mx-auto w-full lg:mb-14 mb-10 text-center">
                <h6 class="text-base text-white font-semibold mb-3">Features</h6>
                <h2 class="lg:text-4xl text-2xl text-white font-semibold tracking-tight mb-4">Cutting-edge features for advanced analytics</h2>

                <p className='text-lg text-gray-400 text-normal'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>

            </div>
            <div className="max-w-6xl mx-auto flex flex-col ">
                <div className='flex'>
                    <ImgLoader src={FeatureImg4} width={1216} height={560} alt="feature image" />
                </div>
            </div>
        </div>



    )
}