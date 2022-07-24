import Link from "next/link";

export default function Features2({ data }) {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col px-4 lg:py-20 py-5">
        <div className="xl:w-3/5 w-full lg:mb-12 mb-8">
          <h6 className="text-base font-semibold mb-3">Features</h6>
          {data?.title && (
            <h2 className="md:text-4xl text-2xl font-semibold tracking-tight mb-4">
              {data?.title}
            </h2>
          )}
          {data?.description && (
            <div className="md:text-xl text-lg text-gray-500 md:leading-8">
              <p>{data?.description}</p>
            </div>
          )}
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-10 gap-5">
          {data?.features &&
            data?.features?.map((feature, index) => (
              <div className="w-full flex flex-col" key={index}>
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
                <h3 className="text-xl font-medium text-gray-900 mt-4">
                  {feature.title}
                </h3>
                <p className="mt-3 mb-5 text-base text-gray-500">
                  {feature.description}
                </p>
                {feature?.action_buttons &&
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
                          ></path>
                        </svg>
                      </a>
                    </Link>
                  ))}
              </div>
            ))}
          {/*          
          <div className="w-full flex flex-col">
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
                d="M24 30C24 30 25.5 32 28 32C30.5 32 32 30 32 30M25 25H25.01M31 25H31.01M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z"
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
            <h3 className="text-xl font-medium text-gray-900 mt-4">
              Our people make the difference
            </h3>
            <p className="mt-3 mb-5 text-base text-gray-500">
              We&lsquo;re an extension of your customer service team, and all of
              our resources are free. Chat to our friendly team 24/7 when you
              need help.
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
