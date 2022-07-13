import Link from "next/link";

export default function Example({ data }) {
  // const { title, sub_title, action_buttons } = data;
  const buttonClasses = {
    active:
      "md:w-auto w-full inline-block bg-green-400 md:mr-3 md:mt-0 mt-4 items-center justify-center px-5 py-3 text-white sm:text-base text-sm font-medium border border-green-400 rounded-lg",
    inActive:
      "md:w-auto w-full inline-block bg-white md:mr-3 md:mt-0 mt-4 items-center justify-center px-5 py-3 border border-slate-300 text-gray-700 text-base font-medium rounded-lg",
  };

  return (
    <div className="bg-gray-50 mt-16">
      <div className="max-w-7xl mx-auto py-12 md:py-14 lg:py-24 px-4">
        <h6 className="sm:text-base text-sm font-semibold mb-3">FAQs</h6>
        <div className="flex justify-between md:flex-row flex-col md:mb-12 mb-8">
          <h2 className="xl:text-5xl md:text-4xl text-3xl md:mb-0 mb-4 font-semibold tracking-tight text-gray-900">
            {data?.title}
          </h2>
          <p className="lg:text-xl text-base text-gray-500 mb-0">
            {data?.sub_title}
          </p>
        </div>
        <div className="mt-8 flex md:flex-row flex-col-reverse">
          {data?.action_buttons?.map((button, index) => (
            <div key={index}>
              <Link href={button.button_url}>
                <a
                  className={
                    !button.is_active
                      ? buttonClasses.inActive
                      : buttonClasses.active
                  }
                >
                  {button.button_text}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
