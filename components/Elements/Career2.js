// const tabs = [
//   { name: "View All", href: "#", current: true },
//   { name: "Design", href: "#", current: false },
//   { name: "Software Engineering", href: "#", current: false },
//   { name: "Customer Success", href: "#", current: false },
//   { name: "Sales", href: "#", current: false },
//   { name: "Marketing", href: "#", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }
import Link from "next/link";
export default function Career2({ openPositions }) {
  const { heading, description, jobs } = openPositions;
  return (
    <div className="lg:py-14 py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col">
        <h2 className="md:text-4xl text-3xl font-semibold tracking-tight md:mb-6 mb-4 text-center">
          {heading}
        </h2>
        <p className="text-xl text-gray-500 leading-8 text-center">
          {description}
        </p>
        <div className="py-10">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
              id="tabs"
              name="tabs"
              className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              defaultValue="All"
            >
              {jobs?.data?.map(({ id, attributes: { department } }) => (
                <option key={id}>{department?.data?.attributes?.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="flex space-x-4 justify-center" aria-label="Tabs">
              <a className="bg-gray-100 text-gray-700 px-3 py-2 font-medium text-sm rounded-md">
                All
              </a>
              {jobs?.data?.map(({ id, attributes: { department } }) => (
                <a
                  key={id}
                  className="px-3 py-2 font-medium text-sm rounded-md"
                  //   href={tab.href}
                  //   className={classNames(
                  //     tab.current
                  //       ? "bg-gray-100 text-gray-700"
                  //       : "text-gray-500 hover:text-gray-700",
                  //     "px-3 py-2 font-medium text-sm rounded-md"
                  //   )}
                  //   aria-current={tab.current ? "page" : undefined}
                >
                  {department?.data?.attributes?.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {jobs?.data?.map(
          ({
            id,
            attributes: {
              title,
              short_description,
              isThisJobIsRemote,
              type,
              department,
            },
          }) => (
            <div
              className="border border-slate-200 p-5 rounded-lg mb-5"
              key={id}
            >
              <p className="text-sm font-semibold mb-2">
                {department?.data?.attributes?.name}
              </p>
              <div className="flex gap-3 sm:flex-row flex-col mb-3">
                <h5 className="font-medium lg:text-lg">{title}</h5>
                <div className="flex sm:justify-between sm:grow gap-3">
                  <a
                    href="#"
                    className="flex items-center justify-between gap-1 bg-cyan-100 rounded-2xl p-1 w-auto text-blue-700 text-xs font-medium py-1 px-2"
                  >
                    <svg
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="3" cy="3" r="3" fill="#2E90FA" />
                    </svg>{" "}
                    {department?.data?.attributes?.name}
                  </a>
                  <div>
                    <a
                      href="#"
                      className="hidden lg:flex gap-2 items-center w-auto text-gray-700 text-sm font-medium "
                    >
                      View job{" "}
                      <svg
                        width="11"
                        height="12"
                        viewBox="0 0 11 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.83301 10.1666L10.1663 1.83325M10.1663 1.83325H1.83301M10.1663 1.83325V10.1666"
                          stroke="#323232"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <p className="font-normal text-left text-gray-500 text-base mb-5">
                {short_description}
              </p>
              <div className="flex flex-row gap-5">
                {isThisJobIsRemote && (
                  <p className="text-base text-gray-500 font-medium  flex gap-2 items-center">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.33337C16.5 14.1667 9 19.1667 9 19.1667C9 19.1667 1.5 14.1667 1.5 8.33337C1.5 6.34425 2.29018 4.4366 3.6967 3.03007C5.10322 1.62355 7.01088 0.833374 9 0.833374C10.9891 0.833374 12.8968 1.62355 14.3033 3.03007C15.7098 4.4366 16.5 6.34425 16.5 8.33337Z"
                        stroke="#98A2B3"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 10.8334C10.3807 10.8334 11.5 9.71409 11.5 8.33337C11.5 6.95266 10.3807 5.83337 9 5.83337C7.61929 5.83337 6.5 6.95266 6.5 8.33337C6.5 9.71409 7.61929 10.8334 9 10.8334Z"
                        stroke="#98A2B3"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    Remote
                  </p>
                )}
                {type && (
                  <p className="text-base text-gray-500 font-medium flex gap-2 items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0003 5.00033V10.0003L13.3337 11.667M18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003Z"
                        stroke="#98A2B3"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    Full-time
                  </p>
                )}
              </div>
            </div>
          )
        )}

        {/* <div className="border border-slate-200 p-5 rounded-lg mb-5">
          <p className="text-sm font-semibold mb-2">Marketing</p>
          <div className="flex gap-3 sm:flex-row flex-col mb-3">
            <h5 className="font-medium lg:text-lg">SEO Marketing Manager</h5>
            <div className="flex sm:justify-between sm:grow gap-3">
              <a
                href="#"
                className="flex items-center justify-between gap-1 bg-cyan-100 rounded-2xl p-1 w-auto text-blue-700 text-xs font-medium py-1 px-2"
              >
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#2E90FA" />
                </svg>{" "}
                Design
              </a>
              <div>
                <a
                  href="#"
                  className="hidden lg:flex gap-2 items-center w-auto text-gray-700 text-sm font-medium "
                >
                  View job{" "}
                  <svg
                    width="11"
                    height="12"
                    viewBox="0 0 11 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.83301 10.1666L10.1663 1.83325M10.1663 1.83325H1.83301M10.1663 1.83325V10.1666"
                      stroke="#323232"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="font-normal text-left text-gray-500 text-base mb-5">
            we&lsquo;re looking for a mid-level product desgner to join our
            team.
          </p>
          <div className="flex flex-row gap-5">
            <p className="text-base text-gray-500 font-medium  flex gap-2 items-center">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.33337C16.5 14.1667 9 19.1667 9 19.1667C9 19.1667 1.5 14.1667 1.5 8.33337C1.5 6.34425 2.29018 4.4366 3.6967 3.03007C5.10322 1.62355 7.01088 0.833374 9 0.833374C10.9891 0.833374 12.8968 1.62355 14.3033 3.03007C15.7098 4.4366 16.5 6.34425 16.5 8.33337Z"
                  stroke="#98A2B3"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 10.8334C10.3807 10.8334 11.5 9.71409 11.5 8.33337C11.5 6.95266 10.3807 5.83337 9 5.83337C7.61929 5.83337 6.5 6.95266 6.5 8.33337C6.5 9.71409 7.61929 10.8334 9 10.8334Z"
                  stroke="#98A2B3"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              Remote
            </p>
            <p className="text-base text-gray-500 font-medium flex gap-2 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0003 5.00033V10.0003L13.3337 11.667M18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003Z"
                  stroke="#98A2B3"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              Full-time
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
