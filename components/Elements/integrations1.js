import React from "react";
import Link from "next/link";
import ImgLoader from "../Image";

const buttonClasses = {
  active:
    "md:w-auto w-full inline-block bg-green-400 md:mr-3 md:mt-0 mt-4 items-center justify-center px-5 py-3 text-white sm:text-base text-sm font-medium border border-green-400 rounded-lg",
  inActive:
    "flex justify-center items-center gap-2 inline-block text-center rounded-lg bg-white border border-slate-300 py-3 px-5 text-gray-600 text-base font-medium md:mr-3 md:mb-0 mb-3 md:w-auto w-full",
};

export default function Integrations1({ data }) {
  return (
    <div className="py-10 ">
      <div className="max-w-7xl mx-auto  flex md:flex-row flex-col justify-between px-4 ">
        <div className="md:w-1/2 w-full">
          <div className="flex mb-3">
            <a
              href="#"
              className="flex items-center justify-between bg-gray-50 rounded-2xl w-auto text-gray-700 text-base font-medium py-1 px-3"
            >
              Integrations
            </a>
          </div>
          {data?.title && (
            <h2 className="md:text-4xl text-2xl text-gray-900 font-extrabold">
              {data?.title}
            </h2>
          )}
          {data?.description && (
            <p className="width-1/2 text-xl text-gray-500 pt-5 mb-8">
              {data?.description}
            </p>
          )}
          <div className="flex md:flex-row flex-col justify-start mb-5">
            {data?.action_buttons &&
              data?.action_buttons?.map((button, index) => (
                <Link href={button.button_url} key={index}>
                  <a
                    className={
                      button?.is_active
                        ? buttonClasses.active
                        : buttonClasses.inActive
                    }
                  >
                    {!button.is_active && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0001 18.3332C14.6025 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665C5.39771 1.6665 1.66675 5.39746 1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332Z"
                          stroke="#344054"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.33342 6.6665L13.3334 9.99984L8.33342 13.3332V6.6665Z"
                          stroke="#344054"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {button.button_text}
                  </a>
                </Link>
              ))}
          </div>
        </div>
        <div className="md:w-1/2 w-full grid flex justify-center items-center">
          {data?.images && (
            <div className="grid grid-cols-4 lg:gap-8 gap-4 pt-4 sm:grid-cols-4 justify-center items-center">
              {data?.images?.data?.map((image) => (
                <div key={image.id}>
                  <ImgLoader
                    src={image.attributes.url}
                    width={96}
                    height={96}
                    alt={image.attributes.alternativeText}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
