import { useEffect, React } from "react";
import ImgLoader from '../Image';
import Author from "../../assets/images/author6.png"

import Client1 from "../../assets/images/fictional-logo1.png"
import Client2 from "../../assets/images/fictional-logo2.png"
import Client3 from "../../assets/images/fictional-logo3.png"
import Client4 from "../../assets/images/fictional-logo4.png"
import Client5 from "../../assets/images/fictional-logo5.png"

import Slider from "react-slick";

export default function Testimonial1() {
  const settings = {
    dots: false,
    arrows:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="py-12 bg-black overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote>
            <div className="max-w-6xl mx-auto text-center xl:text-5xl md:text-4xl sm:text-3xl text-2xl leading-tight font-medium text-gray-900">
              <p className="text-white">
                Untitled has saved us thousands of hours of work. We’re able to spin up projects and features faster.
              </p>
            </div>
            <div className="flex items-center flex-col justify-center mt-8">
              <div className="flex-shrink-0">
                <ImgLoader src={Author} width={64} height={64} alt="" />
              </div>
              <div className="mt-4 text-center flex flex-col items-center">
                <p className="text-lg font-medium text-white mb-1">Koray Okumus</p>
                <p className="text-base text-gray-400">UX Designer, Circooles</p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:flex lg:flex-row flex-wrap  justify-center lg:gap-16 gap-8 items-center mt-12 hidden">
        <div className='w-auto text-center flex items-center'>
          <ImgLoader src={Client1} width={97} height={32} alt="Client1" />
        </div>
        <div className='w-auto text-center flex items-center'>
          <ImgLoader src={Client2} width={140} height={40} alt="Client2" />
        </div>
        <div className='w-auto text-center flex items-center'>
          <ImgLoader src={Client3} width={183} height={48} alt="Client3" />
        </div>
        <div className='w-auto text-center flex items-center'>
          <ImgLoader src={Client4} width={133} height={40} alt="Client4" />
        </div>
        <div className='w-auto text-center flex items-center'>
          <ImgLoader src={Client5} width={124} height={32} alt="Client5" />
        </div>
      </div>
      <Slider {...settings} className="testimonial1 md:hidden block text-center mt-10">
        <div>
          <ImgLoader src={Client1} width={124} height={32} alt="Client5" />
        </div>
        <div>
          <ImgLoader src={Client2} width={124} height={32} alt="Client5" />
        </div>
        <div>
          <ImgLoader src={Client3} width={124} height={32} alt="Client5" />
        </div>
        <div>
          <ImgLoader src={Client4} width={124} height={32} alt="Client5" />
        </div>
        <div>
          <ImgLoader src={Client5} width={124} height={32} alt="Client5" />
        </div>

      </Slider>
    </section>
  )
}
