import React from "react";

const partnerCard = () => {
  return (
    <div className="md:w-72 h-96 md:h-72 mx-auto bg-[rgba(255,255,255,0.3)] rounded-xl">
      <img
        src="http://localhost:3000/_next/image?url=%2Fproject-home-2nd-right.jpg&w=750&q=75"
        alt=""
        className="rounded-t-xl"
      />
      <h2 className="p-4 text-white font-semibold">
        জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। This is a sample text.
      </h2>
    </div>
  );
};

export default partnerCard;
