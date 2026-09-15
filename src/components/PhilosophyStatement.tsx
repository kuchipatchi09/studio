import React from "react";

export const PhilosophyStatement: React.FC = () => {
  const pillars = [
    {
      step: "01",
      name: "Observe",
      title: "일상의 사소한 불편을 발견",
      desc: "수많은 페이지와 공지 속에 흩어져 매일 반복되는 비효율과 미처 연결되지 못한 요구를 세밀하게 관찰합니다."
    },
    {
      step: "02",
      name: "Connect",
      title: "흩어진 정보를 하나의 질서로 연결",
      desc: "단절된 데이터, 시간표, 천문 계산, 예약 기능을 복잡한 설명 없이 한눈에 파악할 수 있는 체계로 재구성합니다."
    },
    {
      step: "03",
      name: "Illuminate",
      title: "사람들의 일상을 밝히는 화면",
      desc: "저사양 크롬북과 모바일 기기에서도 지연 없이 매끄럽게 작동하는 실제적이고 따뜻한 웹 경험을 완성합니다."
    }
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 border-b border-line bg-paper">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Index */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-grey-7 mb-8">
          <span className="text-signal font-semibold">01</span>
          <span className="w-6 h-[1px] bg-line" />
          <span>Philosophy</span>
        </div>

        {/* Lead Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(2.2rem,4.8vw,4.2rem)] font-normal leading-[1.12] text-ink tracking-tight mb-8">
              별 하나의 빛은 작지만,
              <br />
              <span className="text-signal font-medium">서로 연결되면</span> 길이 됩니다.
            </h2>

            <div className="space-y-6 text-[1.125rem] leading-[1.75] text-grey-9 max-w-[65ch]">
              <p>
                학교생활 속에 흩어진 정보와 매일 반복되는 작은 불편을 관찰합니다.
                그리고 필요한 기능과 데이터를 하나의 질서로 연결해,
                누구나 자연스럽게 사용할 수 있는 화면으로 만듭니다.
              </p>
              <p className="text-[1rem] text-grey-7 leading-relaxed">
                asterstudio에게 ‘별빛’은 장식적인 우주 이미지가 아닙니다.
                교실과 기숙사에 흩어진 정보, 과학 데이터 속에 숨어 있는 규칙,
                사용자에게 꼭 필요하지만 아직 이어지지 않은 기능들을 발굴하여
                실제로 작동하는 단단한 인터페이스로 엮어내는 약속입니다.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 border-l border-line pl-6 lg:pl-8 space-y-8 pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-grey-7 mb-4">
              Brand Principles
            </div>
            {pillars.map((pillar) => (
              <div key={pillar.step} className="group">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-xs font-mono text-signal font-semibold">{pillar.step}</span>
                  <span className="text-sm font-semibold tracking-wide uppercase text-ink">{pillar.name}</span>
                </div>
                <h3 className="text-sm font-medium text-ink mb-1">{pillar.title}</h3>
                <p className="text-xs text-grey-7 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
