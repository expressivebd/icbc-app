import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  url: string;
}

const ButtonComponent = ({ text, url }: ButtonProps) => {
  return (
    <button className="bg-white py-2 px-5 rounded-2xl mt-4 lg:mt-8 text-sm">
      <Link href={url} className="flex gap-2">
        {text}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </Link>
    </button>
  );
};

export default ButtonComponent;
