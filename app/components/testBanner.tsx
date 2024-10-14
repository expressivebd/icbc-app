"use client";

import { getBannerContent } from "@/lib/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface BannerItem {
  contentName: string;
  bannerText: string;
  bannerPhoto: {
    url: string;
  };
}
const Banner: React.FC = () => {
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBannerContent();
        setBanners(data);
      } catch (error) {
        console.error("Error fetching banner content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="h-[400px]"></div>;
  }

  if (!banners || banners.length === 0) {
    return <div className="h-[40px]">No banners available</div>;
  }

  return (
    <div className="carousel">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem>
              <div
                key={index}
                className="carousel-item relative h-28 md:h-[400px]"
              >
                <img
                  src={banner.bannerPhoto.url}
                  alt={banner.contentName}
                  className="object-cover object-center rounded-xl max-sm:rounded-xl w-full h-28 md:h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
                <h3 className="absolute inset-0 flex items-center justify-center font-montserrat font-bold text-4xl max-sm:text-xl text-white">
                  {banner.bannerText}
                </h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Banner;
