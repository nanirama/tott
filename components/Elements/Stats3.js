export default function Stats3({ stats }) {
  return (
    <div className="w-full mt-5">
      <div className="max-w-7xl mx-auto px-4 flex">
        <div className="w-full md:p-14 p-5 bg-gray-50 rounded-xl flex md:flex-row flex-col gap-8 text-center">
          {stats?.map((stat, index) => (
            <div className="md:w-1/3 sm:w-1/2 w-full" key={index}>
              <h3 className="lg:text-6xl text-3xl font-semibold text-zinc-600 mb-4 mt-3">
                {stat.figures}
              </h3>
              <p className="text-base font-semibold text-zinc-700 mb-2">
                {stat.heading}
              </p>
            </div>
          ))}

          {/* <div className="md:w-1/3 sm:w-1/2 w-full">
            <h3 className="lg:text-6xl text-3xl font-semibold text-zinc-600 mb-4 mt-3">
              10K
            </h3>
            <p className="text-base font-semibold text-zinc-700">
              Global downloads
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
