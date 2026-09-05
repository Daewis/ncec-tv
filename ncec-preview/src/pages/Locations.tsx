import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import { ChurchLocatorHeroSection } from "../components/sections/locations/ChurchLocatorHeroSection";
import { BranchLocatorMapSection } from "../components/sections/locations/BranchLocatorMapSection";

export const LocationsOverview = () => {
  return (
    <>
      <TopNavBar active="locations" />
      <main className="relative flex w-full flex-col items-center bg-[#f9f9ff] px-4 pb-24 pt-12 md:px-6">
        <ChurchLocatorHeroSection />
        <BranchLocatorMapSection />
      </main>
      <Footer activeConnect="locations" />
    </>
  );
};

export default LocationsOverview;