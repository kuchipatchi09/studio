import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ConstellationField } from "../ConstellationField";
import { TabType } from "../SiteHeader";

interface OverviewViewProps {
  onTabChange: (tab: TabType) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({ onTabChange }) => {
  return (
    <div className="relative min-h-[90vh] pt-20 pb-28 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 text-ink font-sans">
      {/* Interactive Constellation Field Layer */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none overflow-hidden">
        <ConstellationField scrollProgress={0.4} />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Top Studio Telemetry Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-line text-[11px] text-grey-7 font-mono mb-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-ink font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
              <span>SYSTEM: ONLINE</span>
            </span>
            <span className="hidden sm:inline text-grey-3">|</span>
            <span className="hidden sm:inline">CNSH.LIFE ECOSYSTEM</span>
          </div>
          <div className="flex items-center gap-4">
            <span>LAT 36.45°N · LON 127.12°E</span>
            <span className="hidden sm:inline text-grey-3">|</span>
            <span className="text-signal font-medium">SPEC ASDS-2026</span>
          </div>
        </div>

        {/* Hero Display Typography */}
        <div className="py-12 sm:py-20 border-b border-line relative">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-signal font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
              <span>System &amp; Interface Studio</span>
            </div>

            <h1 className="text-[clamp(2.4rem,5.2vw,4.6rem)] font-light leading-[1.08] tracking-tight text-ink">
              Gathering <br />
              scattered light<span className="text-signal font-medium">*</span>
            </h1>

            <p className="text-base sm:text-xl text-grey-9 font-normal leading-relaxed mt-8 max-w-2xl">
              흩어진 정보와 작은 불편 속에서 가능성을 발견하고,
              사람들의 일상을 밝히는 명료한 화면으로 연결합니다.
            </p>
          </div>
        </div>

        {/* Philosophy Statement: No · */}
        <div className="py-16 border-b border-line grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative">
          <div className="lg:col-span-4 text-xs uppercase tracking-wider text-grey-7 flex items-center gap-2">
            <span className="w-1 h-3 bg-signal/60 inline-block" />
            <span>01 Philosophy</span>
          </div>

          <div className="lg:col-span-8 space-y-5">
            <h2 className="text-xl sm:text-3xl font-normal leading-snug tracking-tight text-ink">
              별 하나의 빛은 작지만, <br />
              <span className="text-signal font-medium">서로 연결되면</span> 길이 됩니다.
            </h2>

            <div className="text-sm sm:text-base text-grey-9 leading-relaxed max-w-2xl space-y-3">
              <p>
                학교생활 속에 흩어진 정보와 매일 반복되는 작은 불편을 관찰합니다.
                그리고 필요한 기능과 데이터를 하나의 질서로 연결해, 누구나 자연스럽게 사용할 수 있는 화면으로 만듭니다.
              </p>
              <p className="text-xs sm:text-sm text-grey-7 leading-relaxed">
                불필요한 장식과 과도한 요소를 걷어내고, 정보의 위계와 물리적 촉각성을 디지털 인터페이스로 구현합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Navigation Matrix: No · */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() => onTabChange("projects")}
            className="border border-line p-8 text-left transition-all duration-200 flex flex-col justify-between h-48 bg-[#FAF9F5] hover:border-grey-3 hover:shadow-xs group relative overflow-hidden"
          >
            <div className="flex items-center justify-between text-xs text-grey-7">
              <span className="font-medium text-ink flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                <span>01 WORKS</span>
              </span>
              <span className="text-[10px] text-signal font-mono opacity-0 group-hover:opacity-100 transition-opacity">EXPLORE →</span>
            </div>
            <div>
              <div className="text-lg font-medium text-ink group-hover:text-signal transition-colors">
                프로젝트 아카이브 →
              </div>
              <div className="text-xs text-grey-7 mt-1">asterisk*, 주기율표, 통합 예약 시스템, ASDS</div>
            </div>
          </button>

          <button
            onClick={() => onTabChange("design")}
            className="border border-line p-8 text-left transition-all duration-200 flex flex-col justify-between h-48 bg-[#FAF9F5] hover:border-grey-3 hover:shadow-xs group relative overflow-hidden"
          >
            <div className="flex items-center justify-between text-xs text-grey-7">
              <span className="font-medium text-ink flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                <span>02 DESIGN SYSTEM</span>
              </span>
              <span className="text-[10px] text-signal font-mono opacity-0 group-hover:opacity-100 transition-opacity">SPEC →</span>
            </div>
            <div>
              <div className="text-lg font-medium text-ink group-hover:text-signal transition-colors">
                디자인 시스템 (ASDS) →
              </div>
              <div className="text-xs text-grey-7 mt-1">Colour Tokens, Typography, 12px Grid Spec</div>
            </div>
          </button>

          <button
            onClick={() => onTabChange("asterisk")}
            className="border border-line p-8 text-left transition-all duration-200 flex flex-col justify-between h-48 bg-[#FAF9F5] hover:border-signal hover:shadow-xs group relative overflow-hidden"
          >
            <div className="flex items-center justify-between text-xs text-grey-7">
              <span className="font-medium text-ink flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                <span>03 LIVE PLATFORM</span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-grey-7 group-hover:text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <div className="text-lg font-medium text-ink group-hover:text-signal transition-colors">
                asterisk* 바로가기 ↗
              </div>
              <div className="text-xs text-grey-7 mt-1">충남과학고 통합 학교생활 서비스 (cnsh.life)</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
