import React from "react";

export const SpecView: React.FC = () => {
  return (
    <div className="pt-20 pb-32 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 text-ink">
      <div className="pb-10 border-b border-line">
        <div className="text-xs font-mono uppercase text-grey-7 mb-2">
          03 // System Specifications
        </div>
        <h1 className="text-3xl sm:text-5xl font-normal tracking-tight mb-4">
          Technical Specifications
        </h1>
        <p className="text-sm sm:text-base text-grey-9 max-w-2xl leading-relaxed">
          asterstudio와 서브 시스템들의 표준 규격 및 아키텍처 파라미터입니다.
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
              <span className="text-grey-7">Design System</span>
              <span className="text-ink font-medium">KUDS Linear Specification</span>
            </div>
            <div className="flex justify-between py-2 border-b border-line/60">
              <span className="text-grey-7">Typography Family</span>
              <span className="text-ink font-medium">IBM Plex Sans &amp; Pretendard</span>
            </div>
            <div className="flex justify-between py-2 border-b border-line/60">
              <span className="text-grey-7">Grid Baseline</span>
              <span className="text-ink font-medium">12.00px Pitch / 1px Hairline</span>
            </div>
            <div className="flex justify-between py-2 border-b border-line/60">
              <span className="text-grey-7">Shadow Policy</span>
              <span className="text-ink font-medium">Zero Elevation (0px)</span>
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
              <span className="text-[#556042] font-semibold">Enabled</span>
            </div>
            <div className="flex justify-between py-2 border-b border-line/60">
              <span className="text-grey-7">Reduced Motion Compliance</span>
              <span className="text-[#556042] font-semibold">Strict (Static Fallback)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-line/60">
              <span className="text-grey-7">Focus Visible Ring</span>
              <span className="text-ink font-medium">2px Solid #556042</span>
            </div>
            <div className="flex justify-between py-2 border-b border-line/60">
              <span className="text-grey-7">Target Resolution</span>
              <span className="text-ink font-medium">390px ~ 1440px Continuous</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
