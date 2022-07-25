import React from "react";
import ImgLoader from "../../../components/Image";
import Logo from "../../../assets/images/trady-logo.png"

const Step6 = () => {

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
                            <h2 className="text-black font-medium text-xl">What is your main business address?</h2>
                            <p className="font-normal text-base text-gray-400 mb-4">This is a hint</p>



                            <fieldset>
                                <div className="relative py-2 border-b mb-4 text-base focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 outline-0 bg-transparent">

                                    <select className="appearance-none w-full py-1 px-2 bg-transparent outline-0" name="whatever" id="frm-whatever">
                                        <option value="">1234 Nortwest 39th Street, Oklahoma...</option>
                                        <option value="1">1234 Nortwest 39th Street, Oklahoma</option>
                                        <option value="2">1234 Nortwest 39th Street, Oklahoma</option>
                                        <option value="3">1234 Nortwest 39th Street, Oklahoma</option>
                                    </select>
                                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </fieldset>











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

export default Step6;