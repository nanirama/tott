import ImgLoader from "../Image";
import Author from "../../assets/images/avatar-group.png";
import Button from "../../components/Button/index";

export default function FaqSection2({ data }) {
  return (
    <div className="bg-gray-50 mt-14 md:py-20 py-14">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="md:text-4xl text-3xl font-semibold text-gray-900 md:tracking-tight mb-5 text-center">
          {data?.heading}
        </h2>
        <p className="md:text-xl text-lg font-normal text-gray-500 md:mb-16 mb-8 text-center">
          {data?.description}
        </p>

        {data?.questions?.map((faq, index) => (
          <details className="border-b-2 py-4 mb-3" key={index}>
            <summary className="text-gray-900 font-medium cursor-pointer mb-3 text-lg leading-5 pr-8">
              {faq.heading}
            </summary>
            <p className="text-gray-500 text-base font-normal mb-3 pr-8">
              {faq.description}
            </p>
          </details>
        ))}
      </div>
      <div className="max-w-7xl mx-auto md:mt-10 mt-8 px-4">
        <div className="bg-white py-8 md:px-8 px-5 rounded-2xl">
          <div className="max-w-3xl mx-auto justify-center items-center text-center">
            <ImgLoader src={Author} width={120} height={56} alt="" />
            <h4 className="text-xl text-gray-900 font-medium md:mt-6 mt-4 mb-3">
              Still have questions?
            </h4>
            <p className="md:text-lg text-base text-gray-500 md:mb-8 mb-4">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
            <div className="md:w-auto w-full inline-block">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
