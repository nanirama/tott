import Link from "next/link";
import ImgLoader from "../Image";

export default function Features({ data }) {
  return (
    <div className="lg:py-20 py-10 relative">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col">
        <div className="w-full flex flex-col">
          <div className="xl:w-3/5 px-4 w-full lg:mb-12 mb-8">
            <h6 className="text-base font-semibold mb-3">Features</h6>
            {data?.title && (
              <h2 className="text-4xl font-semibold tracking-tight mb-4">
                {data?.title}
              </h2>
            )}
            {data?.description && (
              <div className="text-xl text-gray-500 leading-8">
                {data?.description}
              </div>
            )}
          </div>
          <div className="w-full flex lg:flex-row flex-col ">
            <div className="lg:w-1/2 w-full px-4 lg:pr-14 lg:mt-10 mb-3">
              {data?.features &&
                data?.features?.map((feature, index) => (
                  <div
                    className="py-4 px-5 border-l-4 border-slate-100 hover:border-slate-500"
                    key={index}
                  >
                    <h3 className="text-xl font-medium mb-2">
                      {feature?.title}
                    </h3>
                    <div className="text-gray-500 text-base mb-3">
                      {feature?.description}
                    </div>
                    {feature?.action_buttons?.length > 0 &&
                      feature?.action_buttons?.map((button, index) => (
                        <Link href={button.button_url} key={index}>
                          <a className="flex items-center text-gray-600 visited:text-gray-600 font-medium">
                            {button.button_text}
                            <svg
                              width="28"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337"
                                stroke="#323232"
                                strokeWidth="1.67"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </Link>
                      ))}
                  </div>
                ))}

              {/* <div className="py-4 px-5 border-l-4 border-slate-100 hover:border-slate-500">
                <h3 className="text-xl font-medium mb-2">
                  Manage your team with reports
                </h3>
                <div className="text-gray-500 text-base mb-3">
                  Measure what matters with Untitled&lsquo;s easy-to-use
                  reports. You can filter, export, and drilldown on the data in
                  a couple clicks.
                </div>
                <Link href="/">
                  <a className="flex items-center text-gray-600 visited:text-gray-600 font-medium">
                    Learn More{" "}
                    <svg
                      width="28"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337"
                        stroke="#323232"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </Link>
              </div> */}
            </div>
            <div className="lg:w-1/2 w-full px-4 relative flex">
              {data?.image && (
                <div className="-mr-16 sm:mt-14 mt-8">
                  <ImgLoader
                    src={data?.image?.data[0]?.attributes?.url}
                    alt={data?.image?.data[0]?.attributes?.alternativeText}
                    width={314}
                    height={496}
                  />
                </div>
              )}
              {/* <div className="">
                <ImgLoader src={IphonePro} width={406} height={560} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
