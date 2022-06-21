import ImgLoader from '../Image';
import Author from "../../assets/images/avatar-group.png"
import Button from "../../components/Button/index"

export default function FaqSection2() {
    return (
        <div className="bg-gray-50 mt-14 md:py-20 py-14">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="md:text-4xl text-3xl font-semibold text-gray-900 md:tracking-tight mb-5 text-center">Frequently asked questions</h2>
                <p className="md:text-xl text-lg font-normal text-gray-500 md:mb-16 mb-8 text-center">Everything you need to know about the product and billing.</p>

                <details className="border-b-2 py-4 mb-3">
                    <summary className="text-gray-900 font-medium cursor-pointer mb-3 text-lg leading-5 pr-8">Is there a free trial available?</summary>
                    <p className="text-gray-500 text-base font-normal mb-3 pr-8">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                </details>
                <details className="border-b-2 py-4 mb-3">
                    <summary className="text-gray-900 font-medium cursor-pointer mb-3 text-lg leading-5 pr-8">Can I change my plan later?</summary>
                    <p className="text-gray-500 text-base font-normal mb-3 pr-8">Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.</p>
                </details>
                <details className="border-b-2 py-4 mb-3">
                    <summary className="text-gray-900 font-medium cursor-pointer mb-3 text-lg leading-5 pr-8">What is your cancellation policy?</summary>
                    <p className="text-gray-500 text-base font-normal mb-3 pr-8">We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.</p>
                </details>
                <details className="border-b-2 py-4 mb-3">
                    <summary className="text-gray-900 font-medium cursor-pointer mb-3 text-lg leading-5 pr-8">Can other info be added to an invoice?</summary>
                    <p className="text-gray-500 text-base font-normal mb-3 pr-8">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                </details>
                <details className="border-b-2 py-4 mb-3">
                    <summary className="text-gray-900 font-medium cursor-pointer mb-3 text-lg leading-5 pr-8">How does billing work?</summary>
                    <p className="text-gray-500 text-base font-normal mb-3 pr-8">Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.</p>
                </details>
                <details className="py-4 mb-3">
                    <summary className="text-gray-900 font-medium cursor-pointer mb-3 text-lg leading-5 pr-8">How do I change my account email?</summary>
                    <p className="text-gray-500 text-base font-normal mb-3 pr-8">You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.</p>
                </details>
            </div>
            <div className="max-w-7xl mx-auto md:mt-10 mt-8 px-4">
                <div className="bg-white py-8 md:px-8 px-5 rounded-2xl">
                    <div className="max-w-3xl mx-auto justify-center items-center text-center">
                        <ImgLoader src={Author} width={120} height={56} alt="" />
                        <h4 className="text-xl text-gray-900 font-medium md:mt-6 mt-4 mb-3">Still have questions?</h4>
                        <p className="md:text-lg text-base text-gray-500 md:mb-8 mb-4">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                        <div className='md:w-auto w-full inline-block'>
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
        </div>


       
    )
}