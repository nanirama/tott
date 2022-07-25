import React from "react";
import ImgLoader from "../Image";

export default function Clients({ data }) {
  return (
    <div className="lg:py-20 py-14 w-full bg-black">
      {data?.title && (
        <p className="text-base text-gray-500 font-medium text-center mb-7">
          {data?.title}
        </p>
      )}
      <div className="max-w-7xl mx-auto px-4 flex lg:flex-row flex-wrap  justify-center lg:gap-14 gap-8 items-center">
        {data?.company_images &&
          data?.company_images?.data?.map((image) => (
            <div className="w-auto text-center" key={image.id}>
              <ImgLoader
                src={image?.attributes?.url}
                width={image?.attributes?.width}
                height={image?.attributes?.height}
                alt={image?.attributes?.alternativeText}
              />
            </div>
          ))}
        {/* <div className="w-auto flex text-center">
          <ImgLoader src={Client1} width={135} height={48} alt="Client1" />
        </div>
        <div className="w-auto text-center">
          <ImgLoader src={Client2} width={140} height={48} alt="Client2" />
        </div>
        <div className="w-auto  text-center w-auto flex">
          <ImgLoader src={Client3} width={121} height={48} alt="Client3" />
        </div>
        <div className="w-auto  w-auto text-center flex">
          <ImgLoader src={Client4} width={163} height={48} alt="Client4" />
        </div>
        <div className="w-auto  w-auto text-center flex">
          <ImgLoader src={Client5} width={120} height={48} alt="Client5" />
        </div>
        <div className="w-auto  w-auto text-center flex">
          <ImgLoader src={Client6} width={94} height={48} alt="Client6" />
        </div> */}
      </div>
    </div>
  );
}
