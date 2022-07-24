import { Switch } from "@headlessui/react";
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HashLoader } from "react-spinners";
import { JOIN } from "../../core/api/api-routes";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const StepOne = ({ setActiveStep, query, setSiteId }) => {
  const [enabled, setEnabled] = useState(false);
  const [countryCode, setCountryCode] = useState("US +1");
  const [loading, setLoading] = useState(false);

  const errorMessage = (error) => {
    return <div className=" absolute pt-1 text-red-600">{error}</div>;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const submitHandler = (values) => {
    setLoading(true);
    if (values.email !== "" && values.mobileNumber !== "") {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("mobile_number", +values.mobileNumber);
      formData.append("existing_website", enabled ? "no" : "yes");
      !enabled && formData.append("website_url", values.website);
      formData.append("country_code", countryCode);
      axios
        .post(JOIN, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          setLoading(false);
          setSiteId(res.data.data.site);
          setActiveStep(2);
        })
        .catch((err) => {
          setLoading(false);
          if (err?.response?.data?.data?.email) {
            toast.error(err?.response.data.data.email[0]);
          } else {
            toast.error(
              err?.response.data.data.mobileNumber
                ? err?.response.data.data.mobileNumber[0]
                : err?.response.data.data.website_url[0]
            );
          }
        });
    } else {
      setLoading(false);
      toast.error("Form can't be empty!");
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="max-w-full relative flex flex-col w-full bg-black sm:px-10 px-5 outline-none focus:outline-none">
          <div className="flex items-start justify-between">
            <h3 className="sm:text-3xl text-2xl font-semibold text-white sm:mb-6 mb-4 tracking-tight">
              Start your 14 day free trial of Trady
            </h3>
          </div>
          <div className="max-w-full form w-full text-left">
            <div className="sm:mb-10 mb-5">
              <label htmlFor="email" className="text-sm text-white">
                Email Address
              </label>

              <div className="mt-1.5">
                <input
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  type="email"
                  name="email"
                  id="email"
                  className="max-w-full py-3 px-3 bg-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full border border-gray-300 text-sm rounded-lg"
                  placeholder="you@example.com"
                />

                {errors &&
                  errors.email &&
                  errors.email.type === "required" &&
                  errorMessage("Email is required!")}
                {errors &&
                  errors.email &&
                  errors.email.type === "pattern" &&
                  errorMessage("Invalid email!")}
              </div>
            </div>

            <div className="sm:mb-10 mb-5">
              <label htmlFor="mobile-number" className="text-sm text-white">
                Mobile Number
              </label>
              <div className="mt-1.5 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    value={countryCode}
                    name="country"
                    autoComplete="country"
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="max-w-full focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-1 border-transparent bg-transparent text-gray-500 text-sm rounded-lg"
                  >
                    <option>US +1</option>
                    <option>CA +1</option>
                    <option>EU +1</option>
                  </select>
                </div>

                <input
                  {...register("mobileNumber", {
                    required: true,
                    maxLength: 12,
                    minLength: 8,
                  })}
                  type="text"
                  name="mobileNumber"
                  id="phone-number"
                  className="max-w-full py-3 px-3 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-20 text-sm bg-white border border-gray-300 rounded-lg"
                  placeholder="(415) 688-5737"
                />

                {errors &&
                  errors.mobileNumber &&
                  errors.mobileNumber.type === "maxLength" &&
                  errorMessage("Mobile number must be between 8 to 12 digit!")}
                {errors &&
                  errors.mobileNumber &&
                  errors.mobileNumber.type === "minLength" &&
                  errorMessage("Mobile number must be between 8 to 12 digit!")}
                {errors &&
                  errors.mobileNumber &&
                  errors.mobileNumber.type === "required" &&
                  errorMessage("Mobile number is required!")}
              </div>
            </div>

            <Switch.Group as="div" className="flex items-center sm:mb-8 mb-4">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={classNames(
                  enabled ? "bg-green-400" : "bg-green-400",
                  "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200"
                )}
              >
                <span
                  aria-hidden="true"
                  className={classNames(
                    enabled ? "translate-x-5" : "translate-x-0",
                    "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                  )}
                />
              </Switch>

              <Switch.Label as="span" className="ml-3">
                <span className="sm:text-base text-sm text-white">
                  I have an existing website{" "}
                </span>
              </Switch.Label>
            </Switch.Group>

            {!enabled && (
              <div className="sm:mb-10 mb-5">
                <label htmlFor="company-website" className="text-white text-sm">
                  Existing Website URL
                </label>
                <div className="mt-1.5 relative rounded-md shadow-sm">
                  <input
                    {...register("website", { required: true })}
                    type="url"
                    name="website"
                    id="website"
                    className="max-w-full py-3 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full text-sm border border-gray-300 rounded-lg"
                    placeholder="www.example.com"
                  />
                  {errors &&
                    errors.website &&
                    errors.website.type === "required" &&
                    errorMessage("Website url is required!")}
                </div>
              </div>
            )}

            <p className="text-white text-sm sm:mb-10 mb-5">
              I agree to the Trady{" "}
              <Link href="/">
                <a className="underline">Terms of Service</a>
              </Link>{" "}
              and{" "}
              <Link href="/">
                <a className="underline">Privacy Policy</a>
              </Link>
            </p>
            {loading ? (
              <div className="flex justify-center">
                <HashLoader size={100} color="#5dcb85" />
              </div>
            ) : (
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Create your site
              </button>
            )}
            <ToastContainer />
          </div>
        </div>
      </form>
    </div>
  );
};
