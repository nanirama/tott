import { useState } from 'react'
import Image from 'next/image'
// import Logo from "../assets/images/logo.png"
const Footer = () => {
   return (
      <footer>
         <div className="max-w-7xl mx-auto px-4">
            <div className="md:py-14 py-8 flex md:flex-row flex-col">
               <div className="md:w-1/2">
                  <h2 className="lg:text-3xl text-2xl font-semibold mb-3">Start your 14-day free trial</h2>
                  <p className="text-xl font-normal text-gray-500 md:mb-0 mb-5">Join over 4,000+ startups already growing with Untitled.</p>
               </div>
               <div className="md:w-1/2">
                  <div className="flex md:flex-row flex-col md:justify-end justify-start">
                     <a href="#" className="inline-block text-center rounded-lg bg-white border border-slate-300 py-3 px-5 text-gray-600 text-base font-medium md:mr-3 md:mb-0 mb-3 md:w-auto w-full">Learn More</a>
                     <a href="#" className="inline-block text-center rounded-lg bg-zinc-600 border  border-zinc-600 py-3 px-5 text-white text-base font-medium md:w-auto w-full">Get Started</a>
                  </div>
               </div>
            </div>
         </div>
         <div className="f-top">
            <div className="max-w-7xl mx-auto px-4">
               <div className="flex lg:flex-row flex-col border-t border-b py-10">
                  <div className="w-full lg:w-4/12">
                     {/* <Image itemProp="image" src={Logo} alt="Tott" width={145} height={38} /> */}
                     <p className="md:mt-8 mt-4 text-gray-500 text-base lg:mb-0 mb-12">Websites, but for service businesses</p>
                  </div>
                  <div className="w-full lg:w-8/12">
                     <div className="flex flex-row md:flex-nowrap flex-wrap md:justify-around justify-start">
                        <div className="flex flex-col w-6/12 md:mb-0 mb-5">
                           <h5 className="text-gray-400 text-sm font-semibold mb-4">Product</h5>
                           <ul>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Overview</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Features</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Solutions <span className="text-xs text-green-900 bg-green-100 rounded-full py-1 px-2">New</span></a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Tutorials</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Pricing</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Releases</a></li>
                           </ul>
                        </div>
                        <div className="flex flex-col w-6/12 md:mb-0 mb-5">
                           <h5 className="text-gray-400 text-sm font-semibold mb-4">Company</h5>
                           <ul>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">About us</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Careers</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Press</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">News</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Media kit</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Contact</a></li>
                           </ul>
                        </div>
                        <div className="flex flex-col w-6/12 md:mb-0 mb-5">
                           <h5 className="text-gray-400 text-sm font-semibold mb-4">Resources</h5>
                           <ul>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Blog</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">NewsLetter</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Events</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Help centre</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Tutorials</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Support</a></li>
                           </ul>
                        </div>
                        <div className="flex flex-col w-6/12 md:mb-0 mb-5">
                           <h5 className="text-gray-400 text-sm font-semibold mb-4">Social</h5>
                           <ul>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Twitter</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">LinkedIn</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Facebook</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">GitHub</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">AngelList</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Dribbble</a></li>
                           </ul>
                        </div>
                        <div className="flex flex-col w-6/12">
                           <h5 className="text-gray-400 text-sm font-semibold mb-4">Legal</h5>
                           <ul>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Terms</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Privacy</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Cookies</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Licenses</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Settings</a></li>
                              <li><a href="#" className="text-gray-500 text-base font-medium mb-3 inline-block">Contact</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="f-bot pt-8 pb-12">
            <div className="max-w-7xl mx-auto px-4">
               <div className="flex md:flex-row flex-col-reverse">
                  <div className="w-full md:w-6/12">
                     <p className="text-base text-gray-400 mb-0">© 2022 Tott, Inc. All rights reserved.</p>
                  </div>
                  <div className="w-full md:w-6/12">
                     <div className="s_links flex md:justify-end justify-start md:mb-0 mb-5">
                        {/* <svg class="h-6 w-6 text-black hover:fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                           stroke="currentColor" aria-hidden="true">
                           <path d="M7.55016 21.7497C16.6045 21.7497 21.5583 14.2465 21.5583 7.74162C21.5583 7.53068 21.5536 7.31505 21.5442 7.10412C22.5079 6.40722 23.3395 5.54401 24 4.55505C23.1025 4.95436 22.1496 5.21514 21.1739 5.32849C22.2013 4.71266 22.9705 3.74523 23.3391 2.60552C22.3726 3.17831 21.3156 3.58237 20.2134 3.80037C19.4708 3.01132 18.489 2.48887 17.4197 2.31381C16.3504 2.13874 15.2532 2.32081 14.2977 2.83185C13.3423 3.3429 12.5818 4.15446 12.1338 5.14107C11.6859 6.12767 11.5754 7.23437 11.8195 8.29005C9.86249 8.19185 7.94794 7.68346 6.19998 6.79785C4.45203 5.91225 2.90969 4.66919 1.67297 3.14927C1.0444 4.233 0.852057 5.5154 1.13503 6.73585C1.418 7.95629 2.15506 9.0232 3.19641 9.71974C2.41463 9.69492 1.64998 9.48444 0.965625 9.10568V9.16662C0.964925 10.3039 1.3581 11.4063 2.07831 12.2865C2.79852 13.1667 3.80132 13.7703 4.91625 13.9947C4.19206 14.1929 3.43198 14.2218 2.69484 14.0791C3.00945 15.0572 3.62157 15.9126 4.44577 16.5261C5.26997 17.1395 6.26512 17.4804 7.29234 17.501C5.54842 18.8709 3.39417 19.6139 1.17656 19.6104C0.783287 19.6098 0.390399 19.5857 0 19.5382C2.25286 20.9835 4.87353 21.7511 7.55016 21.7497Z"  />
                        </svg> */}
                        <svg className="mr-6 fill-slate-400 hover:fill-black" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.55016 21.7497C16.6045 21.7497 21.5583 14.2465 21.5583 7.74162C21.5583 7.53068 21.5536 7.31505 21.5442 7.10412C22.5079 6.40722 23.3395 5.54401 24 4.55505C23.1025 4.95436 22.1496 5.21514 21.1739 5.32849C22.2013 4.71266 22.9705 3.74523 23.3391 2.60552C22.3726 3.17831 21.3156 3.58237 20.2134 3.80037C19.4708 3.01132 18.489 2.48887 17.4197 2.31381C16.3504 2.13874 15.2532 2.32081 14.2977 2.83185C13.3423 3.3429 12.5818 4.15446 12.1338 5.14107C11.6859 6.12767 11.5754 7.23437 11.8195 8.29005C9.86249 8.19185 7.94794 7.68346 6.19998 6.79785C4.45203 5.91225 2.90969 4.66919 1.67297 3.14927C1.0444 4.233 0.852057 5.5154 1.13503 6.73585C1.418 7.95629 2.15506 9.0232 3.19641 9.71974C2.41463 9.69492 1.64998 9.48444 0.965625 9.10568V9.16662C0.964925 10.3039 1.3581 11.4063 2.07831 12.2865C2.79852 13.1667 3.80132 13.7703 4.91625 13.9947C4.19206 14.1929 3.43198 14.2218 2.69484 14.0791C3.00945 15.0572 3.62157 15.9126 4.44577 16.5261C5.26997 17.1395 6.26512 17.4804 7.29234 17.501C5.54842 18.8709 3.39417 19.6139 1.17656 19.6104C0.783287 19.6098 0.390399 19.5857 0 19.5382C2.25286 20.9835 4.87353 21.7511 7.55016 21.7497Z" />
                        </svg>
                        <svg className="mr-6 fill-slate-400 hover:fill-black" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" />
                        </svg>
                        <svg className="mr-6 fill-slate-400 hover:fill-black" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" />
                        </svg>
                        <svg className="mr-6 fill-slate-400 hover:fill-black" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z" />
                        </svg>
                        <svg className="mr-6 fill-slate-400 hover:fill-black" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path d="M17.7695 10.0969C18.318 8.56875 19.8977 4.14844 19.8977 2.73281C19.8977 1.48594 19.1617 0.440625 17.8492 0.440625C15.7586 0.440625 13.8836 6.61406 13.2977 8.08594C12.843 6.75 10.7148 0 8.83985 0C7.38204 0 6.69766 1.07344 6.69766 2.42344C6.69766 4.07812 8.30079 8.36719 8.88204 10.0172C8.58672 9.90938 8.26797 9.81562 7.94454 9.81562C6.84766 9.81562 5.68047 11.1797 5.68047 12.2812C5.68047 12.6984 5.91016 13.2844 6.05547 13.6734C4.32579 14.1422 3.66016 15.2953 3.66016 17.0344C3.65547 20.4187 6.86172 24 11.3711 24C16.9024 24 20.343 19.8469 20.343 14.4891C20.343 12.4688 20.0195 10.6453 17.7695 10.0969ZM16.1102 5.0625C16.2977 4.48594 17.0992 2.04844 17.8492 2.04844C18.2523 2.04844 18.3602 2.46563 18.3602 2.79844C18.3602 3.69375 16.5508 8.63906 16.1524 9.73594L14.5586 9.45469L16.1102 5.0625ZM8.16954 2.26406C8.16954 1.70625 8.84923 0.121875 10.3398 4.47188L11.9617 9.17344C11.2305 9.1125 10.6633 9.03281 10.3024 9.23906C9.79141 7.88906 8.16954 3.62812 8.16954 2.26406ZM8.06172 11.4375C9.43516 11.4375 11.207 15.8719 11.207 16.4719C11.207 16.7109 10.9773 17.0062 10.7102 17.0062C9.73047 17.0062 7.10547 13.4016 7.10547 12.4266C7.11016 12.0656 7.70079 11.4375 8.06172 11.4375ZM16.7008 20.1703C15.3367 21.6703 13.593 22.4484 11.5586 22.4484C8.77422 22.4484 6.57579 20.9203 5.51641 18.3094C4.71485 16.275 5.69454 15.1078 6.48204 15.1078C7.01641 15.1078 9.02735 17.9344 9.02735 18.5344C9.02735 18.7641 8.66641 18.9234 8.47891 18.9234C7.72422 18.9234 7.42891 18.1969 6.0836 16.5141C4.69141 17.9062 7.04454 20.5875 8.81641 20.5875C10.0398 20.5875 10.8367 19.4531 10.5977 18.6188C10.7711 18.6188 10.9867 18.6328 11.1461 18.5906C11.1977 19.8609 11.5727 21.375 13.1008 21.4828C13.1008 21.4406 13.1945 21.15 13.1945 21.1359C13.1945 20.3203 12.6977 19.6078 12.6977 18.7781C12.6977 17.4516 13.7149 16.1672 14.7461 15.4172C15.1211 15.1359 15.5758 14.9625 16.0164 14.8031C16.4711 14.6297 16.9539 14.4281 17.3008 14.0812C17.2492 13.5562 17.0336 13.0922 16.5086 13.0922C15.2102 13.0922 10.8555 13.2797 10.8555 11.2313C10.8555 10.9172 10.8602 10.6172 11.6711 10.6172C13.1852 10.6172 17.0289 10.9922 18.1539 11.9813C19.0023 12.7359 19.293 17.2875 16.7008 20.1703ZM12.0789 14.2641C12.5336 14.4094 13.0023 14.4516 13.4711 14.5453C13.1242 14.7984 12.8148 15.1078 12.5195 15.4406C12.3883 15.0422 12.2289 14.6531 12.0789 14.2641Z" />
                        </svg>
                        <svg className="mr-6 fill-slate-400 hover:fill-black" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37527 0 0 5.37527 0 12C0 18.6248 5.37527 24 12 24C18.6117 24 24 18.6248 24 12C24 5.37527 18.6117 0 12 0ZM19.9262 5.53145C21.3579 7.27549 22.217 9.50107 22.243 11.9089C21.9046 11.8438 18.5206 11.154 15.1106 11.5835C15.0325 11.4143 14.9675 11.2321 14.8894 11.0499C14.6811 10.5554 14.4469 10.0477 14.2126 9.56617C17.9869 8.0304 19.705 5.81779 19.9262 5.53145ZM12 1.77007C14.603 1.77007 16.9848 2.74621 18.7939 4.34708C18.6117 4.60738 17.0629 6.67679 13.4186 8.04337C11.7397 4.95878 9.87855 2.43384 9.5922 2.04338C10.3601 1.86117 11.1671 1.77007 12 1.77007ZM7.63995 2.73319C7.91325 3.09761 9.73538 5.63558 11.4404 8.65508C6.65076 9.9306 2.42083 9.90458 1.96529 9.90458C2.62906 6.72885 4.77657 4.08676 7.63995 2.73319ZM1.74404 12.0131C1.74404 11.9089 1.74404 11.8048 1.74404 11.7007C2.18655 11.7136 7.15835 11.7787 12.2733 10.243C12.5727 10.8156 12.846 11.4013 13.1063 11.987C12.9761 12.026 12.8329 12.0651 12.7028 12.1041C7.41865 13.8091 4.60738 18.4685 4.3731 18.859C2.7462 17.0499 1.74404 14.6421 1.74404 12.0131ZM12 22.256C9.6312 22.256 7.44469 21.449 5.71366 20.0954C5.89588 19.718 7.97827 15.7094 13.757 13.692C13.783 13.679 13.7961 13.679 13.8221 13.666C15.2668 17.4013 15.8525 20.5379 16.0087 21.436C14.7722 21.9696 13.4186 22.256 12 22.256ZM17.7137 20.4989C17.6096 19.8742 17.0629 16.8807 15.7223 13.1974C18.9371 12.6898 21.7484 13.5228 22.0998 13.6399C21.6573 16.4902 20.0174 18.9501 17.7137 20.4989Z" />
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
