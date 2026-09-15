import React, { useState, useEffect } from "react";

interface SiteHeaderProps {
  activeSection?: string;
  onNavigate?: (id: string) => void;
  isDetailView?: boolean;
  onBackToHome?: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  activeSection = "hero",
  onNavigate,
  isDetailView = false,
  onBackToHome,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle ESC key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: "philosophy", label: "Philosophy" },
    { id: "works", label: "Works" },
    { id: "process", label: "Process" },
    { id: "experiments", label: "Experiments" },
    { id: "about", label: "About" },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (isDetailView && onBackToHome) {
      onBackToHome();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isDetailView && onBackToHome) {
      onBackToHome();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-sm border-b border-line shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          : "bg-paper/80 backdrop-blur-[2px] border-b border-line/60"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 h-16 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="group inline-flex items-center gap-0.5 text-[1.125rem] tracking-tight font-medium text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm py-1"
          aria-label="asterstudio home"
        >
          <span>asterstudio</span>
          <span className="text-signal transition-transform duration-300 group-hover:rotate-45 font-bold">
            *
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-[0.875rem] font-normal text-grey-9" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm ${
                  isActive ? "text-ink font-medium" : "hover:text-ink"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                <span>{item.label}</span>
                {isActive ? (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-signal" />
                ) : (
                  <span className="absolute -bottom-1 left-1/2 right-1/2 h-[1px] bg-signal transition-all duration-200 group-hover:left-0 group-hover:right-0 opacity-0 group-hover:opacity-100" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-ink rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-navigation"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`w-full h-[1.5px] bg-ink transition-all duration-200 ${
                mobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-ink transition-opacity duration-200 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-ink transition-all duration-200 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Modal */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-0 top-16 bg-paper z-40 border-t border-line flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col gap-5 pt-4 text-lg">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="flex items-center justify-between py-3 border-b border-line text-left text-ink hover:text-signal transition-colors"
              >
                <span className="font-medium">{item.label}</span>
                <span className="text-xs text-grey-7 font-mono">0{idx + 1}</span>
              </button>
            ))}
          </nav>

          <div className="pt-8 border-t border-line text-xs text-grey-7">
            <p className="font-mono">asterstudio* · 2026</p>
            <p className="mt-1">Gathering scattered light.</p>
          </div>
        </div>
      )}
    </header>
  );
};
