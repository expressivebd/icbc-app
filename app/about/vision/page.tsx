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
            active
          />
          <ButtonCard
            title="LEADERSHIP"
            title2="INITIATIVES"
            imgSrc="/who-about.jpg"
            href="/about/leadership"
          />
        </div>
      </section>

      {/*Project background */}
      <HeroComponent
        titleUp="Project"
        titleDown="Goal"
        description="Children have equitable access to quality early childhood
              development, education, and care to thrive and develop to their
              full potential and are safe and protected from preventable
              premature deaths."
        image="/about-background-3.jpg"
      />

      {/* Vision section */}
      <section className="bg-[#FFECEC] grid grid-cols-12 max-sm:grid-cols-1">
        <div className="p-8 xl:px-28 mx-auto my-auto col-span-7">
          <div className="py-28 max-sm:py-2">
            <p className="text-lg text-secondary">
              A nation where all children have equitable access to quality early
              childhood care, education, protection and grow up to be healthy
              and intelligent adults contributing to the architecture of a smart
              and prosperous Bangladesh.
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <h4 className="font-bold font-montserrat mb-2 text-secondary">
              Values & Principles
            </h4>

            <p>
              It is crucial to keep the core values/principles of the vision in
              mind whenever designing the project activities.
            </p>
          </div>
        </div>

        <div className="col-span-5 relative h-[720px]">
          <Image
            src="/values-pic.jpg"
            alt="icbc"
            fill
            className="object-cover object-center"
          />
        </div>
      </section>
    </div>
  );
};

export default page;
