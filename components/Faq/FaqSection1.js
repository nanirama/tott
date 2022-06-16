import Button from "../../components/Button/index"

const faqs = [
    {
        id: 1,
        question: "Is there a free trial available?",
        answer:
            "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        id: 1,
        question: "Can I change my plan later?",
        answer:
            "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
    },
    {
        id: 1,
        question: "What is your cancellation policy?",
        answer:
            "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.",
    },
    {
        id: 1,
        question: "Can other info be added to an invoice?",
        answer:
            "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        id: 1,
        question: "How does billing work?",
        answer:
            "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
    },
    {
        id: 1,
        question: "How do I change my account email?",
        answer:
            "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
    },
]

export default function FaqSection1() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 md:py-24 px-4">
                <h6 class="sm:text-base text-sm font-semibold mb-3 text-center text-gray-700">Support</h6>
                <h2 className="md:text-5xl text-4xl font-semibold text-gray-900 text-center tracking-tight mb-8">FAQs</h2>
                <p className="text-center text-gray-500 md:text-xl text-base max-w-3xl mx-auto">Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <div className="md:mt-24 mt-14">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
                        {faqs.map((faq) => (
                            <div key={faq.id}>
                                <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="bg-gray-50 flex justify-between md:flex-row flex-col items-center p-8 mt-16">
                    <div>
                        <h4 className="text-xl font-medium text-gray-900 mb-2">Still have questions?</h4>
                        <p className="text-lg text-gray-500 md:mb-0 mb-5">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                    </div>
                    <Button/>
                </div>
            </div>
        </div>

    )
}
