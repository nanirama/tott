import React from 'react';
import ImgLoader from '../Image';
import Integrationimg1 from "../../assets/images/integration-img1.png";

const features = [
    {
      name: 'Notion integration',
      description: 'Work faster and smarter by integrating directly with Notion, right in the app.',
     
    },
    {
      name: 'Slack integration',
      description: 'Work faster and smarter by integrating directly with Slack, right in the app.',
     
    },
    {
      name: 'Google Drive integration',
      description: 'Work faster and smarter by integrating directly with Google Drive, right in the app.',
    
    },
    {
      name: 'Intercom integration',
      description: 'Work faster and smarter by integrating directly with Intercom, right in the app.',
     
    },
    {
      name: 'Jira integration',
      description: 'Work faster and smarter by integrating directly with Jira, right in the app.',
     
    },
    {
        name: 'Dropbox integration',
        description: 'Work faster and smarter by integrating directly with Jira, right in the app.',
       
      },
   
  ]
  
  
  
  export default function Integrations2() {
    return (
      <div className="relative  py-10">
      <div className="mx-auto px-4 text-center lg:max-w-7xl">
        <div className='text-base text-center text-neutral-600'>Integrations</div>
        <h2 className="mt-2 md:text-4xl text-2xl font-extrabold tracking-tight text-gray-900">
        Get more value from your tools
        </h2>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
        Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="md:pt-6 mb-5">
                <div className="flow-root rounded-lg bg-gray-50 h-full px-6 pb-8">                
                   
                      <span className="-mt-8 inline-flex items-center justify-center rounded-md p-3">
                      <ImgLoader src={Integrationimg1} width={51} height={51} alt="" />
                      </span>
                   
                    <h3 className="mt-3 text-lg text-xl tracking-tight font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-3 text-base text-gray-500">{feature.description}</p>
               
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    )
  }
  