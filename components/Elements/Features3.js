import ImgLoader from "../Image";

export default function Features3({ data }) {
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
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
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
                </div>
              ))}
            {/* <div className="w-full flex flex-col">
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
                <h3 className="text-xl font-medium text-gray-900 mt-4">
                  Deliver instant answers
                </h3>
                <p className="mt-3 mb-5 text-base text-gray-500">
                  An all-in-one customer service platform that helps you balance
                  everything your customers need to be happy.
                </p>
              </div> */}
            {/* <div className="w-full flex flex-col">
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
                <h3 className="text-xl font-medium text-gray-900 mt-4">
                  Manage your team with reports
                </h3>
                <p className="mt-3 mb-5 text-base text-gray-500">
                  Measure what matters with Untitled’s easy-to-use reports. You
                  can filter, export, and drilldown on the data in a couple
                  clicks.
                </p>
              </div> */}
            {/* <div className="w-full flex flex-col">
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
                  Connect with customers
                </h3>
                <p className="mt-3 mb-5 text-base text-gray-500">
                  Solve a problem or close a sale in real-time with chat. If no
                  one is available, customers are seamlessly routed to email
                  without confusion.
                </p>
              </div> */}
          </div>

          {/* <div className='xl:-mr-12 xl:-mt-32'>                        
                        <ImgLoader src={FeatureImg2} width={688} height={701} alt="feature image" />
                    </div> */}
          {data?.image && (
            <div className="relative">
              <svg
                className="hidden xl:flex absolute -top-28 left-28 z-50"
                width="183"
                height="215"
                viewBox="0 0 183 215"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M158.457 208.722C157.789 210.238 158.477 212.009 159.993 212.677C161.509 213.345 163.28 212.657 163.948 211.141L158.457 208.722ZM70.2162 91.4451L67.6793 93.0463L67.6797 93.047L70.2162 91.4451ZM154.838 70.3764L151.875 69.9101L151.875 69.9105L154.838 70.3764ZM1.78838 14.7411C0.358633 15.5784 -0.121671 17.4161 0.715591 18.8459C1.55285 20.2756 3.39061 20.7559 4.82035 19.9187L1.78838 14.7411ZM180.343 205.831C181.845 205.13 182.494 203.345 181.793 201.844C181.092 200.342 179.307 199.693 177.805 200.394L180.343 205.831ZM160.547 211.761L158.013 213.366C158.82 214.641 160.449 215.118 161.816 214.48L160.547 211.761ZM151.557 192.766C150.53 191.466 148.644 191.244 147.343 192.271C146.043 193.298 145.821 195.184 146.848 196.485L151.557 192.766ZM161.202 209.931C163.948 211.141 163.948 211.14 163.949 211.138C163.949 211.137 163.95 211.135 163.951 211.133C163.953 211.13 163.955 211.124 163.958 211.118C163.963 211.105 163.971 211.087 163.982 211.063C164.002 211.016 164.032 210.948 164.07 210.859C164.146 210.682 164.256 210.422 164.397 210.083C164.678 209.407 165.082 208.418 165.576 207.147C166.565 204.607 167.921 200.941 169.399 196.409C172.353 187.356 175.811 174.804 177.804 160.851C181.765 133.126 180.063 98.9186 155.816 76.158L151.709 80.5326C173.734 101.207 175.752 132.792 171.864 160.002C169.934 173.516 166.576 185.717 163.695 194.549C162.256 198.96 160.939 202.52 159.985 204.97C159.508 206.195 159.122 207.142 158.857 207.778C158.725 208.096 158.623 208.337 158.555 208.495C158.521 208.575 158.496 208.633 158.479 208.671C158.471 208.69 158.465 208.704 158.461 208.713C158.459 208.717 158.458 208.72 158.457 208.721C158.457 208.722 158.457 208.722 158.457 208.723C158.457 208.722 158.457 208.722 161.202 209.931ZM155.816 76.158C131.931 53.7374 106.296 50.9786 88.262 57.2273C79.3129 60.3281 72.1317 65.6964 68.1492 72.091C64.1138 78.5708 63.3607 86.2042 67.6793 93.0463L72.7531 89.8438C69.8804 85.2925 70.1911 80.1623 73.2423 75.2629C76.3465 70.2783 82.2749 65.6518 90.2264 62.8967C105.993 57.4336 129.323 59.5183 151.709 80.5326L155.816 76.158ZM67.6797 93.047C71.769 99.5219 79.0957 104.278 87.5238 107.122C95.9999 109.983 105.902 111.024 115.565 109.808C134.931 107.37 153.894 95.6984 157.802 70.8423L151.875 69.9105C148.497 91.3964 132.343 101.648 114.816 103.855C106.032 104.96 97.0435 104.003 89.4425 101.437C81.7936 98.8557 75.8565 94.7577 72.7527 89.8431L67.6797 93.047ZM157.802 70.8427C159.804 58.1198 154.77 45.7939 145.552 35.262C136.337 24.7328 122.772 15.7703 107.066 9.54497C75.6955 -2.88922 34.9842 -4.69834 1.78838 14.7411L4.82035 19.9187C36.0391 1.63698 74.7395 3.186 104.855 15.1228C119.892 21.0829 132.588 29.5591 141.037 39.2135C149.484 48.8652 153.518 59.4678 151.875 69.9101L157.802 70.8427ZM177.805 200.394L159.278 209.043L161.816 214.48L180.343 205.831L177.805 200.394ZM160.547 211.761C163.082 210.156 163.082 210.156 163.082 210.156C163.081 210.156 163.081 210.156 163.081 210.155C163.081 210.155 163.08 210.154 163.08 210.153C163.079 210.151 163.077 210.149 163.075 210.145C163.071 210.139 163.064 210.128 163.056 210.115C163.039 210.088 163.013 210.048 162.98 209.996C162.914 209.892 162.818 209.74 162.694 209.545C162.446 209.155 162.089 208.594 161.653 207.912C160.782 206.548 159.593 204.696 158.326 202.743C155.836 198.909 152.91 194.481 151.557 192.766L146.848 196.485C147.986 197.926 150.733 202.066 153.293 206.01C154.55 207.947 155.731 209.787 156.597 211.143C157.03 211.821 157.384 212.377 157.63 212.764C157.753 212.957 157.849 213.108 157.914 213.211C157.946 213.262 157.971 213.301 157.988 213.327C157.996 213.34 158.002 213.35 158.007 213.357C158.009 213.36 158.01 213.362 158.011 213.364C158.012 213.365 158.012 213.365 158.012 213.366C158.012 213.366 158.013 213.366 158.013 213.366C158.013 213.366 158.013 213.366 160.547 211.761Z"
                  fill="#6A6969"
                />
              </svg>
              <div className="lg:absolute lg:-right-0.5 xl:-mr-12 flex justify-center lg:mb-0 mb-8">
                <div className="bg-gray-100 2xl:rounded-2xl rounded-2xl xl:rounded-tl-2xl xl:rounded-bl-2xl xl:rounded-none sm:py-14 sm:px-8 p-6">
                  <ImgLoader
                    src={data?.image?.data?.attributes?.url}
                    width={720}
                    height={447}
                    alt={data?.image?.data?.attributes?.alternativeText}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
