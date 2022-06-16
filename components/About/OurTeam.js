import Team from "../Elements/Team"
export default function OurTeam() {
  return (
    <div className="border-b border-slate-200 pb-5">
    <div className="max-w-7xl mx-auto px-4 py-10 text-center">
      <div className="lg:max-w-3xl mx-auto w-full flex flex-col align-center mb-12">
        <h2 className="md:text-4xl text-3xl font-bold text-gray-900 text-center">Meet our team</h2>
        <p className="mt-5 text-xl text-gray-500 text-center">
          Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.
        </p>
        <div className="relative sm:self-center items-center mt-6 rounded-lg p-0.5 flex sm:mt-8 sm:flex-row flex-col">
          <a href="#" className="relative w-full bg-white border border-slate-300 sm:mr-4 sm:mb-0 mb-3 rounded-md py-3 px-4 text-base font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
          > Read our principles</a>
          <a href="#" className="relative w-full text-white bg-green-400 rounded-md py-3 px-4 text-base font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
          > We&lsquo;re hiring!</a>
        </div>
      </div>
      <Team />
    </div>
    </div>
  )
}