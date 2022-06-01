export default function Newsletter({data}) {
  const { title, sub_title } = data
  return (
    <div className="bg-gray-50 lg:py-24 py-16">
      <div className="max-w-3xl mx-auto justify-center items-center text-center px-4">
        <h2 className="md:text-4xl text-3xl font-semibold text-gray-900 md:tracking-tight mb-5">{title}</h2>
        <p className="md:text-xl text-lg font-normal text-gray-500 md:mb-10 mb-8">{sub_title}</p>
        <div className="flex md:flex-row flex-col items-stretch max-w-md mx-auto">
          <div className="flex flex-col mb-2 w-full">
            <input className="bg-white rounded-lg text-base leading-none text-gray-500 dark:text-white p-4 md:w-11/12 w-full border border-gray-300 focus:outline-none focus:border-gray-500 shadow mr-4 mb-2 h-12" type="email" placeholder="Enter your email" />
            <p className="text-sm text-gray-500 text-left md:mb-0 mb-2">We care about your data in our <a href="#" className="underline">privacy policy</a>.</p>
          </div>
          <button className="md:w-32 w-full hover:bg-zinc-500 bg-zinc-600 rounded-lg text-base font-medium leading-none text-white p-4 shadow h-12">subscribe</button>
        </div>
      </div>
    </div>
  )
}
