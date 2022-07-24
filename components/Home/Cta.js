import Link from "next/link";

const buttonClasses = {
  active:
    "md:w-auto w-full inline-block bg-green-400 md:mr-3 md:mt-0 mt-4 items-center justify-center px-5 py-3 text-white sm:text-base text-sm font-medium border border-green-400 rounded-lg",
  inActive:
    "md:w-auto w-full inline-block bg-white md:mr-3 md:mt-0 mt-4 items-center justify-center px-5 py-3 border border-slate-300 text-gray-700 text-base font-medium rounded-lg",
};

export default function Cta({ data }) {
  const { heading, description, action_buttons: buttons } = data;
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-slate-50 rounded-2xl md:py-14 lg:px-10 py-8 px-3 flex md:flex-row flex-col mb-10">
        <div className="md:w-1/2 px-4">
          {heading && (
            <h2 className="text-3xl font-semibold mb-3">{heading}</h2>
          )}
          {description && (
            <p className="text-xl font-normal text-gray-500 md:mb-0 mb-6">
              {description}
            </p>
          )}
        </div>
        <div className="md:w-1/2 px-4 flex items-center justify-end">
          {buttons?.map((button, index) => (
            <div
              className="flex md:flex-row flex-col md:justify-end justify-start text-center"
              key={index}
            >
              <Link href={button.button_url}>
                <a
                  href="/start"
                  target="_blank"
                  rel="noopener noreferrer"
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
