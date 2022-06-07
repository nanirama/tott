export default function Newsletter() {
  return (
    <div className="bg-gray-50 lg:py-24 md:py-16 py-10">
      <div className="max-w-7xl mx-auto px-4 flex lg:flex-row flex-col">
        <div className="lg:w-3/5 w-full">
        <h2 className="md:text-4xl text-2xl font-semibold text-gray-900 md:tracking-tight mb-5">Sign up for our newsletter</h2>
        <p className="md:text-xl text-lg font-normal text-gray-500 lg:mb-0 mb-8">Be the first to know about releases and industry news and insights.</p>
        </div>
        <div className="lg:w-2/5 w-full">
        <div className="flex md:flex-row flex-col">
          <div className="flex flex-col mb-2 w-full">
            <input className="bg-white rounded-lg text-base leading-none text-gray-500 dark:text-white p-4 md:w-11/12 w-full border border-gray-300 focus:outline-none focus:border-gray-500 shadow mr-4 mb-2 h-12" type="email" placeholder="Enter your email" />
            <p className="text-sm text-gray-500 text-left md:mb-0 mb-2">We care about your data in our <a href="#" className="underline">privacy policy</a>.</p>
          </div>
          <button className="md:w-32 w-full hover:bg-zinc-500 bg-zinc-600 rounded-lg text-base font-medium leading-none text-white p-4 shadow h-12">subscribe</button>
        </div>
        </div>
      </div>
    </div>
  )
}
