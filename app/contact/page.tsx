import React from "react";
import { HeroSection } from "../media/page";

const page = () => {
  return (
    <div className="container mx-auto pt-[7rem] max-sm:pt-[4rem]">
      <div className="container mx-auto px-6 xl:px-16 flex justify-center mt-10">
        <HeroSection title="Contact Us" img="/cover-contact.jpg" />
      </div>

      <section className="px-6 xl:px-16 section-gap max-w-[900px] mx-auto">
        <h2 className="font-montserrat font-bold text-secondary text-4xl max-sm:text-xl">
          For further information please contact
        </h2>

        <div className="bg-[#DDF5FF] p-6 max-sm:p-3 rounded-md mt-6">
          <h4>Project Director</h4>
          <p>
            Integrated Community Based Center for Child Care, Protection and
            Swim - Safe Facilities (ICBC) Project. Bangladesh Shishu Academy
            Doyel Chattar Road, Shabag, Dhaka- 1000
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
