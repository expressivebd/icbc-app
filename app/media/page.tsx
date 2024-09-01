import { getElectronicMedia, getPrintMedia } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define the interface for media objects
interface Media {
  _id: string;
  title: string;
  coverImage: {
    url: string;
    title: string;
  };
  url: string;
  date?: string; // Assuming date might be optional
}

interface heroSecPros {
  title: string;
  img: string;
}

export const HeroSection: React.FC<heroSecPros> = ({ title, img }) => {
  return (
    <div className="relative max-w-[1046px]">
      <Image
        src={img}
        width={1046}
        height={350}
        alt=""
        className="rounded-xl"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
      <h1 className="absolute inset-0 flex justify-center items-center font-montserrat font-bold text-4xl text-white">
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
  date?: string;
  href: string;
}

// print media card component
const NewsCard: React.FC<cardPros> = ({ id, img, title, date, href }) => {
  return (
    <Link key={id} href={href} target="_blank">
      <div className="max-w-[360px] border rounded-md p-4">
        <div className="w-full h-[240px] bg-slate-100 relative">
          <Image
            src={img}
            fill
            alt=""
            className="object-cover object-center rounded-md"
          />
        </div>

        <h3 className="font-montserrat font-semibold text-lg max-sm:text-base mt-6">
          {title}
        </h3>

        {date && (
          <p className="text-[#97989F] text-sm pt-5 font-istok">{date}</p>
        )}
      </div>
    </Link>
  );
};

// Youtube media card component
interface Emedia {
  _id: string;
  videoTitle: string;
  videoId: string;
}

const page = async () => {
  const printMedia = await getPrintMedia();
  const electronicMedia = await getElectronicMedia();

  return (
    <div className="pt-[7rem] max-sm:pt-[4rem]">
      {/* hero section */}
      <section className="container mx-auto px-6 xl:px-16 flex justify-center mt-10">
        <HeroSection title="News and Media" img="/cover-media.jpg" />
      </section>

      {/* Electronic Media section */}
      <div className="container mx-auto xl:px-16 mt-12">
        <h2 className="font-bold font-montserrat text-center text-lg md:text-3xl text-secondary bg-[#FFF2E8] p-3 rounded-md">
          Electronic Media
        </h2>
      </div>

      <section className="container mx-auto flex justify-center my-8">
        <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-sm:gap-4 justify-center mx-auto">
          {electronicMedia &&
            electronicMedia.map((emedia: Emedia) => {
              const { _id, videoTitle, videoId } = emedia;

              return (
                <div key={_id} className="aspect-video">
                  <iframe
                    className="h-full w-full rounded-lg"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    width="100%"
                    title="YouTube video player"
                    // frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            })}
        </div>
      </section>

      {/* Print Media section */}
      <div className="container mx-auto xl:px-16 mt-12">
        <h2 className="font-bold font-montserrat text-center text-lg md:text-3xl text-secondary bg-[#DDF5FF] p-3 rounded-md">
          Print Media
        </h2>
      </div>
      <section className="container mx-auto flex justify-center my-8">
        <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-sm:gap-4 justify-center">
          {printMedia &&
            printMedia.map((media: Media) => {
              const { _id, title, coverImage, url } = media;
              return (
                <NewsCard
                  id={_id}
                  img={coverImage.url}
                  title={title}
                  href={url}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default page;
