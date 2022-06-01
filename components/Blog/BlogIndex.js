import Image from 'next/image'
import BlogImg1 from "../../assets/images/blog-img1.jpg"
import Author from "../../assets/images/Avatar.png"

export default function BlogIndex() {
    return (


        <>

            <div className="">

                <div className="max-w-7xl mx-auto flex md:flex-row flex-col px-4">
                    <div className="lg:py-20 py-14 w-full">
                        <h6 className="text-base font-semibold mb-3">Our blog</h6>
                        <h2 className="text-5xl font-semibold tracking-tight mb-8">Resources and insights</h2>
                        <p className="text-xl text-gray-500 leading-8">The latest industry news, interviews, technologies, and resources.</p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto flex gap-5 px-4">

                    <div className='w-1/4'>55</div>
                    <div className='w-3/4'>

                        <div className='lg:flex gap-8 mb-8'>
                            <div className='lg:w-2/3 w-full'>
                                <Image className=' ' src={BlogImg1}
                                    alt=""
                                />
                            </div>
                            <div className='lg:w-1/3 w-full'>

                                <div className='bg-gray-200 rounded-2xl p-1 w-auto inline-block inline-flex gap-3 mb-4'>
                                    <a href='#' className='bg-white text-gray-700 font-medium rounded-2xl text-xs p-1 inline-block'>Design</a>
                                    <a href='#' className='text-gray-700 text-xs font-medium p-1 inline-block'>8 min read</a>

                                </div>

                                <h2 className='text-3xl font-semibold mb-4'>UX review presentations</h2>
                                <p className='text-gray-500 text-base mb-4'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                                <div className='flex gap-3'>
                                    <Image className=' ' src={Author}
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                    <p className='text-sm font-medium text-gray-700'>Olivia Rhye<br />
                                        <span className='font-normal text-gray-500'>20 Jan 2022</span></p>
                                </div>
                            </div>
                        </div>

                        <div className='md:flex gap-8'>
                        <div className='md:w-1/2 w-full'>
                        <Image src={BlogImg1}
                                alt=""
                                />
  <div className='bg-gray-200 rounded-2xl p-1 w-auto inline-block inline-flex gap-3 mb-4 mt-5'>
                                    <a href='#' className='bg-white text-gray-700 font-medium rounded-2xl text-xs p-1 inline-block'>Design</a>
                                    <a href='#' className='text-gray-700 text-xs font-medium p-1 inline-block'>8 min read</a>

                                </div>
                                <h3 className='text-2xl font-semibold mb-4'>Migrating to Linear 101</h3>
                                <p className='text-base'>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
</div>

<div className='md:w-1/2 w-full'>
22

</div>
</div>


                    </div>




                </div>
            </div>


        </>



    )
}