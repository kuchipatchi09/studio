import React, { useState, useEffect } from "react";

export type TabType = "overview" | "projects" | "design" | "spec" | "asterisk";

interface SiteHeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ activeTab, onTabChange }) => {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setTimeStr(`${h}:${m}:${s} KST`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/85 backdrop-blur-md border-b border-line font-sans transition-all duration-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 h-14 flex items-center justify-between">
        {/* Brand Wordmark & Live Telemetry */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onTabChange("overview")}
            className="group flex items-center gap-1 text-base tracking-tight font-medium text-ink focus-visible:outline-none"
          >
            <span>asterstudio</span>
            <span className="text-signal font-bold transition-transform duration-200 group-hover:scale-125">*</span>
          </button>

          {timeStr && (
            <span className="hidden md:flex items-center gap-2 text-[11px] text-grey-7 font-mono border-l border-line pl-4">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
              <span>{timeStr}</span>
            </span>
          )}
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-1.5 text-xs" aria-label="Main Navigation">
          <button
            onClick={() => onTabChange("overview")}
            className={`px-3 py-1.5 rounded-none border transition-all duration-150 relative ${
              activeTab === "overview"
                ? "border-ink bg-ink text-paper font-medium shadow-xs"
                : "border-transparent text-grey-9 hover:text-ink hover:border-line hover:bg-black/[0.02]"
            }`}
          >
            오버뷰
          </button>

          <button
            onClick={() => onTabChange("projects")}
            className={`px-3 py-1.5 rounded-none border transition-all duration-150 relative ${
              activeTab === "projects"
                ? "border-ink bg-ink text-paper font-medium shadow-xs"
                : "border-transparent text-grey-9 hover:text-ink hover:border-line hover:bg-black/[0.02]"
            }`}
          >
            프로젝트
          </button>

          <button
            onClick={() => onTabChange("design")}
            className={`px-3 py-1.5 rounded-none border transition-all duration-150 relative ${
              activeTab === "design"
                ? "border-ink bg-ink text-paper font-medium shadow-xs"
                : "border-transparent text-grey-9 hover:text-ink hover:border-line hover:bg-black/[0.02]"
            }`}
          >
            디자인
          </button>

          <button
            onClick={() => onTabChange("spec")}
            className={`px-3 py-1.5 rounded-none border transition-all duration-150 relative ${
              activeTab === "spec"
                ? "border-ink bg-ink text-paper font-medium shadow-xs"
                : "border-transparent text-grey-9 hover:text-ink hover:border-line hover:bg-black/[0.02]"
            }`}
          >
            스펙
          </button>

          <button
            onClick={() => onTabChange("asterisk")}
            className={`px-3 py-1.5 rounded-none border transition-all duration-150 flex items-center gap-0.5 ${
              activeTab === "asterisk"
                ? "border-signal bg-signal text-paper font-medium shadow-xs"
                : "border-line text-grey-9 hover:text-signal hover:border-signal/50 hover:bg-signal/5"
            }`}
          >
            <span>asterisk</span>
            <span className="font-bold text-xs">*</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
