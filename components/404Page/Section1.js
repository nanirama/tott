import ImgLoader from '../Image';
import Illustration from "../../assets/images/Illustration.png"

export default function Section1() {
    return (
        <div className="mt-16 mb-10 bg-gray-50 md:py-20 py-10">
            <div className="max-w-7xl mx-auto px-4 flex md:flex-row flex-col-reverse">
                    <div className="md:w-1/2 w-full">
                        <h6 className="text-base text-gray-700 mb-3 font-semibold">404 error</h6>
                        <h2 className="md:text-5xl text-3xl font-semibold tracking-tight md:mb-6 mb-3 text-gray-900">Page not found...</h2>
                        <p className="md:text-xl text-base text-gray-500 mb-10">Sorry, the page you are looking for doesn't exist or has been moved. Try searching our site:</p>
                        <div className="w-full flex lg:flex-row flex-col items-stretch xl:pr-28 gap-3">
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-3 focus:outline-none focus:border " type="text" aria-label="Search" placeholder="Search..." />
                           </div>
                            <button className="w-auto bg-green-400 rounded-lg text-base font-medium leading-none text-white py-3 px-5 shadow h-12">Search</button>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full md:mb-0 mb-6">
                        <ImgLoader src={Illustration} width={480} height={360} alt="" />
                    </div>
                </div>
            </div>
    )
}
