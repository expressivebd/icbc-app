import Image from "next/image";
import Link from "next/link";
import React from "react";
import DateComponent from "./date";

// news interface
interface NewsProps {
  id: string;
  title: string;
  image: string;
  href: string;
  date: string;
}

const NewsCard = ({ id, title, image, href, date }: NewsProps) => {
  return (
    <div key={id}>
      <div className="relative h-[140px] w-full">
        <Image
          src={image}
          alt="news"
          fill
          className="rounded-md object-cover object-center"
        />
      </div>

      <h4 className="mt-2 font-montserrat font-bold max-sm:text-sm max-sm:leading-4">
        {title}
      </h4>

      <div className="flex justify-between items-center mt-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
        <button>
          <Link
            href={href}
            className="underline flex gap-4 text-primary text-sm max-sm:text-xs"
          >
            Read more{" "}
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

        <DateComponent dateString={date} />
      </div>
    </div>
  );
};

export default NewsCard;
