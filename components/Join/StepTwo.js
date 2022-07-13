import React, { useState, useEffect, useCallback } from 'react';
import AsyncCreatableSelect from 'react-select/creatable';

import ImgLoader from '../Image';
import Image1 from '../../assets/images/image-1.png';
import Image2 from '../../assets/images/image-2.png';
import Image3 from '../../assets/images/image-3.png';
import Image4 from '../../assets/images/image-4.png';
import Image5 from '../../assets/images/image-5.png';
import Image6 from '../../assets/images/image-6.png';
import axios from 'axios';
import { useRouter } from 'next/router';
import { HashLoader } from 'react-spinners';

export const StepTwo = ({ query, siteId }) => {
    const router = useRouter();

    const [focusValue, setFocusValue] = useState();
    const [serviceSelect, setServiceSelect] = useState('');
    const [value, setValue] = useState();
    const [options, setOptions] = useState([
        { value: 'cleaning', label: 'Cleaning' },
        { value: 'lawnmowing', label: 'Lawn Mowing' },
        { value: 'painting', label: 'Painting' },
        { value: 'plumbing', label: 'Plumbing' },
        { value: 'electrician', label: 'Electrician' },
        { value: 'poolcleaning', label: 'Pool Cleaning' },
    ]);
    const [loading, setLoading] = useState(false);

    const handleChange = useCallback((inputValue) => {
        setValue(inputValue);
    }, []);

    const handleFocus = (event) => {
        const focusValue = event.target.value;
        console.log(focusValue);
        setFocusValue(focusValue);
        setServiceSelect('other');
    };
    const handleCreate = useCallback(
        (inputValue) => {
            const newValue = { value: inputValue.toLowerCase(), label: inputValue };
            setOptions([...options, newValue]);
            setValue(newValue);
        },
        [options]
    );

    const handleServieChange = (e) => {
        setServiceSelect(e.target.value);
    };

    useEffect(() => { }, [serviceSelect]);

    const loadOptions = (inputValue, callback) =>
        setTimeout(() => {
            callback(options.filter((item) => item.label.toLowerCase().includes(inputValue.toLowerCase())));
        }, 3000);

    const submitHandler = () => {
        setLoading(true);

        const formData = new FormData();

        formData.append('service', serviceSelect == 'other' ? value.value : serviceSelect);
        formData.append('site_id', siteId);

        axios
            .post('https://lb.trady.com/api/join', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((res) => {
                setLoading(false);
                router.push('/');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className='mx-auto max-w-3xl'>
            <div className='max-w-full relative flex flex-col w-full bg-black md:px-10 px-5 outline-none focus:outline-none'>
                <div className='flex flex-col items-start justify-between'>
                    <h3 className='md:text-4xl text-3xl font-semibold text-white md:mb-8 mb-5 tracking-tight'>Start your 14 day free trial of Trady</h3>
                    <p className='text-sm font-medium text-white md:mb-8 mb-5'>What is the primary service you offer?</p>
                </div>
                <div className='max-w-full space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8'>
                    <label htmlFor='comments1' className='w-full float-left border-4 border-violet-100 rounded-lg bg-violet-100'>
                        <div className='relative flex justify-between items-center bg-white p-4 rounded-lg'>
                            <div className='mr-3 flex'>
                                <ImgLoader src={Image1} width={29} height={29} alt='' />
                                <label htmlFor='comments1' className='ml-3 font-medium text-base text-gray-700'>
                                    Cleaning
                                </label>
                            </div>
                            <div className='flex items-center h-6 w-6 border-4 border-violet-100 rounded-full'>
                                <input id='comments1' name='plan' value='cleaning' type='radio' onChange={handleServieChange} className='radio-round focus:ring-indigo-500 h-4 w-4 text-indigo-600' />
                            </div>
                        </div>
                    </label>
                    <label htmlFor='comments2' className='w-full float-left border-4 border-violet-100 rounded-lg bg-violet-100'>
                        <div className='relative flex justify-between items-center bg-white p-4 rounded-lg'>
                            <div className='mr-3 flex'>
                                <ImgLoader src={Image2} width={29} height={29} alt='' />
                                <label htmlFor='comments2' className='ml-3 font-medium text-base text-gray-700'>
                                    Lawn Mowing
                                </label>
                            </div>
                            <div className='flex items-center h-6 w-6 border-4 border-violet-100 rounded-full'>
                                <input id='comments2' name='plan' value='low mowing' type='radio' onChange={handleServieChange} className='radio-round focus:ring-indigo-500 h-4 w-4 text-indigo-600' />
                            </div>
                        </div>
                    </label>
                    <label htmlFor='comments3' className='w-full float-left border-4 border-violet-100 rounded-lg bg-violet-100'>
                        <div className='relative flex justify-between items-center bg-white p-4 rounded-lg'>
                            <div className='mr-3 flex'>
                                <ImgLoader src={Image3} width={29} height={29} alt='' />
                                <label htmlFor='comments3' className='ml-3 font-medium text-base text-gray-700'>
                                    Painting
                                </label>
                            </div>
                            <div className='flex items-center h-6 w-6 border-4 border-violet-100 rounded-full'>
                                <input id='comments3' name='plan' value='painting' type='radio' onChange={handleServieChange} className='radio-round focus:ring-indigo-500 h-4 w-4 text-indigo-600' />
                            </div>
                        </div>
                    </label>
                    <label htmlFor='comments4' className='w-full float-left border-4 border-violet-100 rounded-lg bg-violet-100'>
                        <div className='relative flex justify-between items-center bg-white p-4 rounded-lg'>
                            <div className='mr-3 flex'>
                                <ImgLoader src={Image4} width={29} height={29} alt='' />
                                <label htmlFor='comments4' className='ml-3 font-medium text-base text-gray-700'>
                                    Plumbing
                                </label>
                            </div>
                            <div className='flex items-center h-6 w-6 border-4 border-violet-100 rounded-full'>
                                <input id='comments4' name='plan' type='radio' value='plumbing' onChange={handleServieChange} className='radio-round focus:ring-indigo-500 h-4 w-4 text-indigo-600' />
                            </div>
                        </div>
                    </label>
                    <label htmlFor='comments5' className='w-full float-left border-4 border-violet-100 rounded-lg bg-violet-100'>
                        <div className='relative flex justify-between items-center bg-white p-4 rounded-lg'>
                            <div className='mr-3 flex'>
                                <ImgLoader src={Image5} width={29} height={29} alt='' />
                                <label htmlFor='comments5' className='ml-3 font-medium text-base text-gray-700'>
                                    Electrician
                                </label>
                            </div>
                            <div className='flex items-center h-6 w-6 border-4 border-violet-100 rounded-full'>
                                <input id='comments5' name='plan' type='radio' value='electrician' onChange={handleServieChange} className='radio-round focus:ring-indigo-500 h-4 w-4 text-indigo-600' />
                            </div>
                        </div>
                    </label>
                    <label htmlFor='comments6' className='w-full float-left border-4 border-violet-100 rounded-lg bg-violet-100'>
                        <div className='relative flex justify-between items-center bg-white p-4 rounded-lg'>
                            <div className='mr-3 flex'>
                                <ImgLoader src={Image6} width={29} height={29} alt='' />
                                <label htmlFor='comments6' className='ml-3 font-medium text-base text-gray-700'>
                                    Pool Cleaning
                                </label>
                            </div>
                            <div className='flex items-center h-6 w-6 border-4 border-violet-100 rounded-full'>
                                <input id='comments6' name='plan' type='radio' value='pool cleaning' onChange={handleServieChange} className='radio-round focus:ring-indigo-500 h-4 w-4 text-indigo-600' />
                            </div>
                        </div>
                    </label>
                </div>
                <div className='border-4 border-violet-200 rounded-lg mt-8 bg-violet-100'>
                    <div className='relative flex flex-col bg-white p-4 rounded-lg'>
                        <div className='flex justify-between items-center'>
                            <div className='mr-3 flex'>
                                <label htmlFor='comments7' className='font-medium text-base text-gray-700'>
                                    Other
                                </label>
                            </div>
                            <div className='flex items-center h-6 w-6 border-4 border-violet-100 rounded-full'>
                                <input
                                    id='comments7'
                                    name='plan'
                                    type='radio'
                                    value='other'
                                    onChange={handleServieChange}
                                    checked={serviceSelect === 'other'}
                                    className='radio-round focus:ring-indigo-500 h-4 w-4 text-indigo-600'
                                />
                            </div>
                        </div>
                        <div className='mt-3 select lg:pr-10max-w-full'>
                            <AsyncCreatableSelect
                                isClearable
                                value={value}
                                options={options}
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                                onFocus={handleFocus}
                                onCreateOption={handleCreate}
                                cacheOptions
                                loadOptions={loadOptions}
                            />
                        </div>
                    </div>
                </div>
                <div className='w-auto'>
                    {loading ? (
                        <div className='flex justify-center'>
                            <HashLoader size={100} color='#5dcb85' />
                        </div>
                    ) : (
                        <button
                            type='submit'
                            className='inline-flex w-auto mt-8 justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                            onClick={submitHandler}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};