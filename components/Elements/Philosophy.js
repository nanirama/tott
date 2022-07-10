import Link from "next/link";
import ImgLoader from "../Image";
import Button from "../../components/Button/index";

export default function Philosophy({ ourMission }) {
  const {
    heading,
    description,
    // action_buttons,
    image: {
      data: { attributes },
    },
  } = ourMission;
  return (
    <div className="lg:py-14 py-10 ">
      <div className="max-w-7xl mx-auto flex flex-col px-4">
        <div className="md:w-3/5 w-full mb-10"></div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-5">
          <div className="justify-center flex flex-col">
            <h6 className="text-base font-semibold mb-2">
              We&lsquo;re on a mission
            </h6>
            <h2 className="md:text-4xl text-3xl text-gray-900 font-semibold tracking-tight md:mb-6 mb-4">
              {heading}
            </h2>
            <p className="text-gray-500 text-lg mb-4">{description}</p>
            {/* <p className="text-gray-500 text-lg mb-4">
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean.
            </p> */}
            <div className=" flex md:flex-row flex-col md:justify-start justify-start text-center mt-5">
              <a
                href="#"
                target="_blank"
                className="inline-block rounded-lg bg-white border border-slate-300 py-3 px-5 text-gray-600 text-base font-medium md:mr-3 md:mb-0 mb-3 md:w-auto w-full"
              >
                Learn More
              </a>
              <Button />
            </div>
          </div>

          <div>
            {attributes && (
              <ImgLoader
                src={attributes?.url}
                width={attributes?.width}
                height={attributes?.height}
                alt={attributes?.alternativeText}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
