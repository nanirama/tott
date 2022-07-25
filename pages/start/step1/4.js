import React from "react";
import ImgLoader from "../../../components/Image";
import Logo from "../../../assets/images/trady-logo.png"


const Step4 = () => {

    return (
        <>


            <div className="w-full h-screen flex flex-col justify-between bg-gray-50">

                <div className="flex justify-center py-6 bg-white border-b border-solid border-gray-200 ">
                    <ImgLoader src={Logo} width={97} height={32} />
                </div>
                <div className="md:max-w-screen-sm w-full mx-auto bg-gray-50  h-screen flex flex-col justify-between">

                    <div className="px-5 h-full py-6 flex flex-col justify-between">

                        <a href="#"> <p className="flex gap-3 items-center"><svg width="23" height="8" viewBox="0 0 23 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM23 3.5H1V4.5H23V3.5Z" fill="#555555" />
                        </svg> Back</p></a>
                        <div className="form">

                            <div className="flex flex-col w-full mb-6">
                                <label className="block text-base font-medium text-black">
                                    Your Business Name
                                </label>
                                <div className="">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        placeholder="ACME Lawn Mowing"
                                        className="w-full focus:ring-indigo-500 focus:border-indigo-500 bg-transparent outline-0 text-base border-b border-solid  border-gray-300 py-2"
                                    />
                                </div>
                            </div>


                            <div className="flex flex-col w-full mb-6">
                                <label className="block text-base font-medium text-black">
                                    Your main business number?
                                </label>
                                <div className="mt-1 relative rounded-md">
                                    <div className="absolute inset-y-0 left-0 flex items-center">

                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            className="focus:ring-indigo-500 focus:border-indigo-500 outline-0 h-full py-0 pr-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                                        >
                                            <option>US</option>
                                            <option>CA</option>
                                            <option>EU</option>
                                        </select>
                                    </div>
                                    <input
                                        type="text"
                                        name="phone-number"
                                        id="phone-number"
                                        className="pl-16 w-full focus:ring-indigo-500 focus:border-indigo-500 bg-transparent outline-0 text-base border-b border-solid  border-gray-300 py-2"
                                        placeholder="+1 (555) 987-6543"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-full mb-6">
                                <label className="block text-base font-medium text-black">
                                    Your main business email
                                </label>
                                <div className="">
                                    <input
                                        type="email"
                                        name="email"

                                        placeholder="email@yahoo.com"
                                        className="w-full focus:ring-indigo-500 focus:border-indigo-500 bg-transparent outline-0 text-base border-b border-solid  border-gray-300 py-2"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full mb-2">
                                <label className="block text-base font-medium text-black">
                                    Do you have an existing website?
                                </label>
                                <div className="">
                                    <input
                                        type="text"
                                        name=""
                                        placeholder="example.com"
                                        className="w-full focus:ring-indigo-500 focus:border-indigo-500 bg-transparent outline-0 text-base border-b border-solid  border-gray-300 py-2"
                                    />
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mb-6">If don&lsquo;t have a website leave this blank</p>
                            <button className="rounded bg-gray-100 hover:bg-green-400 hover:text-white border text-base border-solid border-gray-200  text-gray-300 px-6 py-2 text-white mb-3">Submit</button>
                        </div>
                        <div className="flex flex-col py-3">
                            <p className="font-normal text-base text-gray-400 mb-2">50% done</p>
                            <div className='w-full'>
                                <div className="w-1/2 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                    <div className="bg-green-500 h-1.5 rounded-full" style={{ 'width': '50%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Step4;