import React from "react";
import { ArrowUpRight } from "lucide-react";

export type TabType = "overview" | "projects" | "design" | "spec";

interface SiteHeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-line font-sans">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 h-14 flex items-center justify-between">
        {/* Brand Wordmark */}
        <button
          onClick={() => onTabChange("overview")}
          className="flex items-center gap-0.5 text-base tracking-tight font-medium text-ink focus-visible:outline-none"
        >
          <span>asterstudio</span>
          <span className="text-signal font-bold">*</span>
        </button>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2 text-xs" aria-label="Main Navigation">
          <button
            onClick={() => onTabChange("overview")}
            className={`px-3 py-1.5 rounded-none border transition-all ${
              activeTab === "overview"
                ? "border-ink bg-ink text-paper font-medium"
                : "border-transparent text-grey-9 hover:text-ink hover:border-line"
            }`}
          >
            오버뷰
          </button>

          <button
            onClick={() => onTabChange("projects")}
            className={`px-3 py-1.5 rounded-none border transition-all ${
              activeTab === "projects"
                ? "border-ink bg-ink text-paper font-medium"
                : "border-transparent text-grey-9 hover:text-ink hover:border-line"
            }`}
          >
            프로젝트
          </button>

          <button
            onClick={() => onTabChange("design")}
            className={`px-3 py-1.5 rounded-none border transition-all ${
              activeTab === "design"
                ? "border-ink bg-ink text-paper font-medium"
                : "border-transparent text-grey-9 hover:text-ink hover:border-line"
            }`}
          >
            디자인
          </button>

          <button
            onClick={() => onTabChange("spec")}
            className={`px-3 py-1.5 rounded-none border transition-all ${
              activeTab === "spec"
                ? "border-ink bg-ink text-paper font-medium"
                : "border-transparent text-grey-9 hover:text-ink hover:border-line"
            }`}
          >
            스펙
          </button>

          <a
            href="https://cnsh.life"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 border border-line text-grey-9 hover:text-signal hover:border-signal transition-all"
          >
            <span>애스터리스크</span>
            <ArrowUpRight className="w-3 h-3 text-signal" />
          </a>
        </nav>
      </div>
    </header>
  );
};
