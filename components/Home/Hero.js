import Image from 'next/image'
import ReactMarkdown from "react-markdown";


export default function Hero({data}) {
  const { title, sub_title, description, image } = data  
  return (
      <div className="lg:pt-20 pt-14 relative">
        <div className="max-w-7xl mx-auto flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full px-4 ">
            <h1 className="text-4xl font-semibold mb-10">{title}</h1>
            <h2 className="text-4xl font-semibold mb-5">{sub_title}</h2>
            <ReactMarkdown escapeHtml={false} className="text-xl text-gray-400 leading-8 mb-8 xl:pr-28">{description}</ReactMarkdown>     

            <div className="flex lg:flex-row flex-col items-stretch xl:pr-28">
              <div className="flex flex-col mb-2 w-full">

                <div className="flex rounded-lg text-base leading-none text-gray-500 dark:text-white p-3 lg:w-11/12 w-full border border-gray-300 focus:outline-none focus:border-gray-500 mb-2">
                  <select className="border-0 focus:outline-none focus:border-0 mr-3" id="grid-state">
                    <option>US</option>
                    <option>UK</option>
                    <option>UE</option>
                  </select>
                  <input className="w-full focus:outline-none focus:border-0" type="email" placeholder="admin@gmail.com" />
                </div>
                <p className="text-sm text-gray-500 text-left md:mb-0 mb-2">Free to try for 14 days, no credit card needed.</p>
              </div>
              <button className="lg:w-40 w-full hover:bg-zinc-500 bg-zinc-600 rounded-lg text-base font-medium leading-none text-white p-4 shadow h-12">Get Started</button>
            </div>



          </div>
          <div className="md:w-1/2 w-full px-4">
            <div className='xl:-ml-7 xl:mt-12 flex  xl:justify-start justify-center md:mt-0 mt-8'>            
              <Image className='z-50 ' src={image.data[0].attributes.url}
                itemProp="image"
                width={315}
                height={544}
              />
            </div>
          </div>


        </div>
        <div className='absolute right-0 top-10 hidden xl:flex'>
          <Image className='z-0' src={image.data[1].attributes.url}
            itemProp="image"
            width={680}
            height={632}
            layout="intrinsic"
          />
        </div>
      </div>
  )
}
