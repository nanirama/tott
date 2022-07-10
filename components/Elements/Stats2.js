import Link from "next/link";
export default function Stats2({ stats }) {
  const { title, sub_title, stats_card } = stats;
  return (
    <div className="lg:py-20 py-10 w-full border-b border-slate-200">
      <div className="max-w-4xl mx-auto flex flex-col px-4 text-center items-center lg:mb-14 mb-5">
        <a
          href="#"
          className="bg-gray-100 rounded-2xl flex gap-1 w-auto text-gray-700 text-xs font-medium py-1 px-2 mb-4"
        >
          Launch faster
        </a>
        <h2 className="md:text-4xl text-3xl font-semibold tracking-tight md:mb-6 mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-500 mb-2">{sub_title}</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 flex">
        <div className="banner-bg w-full">
          <div className="md:p-14 p-5 bg-zinc-600/50 flex items-center md:flex-row flex-col gap-8">
            {stats_card?.map((stat, index) => (
              <div className="md:w-1/3 sm:w-1/2 w-full" key={index}>
                <div className="border py-5 px-5 bg-white/[0.3] text-center">
                  <h3 className="lg:text-6xl text-3xl font-semibold text-white mb-4 mt-3">
                    {stat.figures}
                  </h3>
                  <p className="text-base font-semibold text-white mb-2">
                    {stat.title}
                  </p>
                  <p className="text-sm text-white mb-2">{stat.sub_title}</p>
                </div>
              </div>
            ))}

            {/* <div className="md:w-1/3 sm:w-1/2 w-full">
              <div className="border py-5 px-5 bg-white/[0.3] text-center">
                <h3 className="lg:text-6xl text-3xl font-semibold text-white mb-4 mt-3">
                  10K
                </h3>
                <p className="text-base font-semibold text-white mb-2">
                  Global downloads
                </p>
                <p className="text-sm text-white mb-2">
                  We&lsquo;ve helped build over 400 projects with great
                  companies.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
