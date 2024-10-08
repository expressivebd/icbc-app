import React from "react";

interface PartnerCardProps {
  imageUrl: string;
  text: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ imageUrl, text }) => {
  return (
    <div className="md:w-72 h-96 md:h-72 mx-auto bg-[rgba(255,255,255,0.3)] rounded-xl">
      <img src={imageUrl} alt={text} className="rounded-t-xl" />
      <h2 className="p-4 text-white font-semibold">{text}</h2>
    </div>
  );
};

export default PartnerCard;
