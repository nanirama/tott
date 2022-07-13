import { React, useState, useEffect } from "react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Button = (props) => {
  const [webValue, setWebValue] = useState(false);

  useEffect(() => {}, [webValue]);

  return (
    <Link href={props.email ? `/join?email=${props.email}` : `/join`}>
      <a className="w-auto inline-block rounded-lg text-white text-center flex items-center justify-center sm:text-base text-sm font-medium bg-green-400 border border-green-400 py-2 sm-px-1 px-5">
        Start Free Trial
      </a>
    </Link>
  );
};

export default Button;
