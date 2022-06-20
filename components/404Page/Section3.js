import ImgLoader from '../Image';
import Author from "../../assets/images/author6.png"
import BlogImg1 from "../../assets/images/blog-img1.jpg"
import BlogImg2 from "../../assets/images/blog-img2.jpg"
import BlogImg3 from "../../assets/images/blog-img3.jpg"
import BlogImg4 from "../../assets/images/blog-img5.jpg"

export default function Section3() {
    return (
        <div className="mb-10 bg-gray-50 md:py-24 py-14">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="md:text-4xl text-3xl text-center font-semibold tracking-tight mb-5">Latest writings</h2>
                <p className="text-gray-500 md:text-xl text-lg text-center md:mb-16 mb-10">The latest news, technologies, and resources from our team.</p>
                <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div>
                    <ImgLoader src={BlogImg1} width={320} height={220} alt="" />
                    </div>
                    <div>
                        <h6 className="text-sm font-semibold text-gray-700 mb-3">Design</h6>
                        <h3 className="text-lg text-gray-900 font-semibold mb-2">UX review presentations</h3>
                        <p className="text-gray-500 text-base">How do you create compelling presentations that wow your...</p>
                        <div className="flex flex-row items-center gap-3 mt-6">
                            <ImgLoader src={Author} width={40} height={40} alt="" />
                            <p className="flex flex-col text-gray-900 text-sm font-medium">Olivia Rhye
                                <span className="font-normal text-gray-500">20 Jan 2022</span>
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div>
                    <ImgLoader src={BlogImg2} width={320} height={220} alt="" />
                    </div>
                    <div>
                        <h6 className="text-sm font-semibold text-gray-700 mb-3">Product</h6>
                        <h3 className="text-lg text-gray-900 font-semibold mb-2">Migrating to Linear 101</h3>
                        <p className="text-gray-500 text-base">Linear helps streamline software projects, sprints, tasks, and bu...</p>
                        <div className="flex flex-row items-center gap-3 mt-6">
                            <ImgLoader src={Author} width={40} height={40} alt="" />
                            <p className="flex flex-col text-gray-900 text-sm font-medium">Phoenix Baker
                                <span className="font-normal text-gray-500">19 Jan 2022</span>
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div>
                    <ImgLoader src={BlogImg3} width={320} height={220} alt="" />
                    </div>
                    <div>
                        <h6 className="text-sm font-semibold text-gray-700 mb-3">Software Engineering</h6>
                        <h3 className="text-lg text-gray-900 font-semibold mb-2">Building your API Stack</h3>
                        <p className="text-gray-500 text-base">The rise of RESTful APIs has been met by a rise in tools...</p>
                        <div className="flex flex-row items-center gap-3 mt-6">
                            <ImgLoader src={Author} width={40} height={40} alt="" />
                            <p className="flex flex-col text-gray-900 text-sm font-medium">Lana Steiner
                                <span className="font-normal text-gray-500">18 Jan 2022</span>
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div>
                    <ImgLoader src={BlogImg4} width={320} height={220} alt="" />
                    </div>
                    <div>
                        <h6 className="text-sm font-semibold text-gray-700 mb-3">Product</h6>
                        <h3 className="text-lg text-gray-900 font-semibold mb-2">PM mental models</h3>
                        <p className="text-gray-500 text-base">Mental models are simple expressions of complex...</p>
                        <div className="flex flex-row items-center gap-3 mt-6">
                            <ImgLoader src={Author} width={40} height={40} alt="" />
                            <p className="flex flex-col text-gray-900 text-sm font-medium">Demi WIlkinson
                                <span className="font-normal text-gray-500">17 Jan 2022</span>
                            </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}