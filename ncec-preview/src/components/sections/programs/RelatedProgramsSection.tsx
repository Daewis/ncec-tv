import image1 from "../../../assets/programs/iconsRelatedProgram/image1.png";
import image2 from "../../../assets/programs/iconsRelatedProgram/image2.png";
import image3 from "../../../assets/programs/iconsRelatedProgram/image3.png";
import iconStudy from "../../../assets/programs/iconsRelatedProgram/icon1.svg";
import iconWorship from "../../../assets/programs/iconsRelatedProgram/icon2.svg";
import iconOutreach from "../../../assets/programs/iconsRelatedProgram/icon3.svg";
import iconArrow from "../../../assets/programs/iconsRelatedProgram/icon4.svg";

interface RelatedProgram {
  category: string;
  icon: string;
  image: string;
  title: string;
  description: string;
  href: string;
}

const relatedPrograms: RelatedProgram[] = [
  {
    category: "STUDY",
    icon: iconStudy,
    image: image1,
    title: "Word Encounter",
    description:
      "A deep dive into scripture focusing on practical application for modern believers.",
    href: "/programs/word-encounter",
  },
  {
    category: "WORSHIP",
    icon: iconWorship,
    image: image2,
    title: "Night of Praise",
    description:
      "An evening dedicated entirely to uplifting music and collective gratitude.",
    href: "/programs/night-of-praise",
  },
  {
    category: "OUTREACH",
    icon: iconOutreach,
    image: image3,
    title: "Community Impact",
    description:
      "Taking the light of faith into local neighborhoods through practical service.",
    href: "/programs/community-impact",
  },
];

export const RelatedProgramsSection = () => {
  return (
    <section className="w-full border-t border-[#C5C5D3]/30 bg-[#F9F9FF] py-24">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-6">
        
        {/* Section Header */}
        <header className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-[30px] font-semibold leading-[38px] text-[#151C27]">
              Related Programs
            </h2>
            <p className="font-body text-base font-normal leading-6 text-[#444651]">
              Continue your journey with these complementary gatherings.
            </p>
          </div>

          <a
            href="/programs"
            className="inline-flex items-center gap-1 font-body text-sm font-semibold tracking-[0.7px] leading-5 text-[#00236F] transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00236F]"
          >
            <span>View All Programs</span>
            <img
              src={iconArrow}
              alt=""
              aria-hidden="true"
              className="h-[9.33px] w-[9.33px] object-contain"
            />
          </a>
        </header>

        {/* Program Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedPrograms.map((program) => (
            <a
              key={program.title}
              href={program.href}
              className="group flex flex-col overflow-hidden rounded-lg border border-[#C5C5D3]/50 bg-white no-underline transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00236F]"
            >
              {/* Card Image */}
              <div className="h-48 w-full overflow-hidden bg-gray-100">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col gap-2 p-6">
                {/* Category & Icon */}
                <div className="flex items-center gap-2">
                  <img
                    src={program.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-3 w-auto object-contain"
                  />
                  <span className="font-body text-xs font-normal uppercase leading-4 tracking-[0.6px] text-[#00236F]">
                    {program.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="pt-1 font-heading text-2xl font-semibold leading-8 text-[#151C27]">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="font-body text-base font-normal leading-6 text-[#444651]">
                  {program.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};