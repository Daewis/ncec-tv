import { useState, type SubmitEvent } from "react";
import icon from "../../../assets/locations/iconChurchLocator/icon.svg";
import image from "../../../assets/locations/iconChurchLocator/image.svg";

export const ChurchLocatorHeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationStatus, setLocationStatus] = useState("");

  const handleSearch = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLocationStatus(
      searchQuery.trim()
        ? `Searching for churches near ${searchQuery.trim()}.`
        : "Enter a district, branch, or city to search for a church.",
    );
  };

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("Location services are not supported by this browser.");
      return;
    }

    setLocationStatus("Finding your location...");

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setSearchQuery(`${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)}`);
        setLocationStatus("Your current location has been added to the search field.");
      },
      () => {
        setLocationStatus(
          "We could not access your location. Please search by district, branch, or city.",
        );
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      },
    );
  };

  return (
    <section
      className="flex w-full max-w-[1280px] flex-col items-center gap-6 px-6 pt-[120px] pb-16 text-center"
      aria-labelledby="church-locator-heading"
    >
      {/* Title */}
      <h1
        id="church-locator-heading"
        className="font-heading text-4xl font-bold tracking-[-0.96px] text-[#00236f] sm:text-5xl sm:leading-[56px]"
      >
        Find a Church Near You
      </h1>

      {/* Description */}
      <p className="max-w-[672px] font-body text-lg leading-7 text-[#444651]">
        Connect with a local branch of Divine Light Ministry. Discover worship times,
        community programs, and a welcoming family near you.
      </p>

      {/* Search Form */}
      <form
        className="relative mt-2 flex w-full max-w-[768px] items-center"
        onSubmit={handleSearch}
        role="search"
      >
        <label className="sr-only" htmlFor="church-location-search">
          Search district, branch, or city
        </label>

        {/* Search Icon (18x18px at left: 16px) */}
        <div className="pointer-events-none absolute left-4 flex h-[18px] w-[18px] items-center justify-center">
          <img
            src={icon}
            alt=""
            aria-hidden="true"
            className="h-[18px] w-[18px] object-contain opacity-70"
          />
        </div>

        {/* Input matching Figma 63px height, 12px radius, and padding */}
        <input
          id="church-location-search"
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search district, branch or city"
          autoComplete="off"
          className="h-[63px] w-full rounded-xl border border-[#C5C5D3] bg-white pl-12 pr-[185px] font-body text-[18px] leading-[22px] text-gray-800 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] placeholder:text-[#6B7280] focus:border-[#00236f] focus:outline-none focus:ring-1 focus:ring-[#00236f]"
        />

        {/* Use My Location Button */}
        <button
          type="button"
          onClick={handleUseLocation}
          className="absolute right-2 top-1/2 flex h-9 -translate-y-1/2 items-center gap-2 rounded-xl px-4 py-2 transition-colors hover:bg-[#e2e8f8]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00236f]"
        >
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="h-[16.42px] w-[16.42px] shrink-0 object-contain"
          />
          <span className="whitespace-nowrap font-body text-sm font-semibold tracking-[0.7px] text-[#00236F]">
            Use My Location
          </span>
        </button>

        <p className="sr-only" role="status" aria-live="polite">
          {locationStatus}
        </p>
      </form>
    </section>
  );
};