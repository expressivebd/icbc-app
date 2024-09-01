import Image from "next/image";

// interface
interface HeroComponentProps {
  titleUp: string;
  titleDown: string;
  titleh4?: string;
  description: string;
  image: string;
}

const HeroComponent = ({
  titleUp,
  titleDown,
  titleh4,
  description,
  image,
}: HeroComponentProps) => {
  return (
    <section className="bg-primary grid grid-cols-12 max-sm:grid-cols-1">
      <div className="col-span-5 px-8 md:px-14 xl:px-24 my-auto mx-auto">
        <div className="py-28 max-sm:py-12">
          <h2 className="uppercase font-montserrat font-bold text-4xl max-sm:text-3xl text-white">
            {titleUp}
            <br />
            {titleDown}
          </h2>

          <h4 className="mt-2 text-lg leading-6 text-white font-istok">
            {titleh4}
          </h4>

          <p className="mt-12 text-white">{description}</p>
        </div>
      </div>

      <div className="col-span-7 relative h-[200px] md:h-[700px] xl:h-[600px]">
        <Image
          src={image}
          alt="ICBC Project"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};

HeroComponent.defaultProps = {
  titleUp: "Default Title Up",
  titleDown: "Default Title Down",
  description: "Default Description",
  image: "/about-leadership.jpg",
};

export default HeroComponent;
