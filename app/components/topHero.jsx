import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
const topHero = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div className="relative">
            <Image
              src="/home-hero.jpg"
              alt="hero"
              width={1920}
              height={500}
              className="object-cover object-center rounded-[30px] max-sm:rounded-xl"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>

            <h3 className="absolute inset-0 flex items-center justify-center font-montserrat font-bold text-4xl max-sm:text-xl text-white">
              শিশুরাই রত্ন, করব যত্ন
            </h3>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative">
            <Image
              src="/home-hero.jpg"
              alt="hero"
              width={1920}
              height={500}
              className="object-cover object-center rounded-[30px] max-sm:rounded-xl"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>

            <h3 className="absolute inset-0 flex items-center justify-center font-montserrat font-bold text-4xl max-sm:text-xl text-white">
              শিশুরাই রত্ন, করব যত্ন
            </h3>
          </div>
        </CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default topHero;
