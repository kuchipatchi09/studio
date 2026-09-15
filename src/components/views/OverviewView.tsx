import React from "react";
import { ArrowUpRight } from "lucide-react";
import { TabType } from "../SiteHeader";

interface OverviewViewProps {
  onTabChange: (tab: TabType) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({ onTabChange }) => {
  return (
    <div className="pt-24 pb-32 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 text-ink font-sans">
      {/* Top Meta Line: Clean & Non-mono */}
      <div className="flex items-center justify-between text-xs text-grey-7 pb-6 border-b border-line">
        <span>asterstudio · 2026</span>
        <span>Chungnam, Korea</span>
      </div>

      {/* Hero Display Typography (No Italic, 100% Upright Asta Sans) */}
      <div className="py-20 sm:py-28 border-b border-line">
        <div className="max-w-5xl">
          <h1 className="text-[clamp(3.5rem,9vw,8rem)] font-light leading-[0.95] tracking-tight text-ink">
            Gathering <br />
            scattered light<span className="text-signal font-medium">*</span>
          </h1>

          <p className="text-xl sm:text-2xl text-grey-9 font-normal leading-relaxed mt-10 max-w-2xl">
            흩어진 정보와 작은 불편 속에서 가능성을 발견하고,
            사람들의 일상을 밝히는 명료한 화면으로 연결합니다.
          </p>
        </div>
      </div>

      {/* Philosophy Statement: High Negative Space */}
      <div className="py-20 border-b border-line grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 text-xs uppercase tracking-wider text-grey-7">
          01 // 철학
        </div>

        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-normal leading-snug tracking-tight text-ink">
            별 하나의 빛은 작지만, <br />
            <span className="text-signal font-medium">서로 연결되면</span> 길이 됩니다.
          </h2>

          <div className="text-base text-grey-9 leading-relaxed max-w-2xl space-y-4">
            <p>
              학교생활 속에 흩어진 정보와 매일 반복되는 작은 불편을 관찰합니다.
              그리고 필요한 기능과 데이터를 하나의 질서로 연결해, 누구나 자연스럽게 사용할 수 있는 화면으로 만듭니다.
            </p>
            <p className="text-sm text-grey-7 leading-relaxed">
              불필요한 장식과 과도한 요소를 걷어내고, 정보의 위계와 물리적 촉각성을 디지털 인터페이스로 구현합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Clean Navigation Matrix */}
      <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          onClick={() => onTabChange("projects")}
          className="border border-line p-8 text-left hover:border-ink transition-colors flex flex-col justify-between h-48 bg-paper group"
        >
          <div className="text-xs text-grey-7">01 // WORKS</div>
          <div>
            <div className="text-xl font-medium text-ink group-hover:text-signal transition-colors">
              프로젝트 아카이브 →
            </div>
            <div className="text-xs text-grey-7 mt-1">asterisk*, QPI Periodic Table 외 검증된 시스템</div>
          </div>
        </button>

        <button
          onClick={() => onTabChange("design")}
          className="border border-line p-8 text-left hover:border-ink transition-colors flex flex-col justify-between h-48 bg-paper group"
        >
          <div className="text-xs text-grey-7">02 // DESIGN SYSTEM</div>
          <div>
            <div className="text-xl font-medium text-ink group-hover:text-signal transition-colors">
              디자인 시스템 (ASDS) →
            </div>
            <div className="text-xs text-grey-7 mt-1">Signal Cobalt, Asta Sans, 12px Hairline Grid</div>
          </div>
        </button>

        <a
          href="https://cnsh.life"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-line p-8 text-left hover:border-signal transition-colors flex flex-col justify-between h-48 bg-paper group"
        >
          <div className="flex items-center justify-between text-xs text-grey-7">
            <span>03 // LIVE PLATFORM</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-grey-7 group-hover:text-signal" />
          </div>
          <div>
            <div className="text-xl font-medium text-ink group-hover:text-signal transition-colors">
              asterisk* 바로가기 ↗
            </div>
            <div className="text-xs text-grey-7 mt-1">충남과학고 통합 학교생활 서비스 (cnsh.life)</div>
          </div>
        </a>
      </div>
    </div>
  );
};
