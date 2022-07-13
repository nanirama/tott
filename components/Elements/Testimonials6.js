import React from "react";
import ImgLoader from "../Image";

export default function Testimonial6({ data }) {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote>
            <div className="max-w-6xl mx-auto text-center xl:text-5xl md:text-4xl sm:text-3xl text-2xl leading-tight font-medium text-gray-900">
              <p className="text-gray-900">
                {data?.testimonial?.feedback || ""}
              </p>
            </div>
            <div className="flex items-center flex-col justify-center mt-8">
              {data?.testimonial && (
                <div className="flex-shrink-0">
                  <ImgLoader
                    src={data?.testimonial?.image?.data?.attributes?.url}
                    width={data?.testimonial?.image?.data?.attributes?.width}
                    height={data?.testimonial?.image?.data?.attributes?.height}
                    alt={
                      data?.testimonial?.image?.data?.attributes
                        ?.alternativeText
                    }
                  />
                </div>
              )}
              <div className="mt-4 text-center flex flex-col items-center">
                <p className="text-lg font-medium text-gray-900 mb-1">
                  {data?.testimonial?.client_name || ""}
                </p>
                <p className="text-base text-gray-400">
                  {data?.testimonial?.client_company_name || ""}
                </p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 flex lg:flex-row flex-wrap  justify-center lg:gap-16 gap-8 items-center mt-12">
        {data?.company_logos?.data?.map((logo, index) => (
          <div className="w-auto text-center flex items-center" key={index}>
            <ImgLoader
              src={logo?.attributes?.url}
              width={logo?.attributes?.width}
              height={logo?.attributes?.height}
              alt={logo?.attributes?.alternativeText}
            />
          </div>
        ))}
        {/* <div className="w-auto text-center flex items-center">
          <ImgLoader src={Client2} width={140} height={40} alt="Client2" />
        </div>
        <div className="w-auto text-center flex items-center">
          <ImgLoader src={Client3} width={183} height={48} alt="Client3" />
        </div>
        <div className="w-auto text-center flex items-center">
          <ImgLoader src={Client4} width={133} height={40} alt="Client4" />
        </div>
        <div className="w-auto text-center flex items-center">
          <ImgLoader src={Client5} width={124} height={32} alt="Client5" />
        </div> */}
      </div>
    </section>
  );
}
