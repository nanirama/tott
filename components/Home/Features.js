import Image from 'next/image'
import ReactMarkdown from "react-markdown";
import ImgLoader from '../Image';
import IphonePro1 from "../../assets/images/iPhone-Pro1.png"
import IphonePro from "../../assets/images/iPhone-Pro.png"

export default function Features({ data }) {
  const { title, sub_title, description, first_image, second_image, features_list } = data
  return (
    <div className="lg:py-20 py-14 relative">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col">
        <div className="w-full flex flex-col">
          <div className="xl:w-3/5 px-4 w-full lg:mb-12 mb-8">
            <h6 className="text-base font-semibold mb-3">{title}</h6>
            <h2 className="text-4xl font-semibold tracking-tight mb-4">{sub_title}f</h2>
            <ReactMarkdown escapeHtml={false} className="text-xl text-gray-500 leading-8" >{description}</ReactMarkdown>

          </div>
          <div className="w-full flex md:flex-row flex-col ">
            <div className="md:w-1/2 w-full px-4 lg:pr-14 lg:mt-10 mb-3">
              {features_list && features_list.map((feature, index)=>{
                return(
                  <div key={index} className="py-4 px-5 border-l-4 border-slate-100 hover:border-slate-500">
                    <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                    <ReactMarkdown escapeHtml={false} className="text-gray-500 text-base mb-3" >{feature.description}</ReactMarkdown>                    
                    <a href={feature.url} className="flex items-center text-gray-600 visited:text-gray-600 font-medium">Learn More <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </a>
                  </div>
                )
              })}              
           </div>
            <div className="md:w-1/2 w-full px-4 relative ">
              <div className='absolute left-0 top-16 hidden lg:flex'>
                { second_image && second_image.data && 
                <ImgLoader src={second_image.data.attributes.url} width={314} height={496} alt={title} />
                }
              </div>
              <div className='flex lg:justify-end justify-center md:mt-0 mt-8'>
                {first_image && first_image.data &&
                <ImgLoader src={first_image.data.attributes.url} width={406} height={560} alt={sub_title} />               }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
