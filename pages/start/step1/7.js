import React from "react";
import ImgLoader from "../../../components/Image";
import Logo from "../../../assets/images/trady-logo.png"
import Map from "../../../assets/images/location.png"


const Step7 = () => {

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
                        <div>
                            <h2 className="text-black font-medium text-xl">What is your area of coverage?</h2>
                            <p className="font-normal text-base text-gray-400 mb-4">Enter your city</p>
                            <div className="form">
                                <input
                                    type="text"
                                    name="address"
                                    id="text"
                                    className="py-2 border-b mb-4 text-base focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 outline-0 bg-transparent"
                                    placeholder="San Francisco, CA"
                                />
                                <div className="w-full mb-5">
                                    <ImgLoader src={Map} width={350} height={243} />
                                </div>

                                <div className="w-full flex flex-col mb-5">
                                    <label className="text-base text-black mb-4">Area of coverage</label>
                                    <input
                                        type="range"
                                        className="
      form-range
      appearance-none
      w-full
      h-2
      p-0
      bg-gray-200
      rounded-lg
      focus:outline-none focus:ring-0 focus:shadow-none
    "
                                        id="customRange1"
                                    />
                                </div>


                                <button className="rounded bg-green-400 border text-base text-white px-6 py-2 text-white mb-3">Submit</button>
                            </div>
                        </div>
                        <div className="flex flex-col py-3">
                            <p className="font-normal text-base text-gray-400 -mb-2">50% done</p>
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
            </div>

        </>
    );
};

export default Step7;