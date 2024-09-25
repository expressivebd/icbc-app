import { getAllPosts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DateComponent from "../components/date";

interface heroSecPros {
  title: string;
  img: string;
}

const HeroSection: React.FC<heroSecPros> = ({ title, img }) => {
  return (
    <div className="relative max-w-[1046px] rounded-md">
      <Image
        src={img}
        width={1046}
        height={350}
        alt="ICBC"
        className="rounded-md"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
      <h1 className="absolute inset-0 flex justify-center items-center font-montserrat font-bold text-4xl max-sm:text-2xl text-white">
        {title}
      </h1>
    </div>
  );
};

// news card section
interface cardPros {
  id: string;
  img: string;
  title: string;
  date: string;
  href: string;
}

const NewsCard = ({ id, img, title, date, href }: cardPros) => {
  return (
    <Link key={id} href={href}>
      <div className="max-w-[360px] max-sm:w-full border rounded-md p-4 bg-white">
        <div className="w-full h-[240px] bg-slate-100 relative">
          <Image
            src={img}
            fill
            alt=""
            className="object-cover object-center rounded-md"
          />
        </div>

        <h3 className="font-montserrat font-semibold text-lg max-sm:text-base mt-6 mb-2">
          {title}
        </h3>

        <DateComponent dateString={date} />
      </div>
    </Link>
  );
};

const page = async () => {
  const allPosts = await getAllPosts(false);

  // Sort posts by date (newest first)
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="pt-[7rem] max-sm:pt-[4rem] bg-[#DDF5FF]">
      {/* hero section */}
      <section className="container mx-auto px-6 xl:px-16 flex justify-center mt-10">
        <HeroSection title="Events and Workshops" img="/cover-project.jpg" />
      </section>

      {/* card section */}
      <section className="container mx-auto px-6 xl:px-16 flex justify-center">
        {/* fetch allpost */}
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5 max-sm:gap-4 justify-center section-gap">
          {sortedPosts &&
            sortedPosts.map((post) => {
              const { _id, title, coverImage, date, slug } = post;

              return (
                <NewsCard
                  id={_id}
                  img={coverImage.url}
                  title={title}
                  date={date}
                  href={`/project/${slug}`}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default page;
