import React from "react";
import ImgLoader from "../Image";

export default function Clients({ data }) {
  return (
    <div className="w-full py-14 px-4 flex  flex flex-col">
      {data?.title && (
        <p className="text-base font-medium text-center text-gray-500 mb-6">
          {data?.title}
        </p>
      )}
      <div className="max-w-7xl mx-auto px-4 flex lg:flex-row flex-wrap  justify-center lg:gap-10 gap-8 items-center">
        {data?.company_images &&
          data?.company_images?.data?.map((image) => (
            <div
              className="w-auto text-center flex items-center"
              key={image.id}
            >
              <ImgLoader
                src={image?.attributes?.url}
                width={image?.attributes?.width}
                height={image?.attributes?.height}
                alt={image?.attributes?.alternativeText}
              />
            </div>
          ))}
        {/* <div className="w-auto text-center flex items-center">
          <ImgLoader src={Client2} width={238} height={40} alt="Client2" />
        </div>
        <div className="w-auto text-center flex items-center">
          <ImgLoader src={Client3} width={180} height={40} alt="Client3" />
        </div>
        <div className="w-auto text-center flex items-center">
          <ImgLoader src={Client4} width={165} height={40} alt="Client4" />
        </div>
        <div className="w-auto text-center flex items-center">
          <ImgLoader src={Client5} width={115} height={40} alt="Client5" />
        </div> */}
      </div>
    </div>
  );
}
