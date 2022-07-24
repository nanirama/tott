import Link from "next/link";
import ImgLoader from "../Image";

export default function Features4({ data }) {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col px-4 py-10">
        <div className="xl:w-3/5 w-full lg:mb-12 mb-8">
          <h6 className="-mt-8 text-base font-semibold mb-3">Features</h6>
          {data?.title && (
            <h2 className="text-4xl font-semibold tracking-tight mb-4">
              {data?.title}
            </h2>
          )}
          {data?.description && (
            <div className="text-xl text-gray-500 leading-8">
              <p>{data?.description}</p>
            </div>
          )}
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 pap-3">
          <div className="lg:mt-5">
            {data?.features &&
              data?.features?.map((feature, index) => (
                <div
                  className="w-full flex md:flex-row flex-col gap-3 mb-8"
                  key={index}
                >
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z"
                      fill="#D9D8D8"
                    />
                    <path
                      d="M38 22C38 20.9 37.1 20 36 20H20C18.9 20 18 20.9 18 22M38 22V34C38 35.1 37.1 36 36 36H20C18.9 36 18 35.1 18 34V22M38 22L28 29L18 22"
                      stroke="#504F4F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z"
                      fill="#F1F0F0"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-medium text-gray-900 mt-3">
                      {feature?.title}
                    </h3>
                    <p className="mt-3 mb-5 text-base text-gray-500">
                      {feature?.description}
                    </p>
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
                </div>
              ))}
            {/* <div className="w-full flex md:flex-row flex-col gap-3 mb-8">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z"
                  fill="#D9D8D8"
                />
                <path
                  d="M29 18L19 30H28L27 38L37 26H28L29 18Z"
                  stroke="#504F4F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z"
                  fill="#F1F0F0"
                />
              </svg>
              <div className="flex flex-col">
                <h3 className="text-xl font-medium text-gray-900 mt-3">
                  Deliver instant answers
                </h3>
                <p className="mt-3 mb-5 text-base text-gray-500">
                  An all-in-one customer service platform that helps you balance
                  everything your customers need to be happy.
                </p>
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
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full flex md:flex-row flex-col gap-3 mb-8">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 28C4 14.7452 14.7452 4 28 4C41.2548 4 52 14.7452 52 28C52 41.2548 41.2548 52 28 52C14.7452 52 4 41.2548 4 28Z"
                  fill="#D9D8D8"
                />
                <path
                  d="M34 36V26M28 36V20M22 36V30"
                  stroke="#504F4F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 48C16.9543 48 8 39.0457 8 28H0C0 43.464 12.536 56 28 56V48ZM48 28C48 39.0457 39.0457 48 28 48V56C43.464 56 56 43.464 56 28H48ZM28 8C39.0457 8 48 16.9543 48 28H56C56 12.536 43.464 0 28 0V8ZM28 0C12.536 0 0 12.536 0 28H8C8 16.9543 16.9543 8 28 8V0Z"
                  fill="#F1F0F0"
                />
              </svg>
              <div className="flex flex-col">
                <h3 className="text-xl font-medium text-gray-900 mt-3">
                  Manage your team with reports
                </h3>
                <p className="mt-3 mb-5 text-base text-gray-500">
                  Measure what matters with Untitled&lsquo;s easy-to-use
                  reports. You can filter, export, and drilldown on the data in
                  a couple clicks.
                </p>
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
                    ></path>
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
          {data?.image && (
            <div className="relative">
              {/* <div className="sm:absolute sm:left-0 sm:top-16 mx-auto md:mt-0 mt-8  flex justify-center">
                <ImgLoader
                  src={image?.data?.attributes?.url}
                  width={314}
                  height={496}
                  alt={image?.data?.attributes?.alternativeText}
                />
              </div> */}
              <div className="flex lg:justify-end justify-center hidden lg:flex">
                <ImgLoader
                  src={data?.image?.data[0]?.attributes?.url}
                  width={405}
                  height={560}
                  alt="feature image"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
