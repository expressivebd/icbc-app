import HeroComponent from "@/app/components/about/hero";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ButtonCardProps {
  title: string;
  title2: string;
  imgSrc: string;
  href: string;
  active?: boolean;
}

// button card
const ButtonCard: React.FC<ButtonCardProps> = ({
  title,
  title2,
  imgSrc,
  href,
  active,
}) => {
  return (
    <Link
      href={href}
      className="w-full h-[150px] max-sm:h-[100px] bg-primary relative rounded-sm"
    >
      {active ? (
        <>
          <div className="w-full h-[150px] max-sm:h-[100px] relative">
            <Image
              src={imgSrc}
              alt="logo"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
        </>
      ) : null}

      <div className="w-2/3 absolute inset-0 flex items-center justify-center mx-auto">
        <h3 className="font-montserrat font-bold text-lg text-white uppercase">
          {title}
          <br />
          {title2}
        </h3>
      </div>
    </Link>
  );
};

const page = () => {
  return (
    <div className="pt-[7rem] max-sm:pt-[4rem]">
      {/* Nav Items */}
      <section className="bg-[#DDF5FF] p-6 max-sm:p-2">
        <div className="container mx-auto px-6 xl:px-16 flex max-sm:grid max-sm:grid-cols-2 gap-4 max-sm:gap-2">
          <ButtonCard
            title="Who"
            title2="We Are"
            imgSrc="/who-about.jpg"
            href="/about"
          />
          <ButtonCard
            title="Project"
            title2="Background"
            imgSrc="/about-background.jpg"
            href="/about/background"
          />

          <ButtonCard
            title="Vision &"
            title2="Values"
            imgSrc="/about-background-3.jpg"
            href="/about/vision"
          />
          <ButtonCard
            title="LEADERSHIP"
            title2="INITIATIVES"
            imgSrc="/about-leadership.jpg"
            href="/about/leadership"
            active
          />
        </div>
      </section>

      {/*Project background */}
      <HeroComponent
        titleUp="Bridging"
        titleDown="Leadership Initiative"
        description="On 1st February 2024 the Hon’ble State Minister, Ministry of Women
              and Children Affairs and the Hon’ble Secretary, Ministry of Women
              and Children Affairs officially launched an innovative leadership
              capacity development initiative under the ICBC Project"
        image="/about-leadership.jpg"
      />

      {/* Paragraph section */}
      <section
        className="bg-[#FFECEC] px-6 md:px-20 xl:px-28 py-8
      "
      >
        <div className="prose-slate prose xl:prose-lg max-w-screen-lg mx-auto py-8">
          <p>
            The ecosystem of ICBC Project is large having multiple stakeholders
            and multisectoral partners, working with NGOs and expanding reach at
            the community level. Given this context, the ICBC Project planners
            recognized that multisectoral and stakeholder action requires a
            different kind of leadership approach, leadership which is more
            inclusive, introspective, and enabling.
            <br />
            Therefore, ICBC Project decided to adopt the innovative capacity
            development program called the Bridging Leadership Initiative. The
            initiative is designed to build collaborative leadership skills
            among national and district level cross sector and interagency
            government officials, implementing NGOs so that the ICBC project’s
            key actors operate with a systems perspective on the issue and
            opportunities, with increased awareness of the self and connection
            with others, trust for each other, deepened shared commitment for
            ECCD action. The concept of bridging leadership was developed by an
            international group of researchers and development practitioners.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
