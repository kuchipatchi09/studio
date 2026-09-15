import React, { useState } from "react";

export const ProcessRail: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      name: "Observe",
      subtitle: "관찰과 발견",
      desc: "반복되는 불편을 가장 가까운 생활에서 발견합니다. 매일 마주치는 비효율과 분절된 정보의 단절을 관찰하고 원인을 정의합니다."
    },
    {
      num: "02",
      name: "Structure",
      subtitle: "구조화와 정돈",
      desc: "흩어진 정보와 기능의 관계를 다시 정리합니다. 사용자에게 필요한 정보의 우선순위를 세우고 단일 화면에서의 정보 밀도를 설계합니다."
    },
    {
      num: "03",
      name: "Build",
      subtitle: "구현과 최적화",
      desc: "아이디어를 실제로 사용할 수 있는 화면과 코드로 구현합니다. 저사양 기기와 다양한 화면 비율에서도 가볍고 빠르게 작동하도록 최적화합니다."
    },
    {
      num: "04",
      name: "Refine",
      subtitle: "검증과 다듬음",
      desc: "실제 사용 과정에서 드러난 문제를 확인하고 다시 고칩니다. 피드백을 기반으로 인터랙션과 성능의 완성도를 끝까지 끌어올립니다."
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 border-b border-line bg-paper">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-grey-7 mb-10 pb-6 border-b border-line">
          <span className="text-signal font-semibold">03</span>
          <span className="w-6 h-[1px] bg-line" />
          <span>Process</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Title */}
          <div className="lg:col-span-4">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] text-ink tracking-tight mb-6">
              문제에서 서비스로 <br />
              <span className="text-signal font-medium">이어지는 길</span>
            </h2>
            <p className="text-sm text-grey-9 leading-relaxed">
              사소한 생활의 관찰에서 시작해 실제 기기에서 매끄럽게 작동하는 견고한 시스템으로 완성하기까지의 네 가지 단계입니다.
            </p>
          </div>

          {/* Right Vertical Steps Rail */}
          <div className="lg:col-span-8 relative pl-6 sm:pl-10 border-l-2 border-line space-y-12">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="relative group cursor-pointer"
                onClick={() => setActiveStep(idx)}
              >
                {/* Step Marker on line */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                    activeStep >= idx
                      ? "bg-signal border-signal"
                      : "bg-paper border-line"
                  }`}
                />

                <div>
                  <div className="flex items-baseline gap-3 text-xs font-mono text-grey-7 mb-1">
                    <span className="text-signal font-bold">{step.num}</span>
                    <span className="font-semibold text-ink uppercase tracking-wider">{step.name}</span>
                    <span className="text-grey-7">/ {step.subtitle}</span>
                  </div>

                  <p className="text-base sm:text-lg text-ink font-normal leading-relaxed mt-2 max-w-[60ch]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
