import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useForm } from 'react-hook-form';

export default function ContactForm() {
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setIsLoading(!isLoading);
  //     const response = await axios.post(
  //       `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/get-in-touches`,
  //       { data }
  //     );
  //     if (response.status === 200) {
  //       setIsLoading(!isLoading);
  //       setData({
  //         first_name: "",
  //         last_name: "",
  //         email: "",
  //         phone: "",
  //         message: "",
  //         agree: false,
  //       });
  //     }
  //   } catch (error) {
  //     if (error) {
  //       setIsLoading(!isLoading);
  //     }
  //   }
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3 md:mb-6 mb-4 h-20">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700"
          >
            First name
          </label>


          <input placeholder={"First name"}  {...register('firstname', { required: true })}
            className={errors.firstname && 'error-class focus:ring-indigo-500 focus:border-indigo-500'}
          />
          {errors.firstname && <p>Please complete this required field.</p>}


        </div>
        <div className="col-span-6 sm:col-span-3 md:mb-6 mb-4  h-20">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700"
          >
            Last name
          </label>



          <input placeholder={"Last name"}  {...register('lastname', { required: true })}
            className={errors.lastname && 'error-class focus:ring-indigo-500 focus:border-indigo-500'}
          />
          {errors.lastname && <p>Please complete this required field.</p>}



        </div>
      </div>
      <div className="md:mb-6 mb-4 h-20">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>


        <input placeholder={"you@company.com"}  {...register('email', { required: true })}
          className={errors.email && 'error-class'}
        />
        {errors.email && <p>Please complete this required field.</p>}


      </div>
      <div className="md:mb-6 mb-4 h-20">
        <label
          htmlFor="phone-number"
          className="text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>


        <div className="mt-1.5 relative" >

          <div className={errors.phone && 'error-class relative'}>
            <div className="border  rounded-lg ">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 border-transparent bg-transparent text-gray-900 text-sm rounded-lg"
                >
                  <option>US +1 </option>
                  <option>CA +1</option>
                  <option>EU +1</option>
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
      </div>
      <div className="md:mb-6 mb-4 h-36">
        <label htmlFor="comment" className="text-sm font-medium text-gray-700">
          Message
        </label>


        <textarea rows={4} placeholder={"Leave us a message..."}  {...register('comment', { required: true })}
          className={errors.comment && 'error-class'}
        />
        {errors.comment && <p>Please complete this required field.</p>}


      </div>
      <div className="relative flex items-center md:mb-10 mb-5">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          checked={data.agree}
          onChange={({ target: { checked } }) => handleChange("agree", checked)}
        />
        <label
          htmlFor="comments"
          className="font-medium text-gray-500 ml-3 text-base"
        >
          You agree to our friendly{" "}
          <Link href="/"><a className="underline">
            privacy policy.
          </a></Link>
        </label>
      </div>
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        type="submit"
        className="w-full text-center bg-green-400 border border-transparent rounded-lg shadow-sm py-3 px-4 inline-flex justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Send message
      </button>
    </form>
  );
}
