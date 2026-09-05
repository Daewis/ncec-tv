import logo from "../assets/programs/new-creature-logo.png";

type NavKey = "home" | "about" | "programs" | "events" | "locations" | "resources" | "contact";

interface TopNavBarProps {
  active?: NavKey;
}

const navLinks: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "programs", label: "Programs", href: "/programs" },
  { key: "events", label: "Event", href: "/events" },
  { key: "locations", label: "Locations", href: "/locations" },
  { key: "resources", label: "Resources", href: "/resources" },
  { key: "contact", label: "Contact", href: "/contact" },
];

export default function TopNavBar({ active }: TopNavBarProps) {
  const showCta = active !== "locations";

  return (
    <header className="fixed top-0 left-0 z-50 flex h-[81px] w-full items-center border-b border-[#c5c5d34c] bg-[#f9f9ffe6] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[6px]">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-6">
        
        {/* Brand / Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="NCEM Logo" className="h-12 w-12 object-contain" />
          <span className="font-heading text-2xl font-bold tracking-[0] text-[#00236F]">
            NCEM
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = link.key === active;

            return (
              <a
                key={link.key}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative flex items-center font-body text-sm font-semibold tracking-[0.7px] leading-5 transition-colors ${
                  isActive ? "text-[#00236F]" : "text-[#444651] hover:text-[#00236F]"
                }`}
              >
                <span>{link.label}</span>

                {/* Active Indicator Dot */}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#795900]"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button (hidden when viewing locations) */}
        {showCta && (
          <a
            href="/locations"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-[#00236F] px-6 py-2.5 font-body text-sm font-semibold tracking-[0.7px] text-white shadow-sm transition-colors hover:bg-[#001b57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00236F]"
          >
            Find a Church
          </a>
        )}
      </div>
    </header>
  );
}