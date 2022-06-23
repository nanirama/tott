export default function ContactForm() {
    return (
<form>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3 md:mb-6 mb-4">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First name"
                autoComplete="given-name"
                className="mt-1.5 py-3 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm border border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6 sm:col-span-3 md:mb-6 mb-4">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last name"
                autoComplete="family-name"
                className="mt-1.5 py-3 px-3 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm text-sm border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="md:mb-6 mb-4">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1.5 py-3 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-sm border border-gray-300 rounded-lg"
              placeholder="you@company.com"
              aria-describedby="email-description"
            />
          </div>
          <div className="md:mb-6 mb-4">
            <label htmlFor="phone-number" className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="mt-1.5 relative rounded-lg shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-1 border-transparent bg-transparent text-gray-900 text-sm rounded-lg"
                >
                  <option>US +1 </option>
                  <option>CA +1</option>
                  <option>EU +1</option>
                </select>
              </div>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                className="px-3 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-20 text-sm border border-gray-300 rounded-lg"
                placeholder="(555) 987-6543"
              />
            </div>
          </div>
          <div className="md:mb-6 mb-4">
            <label htmlFor="comment" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={4}
              name="comment"
              id="comment"
              placeholder="Leave us a message..."
              className="mt-1.5 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 h-32 p-3 w-full text-sm border border-gray-300 rounded-lg"
              defaultValue={''}
            />
          </div>
          <div className="relative flex items-center md:mb-10 mb-5">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="comments" className="font-medium text-gray-500 ml-3 text-base">
              You agree to our friendly <a href="#" className="underline">privacy policy.</a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full text-center bg-green-400 border border-transparent rounded-lg shadow-sm py-3 px-4 inline-flex justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send message
          </button>
        </form>
    )
}