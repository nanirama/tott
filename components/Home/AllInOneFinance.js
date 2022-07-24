import Link from "next/link";
import ImgLoader from "../Image";
import AppStore from "../../assets/images/app-store.png";
import GooglePlay from "../../assets/images/google-play.png";

export default function AllInOneFinance({ data }) {
  return (
    <div className="finance_blk">
      <div className="max-w-7xl mx-auto">
        <div className="flex md:flex-row flex-col">
          <div className="w-full md:w-6/12 px-4">
            {data?.title && (
              <h2 className="xl:text-5xl md:text-4xl text-3xl font-semibold text-gray-900 lg:leading-tight lg:tracking-tight mb-6 lg:pt-16 pt-4">
                {data?.title}
              </h2>
            )}
            {data?.description && (
              <p className="md:text-xl text-lg font-normal text-gray-500 lg:mb-12 mb-8">
                {data?.description}
              </p>
            )}
            <div className="flex">
              {data?.action_buttons &&
                data?.action_buttons.map((item, index) => {
                  return (
                    <div className="mr-3" key={index}>
                      {item.button_url && (
                        <Link href={item.button_url} passHref={true}>
                          <a>
                            {item.button_text &&
                              item.button_text === "App Store Url" && (
                                <ImgLoader
                                  src={AppStore}
                                  width={132}
                                  height={44}
                                  alt="App Store Icon"
                                />
                              )}
                            {item.button_text &&
                              item.button_text === "Google Play store Url" && (
                                <ImgLoader
                                  src={GooglePlay}
                                  width={132}
                                  height={44}
                                  alt="Google Play Store Icon"
                                />
                              )}
                          </a>
                        </Link>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
          {data?.image && (
            <div className="w-full md:w-6/12">
              <div className="flex justify-center md:mt-0 mt-16 px-4 bg">
                <ImgLoader
                  src={data?.image?.data?.attributes?.url}
                  width={405}
                  height={496}
                  alt={data?.image?.data?.attributes?.alternativeText}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
