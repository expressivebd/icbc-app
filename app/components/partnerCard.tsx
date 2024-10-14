import React from "react";

interface PartnerCardProps {
  imageUrl: string;
  text: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ imageUrl, text }) => {
  return (
    <div className="md:w-72 h-96 md:h-72  bg-white rounded-xl hover:shadow-2xl hover:scale-[1.02] duration-300 mx-4">
      <img
        src={imageUrl}
        alt={text}
        className="rounded-t-xl w-full h-52 md:h-[160px] object-cover"
      />
      <h2 className="p-4 text-primary font-semibold ">{text}</h2>
    </div>
  );
};

export default PartnerCard;
