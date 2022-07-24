import Link from "next/link";
import ImgLoader from "../Image";
import Slider from "react-slick";

const buttonClasses = {
  active:
    "w-auto inline-block rounded-lg text-white text-center flex items-center justify-center sm:text-base text-sm font-medium bg-green-400 border border-green-400 py-2 sm-px-1 px-5",
  inActive:
    "inline-block text-center rounded-lg bg-white border border-slate-300 py-3 px-5 text-gray-600 text-base font-medium md:mr-3 md:mb-0 mb-3 md:w-auto w-full",
};

export default function CtaSection3({ data }) {
  const settings = {
    dots: false,
    arrow: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col px-4 lg:py-20 py-10">
        <div className="lg:grid lg:grid-cols-2 grid-cols-1 flex lg:flex-row flex-col-reverse">
          <div className="flex lg:flex-row flex-wrap justify-center gap-5 items-center">
            <div className="w-auto text-center flex items-center">
              <div className="relative">
                {data?.image && (
                  <div className="md:block hidden">
                    <ImgLoader
                      src={data?.image?.data?.attributes?.url}
                      width={720}
                      height={720}
                      alt={data?.image?.data?.attributes?.alternativeText}
                    />
                  </div>
                )}
                {/* <div className="md:hidden block">
                  <ImgLoader
                    src={CtaImgMobile}
                    width={363}
                    height={600}
                    alt="Client1"
                  />
                </div> */}

                <div className="absolute bottom-6 left-5 right-5 border text-left md:py-5 pt-5 pb-12 px-4 bg-white/[0.4]">
                  <Slider {...settings} className="ctasection3 w-full">
                    {data?.testimonials?.map((testimonial, index) => (
                      <div key={index}>
                        <p className="md:text-2xl sm:text-xl text-lg text-white font-semibold md:mb-8 mb-6">
                          “{testimonial.feedback}”
                        </p>
                        <div className="flex justify-between items-center md:mb-4 mb-3">
                          <h3 className="xl:text-4xl text-2xl font-semibold text-white mb-0">
                            {testimonial.client_name}
                          </h3>
                          <a className="flex md:flex hidden" href="#">
                            <svg
                              className="mr-1"
                              width="16"
                              height="16"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646445 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
                                fill="white"
                              />
                            </svg>
                            <svg
                              className="mr-1"
                              width="16"
                              height="16"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646445 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
                                fill="white"
                              />
                            </svg>
                            <svg
                              className="mr-1"
                              width="16"
                              height="16"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646445 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
                                fill="white"
                              />
                            </svg>
                            <svg
                              className="mr-1"
                              width="16"
                              height="16"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646445 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
                                fill="white"
                              />
                            </svg>
                            <svg
                              className="mr-1"
                              width="16"
                              height="16"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646445 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </div>
                        <div className="flex md:flex-row flex-col justify-between md:items-center">
                          <div className="flex flex-col md:mb-0 mb-5">
                            <p className="sm:text-lg text-base font-semibold text-white mb-0">
                              {testimonial.client_company_name}
                            </p>
                            <p className="text-base text-white">UX Agency</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* <div>
                      <p className="md:text-2xl sm:text-xl text-lg text-white font-semibold md:mb-8 mb-6">
                        “Love the simplicity of the service and the prompt
                        customer support. We can’t imagine working without it.”
                      </p>
                      <div className="flex justify-between items-center md:mb-4 mb-3">
                        <h3 className="xl:text-4xl text-2xl font-semibold text-white mb-0">
                          Rich Wilson
                        </h3>
                        <a className="flex md:flex hidden" href="#">
                          <svg
                            className="mr-1"
                            width="16"
                            height="16"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646445 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
                              fill="white"
                            />
                          </svg>
                          <svg
                            className="mr-1"
                            width="16"
                            height="16"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646445 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
                              fill="white"
                            />
                          </svg>
                          <svg
                            className="mr-1"
                            width="16"
                            height="16"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646445 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
                              fill="white"
                            />
                          </svg>
                          <svg
                            className="mr-1"
                            width="16"
                            height="16"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646445 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
                              fill="white"
                            />
                          </svg>
                          <svg
                            className="mr-1"
                            width="16"
                            height="16"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646445 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="flex md:flex-row flex-col justify-between md:items-center">
                        <div className="flex flex-col md:mb-0 mb-5">
                          <p className="sm:text-lg text-base font-semibold text-white mb-0">
                            COO, Command+R
                          </p>
                          <p className="text-base text-white">
                            Web Development Agency
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white sm:p-10 py-10 px-5 flex flex-col justify-center">
            {data?.title && (
              <h2 className="text-gray-900 lg:text-4xl text-3xl font-semibold tracking-tight leading-tight mb-3">
                {data?.title}
              </h2>
            )}
            {data?.key_features && (
              <ul role="list" className="mt-6 mb-10 space-y-4">
                {data?.key_features?.map((feature, index) => (
                  <li
                    className="gap-3 flex text-zinc-500 text-lg mb-5"
                    key={index}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z"
                        fill="#D9D8D8"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.9459 8.62096L11.5926 16.6826L9.37592 14.3143C8.96759 13.9293 8.32592 13.906 7.85925 14.2326C7.40425 14.571 7.27592 15.166 7.55592 15.6443L10.1809 19.9143C10.4376 20.311 10.8809 20.556 11.3826 20.556C11.8609 20.556 12.3159 20.311 12.5726 19.9143C12.9926 19.366 21.0076 9.81096 21.0076 9.81096C22.0576 8.73762 20.7859 7.79262 19.9459 8.60929V8.62096Z"
                        fill="#6A6969"
                      />
                    </svg>
                    {feature.name}
                  </li>
                ))}
              </ul>
            )}
            {data?.action_buttons && (
              <div className="flex md:flex-row flex-col justify-start">
                {data?.action_buttons?.map((button, index) => (
                  <Link href={button.button_url} key={index}>
                    <a
                      className={
                        button.is_active
                          ? buttonClasses.active
                          : buttonClasses.inActive
                      }
                    >
                      {button.button_text}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
