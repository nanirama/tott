import ImgLoader from "../Image";

export default function Features6({ data }) {
  return (
    <div className="w-full bg-black lg:pt-20 pt-10 px-4">
      <div className="lg:max-w-3xl mx-auto w-full lg:mb-14 mb-10 text-center">
        <h6 className="text-base text-white font-semibold mb-3">Features</h6>
        {data?.title && (
          <h2 className="lg:text-4xl text-2xl text-white font-semibold tracking-tight mb-4">
            {data?.title}
          </h2>
        )}

        {data?.description && (
          <p className="text-lg text-gray-400 text-normal">
            {data?.description}
          </p>
        )}
      </div>
      <div className="max-w-6xl mx-auto flex flex-col ">
        {data?.image && (
          <div className="flex">
            <ImgLoader
              src={data?.image?.data?.attributes?.url}
              width={1216}
              height={560}
              alt={data?.image?.data?.attributes?.alternativeText}
            />
          </div>
        )}
      </div>
    </div>
  );
}
