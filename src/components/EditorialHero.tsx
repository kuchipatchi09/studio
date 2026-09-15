import React from "react";
import { ConstellationField } from "./ConstellationField";

interface EditorialHeroProps {
  scrollProgress?: number;
  onExploreClick?: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  scrollProgress = 0,
  onExploreClick,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90svh] lg:min-h-[96svh] flex flex-col justify-between pt-24 pb-12 border-b border-line overflow-hidden"
    >
      {/* Background Constellation Layer */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <ConstellationField scrollProgress={scrollProgress} />
      </div>

      {/* Top Meta Line */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 md:px-12 flex flex-col sm:flex-row sm:items-center justify-between text-xs tracking-wider uppercase text-grey-7 font-mono gap-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signal inline-block animate-pulse" />
          <span>asterstudio* editorial archive</span>
        </div>
        <div>
          <span>Chungnam, Korea · 2026</span>
        </div>
      </div>

      {/* Main Editorial Copy */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 md:px-12 my-auto py-8">
        <div className="max-w-4xl">
          <div className="inline-block text-xs font-mono uppercase tracking-widest text-signal font-semibold mb-4 bg-signal/5 px-2.5 py-1 border border-signal/20 rounded-sm">
            Design &amp; Systems Studio
          </div>
          
          <h1 className="text-[clamp(3.2rem,8.5vw,7.8rem)] font-normal leading-[0.95] tracking-tight text-ink mb-6 select-text">
            Gathering <br />
            <span className="text-grey-9 font-light italic">scattered</span> light<span className="text-signal font-bold">*</span>
          </h1>

          <p className="text-[clamp(1.125rem,1.8vw,1.45rem)] leading-[1.6] text-grey-9 max-w-2xl font-normal mt-6">
            흩어진 정보와 작은 불편 속에서 가능성을 발견하고,
            <br className="hidden sm:inline" />
            사람들의 일상을 밝히는 화면으로 연결합니다.
          </p>
        </div>
      </div>

      {/* Bottom Metadata & Scroll Prompt */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 md:px-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-4 border-t border-line/60">
        <div className="text-xs text-grey-7 max-w-md leading-relaxed">
          <span className="text-ink font-medium">Core Thesis:</span> Discrete everyday pain points &amp; scattered information mapped into coherent digital surfaces.
        </div>

        <button
          onClick={onExploreClick}
          className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest font-mono text-grey-9 hover:text-signal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm py-1"
          aria-label="Scroll to philosophy section"
        >
          <span>Scroll to connect</span>
          <span className="w-8 h-[1px] bg-grey-3 group-hover:bg-signal group-hover:w-12 transition-all duration-300" />
          <span className="text-signal text-sm">↓</span>
        </button>
      </div>
    </section>
  );
};
