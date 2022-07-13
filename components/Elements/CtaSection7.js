import Link from "next/link";
import ImgLoader from "../Image";

export default function CtaSection7({ data }) {
  const buttonClasses = {
    active:
      "md:w-auto w-full inline-block bg-green-400 md:mr-3 md:mt-0 mt-4 items-center justify-center px-5 py-3 text-white sm:text-base text-sm font-medium border border-green-400 rounded-lg",
    inActive:
      "md:w-auto w-full inline-block bg-white md:mr-3 md:mt-0 mt-4 items-center justify-center px-5 py-3 border border-slate-300 text-gray-700 text-base font-medium rounded-lg",
  };

  return (
    <div className="bg-white md:pt-24 pt-14">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl mb-5">
          {data?.heading}
        </h2>
        <p className="text-xl text-gray-500">{data?.description}</p>
        <div className="mt-8 flex md:flex-row flex-col justify-center md:mb-16 mb-10">
          {data?.action_buttons?.map((button, index) => (
            <div key={index}>
              <Link href={button.button_url}>
                <a
                  className={
                    !button.is_active
                      ? buttonClasses.inActive
                      : buttonClasses.active
                  }
                >
                  {button.button_text}
                </a>
              </Link>
            </div>
          ))}
        </div>
        {data?.image && (
          <ImgLoader
            src={image?.data?.attributes?.url}
            width={image?.data?.attributes?.width}
            height={image?.data?.attributes?.height}
            alt={image?.data?.attributes?.alternativeText}
          />
        )}
      </div>
    </div>
  );
}
