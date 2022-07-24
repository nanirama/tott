
import ImgLoader from "../components/Image"

import Logo from "../assets/images/trady-logo.png"
import TickIcon from "../assets/images/tick-icon.png"

export default function Done() {


  return (
    <div className="w-full  flex flex-col justify-between bg-gray-50 relative">

      <div className="done-bg w-full absolute top-8">&nbsp;</div>

      <div className="flex justify-center py-6 mb-3">

        <ImgLoader src={Logo} width={97} height={32} />
      </div>
      <div className="md:max-w-screen-sm w-full mx-auto bg-gray-50  h-full flex flex-col justify-between">

        <div className="px-5 h-full py-6 flex flex-col justify-between">

          <div className="bg-green-400 rounded-md text-center px-11 pb-5 mb-4">
            <div className="-mt-8 mb-6">
              <ImgLoader src={TickIcon} width={58} height={58} /></div>
            <h2 className="text-black font-medium text-3xl text-white mb-4">Your site is live!</h2>
            <p className="font-normal text-base text-white mb-2">Visit your new website</p>
            <button className="rounded-md bg-white w-full font-semibold underline text-center border-4 border-solid border-green-800  px-6 py-3 text-green-700 mb-3">trady.com/tampatopgarden</button>
          </div>

          <div className="border-t border-solid border-1 pt-4 mb-8">

            <p className="text-base font-medium text-center text-black mb-5">Let&lsquo;s get you setup now on your own domain:</p>
            <button className="rounded bg-white w-full text-center border border-solid border-gray-200 font-medium  px-6 py-3 text-gray-600 mb-3">Go to Admin</button>
          </div>


          <div className="flex flex-col py-3 border-t border-solid border-1 pt-4">
            <p className="text-base font-medium text-center text-black mb-4">Share your new website with your clients</p>
            <a href="/" target="_blank" rel="noopener noreferrer" className="mb-3 w-full flex justify-center items-center gap-2 border p-3 text-sm text-gray-500 font-medium"><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.55554 7.77786C3.55554 7.33341 5.03702 5.00008 5.77776 3.88897C5.96295 3.88897 6.66665 3.83341 7.99999 3.61119C9.66665 3.33341 11.0555 5.83341 11.6111 7.2223C12.1667 8.61119 13 9.16675 13.8333 9.7223C14.6667 10.2779 15.2222 10.0001 16.3333 10.8334C17.4444 11.6667 17.1667 13.3334 16.8889 14.1667C16.6111 15.0001 16.0555 15.8334 15.2222 15.8334H10.5L5.49999 12.7779C4.85184 11.2964 3.55554 8.2223 3.55554 7.77786Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M7.70531 5.07953C7.51141 4.61516 7.36437 4.5975 7.07062 4.58562C6.97062 4.57984 6.85922 4.57406 6.73563 4.57406C6.35344 4.57406 5.95391 4.68578 5.71281 4.93266C5.41906 5.2325 4.69016 5.93203 4.69016 7.36641C4.69016 8.80094 5.73625 10.1883 5.87734 10.3825C6.02437 10.5763 7.91688 13.5628 10.8555 14.78C13.1534 15.7323 13.8353 15.6441 14.3583 15.5325C15.1223 15.368 16.0803 14.8033 16.3214 14.1216C16.5623 13.4395 16.5623 12.8575 16.4917 12.7341C16.4213 12.6106 16.2272 12.5403 15.9334 12.3931C15.6397 12.2461 14.2114 11.5406 13.9411 11.4466C13.6766 11.3467 13.4239 11.382 13.2242 11.6642C12.942 12.0581 12.6659 12.458 12.4425 12.6989C12.2662 12.887 11.9781 12.9106 11.7372 12.8106C11.4139 12.6756 10.5089 12.3578 9.39219 11.3644C8.52812 10.5944 7.94047 9.63625 7.77016 9.34812C7.59969 9.05422 7.7525 8.88359 7.88766 8.725C8.03469 8.54266 8.17562 8.41344 8.3225 8.24281C8.46953 8.07234 8.55172 7.98422 8.64578 7.78422C8.74578 7.59031 8.67516 7.39031 8.60469 7.24328C8.53406 7.09594 7.94641 5.66141 7.70531 5.07953ZM10.497 0C4.98422 0 0.5 4.48547 0.5 9.99984C0.5 12.1867 1.20531 14.215 2.40422 15.8611L1.15812 19.5766L5.00187 18.3481C6.58281 19.3945 8.46937 20 10.503 20C16.0158 20 20.5 15.5142 20.5 10.0002C20.5 4.48578 16.0158 0.0003125 10.503 0.0003125H10.4972V0H10.497Z" fill="#00DE73" />
            </svg> Share on Whatsapp</a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="mb-3 w-full flex justify-center items-center gap-2 border p-3 text-sm text-gray-500 font-medium">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#57BB63" />
                <path fillRule="evenodd" clipRule="evenodd" d="M9.80766 5.38477C6.94005 5.38477 4.61536 7.24103 4.61536 9.53087C4.61536 10.6944 5.21634 11.7453 6.18309 12.4982C6.45784 14.0024 5.1301 14.2804 5.1301 14.2804C5.1301 14.2804 4.96429 14.4925 5.37627 14.5709C7.03441 14.8731 8.37523 13.5428 8.37523 13.5428L8.37675 13.5161C8.83149 13.62 9.31117 13.6769 9.80766 13.6769C12.6754 13.6769 15 11.8206 15 9.53076C15 7.24093 12.6754 5.38477 9.80766 5.38477Z" fill="white" />
              </svg>Share on iMessage</a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="mb-3 w-full flex justify-center items-center gap-2 border p-3 text-sm text-gray-500 font-medium">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 10C20.5 4.47715 16.0229 0 10.5 0C4.97715 0 0.5 4.47715 0.5 10C0.5 14.9913 4.15687 19.1283 8.9375 19.8785V12.8906H6.39844V10H8.9375V7.79688C8.9375 5.29063 10.4304 3.90625 12.7146 3.90625C13.8088 3.90625 14.9531 4.10156 14.9531 4.10156V6.5625H13.6921C12.4499 6.5625 12.0625 7.33332 12.0625 8.12414V10H14.8359L14.3926 12.8906H12.0625V19.8785C16.8432 19.1283 20.5 14.9913 20.5 10Z" fill="#1877F2" />
                <path d="M14.3926 12.8906L14.8359 10H12.0625V8.12414C12.0625 7.33332 12.4499 6.5625 13.6921 6.5625H14.9531V4.10156C14.9531 4.10156 13.8087 3.90625 12.7146 3.90625C10.4304 3.90625 8.9375 5.29063 8.9375 7.79688V10H6.39844V12.8906H8.9375V19.8785C9.4466 19.9584 9.96844 20 10.5 20C11.0316 20 11.5534 19.9584 12.0625 19.8785V12.8906H14.3926Z" fill="white" />
              </svg> Share on Facebook</a>
          </div>
        </div>
      </div>
    </div>
  )
}