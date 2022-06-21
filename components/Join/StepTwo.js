import React, { useState } from 'react';
import Select from 'react-select';
import ImgLoader from '../Image';
import Image1 from "../../assets/images/image-1.png"
import Image2 from "../../assets/images/image-2.png"
import Image3 from "../../assets/images/image-3.png"
import Image4 from "../../assets/images/image-4.png"
import Image5 from "../../assets/images/image-5.png"
import Image6 from "../../assets/images/image-6.png"

const options = [
    { value: 'cleaning', label: 'Cleaning' },
    { value: 'lawnmowing', label: 'Lawn Mowing' },
    { value: 'painting', label: 'Painting' },
    { value: 'plumbing', label: 'Plumbing' },
    { value: 'electrician', label: 'Electrician' },
    { value: 'poolcleaning', label: 'Pool Cleaning' },

];

export const StepTwo = ({ query }) => {
    const [selectedOption, setSelectedOption] = useState(null)
    return (
        <div className="mx-auto max-w-3xl">
            <div className="relative flex flex-col w-full bg-black md:px-10 px-5 outline-none focus:outline-none">
                <div className="flex flex-col items-start justify-between">
                    <h3 className="md:text-4xl text-3xl font-semibold text-white md:mb-8 mb-5 tracking-tight">
                        Start your 14 day free trial of Trady
                    </h3>
                    <p className="text-sm font-medium text-white md:mb-8 mb-5">What is the primary service you offer?</p>
                </div>
                <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                    <div className="border-4 border-violet-100 rounded-lg bg-violet-100">
                        <div className="relative flex justify-between items-center bg-white p-4 border border-zinc-400 rounded-lg">
                            <div className="mr-3 flex">
                                <ImgLoader src={Image1} width={29} height={29} alt="" />
                                <label htmlFor="comments" className="ml-3 font-medium text-base text-gray-700">
                                    Cleaning
                                </label>
                            </div>
                            <div className="flex items-center h-6 w-6 border-4 border-violet-100 rounded-full">
                                <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    className="checkbox-round focus:ring-indigo-500 h-4 w-4 text-indigo-600"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border-4 border-violet-100 rounded-lg bg-violet-100">
                        <div className="relative flex justify-between items-center bg-white p-4 border border-zinc-400 rounded-lg">
                            <div className="mr-3 flex">
                                <ImgLoader src={Image2} width={29} height={29} alt="" />
                                <label htmlFor="comments" className="ml-3 font-medium text-base text-gray-700">
                                    Lawn Mowing
                                </label>
                            </div>
                            <div className="flex items-center h-6 w-6 border-4 border-violet-100 rounded-full">
                                <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    className="checkbox-round focus:ring-indigo-500 h-4 w-4 text-indigo-600"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border-4 border-violet-100 rounded-lg bg-violet-100">
                        <div className="relative flex justify-between items-center bg-white p-4 border border-zinc-400 rounded-lg">
                            <div className="mr-3 flex">
                                <ImgLoader src={Image3} width={29} height={29} alt="" />
                                <label htmlFor="comments" className="ml-3 font-medium text-base text-gray-700">
                                    Painting
                                </label>
                            </div>
                            <div className="flex items-center h-6 w-6 border-4 border-violet-100 rounded-full">
                                <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    className="checkbox-round focus:ring-indigo-500 h-4 w-4 text-indigo-600"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border-4 border-violet-100 rounded-lg bg-violet-100">
                        <div className="relative flex justify-between items-center bg-white p-4 border border-zinc-400 rounded-lg">
                            <div className="mr-3 flex">
                                <ImgLoader src={Image4} width={29} height={29} alt="" />
                                <label htmlFor="comments" className="ml-3 font-medium text-base text-gray-700">
                                    Plumbing
                                </label>
                            </div>
                            <div className="flex items-center h-6 w-6 border-4 border-violet-100 rounded-full">
                                <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    className="checkbox-round focus:ring-indigo-500 h-4 w-4 text-indigo-600"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border-4 border-violet-100 rounded-lg bg-violet-100">
                        <div className="relative flex justify-between items-center bg-white p-4 border border-zinc-400 rounded-lg">
                            <div className="mr-3 flex">
                                <ImgLoader src={Image5} width={29} height={29} alt="" />
                                <label htmlFor="comments" className="ml-3 font-medium text-base text-gray-700">
                                    Electrician
                                </label>
                            </div>
                            <div className="flex items-center h-6 w-6 border-4 border-violet-100 rounded-full">
                                <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    className="checkbox-round focus:ring-indigo-500 h-4 w-4 text-indigo-600"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border-4 border-violet-100 rounded-lg bg-violet-100">
                        <div className="relative flex justify-between items-center bg-white p-4 border border-zinc-400 rounded-lg">
                            <div className="mr-3 flex">
                                <ImgLoader src={Image6} width={29} height={29} alt="" />
                                <label htmlFor="comments" className="ml-3 font-medium text-base text-gray-700">
                                    Pool Cleaning
                                </label>
                            </div>
                            <div className="flex items-center h-6 w-6 border-4 border-violet-100 rounded-full">
                                <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    className="checkbox-round focus:ring-indigo-500 h-4 w-4 text-indigo-600"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-4 border-violet-200 rounded-lg mt-8 bg-violet-100">
                    <div className="relative flex flex-col bg-white p-4 border border-zinc-400 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div className="mr-3 flex">
                                <label htmlFor="comments" className="ml-3 font-medium text-base text-gray-700">
                                    Other
                                </label>
                            </div>
                            <div className="flex items-center h-6 w-6 border-4 border-violet-100 rounded-full">
                                <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    className="checkbox-round focus:ring-indigo-500 h-4 w-4 text-indigo-600"
                                />
                            </div>
                        </div>
                        <div className="mt-3 select lg:pr-10">
                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                            />
                        </div>
                    </div>

                </div>
                <div className="w-auto">
                <button
                    type="submit"
                    className="inline-flex w-auto mt-8 justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Next
                </button>
                </div>               
            </div>
        </div>
    )
}