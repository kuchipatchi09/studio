import React from "react";
import { TabType } from "./SiteHeader";

interface SiteFooterProps {
  onTabChange?: (tab: TabType) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ onTabChange }) => {
  return (
    <footer className="py-12 bg-paper text-ink border-t border-line">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-grey-7">
        <div className="flex items-center gap-3">
          <span className="text-ink font-medium tracking-tight">asterstudio<span className="text-[#556042] font-bold">*</span></span>
          <span className="w-1 h-1 rounded-full bg-grey-3" />
          <span>Gathering scattered light.</span>
        </div>

        <div className="flex items-center gap-6">
          {onTabChange && (
            <div className="flex items-center gap-4 text-grey-9">
              <button onClick={() => onTabChange("overview")} className="hover:text-ink">오버뷰</button>
              <button onClick={() => onTabChange("projects")} className="hover:text-ink">프로젝트</button>
              <button onClick={() => onTabChange("design")} className="hover:text-ink">디자인</button>
              <button onClick={() => onTabChange("spec")} className="hover:text-ink">스펙</button>
            </div>
          )}
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
};
