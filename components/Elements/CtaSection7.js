import Link from 'next/link'
import ImgLoader from '../Image';
import Button from "../../components/Button/index"
import ContentImg from "../../assets/images/content-img.png"

export default function CtaSection7() {
    return (
      <div className="bg-white md:pt-24 pt-14">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl mb-5">
          Start your 30-day free trial
          </h2>
          <p className="text-xl text-gray-500">Join over 4,000+ startups already growing with Untitled.</p>
          <div className="mt-8 flex md:flex-row flex-col justify-center md:mb-16 mb-10">
          <Link href="/"><a className="inline-block bg-white items-center justify-center md:mr-3 md:mb-0 mb-3 px-5 py-3 border border-slate-300 text-base font-medium rounded-lg text-gray-700">
                Learn More
              </a></Link>
            <Button/>
            </div>
            <ImgLoader src={ContentImg} width={1000} height={400} alt="" />
          </div>
      </div>
    )
  }