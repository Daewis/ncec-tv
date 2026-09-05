import logo from "../assets/programs/new-creature-logo.png";

type NavKey = "home" | "about" | "programs" | "events";
type ConnectKey = "locations" | "resources" | "contact";

interface FooterProps {
  activeNav?: NavKey;
  activeConnect?: ConnectKey;
}

const navItems: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "programs", label: "Programs", href: "/programs" },
  { key: "events", label: "Events", href: "/events" },
];

const connectItems: { key: ConnectKey; label: string; href: string }[] = [
  { key: "locations", label: "Locations", href: "/locations" },
  { key: "resources", label: "Resources", href: "/resources" },
  { key: "contact", label: "Contact", href: "/contact" },
];

export default function Footer({ activeNav, activeConnect }: FooterProps) {
  const getLinkClass = (isActive: boolean) =>
    isActive
      ? "font-bold text-[#FBBF24]"
      : "text-[#DCE2F3]/80 hover:text-[#DCE2F3] hover:opacity-100 transition-colors";

  return (
    <footer className="flex w-full flex-col bg-[#151C27] font-body">
      {/* Upper Content Area */}
      <div className="w-full bg-[#232A3A]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 py-[120px] sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand & Purpose Column */}
          <div className="flex flex-col items-start gap-6">
            <a href="/" className="flex items-center gap-3">
              <img src={logo} alt="NCEM Logo" className="h-12 w-12 object-contain" />
              <span className="font-heading text-2xl font-bold tracking-[0] text-white">
                NCEM
              </span>
            </a>
            <p className="font-body text-base leading-6 text-[#DCE2F3]">
              Illuminating paths, fostering connections, and serving with purpose.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-body text-sm font-semibold tracking-[0.7px] leading-5 text-[#F9F9FF]">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className={`block font-body text-base leading-6 ${getLinkClass(
                      item.key === activeNav
                    )}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-body text-sm font-semibold tracking-[0.7px] leading-5 text-[#F9F9FF]">
              Connect
            </h4>
            <ul className="flex flex-col gap-3">
              {connectItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className={`block font-body text-base leading-6 ${getLinkClass(
                      item.key === activeConnect
                    )}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-body text-sm font-semibold tracking-[0.7px] leading-5 text-[#F9F9FF]">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="/privacy-policy"
                  className="block font-body text-base leading-6 text-[#DCE2F3]/80 transition-colors hover:text-[#DCE2F3] hover:opacity-100"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="block font-body text-base leading-6 text-[#DCE2F3]/80 transition-colors hover:text-[#DCE2F3] hover:opacity-100"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="flex w-full items-center justify-center border-t border-[#DCE2F3]/20 bg-[#151C27] px-6 py-6">
        <p className="font-body text-base leading-6 text-[#DCE2F3]/60 text-center">
          © {new Date().getFullYear()} New Creature Evangelical Ministry. Built by Tech Disciples
        </p>
      </div>
    </footer>
  );
}