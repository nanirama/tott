import { Switch } from '@headlessui/react';
import { React, useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HashLoader } from 'react-spinners';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const initialValues = {
    email: '',
    mobileNumber: '',
    website_url: '',
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email!').required('Email is required!'),

    mobileNumber: Yup.string()
        .required('Mobile number is required!')
        .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, { excludeEmptyString: false, message: 'Invalid mobile number' }),

    website_url: Yup.string().required('Website url is required!'),
});

export const StepOne = ({ setActiveStep, query, setSiteId }) => {
    const [enabled, setEnabled] = useState(false);
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState(0);
    const [existingWebsiteURL, setExistingWebsiteURL] = useState('');
    const [countryCode, setCountryCode] = useState('US +1');
    const [loading, setLoading] = useState(false);

    const submitHandler = () => {
        setLoading(true);

        if (email && mobileNo != 0) {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('mobile_number', mobileNo);
            formData.append('existing_website', enabled ? 'no' : 'yes');
            !enabled && formData.append('website_url', existingWebsiteURL);
            formData.append('country_code', countryCode);
            axios
                .post('https://lb.trady.com/api/join', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((res) => {
                    setLoading(false);
                    setSiteId(res.data.data.site);
                    setActiveStep(2);
                })
                .catch((err) => {
                    setLoading(false);
                    if (err?.response?.data?.data?.email) {
                        toast.error(err?.response.data.data.email[0]);
                    } else {
                        toast.error(err?.response.data.data.mobile_number ? err?.response.data.data.mobile_number[0] : err?.response.data.data.website_url[0]);
                    }
                });
        } else {
            setLoading(false);
            toast.error("Form can't be empty!");
        }
    };

    return (
        <div className='mx-auto max-w-3xl'>
            {/* <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitHandler}>
        <Form> */}
            <div className='max-w-full relative flex flex-col w-full bg-black sm:px-10 px-5 outline-none focus:outline-none'>
                <div className='flex items-start justify-between'>
                    <h3 className='sm:text-3xl text-2xl font-semibold text-white sm:mb-6 mb-4 tracking-tight'>Start your 14 day free trial of Trady</h3>
                </div>
                <div className='max-w-full form w-full text-left'>
                    <div className='sm:mb-10 mb-5'>
                        <label htmlFor='email' className='text-sm text-white'>
                            Email Address
                        </label>
                        <div className='mt-1.5'>
                            <input
                                value={query.email ? query.email : email}
                                type='email'
                                name='email'
                                id='email'
                                className='max-w-full py-3 px-3 bg-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full border border-gray-300 text-sm rounded-lg'
                                placeholder='you@example.com'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='sm:mb-10 mb-5'>
                        <label htmlFor='mobile-number' className='text-sm text-white'>
                            Mobile Number
                        </label>
                        <div className='mt-1.5 relative rounded-md shadow-sm'>
                            <div className='absolute inset-y-0 left-0 flex items-center'>
                                <label htmlFor='country' className='sr-only'>
                                    Country
                                </label>
                                <select
                                    id='country'
                                    value={countryCode}
                                    name='country'
                                    autoComplete='country'
                                    onChange={(e) => setCountryCode(e.target.value)}
                                    className='max-w-full focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-1 border-transparent bg-transparent text-gray-500 text-sm rounded-lg'
                                >
                                    <option>US +1</option>
                                    <option>CA +1</option>
                                    <option>EU +1</option>
                                </select>
                            </div>
                            <input
                                type='text'
                                name='phone-number'
                                value={mobileNo}
                                onChange={(e) => setMobileNo(e.target.value)}
                                id='phone-number'
                                className='max-w-full py-3 px-3 focus:ring-indigo-500 focus:border-indigo-500 w-full pl-20 text-sm bg-white border border-gray-300 rounded-lg'
                                placeholder='(415) 688-5737'
                            />
                        </div>
                    </div>
                    <Switch.Group as='div' className='flex items-center sm:mb-8 mb-4'>
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={classNames(
                                enabled ? 'bg-green-400' : 'bg-green-400',
                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200'
                            )}
                        >
                            <span
                                aria-hidden='true'
                                className={classNames(
                                    enabled ? 'translate-x-5' : 'translate-x-0',
                                    'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                )}
                            />
                        </Switch>
                        <Switch.Label as='span' className='ml-3'>
                            <span className='sm:text-base text-sm text-white'>I have an existing website </span>
                        </Switch.Label>
                    </Switch.Group>
                    {!enabled && (
                        <div className='sm:mb-10 mb-5'>
                            <label htmlFor='company-website' className='text-white text-sm'>
                                Existing Website URL
                            </label>
                            <div className='mt-1.5 relative rounded-md shadow-sm'>
                                <input
                                    type='url'
                                    name='company-website'
                                    value={existingWebsiteURL}
                                    onChange={(e) => setExistingWebsiteURL(e.target.value)}
                                    id='company-website'
                                    className='max-w-full py-3 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full text-sm border border-gray-300 rounded-lg'
                                    placeholder='www.example.com'
                                />
                            </div>
                        </div>
                    )}

                    <p className='text-white text-sm sm:mb-10 mb-5'>
                        I agree to the Trady{' '}
                        <Link href='/'>
                            <a className='underline'>Terms of Service</a>
                        </Link>{' '}
                        and{' '}
                        <Link href='/'>
                            <a className='underline'>Privacy Policy</a>
                        </Link>
                    </p>
                    {loading ? (
                        <div className='flex justify-center'>
                            <HashLoader size={100} color='#5dcb85' />
                        </div>
                    ) : (
                        <button
                            type='submit'
                            onClick={submitHandler}
                            className='inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                        >
                            Create your site
                        </button>
                    )}
                    <ToastContainer />
                </div>
            </div>
            {/* </Form>
      </Formik> */}
        </div>
    );
};