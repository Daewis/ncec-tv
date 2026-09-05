import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import { ProgramHeroSection } from "../components/sections/programs/ProgramHeroSection";
import { ServiceDetailsSection } from "../components/sections/programs/ServiceDetailsSection";
import { RelatedProgramsSection } from "../components/sections/programs/RelatedProgramsSection";

const MOCK_PROGRAM = {
  image: "/assets/programs/ncec-camp.jpg",
  title: "Faith & Miracle Service",
  description:
    "Experience a powerful evening of divine connection, restorative worship, and miraculous encounters in an atmosphere of pure light and faith.",
  serviceDetails: [
    { label: "Frequency", value: "First Friday" },
    { label: "Time", value: "6:00 PM - 9:00 PM" },
    { label: "Venue", value: "Main Camp Ground" },
  ],
  aboutParagraphs: [
    "The Faith & Miracle Service is our premier monthly gathering designed for deep spiritual renewal and transformative encounters. Rooted in the belief that divine light shines brightest when we gather in purpose, this service combines intense, spirit-led worship with profound teachings that anchor the soul.",
    "Whether you are seeking physical healing, emotional restoration, or simply a closer walk with faith, this service provides a sacred yet modern space to experience the miraculous. Our dedicated ministry teams are present to pray with you in a dignified, supportive environment.",
  ],
  expectations: [
    "An hour of uninterrupted, high-end acoustic and contemporary worship.",
    "A focused message centering on faith, healing, and modern discipleship.",
    "Dedicated moments for personal prayer and ministerial impartation.",
  ],
  upcomingDates: [
    { month: "NOV", day: "03", title: "First Friday Service" },
    { month: "DEC", day: "01", title: "End of Year Service" },
    { month: "JAN", day: "05", title: "New Year Impartation" },
  ],
};

export default function ProgramsPage() {
  // TODO: replace with real data fetch once routing/CMS is wired up,
  // using useParams<{ slug: string }>() to fetch by slug
  const program = MOCK_PROGRAM;

  return (
    <>
      <TopNavBar active="programs" />
      <main className="relative flex w-full flex-col items-center gap-[75px] pt-[50px] bg-bg-light font-body">
        <ProgramHeroSection image={program.image} title={program.title} description={program.description} />
        <ServiceDetailsSection
          serviceDetails={program.serviceDetails}
          aboutParagraphs={program.aboutParagraphs}
          expectations={program.expectations}
          upcomingDates={program.upcomingDates}
        />
        <RelatedProgramsSection />
      </main>
      <Footer activeNav="programs" />
    </>
  );
}