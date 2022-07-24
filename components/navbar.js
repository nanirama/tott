import { React, useState, Fragment } from "react";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "../lib/api";
import Logo from "./Logo";
import { Menu, Transition } from "@headlessui/react";

import Button from "../components/Button/index";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function MobileNav({ data, error, open, setOpen }) {
  if (error) <p>Loading failed...</p>;
  if (!data) <p>Loading ...</p>;

  const menuItems =
    data && data.menus && data.menus[0] && data.menus[0].items
      ? data.menus[0].items
      : [];
  const primaryMenuItems = menuItems.filter((item) => {
    return item.parent === null;
  });
  const subMenuItems = menuItems.filter((item) => {
    return item.parent !== null;
  });

  return (
    <div
      className={` z-50 absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out filter`}
    >
      <div className="flex items-center justify-start px-4 filter drop-shadow-md bg-white h-16">
        <Logo />
      </div>
      <div className="flex flex-col p-2 bg-white border">
        {primaryMenuItems.length > 0 ? (
          <Menu as="div" className="relative text-left flex flex-col">
            {primaryMenuItems.map((item, index) => {
              const itemSubMenuItems = subMenuItems.filter((sub) => {
                return sub.parent.id === item.id;
              });

              if (itemSubMenuItems.length > 0) {
                return (
                  <div className="relative inline-block text-left">
                    <Menu>
                      {({ open }) => (
                        <>
                          <span className="rounded-md shadow-sm">
                            <Menu.Button className="mt-4 lg:mt-0 text-gray-500 mr-10 text-base font-medium flex items-center ">
                              <Link href={`${item.url}`}>
                                <a>{item.title}</a>
                              </Link>
                              <svg
                                className="w-5 h-5 ml-2 -mr-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </Menu.Button>
                          </span>
                          <Transition
                            show={open}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              static
                              className="absolute left-0 w-40 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                            >
                              {itemSubMenuItems.map((sub, index) => {
                                return (
                                  <div className="" key={index}>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <Link href={`${sub.url}`}>
                                          <a
                                            className={`${active
                                              ? "bg-gray-100 text-gray-900"
                                              : "text-gray-700"
                                              } flex justify-between w-full px-4 py-3 text-sm leading-5 text-left`}
                                          >
                                            {sub.title}
                                          </a>
                                        </Link>
                                      )}
                                    </Menu.Item>
                                  </div>
                                );
                              })}
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                );
              } else {
                return (
                  <Menu.Item>
                    <Link href={`${item.url}`}>
                      <a
                        className={classNames(
                          "block mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 text-base font-medium"
                        )}
                      >
                        {item.title}
                      </a>
                    </Link>
                  </Menu.Item>
                );
              }
            })}
          </Menu>
        ) : null}
      </div>
    </div>
  );
}

function DesktopNav({ data, error, open, setOpen }) {
  if (error) <p>Loading failed...</p>;
  if (!data) <p>Loading ...</p>;

  const menuItems =
    data && data.menus && data.menus[0] && data.menus[0].items
      ? data.menus[0].items
      : [];
  const primaryMenuItems = menuItems.filter((item) => {
    return item.parent === null;
  });
  const subMenuItems = menuItems.filter((item) => {
    return item.parent !== null;
  });
  if (primaryMenuItems.length > 0) {
    return (
      <Menu as="div" className="relative text-left flex">
        {primaryMenuItems.map((item, index) => {
          const itemSubMenuItems = subMenuItems.filter((sub) => {
            return sub.parent.id === item.id;
          });
          if (itemSubMenuItems.length > 0) {
            return (
              <div className="relative inline-block text-left">
                <Menu>
                  {({ open }) => (
                    <>
                      <span className="rounded-md shadow-sm">
                        <Menu.Button className="mt-4 lg:mt-0 text-gray-500 mr-10 text-base font-medium flex items-center ">
                          <Link href={`${item.url}`}>
                            <a>{item.title}</a>
                          </Link>
                          <svg
                            className="w-5 h-5 ml-2 -mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Menu.Button>
                      </span>
                      <Transition
                        show={open}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="absolute -right-20 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                        >
                          {itemSubMenuItems.map((sub, index) => {
                            return (
                              <div className="" key={index}>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link href={`${sub.url}`}>
                                      <a
                                        className={`${active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700"
                                          } flex justify-between w-full px-4 py-3 text-sm leading-5 text-left`}
                                      >
                                        {sub.title}
                                      </a>
                                    </Link>
                                  )}
                                </Menu.Item>
                              </div>
                            );
                          })}
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            );
          } else {
            return (
              <Menu.Item>
                <Link href={`${item.url}`}>
                  <a
                    className={classNames(
                      "block mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 text-base font-medium"
                    )}
                  >
                    {item.title}
                  </a>
                </Link>
              </Menu.Item>
            );
          }
        })}
      </Menu>
    );
  } else {
    return null;
  }
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const MENU_ENDPOINT = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/menus?filters[slug][$eq]=header&populate=*`;
  const ADMIN_ENDPOINT = `${process.env.NEXT_PUBLIC_APP_URL}/admin`;  
  const { data, error } = useSWR(MENU_ENDPOINT, fetcher);
  const header_menu =
    data && data.menus && data.menus[0] && data.menus[0].items
      ? data.menus[0].items
      : [];

  return (
    <nav className="w-full flex">
      <MobileNav open={open} setOpen={setOpen} data={data} error={error} />

      <div className="w-full block flex-grow flex items-center lg:w-auto float-right lg:flex-row flex-row-reverse sm:gap-5 gap-2">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center lg:hidden cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""
              }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"
              }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
          />
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto flex hidden lg:flex">
          <DesktopNav data={data} error={error} />
        </div>
        <div className="flex justify-end w-full">

          <a href={ADMIN_ENDPOINT}
            className={`flex items-center justify-center inline-block text-sm rounded text-gray-500  py-2.5 md:px-4 px-2 text-base font-medium`}
          >
            Login
          </a>

          {/* <a href="#" onClick={() => setShowModal(true)} className="inline-block sm:text-sm text-xs rounded-lg text-white text-center bg-green-400 py-3 md:px-5 sm:px-2 px-1 font-medium">Start Free Trail</a> */}
          <Button />
        </div>
      </div>
    </nav >
  );
}
