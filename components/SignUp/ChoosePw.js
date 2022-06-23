import ImgLoader from '../Image';

import Favicon from "../../assets/images/favicon.png"
import PaginationBar from "../../assets/images/Pagination2.png"

export default function ChoosePassword() {
    return (
        <div className='flex justify-between flex-col h-full'>
            <div className='lg:w-96 w-full mx-auto h-full justify-center flex flex-col mb-10'>
                <div className='w-full flex items-center justify-center mb-5'>

                    <ImgLoader src={Favicon} width={48} height={48} alt="" />
                </div>
                <h2 className='text-gray-900 font-semibold md:text-3xl text-xl mb-2 text-center'>Choose a password</h2>
                <p className='text-gray-500 font-normal text-base mb-5 text-center'>Must be at least 8 characters.</p>


               <div className="space-y-6" action="#" method="POST">
                    <div>

                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Create a password"
                                minlength="8"
                                required
                                className="appearance-none block text-sm mb-4 shadow w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:bg-white"
                            />
                        </div>
                    </div>
                    <div>

                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Confirm a password"
                                required
                                className="appearance-none block text-sm mb-4 shadow w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:bg-white"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full mb-4 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
            <div className="">
            <ImgLoader src={PaginationBar} width={360} height={8} alt="" />
            </div>
        </div>
    )
}