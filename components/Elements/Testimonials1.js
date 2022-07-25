import { React } from "react";
import ImgLoader from "../Image";

import Slider from "react-slick";

export default function Testimonial1({ data }) {
  const settings = {
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="py-12 bg-black overflow-hidden md:py-20 lg:py-24">
      <Slider
        {...settings}
        className="testimonial1 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {data?.testimonial &&
          data?.testimonial?.map((item, index) => (
            <div className="relative" key={index}>
              <blockquote>
                <div className="max-w-6xl mx-auto text-center xl:text-5xl md:text-4xl sm:text-3xl text-2xl leading-tight font-medium text-gray-900">
                  <p className="text-white">{item.feedback}</p>
                </div>
                <div className="flex items-center flex-col justify-center mt-8">
                  <div className="flex-shrink-0">
                    <ImgLoader
                      src={item?.image?.data?.attributes?.url}
                      width={64}
                      height={64}
                      alt={item?.image?.data?.attributes?.alternativeText}
                    />
                  </div>
                  <div className="mt-4 text-center flex flex-col items-center">
                    <p className="text-lg font-medium text-white mb-1">
                      {item.client_name}
                    </p>
                    <p className="text-base text-gray-400">
                      {item.client_company_name}
                    </p>
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
      </Slider>
      <div className="max-w-7xl mx-auto px-4 md:flex lg:flex-row flex-wrap  justify-center lg:gap-16 gap-8 items-center mt-12 hidden">
        {data?.company_logos?.data &&
          data?.company_logos?.data?.map((image) => (
            <div
              className="w-auto text-center flex items-center"
              key={image.id}
            >
              <ImgLoader
                src={image?.attributes?.url}
                width={97}
                height={32}
                alt={image?.attributes?.alternativeText}
              />
            </div>
          ))}
        {/* <div className="w-auto text-center flex items-center">
          <ImgLoader src={Client2} width={140} height={40} alt="Client2" />
        </div> */}
      </div>
      <Slider
        {...settings}
        className="testimonial1 md:hidden block text-center mt-10"
      >
        {data?.company_logos?.data &&
          data?.company_logos?.data?.map((image) => (
            <div key={image.id}>
              <ImgLoader
                src={image?.attributes?.url}
                width={97}
                height={32}
                alt={image?.attributes?.alternativeText}
              />
            </div>
          ))}
        {/* <div>
          <ImgLoader src={Client1} width={124} height={32} alt="Client5" />
        </div> */}
      </Slider>
    </section>
  );
}
