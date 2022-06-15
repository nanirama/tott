import React from 'react';
import ImgLoader from '../Image';
import Client1 from "../../assets/images/client7.png"
import Client2 from "../../assets/images/client8.png"
import Client3 from "../../assets/images/client9.png"
import Client4 from "../../assets/images/client10.png"
import Client5 from "../../assets/images/client11.png"


export default function Clients() {
  return (
    <div className='w-full py-14 px-4 flex  flex flex-col'>
      <p className='text-base font-medium text-center text-gray-500 mb-6'>We&lsquo;ve been mentioned in the press</p>
      <div className="max-w-7xl mx-auto px-4 flex lg:flex-row flex-wrap  justify-center lg:gap-10 gap-8 items-center">
        <div className="w-auto text-center flex items-center">
          <ImgLoader src={Client1} width={274} height={40} alt="Client1" />
        </div>
        <div className="w-auto text-center flex items-center">
          <ImgLoader src={Client2} width={238} height={40} alt="Client2" />
        </div>
        <div className="w-auto text-center flex items-center">
          <ImgLoader src={Client3} width={180} height={40} alt="Client3" />
        </div>
        <div className="w-auto text-center flex items-center">
          <ImgLoader src={Client4} width={165} height={40} alt="Client4" />
        </div>
        <div className="w-auto text-center flex items-center">
          <ImgLoader src={Client5} width={115} height={40} alt="Client5" />
        </div>
      </div>
    </div>
  )
}
