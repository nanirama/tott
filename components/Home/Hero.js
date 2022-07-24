import { useState } from "react";
import ReactMarkdown from "react-markdown";

import ImgLoader from "../Image";
import Button from "../../components/Button/index";

export default function Hero({ data }) {
  const [emailValue, setEmailValue] = useState("");

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  return (
    <div className="lg:pt-20 pt-14 relative lg:mt-20 mt-16">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full px-4 xl:mr-20">
          {data?.title && (
            <h1 className="lg:text-4xl text-3xl font-semibold mb-10">
              {data?.title}
            </h1>
          )}
          {/* <h2 className="text-4xl font-semibold mb-5">{sub_title}</h2> */}
          {data?.description && (
            <ReactMarkdown
              escapeHtml={false}
              className="text-xl text-gray-400 leading-8 mb-8 xl:pr-28"
            >
              {data?.description}
            </ReactMarkdown>
          )}
          <div>
            <div className="flex lg:flex-row flex-col xl:pr-28">
              <div className="flex flex-col mb-2 w-full mr-3">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  onChange={(e) => handleEmailChange(e)}
                  className="w-full rounded-lg text-base leading-none text-gray-500 dark:text-white p-3 w-full border border-gray-300 focus:outline-none focus:border-gray-500 mb-2"
                  placeholder="Enter your email"
                />
                <p className="text-sm text-gray-500 text-left md:mb-0 mb-2">
                  Free to try for 14 days, no credit card needed.
                </p>
              </div>
              <div className="mt-3 rounded-lg md:mt-0 sm:flex-shrink-0">
                <Button email={emailValue} />
              </div>
            </div>
          </div>
        </div>
        {data?.image && data?.image?.data?.length > 0 && (
          <>
            <div className="absolute right-0 top-10 hidden xl:flex z-0 ">
              <div className="z-0">
                <ImgLoader
                  className="z-0"
                  src={data?.image?.data[1]?.attributes?.url}
                  width={680}
                  height={632}
                  alt={data?.image?.data[1]?.attributes?.alternativeText}
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full px-4 xl:block hidden border">
              <div className="xl:-ml-20 xl:mt-12 flex  xl:justify-start justify-center md:mt-0 mt-8 z-10">
                <ImgLoader
                  src={data?.image?.data[0]?.attributes?.url}
                  width={data?.image?.data[0]?.attributes?.width}
                  height={data?.image?.data[0]?.attributes?.height}
                  alt={data?.image?.data[0]?.attributes?.alternativeText}
                />
              </div>
            </div>
          </>
        )}

        {data?.image && (
          <div className="flex xl:hidden lg:mt-0 mt-10 -mb-1.5 justify-end relative">
            <div className="w-2/5 z-10 mt-8 absolute left-4 bottom-0">
              <ImgLoader
                src={data?.image?.data[0]?.attributes?.url}
                alt={data?.image?.data[0]?.attributes?.alternativeText}
                width={315}
                height={544}
              />
            </div>
            <div className="w-4/5">
              <ImgLoader
                className="z-0"
                src={data?.image?.data[1]?.attributes?.url}
                alt={data?.image?.data[1]?.attributes?.alternativeText}
                width={680}
                height={632}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
