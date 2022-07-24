import React from "react";
import Link from "next/link";
import ImgLoader from "../../../components/Image";

import Logo from "../../../assets/images/trady-logo.png"
import Bar from "../../../assets/images/bar.png"


const Step3 = () => {

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
                            <h2 className="text-black font-medium text-xl">How do you bill for most jobs?</h2>
                            <p className="font-normal text-base text-gray-400 mb-4">This is a hint</p>
                            <div className="form">
                                <div className="flex mb-3">
                                    <div className="w-full pl-2 py-3 pr-6  border border-solid border-gray-500 rounded bg-gray-200">
                                        <div className="form-check flex">
                                            <label className="flex w-full form-check-label text-base inline-block text-gray-800" htmlFor="flexCheckDefault">
                                                <span className="flex justify-center items-center mr-2 p-1 bg-white rounded border border-solid border-gray-500 w-6 h-6 text-center font-medium font-sm">A</span> Every job is a different amount
                                            </label>
                                            <input className="form-check-input h-4 w-4 border-0 border-gray-300 rounded-sm bg-black  checked:bg-transparent checked:border-blue-600 focus:outline-none mt-1 transition duration-200 align-top bg-no-repeat bg-center bg-contain float-right cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mb-3">
                                    <div className="w-full pl-2 py-3 pr-6  border border-solid border-gray-500 rounded bg-gray-200">
                                        <div className="form-check flex">
                                            <label className="flex w-full form-check-label text-base inline-block text-gray-800" htmlFor="CheckeBox-2">
                                                <span className="flex justify-center items-center mr-2 p-1 bg-white rounded border border-solid border-gray-500 w-6 h-6 text-center font-medium font-sm">B</span> Most jobs are the same amount
                                            </label>
                                            <input className="form-check-input h-4 w-4 border-0 border-gray-300 rounded-sm bg-black  checked:bg-transparent checked:border-blue-600 focus:outline-none mt-1 transition duration-200 align-top bg-no-repeat bg-center bg-contain float-right cursor-pointer" type="checkbox" value="" id="CheckeBox-2" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mb-3">
                                    <div className="w-full pl-2 py-3 pr-6  border border-solid border-gray-500 rounded bg-gray-200">
                                        <div className="form-check flex">
                                            <label className="flex w-full form-check-label text-base inline-block text-gray-800" htmlFor="CheckeBox-3">
                                                <span className="flex justify-center items-center mr-2 p-1 bg-white rounded border border-solid border-gray-500 w-6 h-6 text-center font-medium font-sm">C</span> I have a few different packages
                                            </label>
                                            <input className="form-check-input h-4 w-4 border-0 border-gray-300 rounded-sm bg-black  checked:bg-transparent checked:border-blue-600 focus:outline-none mt-1 transition duration-200 align-top bg-no-repeat bg-center bg-contain float-right cursor-pointer" type="checkbox" value="" id="CheckeBox-3" />
                                        </div>
                                    </div>
                                </div>
                                <button className="rounded bg-gray-50 px-6 py-2 text-gray-300 mb-3 hover:bg-green-400 hover:text-white  border-gray-300 border">Submit</button>
                            </div>
                        </div>
                        <div className="flex flex-col py-3">
                            <p className="font-normal text-base text-gray-400 -mb-2">50% done</p>
                            <div><ImgLoader src={Bar} width={164} height={4} />  </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step3