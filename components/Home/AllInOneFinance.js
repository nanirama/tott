import Image from 'next/image'
import AppStore from "../../assets/images/app-store.png";
import GooglePlay from "../../assets/images/google-play.png";

export default function AllInOneFinance({data}) {
  const { title, sub_title, image } = data
  return (
    <div className="finance_blk">
      <div className="max-w-7xl mx-auto">
        <div className="flex md:flex-row flex-col">
          <div className="w-full md:w-6/12 px-4">
            <h2 className="xl:text-5xl md:text-4xl text-3xl font-semibold text-gray-900 lg:leading-tight lg:tracking-tight mb-6 lg:pt-16 pt-4">{title}</h2>
            <p className="md:text-xl text-lg font-normal text-gray-500 lg:mb-12 mb-8">{sub_title}</p>
            <div className="flex">
              <div className="mr-3">
                <Image src={AppStore} width={132} height={44} alt="" />
              </div>
              <div className="mr-3">
                <Image src={GooglePlay} width={132} height={44} alt="" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12">
            <div className="flex justify-center md:mt-0 mt-16 px-4 bg">
              <Image src={image.data[0].attributes.url} width={405} height={496} alt=""/>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}