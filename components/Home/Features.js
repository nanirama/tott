import ImgLoader from '../Image';
import IphonePro1 from "../../assets/images/iPhone-Pro1.png"
import IphonePro from "../../assets/images/iPhone-Pro.png"

export default function Features() {
  return (
    <div className="lg:py-20 py-10 relative">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col">
        <div className="w-full flex flex-col">
          <div className="xl:w-3/5 px-4 w-full lg:mb-12 mb-8">
            <h6 className="text-base font-semibold mb-3">Features</h6>
            <h2 className="text-4xl font-semibold tracking-tight mb-4">Unlock yourself</h2>
            <div className="text-xl text-gray-500 leading-8" >Daily personalized fitness, sleep, and recovery data delivered to you in real time with Untitled. We're changing how you move.</div>
          </div>
          <div className="w-full flex lg:flex-row flex-col ">
            <div className="lg:w-1/2 w-full px-4 lg:pr-14 lg:mt-10 mb-3">
              <div className="py-4 px-5 border-l-4 border-slate-100 hover:border-slate-500">
                <h3 className="text-xl font-medium mb-2">Share team inboxes</h3>
                <div className="text-gray-500 text-base mb-3" >Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</div>
                <a href="" className="flex items-center text-gray-600 visited:text-gray-600 font-medium">Learn More <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoinn="round" />
                </svg>
                </a>
              </div>

              <div className="py-4 px-5 border-l-4 border-slate-100 hover:border-slate-500">
                <h3 className="text-xl font-medium mb-2">Deliver instant answers</h3>
                <div className="text-gray-500 text-base mb-3" >An all-in-one customer service platform that helps you balance everything your customers need to be happy.</div>
                <a href="" className="flex items-center text-gray-600 visited:text-gray-600 font-medium">Learn More <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoinn="round" />
                </svg>
                </a>
              </div>

              <div className="py-4 px-5 border-l-4 border-slate-100 hover:border-slate-500">
                <h3 className="text-xl font-medium mb-2">Manage your team with reports</h3>
                <div className="text-gray-500 text-base mb-3" >Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</div>
                <a href="" className="flex items-center text-gray-600 visited:text-gray-600 font-medium">Learn More <svg width="28" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.16675 7.00033H12.8334M12.8334 7.00033L7.00008 1.16699M12.8334 7.00033L7.00008 12.8337" stroke="#323232" strokeWidth="1.67" strokeLinecap="round" strokeLinejoinn="round" />
                </svg>
                </a>
              </div>

            </div>
            <div className="lg:w-1/2 w-full px-4 relative flex">
              <div className='-mr-16 sm:mt-14 mt-8'>
                <ImgLoader src={IphonePro1} width={314} height={496} />
              </div>
              <div className=''>
                <ImgLoader src={IphonePro} width={406} height={560} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
