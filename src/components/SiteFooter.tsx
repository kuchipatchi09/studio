import React from "react";

export const SiteFooter: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-paper text-ink border-t border-line">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-grey-7">
        <div className="flex items-center gap-3">
          <span className="text-ink font-medium tracking-tight">asterstudio<span className="text-signal font-bold">*</span></span>
          <span className="w-1 h-1 rounded-full bg-grey-3" />
          <span>Gathering scattered light.</span>
        </div>

        <div className="flex items-center gap-6">
          <span>© 2026 asterstudio</span>
          <button
            onClick={handleScrollToTop}
            className="hover:text-signal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm py-0.5"
            aria-label="Back to top"
          >
            Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
