import { Calendar } from "lucide-react";
import iconFrequency from "../../../assets/programs/iconsProgramsHeroSection/icon1.png";
import iconTime from "../../../assets/programs/iconsProgramsHeroSection/icon2.png";
import iconVenue from "../../../assets/programs/iconsProgramsHeroSection/icon3.png";
import iconCheck from "../../../assets/programs/iconsProgramsHeroSection/icon4.png";
import iconArrow from "../../../assets/programs/iconsProgramsHeroSection/icon5.png";

interface UpcomingDate {
  month: string;
  day: string;
  title: string;
}

interface ServiceDetailsSectionProps {
  serviceDetails: { label: string; value: string }[];
  aboutParagraphs: string[];
  expectations: string[];
  upcomingDates: UpcomingDate[];
}

export const ServiceDetailsSection = ({
  serviceDetails,
  aboutParagraphs,
  expectations,
  upcomingDates,
}: ServiceDetailsSectionProps) => {
  const icons = [iconFrequency, iconTime, iconVenue];

  return (
    <section
      className="mx-auto grid w-full max-w-[1232px] grid-cols-1 gap-12 px-4 lg:grid-cols-12 lg:px-0"
      aria-label="Service details"
    >
      {/* Left column: Details & Description */}
      <div className="flex min-w-0 flex-col gap-12 lg:col-span-8 lg:pb-[142px]">
        {/* Quick Info Bar */}
        <div className="flex flex-col items-start gap-6 rounded-lg border border-[#C5C5D3]/30 bg-white p-6 shadow-none sm:flex-row sm:items-center">
          {serviceDetails.map((detail, index) => {
            const iconSrc = icons[index];

            return (
              <div key={detail.label} className="flex min-w-0 items-center gap-6 sm:contents">
                {index > 0 && (
                  <div
                    className="hidden h-9 w-px bg-[#C5C5D3]/30 sm:block"
                    aria-hidden="true"
                  />
                )}
                <div className="flex items-center gap-3">
                  {iconSrc ? (
                    <img
                      src={iconSrc}
                      alt=""
                      aria-hidden="true"
                      className="h-5 w-auto shrink-0 object-contain"
                    />
                  ) : (
                    <Calendar className="h-5 w-5 shrink-0 text-[#795900]" aria-hidden="true" />
                  )}
                  <dl className="flex flex-col">
                    <dt className="font-body text-xs leading-4 text-[#444651]">{detail.label}</dt>
                    <dd className="font-body text-sm font-semibold tracking-[0.7px] leading-5 text-[#151C27]">
                      {detail.value}
                    </dd>
                  </dl>
                </div>
              </div>
            );
          })}
        </div>

        {/* Description & Expectations */}
        <article className="flex flex-col gap-4">
          <header>
            <h2 className="font-heading text-[30px] font-semibold leading-[38px] text-[#151C27]">
              About the Service
            </h2>
          </header>

          <div className="flex flex-col gap-2 pt-2">
            {aboutParagraphs.map((p, i) => (
              <p
                key={i}
                className="font-body text-base font-normal leading-6 text-[#444651]"
              >
                {p}
              </p>
            ))}
          </div>

          <section className="pt-6" aria-labelledby="what-to-expect-heading">
            <h3
              id="what-to-expect-heading"
              className="font-heading text-2xl font-semibold leading-8 text-[#151C27]"
            >
              What to Expect
            </h3>
            <ul className="mt-4 flex flex-col gap-4">
              {expectations.map((expectation) => (
                <li
                  key={expectation}
                  className="flex items-start gap-3 font-body text-base font-normal leading-6 text-[#444651]"
                >
                  <img
                    src={iconCheck}
                    alt=""
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 object-contain"
                  />
                  <span>{expectation}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>

      {/* Sidebar: Upcoming Dates */}
      <aside className="min-w-0 lg:col-span-4" aria-labelledby="upcoming-dates">
        <div className="flex flex-col gap-6 rounded-lg border border-[#C5C5D3]/50 bg-white p-6">
          <h2
            id="upcoming-dates"
            className="font-body text-sm font-semibold uppercase leading-5 tracking-[1.4px] text-[#151C27]"
          >
            Upcoming Dates
          </h2>

          <div className="flex flex-col gap-4">
            {upcomingDates.map((date) => (
              <button
                type="button"
                key={`${date.month}-${date.day}`}
                className="group flex h-16 w-full items-center justify-between rounded p-2 text-left transition-colors hover:bg-[#E2E8F8]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00236F]"
              >
                <div className="flex min-w-0 items-center">
                  {/* Date Badge */}
                  <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded bg-[#E2E8F8]">
                    <span className="font-body text-xs font-normal uppercase leading-4 text-[#00236F]">
                      {date.month}
                    </span>
                    <span className="font-body text-sm font-semibold leading-[14px] tracking-[0.7px] text-[#00236F]">
                      {date.day}
                    </span>
                  </div>

                  {/* Date Title */}
                  <span className="ml-4 truncate font-body text-base font-normal leading-6 text-[#444651]">
                    {date.title}
                  </span>
                </div>

                {/* Arrow Icon */}
                <img
                  src={iconArrow}
                  alt=""
                  aria-hidden="true"
                  className="ml-2 h-4 w-4 shrink-0 object-contain opacity-60 transition-opacity group-hover:opacity-100"
                />
              </button>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
};