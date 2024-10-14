"use client";
import React, { useEffect, useState } from "react";
import PartnerCard from "./partnerCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getNgoEvents } from "@/lib/api";

interface NgoEvent {
  eventHeader: string;
  eventPhoto: {
    url: string;
  };
}

const NgoEvents: React.FC = () => {
  const [events, setEvents] = useState<NgoEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getNgoEvents();
        setEvents(fetchedEvents || []);
      } catch (error) {
        console.error("Error fetching NGO events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="section-gap bg-primary">
      <div className="container mx-auto px-6 xl:px-16">
        <h2 className="font-montserrat font-bold text-3xl max-sm:text-xl text-white">
          Activities of Our Partners
        </h2>
        <div className="px-12 py-4">
          <Carousel>
            <CarouselContent>
              {events.length === 0 ? (
                <p className="text-white font-semibold text-2xl text-center">
                  No events found
                </p>
              ) : (
                events.map((event, index) => (
                  <CarouselItem key={index} className="lg:basis-1/3 py-8">
                    <PartnerCard
                      imageUrl={event.eventPhoto.url}
                      text={event.eventHeader}
                    />
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default NgoEvents;
