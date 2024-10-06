import { getAllPosts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import ButtonComponent from "./components/button";
import NewsCard from "./components/newsCard";

const stats = [
  {
    title: "200k",
    heading: "Children",
    description: "children aged 1-5 across 8000 Child Care Centers",
    description2: "",
  },
  {
    title: "360k",
    heading: "Swim-Safe Facilities",
    description: "children aged 6-10 through 1600 Swim-Safe Facilities",
    description2: "",
  },
  {
    title: "200k",
    heading: "Positive Parenting",
    description: "children parents are educated on positive parenting",
    description2: "",
  },
  {
    title: "16k",
    heading: "Empowering Women",
    description: "women are employed and more exposured to networking",
    description2: "",
  },
  {
    title: "Training of Trainers (ToT)",
    heading: "",
    description:
      "ECCD Officers and Supervisors in all 16 Implementing Districts and 45 Upazilas",
    description2: "",
  },
  {
    title: "Basic Training",
    heading: "",
    description:
      "- 16,000 Caregivers and Assistant Caregivers across 8000 Child Care Centers",
    description2:
      "- Swimming Instructors and Swimming Supervisors in all 16 Implementing Districts and 45 Upazilas",
  },
];

export default async function Page() {
  const allPosts = await getAllPosts(false);

  return (
    <div className="pt-[7rem] max-sm:pt-[4rem]">
      {/* hero section */}
      <section className="container mx-auto px-6 xl:px-16 py-4">
        {/* image */}
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

        {/* headline and logos */}
        <div className="grid grid-cols-12 max-sm:flex max-sm:flex-col py-8 gap-8">
          <div className="col-span-8 lg:pr-[8rem] md:border-r-2 border-[#DDF5FF]">
            <h1 className="font-montserrat text-2xl max-sm:text-lg text-primary font-bold">
              সমাজভিত্তিক সমন্বিত শিশুযত্ন কেন্দ্রের মাধ্যমে শিশুর প্রারম্ভিক
              বিকাশ ও সুরক্ষা এবং সাঁতার সুবিধা প্রদান (আইসিবিসি) প্রকল্প
            </h1>

            <h3 className="mt-4 font-istok text-xl max-sm:text-base text-secondary">
              Integrated Community Based Center for Child Care, Protection and
              Swim-Safe Facilities (ICBC) Project
            </h3>
          </div>

          <div className="col-span-4 max-sm:h-[80px] max-sm:w-4/5 relative max-sm:mx-auto">
            <Image
              src="/partner-logo.svg"
              alt="logo"
              fill
              className="object-center"
            />
          </div>
        </div>
      </section>

      {/* about section */}
      <section className="bg-primary">
        {/* stat */}
        <div className="container mx-auto px-6 xl:px-16 grid grid-cols-12 max-sm:flex max-sm:flex-col items-center">
          <div className="container col-span-3 mx-auto section-gap">
            <h2 className="font-montserrat font-bold text-2xl text-white">
              Our Interventions <br /> and Reach
            </h2>

            <ButtonComponent text="Learn More" url="/project" />
          </div>

          <div className="col-span-9 pb-8 md:pb-0">
            <div className="grid grid-cols-3 py-8 gap-2 gap-y-6 max-sm:grid max-sm:grid-cols-2 max-sm:gap-x-0 max-sm:gap-y-6">
              {stats.map((obj, index) => {
                return (
                  <div
                    key={index}
                    className={`border-r-2 border-[#DDF5FF] last:border-r-0 md:px-8 px-4 max-sm:my-auto ${
                      index === 1 ? "max-sm:border-r-0" : ""
                    }`}
                  >
                    <h3 className="font-montserrat text-3xl max-sm:text-2xl font-bold text-white">
                      {obj.title}
                    </h3>

                    <h4 className="text-slate-200 text-lg font-montserrat font-semibold mt-2">
                      {obj.heading}
                    </h4>
                    <p className="text-slate-300 mt-2">{obj.description}</p>
                    <p className="text-slate-300 mt-2">{obj.description2}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Intigraty community section */}
      <section className="bg-[#DDF5FF]">
        <div className="container mx-auto px-6 xl:px-16 grid grid-cols-12 max-sm:flex max-sm:flex-col gap-20 max-sm:gap-10 section-gap">
          <div className="flex flex-col gap-8 max-sm:gap-4 col-span-5">
            <Image src="/about-01.jpg" alt="about" width={536} height={200} />
            <Image src="/about-02.jpg" alt="about" width={536} height={200} />
          </div>

          <div className="col-span-7">
            <h2 className="font-montserrat font-bold text-3xl max-sm:text-xl text-[#005073]">
              The Integrated Community Based Center for Child Care, Protection
              and Swim-Safe Facilities (ICBC).
            </h2>

            <p className="text-secondary mt-8 text-lg max-sm:text-base">
              ICBC Project is a Bangladesh Government Project aimed at providing
              integrated early childhood care, development, and protection
              support to children across 45 selected upazilas in 16 districts of
              Bangladesh. It also includes positive parenting services for
              families of small children.
            </p>

            <ButtonComponent text="Learn More" url="/about" />
          </div>
        </div>
      </section>

      {/* Project Brief Section */}
      <section className="bg-[#FFF2E8] section-gap">
        {/* upper row */}
        <div className="container mx-auto px-6 xl:px-16 grid grid-cols-12 gap-8 max-sm:flex max-sm:flex-col section-gap items-center">
          <p className="col-span-5 text-secondary text-lg max-sm:text-base">
            Bangladesh Shishu Academy is the implementing agency of the ICBC
            Project under the leadership of the Ministry of Women and Children
            Affairs. The project activities are being implemented at field level
            by experienced NGOs across 45 selected Upazilas in 16 districts of
            Bangladesh.
          </p>

          <div className="col-span-7 relative w-full h-[200px] md:h-[350px] bg-slate-100">
            <Image
              src="/project-home.jpg"
              layout="fill"
              alt="project-brief"
              className="object-cover object-center rounded-md"
            />
          </div>
        </div>

        {/* lower row */}
        <div className="container mx-auto px-6 xl:px-16 grid grid-cols-12 gap-6 max-sm:flex max-sm:flex-col">
          {/* left side */}
          <div className="col-span-6">
            <div className="relative h-[200px] lg:h-[400px] mb-4">
              <Image
                src="/project-home-2nd-left.png"
                alt="project-brief"
                fill
                className="rounded-md"
              />
            </div>

            <p className="col-span-5 text-secondary text-lg max-sm:text-base">
              On 22 February, the Executive Committee of the National Economic
              Council (ECNEC) approved the ICBC Project. On June 12, 2022 the
              Project was formally launched by the Ministry of Women and
              Children Affairs.
            </p>
          </div>

          {/* right side */}
          <div className="col-span-6 max-sm:flex max-sm:flex-col max-sm:gap-4">
            <p className="col-span-5 text-secondary text-lg max-sm:order-2 max-sm:text-base">
              The ICBC Project selected seven national NGOs after a rigorous
              procurement process for field implementation across 16 districts
              and recently completed orientation of NGOs and essential trainings
              more+
            </p>

            <Image
              src="/project-home-2nd-right.jpg"
              alt="project-brief"
              width={650}
              height={400}
              className="mt-4 rounded-md"
            />
          </div>
        </div>
      </section>

      {/* News and Updates */}
      <section className="container mx-auto px-6 xl:px-16 section-gap">
        {/* headline */}
        <div className="flex gap-16 max-sm:flex-col max-sm:gap-4">
          <h2 className="font-montserrat font-bold text-3xl max-sm:text-xl text-[#005073]">
            News and Updates
          </h2>

          <div>
            <p>
              Stay informed about the latest developments <br /> in our project
            </p>

            <button className="bg-[#005073] py-2 px-5 rounded-2xl mt-4 text-sm">
              <Link href="/project" className="flex gap-2 text-white">
                View All{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
            </button>
          </div>
        </div>

        {/* news card */}
        <div className="md:flex gap-6 mt-16 max-sm:mt-12">
          {allPosts &&
            allPosts.slice(0, 3).map((post) => {
              const { _id, title, coverImage, date, slug } = post;
              return (
                <NewsCard
                  id={_id}
                  title={post.title}
                  image={coverImage.url}
                  href={`/project/${slug}`}
                  date={date}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
}
