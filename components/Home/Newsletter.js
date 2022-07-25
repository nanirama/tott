import Link from "next/link";
import Button from "../../components/Button/index";

export default function Newsletter() {
  return (
    <div className="bg-gray-50 lg:py-24 py-16">
      <div className="max-w-3xl mx-auto justify-center items-center text-center px-4">
        <h2 className="md:text-4xl text-3xl font-semibold text-gray-900 md:tracking-tight mb-5">
          This is a news letter title
        </h2>
        <p className="md:text-xl text-lg font-normal text-gray-500 md:mb-10 mb-8">
          This is a news letter sub title
        </p>
        <form className="flex md:flex-row flex-col max-w-lg mx-auto">
          <div className="flex flex-col mb-2 w-full mr-3">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-lg text-base leading-none text-gray-500 dark:text-white p-3 w-full border border-gray-300 focus:outline-none focus:border-gray-500 shadow mb-2"
              placeholder="Enter your email"
            />
            <p className="text-sm text-gray-500 text-left md:mb-0 mb-2">
              We care about your data in our{" "}
              <Link href="/">
                <a className="underline">privacy policy</a>
              </Link>
              .
            </p>
          </div>
          <div className="mt-3 rounded-lg md:mt-0 sm:flex-shrink-0">
            <Button />
          </div>
        </form>
      </div>
    </div>
  );
}
