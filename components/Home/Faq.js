import React from "react";
import ImgLoader from "../Image";
import Link from "next/link";

export default function Faq({ data }) {
  const { title, description, questions, confusion_banner } = data;
  return (
    <div className="faq_blk lg:mb-24 mb-14">
      <div className="max-w-3xl mx-auto px-4">
        {title && (
          <h2 className="md:text-4xl text-3xl font-semibold text-gray-900 md:tracking-tight mb-5 text-center">
            {title}
          </h2>
        )}
        {description && (
          <p className="md:text-xl text-lg font-normal text-gray-500 md:mb-16 mb-8 text-center">
            {description}
          </p>
        )}
        {questions &&
          questions.map((q, index) => {
            return (
              <details className="border-b-2 py-4 mb-3" key={index}>
                <summary className="text-gray-900 font-medium cursor-pointer mb-3 text-lg leading-5 pr-8">
                  {q.heading}
                </summary>
                <p className="text-gray-500 text-base font-normal mb-3 pr-8">
                  {q.description}
                </p>
              </details>
            );
          })}
      </div>
      {confusion_banner && (
        <div className="max-w-7xl mx-auto md:mt-10 mt-8 px-4">
          <div className="bg-gray-50 py-8 md:px-8 px-5 rounded-2xl">
            <div className="max-w-3xl mx-auto justify-center items-center text-center">
              <ImgLoader
                src={confusion_banner?.image?.data?.attributes?.url}
                width={60}
                height={60}
                alt={confusion_banner?.image?.data?.attributes?.alternativeText}
              />
              <h4 className="text-xl text-gray-900 font-medium md:mt-8 mt-5 mb-3">
                {confusion_banner?.title}
              </h4>
              <p className="md:text-lg text-base text-gray-500 md:mb-10 mb-5">
                {confusion_banner?.description}
              </p>
              <div className="md:w-auto w-full inline-block">
                <Link href={confusion_banner?.button?.button_url}>
                  <a className="md:w-auto w-full inline-block bg-green-400 md:mr-3 md:mt-0 mt-4 items-center justify-center px-5 py-3 text-white sm:text-base text-sm font-medium border border-green-400 rounded-lg">
                    {confusion_banner?.button?.button_text}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
