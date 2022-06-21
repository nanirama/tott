import Image from 'next/image'
import BlogImg1 from "../../assets/images/blog-img1.jpg"

export default function RecentPost() {

    return (
        <div className="lg:py-10 py-5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="lg:py-10 py-5 w-full text-center">
                    <h6 className="text-base font-semibold mb-4">Latest posts</h6>
                    <h2 className="md:text-5xl text-3xl font-semibold mb-5">Untitled blog</h2>
                    <p className="text-xl text-gray-500">Interviews, tips, guides, industry best practices, and news.</p>
                </div>
                <div className='flex lg:flex-row flex-col md:gap-8 gap-2'>
                    <div className='lg:w-1/3 w-full mb-8'>
                        <Image src={BlogImg1} alt="" />
                        <h6 className='text-sm font-semibold mt-5 mb-3'>Olivia Rhye • 20 Jan 2022</h6>
                        <a href='#' className='flex justify-between items-center mb-3'>
                            <h3 className='text-2xl font-semibold'>UX review presentations</h3>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoinn="round" />
                            </svg></a>
                        <p className='text-gray-500 font-normal text-base mb-5'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                        <div className='flex gap-2'>
                            <a href="#" className="bg-slate-100 text-gray-700 font-medium rounded-2xl text-sm py-1 px-2 inline-block">Design</a>
                            <a href="#" className="bg-slate-100 text-blue-600 font-medium rounded-2xl text-sm py-1 px-2 inline-block">Research</a>
                            <a href="#" className="bg-pink-100 text-pink-700 font-medium rounded-2xl text-sm py-1 px-2 inline-block">Presentation</a>
                        </div>
                    </div>
                    <div className='lg:w-1/3 w-full mb-8'>
                        <Image src={BlogImg1} alt="" />
                        <h6 className='text-sm font-semibold mt-5 mb-3'>Phoenix Baker • 19 Jan 2022</h6>
                        <a href='#' className='flex justify-between items-center mb-3'>
                            <h3 className='text-2xl font-semibold'>Migrating to Linear 101</h3>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoinn="round" />
                            </svg></a>
                        <p className='text-gray-500 font-normal text-base mb-5'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                        <div className='flex gap-2'>
                            <a href="#" className="bg-slate-100 text-gray-700 font-medium rounded-2xl text-sm py-1 px-2 inline-block">Product</a>
                            <a href="#" className="bg-pink-100 text-pink-600 font-medium rounded-2xl text-sm py-1 px-2 inline-block">Tools</a>
                            <a href="#" className="bg-pink-100 text-pink-700 font-medium rounded-2xl text-sm py-1 px-2 inline-block">Sass</a>
                        </div>
                    </div>
                    <div className='lg:w-1/3 w-full mb-8'>
                        <Image src={BlogImg1} alt="" />
                        <h6 className='text-sm font-semibold mt-5 mb-3'>Lana Steiner • 18 Jan 2022</h6>
                        <a href='#' className='flex justify-between items-center mb-3'>
                            <h3 className='text-2xl font-semibold'>Building your API Stack</h3>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoinn="round" />
                            </svg></a>
                        <p className='text-gray-500 font-normal text-base mb-5'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                        <div className='flex gap-2'>
                            <a href="#" className="bg-green-100 text-green-700 font-medium rounded-2xl text-sm py-1 px-2 inline-block">Software Development</a>
                            <a href="#" className="bg-pink-100 text-pink-600 font-medium rounded-2xl text-sm py-1 px-2 inline-block">Tools</a>
                        </div>
                    </div>
                </div>
                <div className='text-center lg:mt-10 mt-5 lg:mb-20 mb-5'>
                    <a href="#" className="inline-flex justify-center items-center rounded-lg bg-zinc-600 border border-zinc-600 py-3 px-5 text-white text-base font-medium  text-center">View All Posts</a>
                </div>
                <hr className="my-8" />
            </div>
        </div>

    )
}