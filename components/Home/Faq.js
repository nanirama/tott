import React from 'react';
import ImgLoader from '../Image';
import Image from 'next/image'

export default function Faq({data}) {
  const { title, sub_title, questions, faq_help, button } = data
  return (
    <div className="faq_blk lg:mb-24 mb-14">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="md:text-4xl text-3xl font-semibold text-gray-900 md:tracking-tight mb-5 text-center">{title}</h2>
        <p className="md:text-xl text-lg font-normal text-gray-500 md:mb-16 mb-8 text-center">{sub_title}</p>
        {questions && questions.map((q, index)=>{
          return(
            <details className="border-b-2 py-4 mb-3" key={index}>
              <summary className="text-gray-900 font-medium cursor-pointer mb-3 text-lg leading-5 pr-8">{q.question}</summary>
              <p className="text-gray-500 text-base font-normal mb-3 pr-8">{q.answer}</p>
            </details>
          )
        })}
      </div>
      <div className="max-w-7xl mx-auto md:mt-10 mt-8 px-4">
        <div className="bg-gray-50 py-8 md:px-8 px-5 rounded-2xl">
          <div className="max-w-3xl mx-auto justify-center items-center text-center">
            <ImgLoader src={faq_help.image.data.attributes.url} width={124} height={60} alt={faq_help.title} />
            <h4 className="text-xl text-gray-900 font-medium md:mt-8 mt-5 mb-3">{faq_help.title}</h4>
            <p className="md:text-lg text-base text-gray-500 md:mb-10 mb-5">{faq_help.sub_title}</p>
            <a href={button.button_url} className="hover:bg-zinc-500 bg-zinc-600 rounded-lg shadow border hover:border-zinc-500 border-zinc-600 py-3 px-5 text-white inline-block">{button.button_text}</a>
          </div>
        </div>
      </div>
    </div>
  );
};