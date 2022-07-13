import ImgLoader from "../Image";
import Map from "../../assets/images/map.png";

export default function MapSection({ title, subTitle, mapImage, contacts }) {
  return (
    <div className="w-full lg:mt-20 mt-16">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col px-4 text-center">
        <div className="lg:py-20 py-10 w-full">
          <h6 className="text-base font-semibold mb-4">About us</h6>
          {title && (
            <h2 className="md:text-5xl text-3xl font-semibold tracking-tight md:mb-6 mb-4">
              {title}
            </h2>
          )}
          {subTitle && (
            <p className="text-xl text-gray-500 leading-8">{subTitle}</p>
          )}
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col px-4 text-center lg:mb-16 mb-5">
        {mapImage && (
          <div className="w-full mb-12">
            <ImgLoader
              src={mapImage?.url}
              width={mapImage?.width}
              height={mapImage?.height}
              alt={mapImage?.alternativeText}
            />
          </div>
        )}
        <div className="md:flex-row flex flex-col">
          {contacts?.map((contact, index) => (
            <div className="md:w-1/3 w-full mb-3" key={index}>
              <h5 className="text-xl mb-3 font-medium">{contact?.title}</h5>
              <p className="text-base text-gray-500 mb-3">
                {contact?.sub_title}
              </p>
              <a href="#" className="text-base font-medium">
                {contact?.phone_or_email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
