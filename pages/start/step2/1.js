import React from "react";
import Link from "next/link";
import ImgLoader from "../../../components/Image";

import Logo from "../../../assets/images/trady-logo.png"
import Bar from "../../../assets/images/bar.png"
import ProfileImage from "../../../assets/images/start-img.jpg"


const Step2 = () => {

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
                        <h4 className="text-xl font-medium mb-5">Is this your Yelp Profile?</h4>
                        <div className="text-center bg-white py-8 px-3"><ImgLoader src={ProfileImage} width={312} height={342} />  </div>
                        <div className="flex gap-3 text-center mt-5">
                            <a href="#" className="w-full text-center inline-block rounded bg-green-400 flex px-6 py-3 gap-3 justify-center items-center text-white text-base">Yes <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.68467 8.31521L12.0416 0.958252L13.161 2.07767L4.68467 10.554L0.166626 6.036L1.28604 4.91659L4.68467 8.31521Z" fill="white" />
                            </svg>
                            </a>
                            <a href="#" className="w-full text-center inline-block bg-white rounded px-6 py-3 border-2 border-gray-400 text-base">No</a>
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
export default Step2