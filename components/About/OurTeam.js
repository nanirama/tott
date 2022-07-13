import Team from "../Elements/Team";

export default function OurTeam({ teamInfo }) {
  return (
    <div className="border-b border-slate-200 pb-5">
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        <div className="lg:max-w-3xl mx-auto w-full flex flex-col align-center mb-12">
          {teamInfo?.heading && (
            <h2 className="md:text-4xl text-3xl font-bold text-gray-900 text-center">
              {teamInfo?.heading}
            </h2>
          )}
          {teamInfo?.short_description && (
            <p className="mt-5 text-xl text-gray-500 text-center">
              {teamInfo?.short_description}
            </p>
          )}
          <div className="relative sm:self-center items-center mt-6 rounded-lg p-0.5 flex sm:mt-8 sm:flex-row flex-col">
            {teamInfo?.buttons?.map((button, index) => (
              <a
                key={index}
                href={button.button_url}
                className={
                  button.is_active
                    ? "relative w-full text-white bg-green-400 rounded-md py-3 px-4 text-base font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
                    : "relative w-full bg-white border border-slate-300 sm:mr-4 sm:mb-0 mb-3 rounded-md py-3 px-4 text-base font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
                }
              >
                {button.button_text}
              </a>
            ))}
            {/* <a
              href="#"
              className="relative w-full text-white bg-green-400 rounded-md py-3 px-4 text-base font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
            >
              {" "}
              We&lsquo;re hiring!
            </a> */}
          </div>
        </div>
        {teamInfo?.profiles?.length > 0 && (
          <Team profiles={teamInfo?.profiles} />
        )}
      </div>
    </div>
  );
}
