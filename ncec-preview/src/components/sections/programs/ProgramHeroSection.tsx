import breadcrumbIcon from "../../../assets/programs/icons-programs/hero.png";

const programLabels = ["PROGRAM", "WORSHIP"];

interface ProgramHeroSectionProps {
  image: string;
  title: string;
  description: string;
}

export const ProgramHeroSection = ({ image, title, description }: ProgramHeroSectionProps) => {
  return (
    <section
      aria-labelledby="program-hero-title"
      className="relative flex h-[600px] w-full max-h-[600px] items-end justify-center overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img className="h-full w-full object-cover" alt="" src={image} />
        <div
          className="absolute inset-0"         
        />
      </div>

      <div className="relative flex w-full max-w-screen-xl flex-col items-start gap-4 px-6 pb-16">
        <div className="flex items-center">
          {programLabels.map((label, index) => (
            <div key={label} className="flex items-center">
              {index > 0 && (
                <img
                  src={breadcrumbIcon}
                  alt=""
                  aria-hidden="true"
                  className="mx-2 h-2.5 w-auto object-contain select-none"
                />
              )}
              <p className="[font-family:'Inter',Helvetica] text-sm font-normal leading-5 tracking-[1.40px] text-[#f0f3ff]">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-screen-md">
          <h1
            id="program-hero-title"
            className="font-heading text-4xl font-bold leading-[48px] tracking-[-0.96px] text-white sm:text-5xl sm:leading-[56px]"
          >
            {title}
          </h1>
        </div>

        <div className="w-full max-w-2xl pt-2">
          <p className="font-body text-base font-normal leading-7 text-[#e2e8f8] sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};