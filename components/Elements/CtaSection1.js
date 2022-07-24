import Link from "next/link";
import ImgLoader from "../Image";

const buttonClasses = {
  active:
    "w-auto inline-block rounded-lg text-white text-center flex items-center justify-center sm:text-base text-sm font-medium bg-green-400 border border-green-400 py-2 sm-px-1 px-5",
  inActive:
    "inline-block text-center rounded-lg bg-white border border-slate-300 py-3 px-5 text-gray-600 text-base font-medium md:mr-3 md:mb-0 mb-3 md:w-auto w-full",
};

export default function CtaSection1({ data }) {
  return (
    <div className="w-full bg-black">
      <div className="max-w-7xl mx-auto flex flex-col px-4 lg:py-20 py-10">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div>
            {data?.title && (
              <h2 className="text-white lg:text-4xl text-2xl font-semibold tracking-tight leading-tight mb-3">
                {data?.title}
              </h2>
            )}
            {data?.description && (
              <p className="text-zinc-500 text-xl mb-8">{data?.description}</p>
            )}
            {data?.action_buttons && (
              <div className=" flex md:flex-row flex-col justify-start">
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
          {data?.mages && (
            <div className="flex lg:flex-row flex-wrap  justify-center gap-5 items-center">
              {data?.images &&
                data?.images?.data?.map((image) => (
                  <div
                    className=" w-auto text-center flex items-center"
                    key={image.id}
                  >
                    <ImgLoader
                      src={image.attributes.url}
                      width={135}
                      height={48}
                      alt={image.attributes.alternativeText}
                    />
                  </div>
                ))}
              {/* <div className="w-auto text-center flex items-center">
                <ImgLoader
                  src={Client1}
                  width={140}
                  height={48}
                  alt="Client2"
                />
              </div>
              <div className="w-auto text-center flex items-center">
                <ImgLoader
                  src={Client3}
                  width={121}
                  height={48}
                  alt="Client3"
                />
              </div>
              <div className="w-auto text-center flex items-center">
                <ImgLoader
                  src={Client4}
                  width={163}
                  height={48}
                  alt="Client4"
                />
              </div>
              <div className="w-auto text-center flex items-center">
                <ImgLoader
                  src={Client5}
                  width={120}
                  height={48}
                  alt="Client5"
                />
              </div>
              <div className="w-auto text-center flex items-center">
                <ImgLoader src={Client6} width={94} height={48} alt="Client5" />
              </div>
              <div className="w-auto text-center flex items-center">
                <ImgLoader src={Client7} width={80} height={33} alt="Client4" />
              </div>
              <div className="w-auto text-center flex items-center">
                <ImgLoader
                  src={Client8}
                  width={163}
                  height={48}
                  alt="Client5"
                />
              </div>
              <div className="w-auto text-center flex items-center">
                <ImgLoader src={Client9} width={96} height={48} alt="Client5" />
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
