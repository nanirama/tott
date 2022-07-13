import React, { useState } from "react";
import ImgLoader from '../Image';
import Contactimg2 from "../../assets/images/contact-img2.png";
import { useForm } from 'react-hook-form';

export default function LetsLevelUpsection() {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
        agree: false,
    });

    const handleChange = (key, value) => {
        const item = { ...data };
        item[key] = value;
        setData(item);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 flex md:flex-row flex-col justify-between items-center lg:mt-20 mt-16 xl:gap-24 gap-5">
            <div className="md:w-1/2 w-full">
                <div className='w-100 text-gray-900 text-4xl font-semibold'>Let’s level up your brand, together</div>
                <div className='text-xl text-gray-500 pt-5'>You can reach us anytime via hi@untitledui.com</div>
                <div className="mt-10 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-12 gap-6 mt-10">
                            <div className="md:col-span-6 col-span-12 h-20">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>

                                <input placeholder={"First name"}  {...register('firstname', { required: true })}
                                    className={errors.firstname && 'error-class focus:ring-indigo-500 focus:border-indigo-500'}
                                />
                                {errors.firstname && <p>Please complete this required field.</p>}

                            </div>
                            <div className="md:col-span-6 col-span-12 h-20">
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Last name
                                </label>

                                <input placeholder={"Last name"}  {...register('lastname', { required: true })}
                                    className={errors.lastname && 'error-class focus:ring-indigo-500 focus:border-indigo-500'}
                                />
                                {errors.lastname && <p>Please complete this required field.</p>}
                            </div>
                            <div className="col-span-12 h-20">
                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>

                                <input placeholder={"you@company.com"}  {...register('email', { required: true })}
                                    className={errors.email && 'error-class focus:ring-indigo-500 focus:border-indigo-500'}
                                />
                                {errors.email && <p>Please complete this required field.</p>}
                            </div>
                            <div className="col-span-12 h-20">
                                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <div className="mt-1 relative rounded-md border-gray-300 border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">

                                    <div className={errors.comment && 'error-class'}>

                                        <div className="absolute inset-y-0 left-0 flex items-center py-3">
                                            <label htmlFor="country" className="sr-only">
                                                Country
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country"
                                                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                                            >
                                                <option>US</option>
                                                <option>CA</option>
                                                <option>EU</option>
                                            </select>
                                        </div>


                                        <div className="ph-input pl-20">
                                            <input placeholder={"(555) 987-6543"}  {...register('phone', { required: true })}

                                            />
                                        </div>
                                    </div>


                                </div>
                                {errors.phone && <p>Please complete this required field.</p>}
                            </div>
                            <div className="col-span-12 h-36">
                                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <div className="mt-1">

                                    <textarea rows={4} placeholder={"Leave us a message..."}  {...register('comment', { required: true })}
                                        className={errors.comment && 'error-class'}
                                    />
                                    {errors.comment && <p>Please complete this required field.</p>}
                                </div>
                            </div>
                            <div className="col-span-12 flex sm:flex-row flex-col justify-between">
                                <div className='sm:w-1/2 w-full'>
                                    <fieldset className="space-y-5">
                                        <legend className="sr-only">Notifications</legend>
                                        <div className="relative flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="comments"
                                                    aria-describedby="comments-description"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded-lg border-gray-300"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="comments" className="font-medium text-base text-gray-500">
                                                    Website design
                                                </label>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="candidates"
                                                    aria-describedby="candidates-description"
                                                    name="candidates"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded-lg border-gray-300"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="candidates" className="font-medium text-base text-gray-500">
                                                    UX design
                                                </label>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="offers"
                                                    aria-describedby="offers-description"
                                                    name="offers"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded-lg border-gray-300"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="offers" className="font-medium text-base text-gray-500">
                                                    User research
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className='sm:w-1/2 w-full'>
                                    <fieldset className="space-y-5">
                                        <legend className="sr-only">Notifications</legend>
                                        <div className="relative flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="comments"
                                                    aria-describedby="comments-description"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded-lg border-gray-300"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="comments" className="font-medium text-base text-gray-500">
                                                    Content creation
                                                </label>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="candidates"
                                                    aria-describedby="candidates-description"
                                                    name="candidates"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded-lg border-gray-300"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="candidates" className="font-medium text-base text-gray-500">
                                                    Strategy & consulting
                                                </label>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="offers"
                                                    aria-describedby="offers-description"
                                                    name="offers"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-gray-300 rounded-lg border-gray-300"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="offers" className="font-medium text-base text-gray-500">
                                                    Other
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="col-span-12">
                                <button
                                    type="submit"
                                    className="w-full text-center bg-green-400 border border-transparent rounded-lg shadow-sm py-3 px-4 inline-flex justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="md:w-1/2 w-full">
                <div className='w-100'>
                    <ImgLoader src={Contactimg2} width={720} height={1064} alt="Contact image" />
                </div>
            </div>
        </div>
    )
}
