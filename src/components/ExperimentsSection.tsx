import React from "react";
import { EXPERIMENTS } from "../data/experiments";

export const ExperimentsSection: React.FC = () => {
  return (
    <section id="experiments" className="py-24 sm:py-32 border-b border-line bg-paper">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-8 border-b border-line gap-2">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-grey-7">
            <span className="text-signal font-semibold">03.5</span>
            <span className="w-6 h-[1px] bg-line" />
            <span>Experiments &amp; Scientific Inquiries</span>
          </div>
          <div className="text-xs font-mono text-grey-7">
            <span>Research Background ({EXPERIMENTS.length.toString().padStart(2, "0")})</span>
          </div>
        </div>

        <div className="mt-8 mb-12 max-w-3xl">
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-normal leading-snug text-ink tracking-tight mb-4">
            과학적 탐구와 인터페이스의 교차점
          </h2>
          <p className="text-sm text-grey-9 leading-relaxed">
            복잡한 다차원 데이터를 분석하고 물리적·천문학적 규칙성을 찾는 탐구 과정은,
            웹 인터페이스의 정보 구조와 반응성을 설계하는 수학적·공학적 기반이 되었습니다.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERIMENTS.map((exp) => (
            <div
              key={exp.id}
              className="border border-line bg-[#FAF9F5] p-6 sm:p-8 rounded-sm flex flex-col justify-between hover:border-grey-3 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-grey-7 pb-3 border-b border-line">
                  <span>{exp.index}</span>
                  <span className="text-signal font-medium">{exp.period}</span>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg sm:text-xl font-medium text-ink tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-xs font-mono text-grey-7 mt-1">
                    {exp.category}
                  </p>
                </div>

                <p className="text-xs text-grey-9 mt-4 leading-relaxed">
                  {exp.summary}
                </p>

                <div className="mt-4 pt-4 border-t border-line/60">
                  <span className="text-[11px] font-mono text-grey-7 uppercase block mb-1.5">
                    Core Methodology
                  </span>
                  <ul className="text-xs text-grey-9 space-y-1 list-disc list-inside">
                    {exp.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-line text-xs text-grey-7 bg-paper p-3 rounded-sm border">
                <span className="text-signal font-semibold font-mono block mb-1">Relevance to UI Architecture</span>
                <p className="text-grey-9">{exp.relevanceToUI}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
