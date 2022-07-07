import ImgLoader from '../Image';
import Author1 from "../../assets/images/Avatar.png"
import Author2 from "../../assets/images/author2.png"
import Author3 from "../../assets/images/author3.png"
import Author4 from "../../assets/images/author4.png"

export default function Team2() {
    return (
        <div className="lg:py-20 py-10 w-full  border-b border-slate-200">
            <div className="max-w-4xl mx-auto flex flex-col px-4 text-center mb-14">
                <h6 className="text-base text-gray-600 font-semibold mb-4">We&lsquo;re hiring!</h6>
                <h2 className="md:text-4xl text-3xl font-semibold tracking-tight md:mb-6 mb-4">Meet our team</h2>
                <p className="text-xl text-gray-500 leading-8">Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.</p>
            </div>
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-y-14 gap-y-5 gap-x-5">
                    <div className='w-full flex flex-col items-center'>
                        <div className='w-20'>
                            <ImgLoader src={Author1} width={80} height={80} alt="Team" className="rounded-full" />
                        </div>
                        <h5 className='text-lg font-medium mt-2'>Olivia Rhye</h5>
                        <p className='text-base'>Founder & CEO</p>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <div className='w-20'>
                            <ImgLoader src={Author2} width={80} height={80} alt="Team" className="rounded-full" />
                        </div>
                        <h5 className='text-lg font-medium mt-2'>Phoenix Baker</h5>
                        <p className='text-base'>Engineering Manager</p>
                    </div>
                    <div className='w-full  flex flex-col items-center'>
                        <div className='w-20'>
                            <ImgLoader src={Author3} width={80} height={80} alt="Team" className="rounded-full" />
                        </div>
                        <h5 className='text-lg font-medium mt-2'>Lana Steiner</h5>
                        <p className='text-base'>Product Manager</p>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <div className='w-20'>
                            <ImgLoader src={Author4} width={80} height={80} alt="Team" className="rounded-full" />
                        </div>
                        <h5 className='text-lg font-medium mt-2'>Demi Wilkinson</h5>
                        <p className='text-base'>Frontend Developer</p>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <div className='w-20'>
                            <ImgLoader src={Author1} width={80} height={80} alt="Team" className="rounded-full" />
                        </div>
                        <h5 className='text-lg font-medium mt-2'>Candice Wu</h5>
                        <p className='text-base'>Backend Developer</p>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <div className='w-20'>
                            <ImgLoader src={Author2} width={80} height={80} alt="Team" className="rounded-full" />
                        </div>
                        <h5 className='text-lg font-medium mt-2'>Natali Craig</h5>
                        <p className='text-base'>Product Designer</p>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <div className='w-20'>
                            <ImgLoader src={Author3} width={80} height={80} alt="Team" className="rounded-full" />
                        </div>
                        <h5 className='text-lg font-medium mt-2'>Drew Cano</h5>
                        <p className='text-base'>UX Researcher</p>
                    </div>
                    <div className='w-full  flex flex-col items-center'>
                        <div className='w-20'>
                            <ImgLoader src={Author4} width={80} height={80} alt="Team" className="rounded-full" />
                        </div>
                        <h5 className='text-lg font-medium mt-2'>Orlando Diggs</h5>
                        <p className='text-base'>Customer Success</p>
                    </div>
                </div>
            </div>
        </div>
    )
}