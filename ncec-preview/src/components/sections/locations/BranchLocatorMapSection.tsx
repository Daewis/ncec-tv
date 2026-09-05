import { useState } from "react";
import basemapImage from "../../../assets/locations/iconBranchLocator/basemap-image.png";
import icon4 from "../../../assets/locations/iconBranchLocator/icon4.svg";
import icon5 from "../../../assets/locations/iconBranchLocator/icon5.svg";
import icon6 from "../../../assets/locations/iconBranchLocator/icon6.svg";

const branches = [
  {
    id: "ojo",
    name: "Ojo Branch",
    district: "Ojo District",
    address: "123 Faith Avenue, Cityville, ST 12345",
    pastor: "Rev. Dr. J.A Emmanuel",
    addressIcon: icon4,
    pastorIcon: icon5,
    arrowIcon: icon6,
  },
  {
    id: "trade-fair",
    name: "Trade-fair Branch",
    district: "Ajegunle District",
    address: "890 Grace Blvd, Cityville, ST 12346",
    pastor: "Rev. Olayide",
    addressIcon: icon4,
    pastorIcon: icon5,
    arrowIcon: icon6,
  },
];

export const BranchLocatorMapSection = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));

  return (
    <section
      className="grid w-full max-w-screen-xl grid-cols-1 gap-8 lg:grid-cols-12"
      aria-labelledby="branches-heading"
    >
      {/* Sidebar List */}
      <aside className="flex flex-col overflow-hidden rounded-xl border border-[#c5c5d3] bg-white shadow-sm lg:col-span-5 xl:col-span-4">
        <header className="border-b border-[#c5c5d3] bg-[#f0f3ff] p-6">
          <h2
            id="branches-heading"
            className="font-heading text-2xl font-semibold text-[#00236f]"
          >
            Branches
          </h2>
          <p className="mt-1 font-body text-sm text-[#444651]">Showing locations near you</p>
        </header>

        <div
          className="flex max-h-[600px] flex-col gap-4 overflow-y-auto p-4"
          aria-label="Nearby branch locations"
        >
          {branches.map((branch) => {
            const isSelected = selectedBranchId === branch.id;

            return (
              <article
                key={branch.id}
                className={`flex flex-col gap-3 rounded-lg border p-5 transition-colors ${
                  isSelected ? "border-[#00236f] bg-[#f0f3ff]/40" : "border-[#c5c5d3] bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-lg font-semibold text-[#00236f]">
                    {branch.name}
                  </h3>
                  <span className="rounded-xl bg-[#e2e8f8] px-3 py-1 text-xs font-medium text-[#00236f]">
                    {branch.district}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    className="h-4 w-4 shrink-0 object-contain opacity-70"
                    alt=""
                    aria-hidden="true"
                    src={branch.addressIcon}
                  />
                  <p className="font-body text-sm text-[#444651]">{branch.address}</p>
                </div>

                <div className="mt-1 flex items-center justify-between border-t border-[#c5c5d380] pt-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e2e8f8]">
                      <img
                        className="h-3.5 w-3.5 object-contain"
                        alt=""
                        aria-hidden="true"
                        src={branch.pastorIcon}
                      />
                    </div>
                    <span className="font-body text-sm font-medium text-[#444651]">
                      {branch.pastor}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-[#00236f] hover:bg-[#e2e8f8]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00236f]"
                    onClick={() => setSelectedBranchId(branch.id)}
                    aria-label={`View ${branch.name}`}
                    aria-pressed={isSelected}
                  >
                    <span>View Branch</span>
                    <img
                      className="h-3 w-3 object-contain"
                      alt=""
                      aria-hidden="true"
                      src={branch.arrowIcon}
                    />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </aside>

      {/* Map View */}
      <div
        className="relative min-h-[500px] w-full overflow-hidden rounded-xl border border-[#c5c5d3] bg-[#e2e8f8] shadow-sm lg:col-span-7 xl:col-span-8 lg:min-h-[660px]"
        role="region"
        aria-label={
          selectedBranchId
            ? `Map showing ${branches.find((b) => b.id === selectedBranchId)?.name}`
            : "Map showing branch locations"
        }
      >
        <img
          className="h-full w-full object-cover transition-transform duration-300 ease-out"
          style={{ transform: `scale(${zoomLevel})` }}
          alt="Basemap showing branch locations"
          src={basemapImage}
        />

        {/* Map Zoom Controls (Figma Spec) */}
        <div
          className="absolute right-[17px] top-[17px] z-10 flex flex-col items-center"
          aria-label="Map controls"
        >
          {/* Zoom In Button */}
          <button
            type="button"
            onClick={handleZoomIn}
            className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00236f]"
            aria-label="Zoom in"
          >
            <svg
              className="h-3.5 w-3.5 text-[#444651]"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7 1V13M1 7H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Zoom Out Button (8px top margin) */}
          <button
            type="button"
            onClick={handleZoomOut}
            className="mt-2 flex h-10 w-10 items-center justify-center rounded-[4px] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00236f]"
            aria-label="Zoom out"
          >
            <svg
              className="h-3.5 w-3.5 text-[#444651]"
              viewBox="0 0 14 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 1H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};