import ImgLoader from '../Image';
import Map from "../../assets/images/map.png"

export default function MapSection() {
    return (


        <div className='w-full'>

            <div className="max-w-7xl mx-auto flex md:flex-row flex-col px-4 text-center">
                <div className="lg:py-20 py-10 w-full">
                    <h6 className="text-base font-semibold mb-4">About us</h6>
                    <h2 className="md:text-5xl text-3xl font-semibold tracking-tight md:mb-6 mb-4">We're a distributed team</h2>
                    <p className="text-xl text-gray-500 leading-8">We have offices and teams all around the world.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col px-4 text-center lg:mb-16 mb-5">
                <div className='w-full mb-12'>
                  
                      <ImgLoader src={Map} width={1024} height={488} alt="Map" />  
                </div>
                <div className='md:flex-row flex flex-col'>
                    <div className='md:w-1/3 w-full mb-3'>
                        <h5 className='text-xl mb-3 font-medium'>Support</h5>
                        <p className='text-base text-gray-500 mb-3'>Our friendly team is here to help.</p>
                        <a href='#' className='text-base font-medium'>support@untitledui.com</a>
                    </div>
                    <div className='md:w-1/3 w-full mb-3'>
                        <h5 className='text-xl mb-3 font-medium'>Sales</h5>
                        <p className='text-base text-gray-500 mb-3'>Our friendly team is here to help.</p>
                        <a href='#' className='text-base font-medium'>sales@untitledui.com</a>
                    </div>

                    <div className='md:w-1/3 w-full mb-3'>
                        <h5 className='text-xl mb-3 font-medium'>Phone</h5>
                        <p className='text-base text-gray-500 mb-3'>Mon-Fri from 8am to 5pm.</p>
                        <p className='text-base font-medium'>+1 (555) 000-0000</p>
                    </div>

                </div>
            </div>
        </div>

    )
}