import { useEffect, useState } from "react";
import { personal } from "../data/content";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Beyond Data", href: "#beyond-data" },
    { label: "Contact", href: "#contact" },
  ];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-canvas/90 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "border-b border-rule" : "border-b border-transparent"
      }`}
    >
      <nav className="max-w-4xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNav(e, "#hero")}
          className="font-display text-base text-ink hover:text-sage transition-colors duration-150"
        >
          {personal.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden sm:flex gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNav(e, href)}
                className="text-sm text-muted hover:text-ink transition-colors duration-150 tracking-wide"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 flex flex-col gap-1.5 text-muted hover:text-ink"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-current transition-all duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-current transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-current transition-all duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-canvas border-b border-rule px-6 pb-5 pt-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNav(e, href)}
                  className="text-sm text-muted hover:text-ink transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}