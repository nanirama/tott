import Button from "../../components/Button/index";

export default function FaqSection1({ data }) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-4">
        <h6 className="sm:text-base text-sm font-semibold mb-3 text-center text-gray-700">
          Support
        </h6>
        <h2 className="md:text-5xl text-4xl font-semibold text-gray-900 text-center tracking-tight mb-8">
          {data?.title}
        </h2>
        <p className="text-center text-gray-500 md:text-xl text-base max-w-3xl mx-auto">
          {data?.description}
        </p>
        <div className="md:mt-24 mt-14">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            {data?.questions?.map((faq, index) => (
              <div key={index}>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="bg-gray-50 flex justify-between md:flex-row flex-col items-center p-8 mt-16">
          <div>
            <h4 className="text-xl font-medium text-gray-900 mb-2">
              {data?.confusion?.heading}
            </h4>
            <p className="text-lg text-gray-500 md:mb-0 mb-5">
              {data?.confusion?.description}
            </p>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}
