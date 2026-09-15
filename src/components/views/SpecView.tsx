import React from "react";

export const SpecView: React.FC = () => {
  return (
    <div className="pt-20 pb-32 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 text-ink font-sans">
      <div className="pb-10 border-b border-line">
        <div className="text-xs font-mono uppercase text-[#3158A6] font-semibold mb-2">
          02 // System Specifications
        </div>
        <h1 className="text-3xl sm:text-5xl font-normal tracking-tight mb-4">
          asterstudio Architecture Specs
        </h1>
        <p className="text-sm sm:text-base text-grey-9 max-w-2xl leading-relaxed">
          asterstudio와 모든 파생 서비스(asterisk*, QPI Periodic Table 등)의 기술 표준 규격 및 아키텍처 파라미터입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="border border-line p-8 bg-paper space-y-6">
          <div className="text-xs font-mono uppercase text-grey-7 pb-3 border-b border-line">
            ENVIRONMENT &amp; STACK SPEC
          </div>

          <div className="space-y-4 text-xs font-mono">
            <div className="flex justify-between py-2 border-b border-line/60">
              <span className="text-grey-7">Core Architecture</span>
              <span className="text-ink font-medium">React 18 + TypeScript + Vite</span>
            </div>
            <div className="flex justify-between py-2 border-b border-line/60">
              <span className="text-grey-7">Design System Token</span>
              <span className="text-signal font-medium">ASDS (asterstudio Design System)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-line/60">
              <span className="text-grey-7">Primary Typography</span>
              <span className="text-ink font-medium">Asta Sans (Aster Sans) &amp; Pretendard</span>
            </div>
            <div className="flex justify-between py-2 border-b border-line/60">
              <span className="text-grey-7">Grid Baseline</span>
              <span className="text-ink font-medium">12.00px Pitch / 1px Hairline</span>
            </div>
            <div className="flex justify-between py-2 border-b border-line/60">
              <span className="text-grey-7">Shadow Policy</span>
              <span className="text-ink font-medium">Zero Elevation (0px Strict)</span>
            </div>
          </div>
        </div>

        <div className="border border-line p-8 bg-paper space-y-6">
          <div className="text-xs font-mono uppercase text-grey-7 pb-3 border-b border-line">
            PERFORMANCE &amp; ACCESSIBILITY
          </div>

          <div className="space-y-4 text-xs font-mono">
            <div className="flex justify-between py-2 border-b border-line/60">
              <span className="text-grey-7">Low-Power Chromebook Support</span>
              <span className="text-signal font-semibold">Enabled (requestAnimationFrame pause)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-line/60">
              <span className="text-grey-7">Reduced Motion Compliance</span>
              <span className="text-signal font-semibold">Strict (Static Celestial State)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-line/60">
              <span className="text-grey-7">Focus Visible Ring</span>
              <span className="text-ink font-medium">2px Solid Signal Cobalt (#3158A6)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-line/60">
              <span className="text-grey-7">Target Resolution</span>
              <span className="text-ink font-medium">390px ~ 1440px Continuous Responsive</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
