import React from "react";

export const SpecView: React.FC = () => {
  const techStack = [
    {
      name: "React 18 & TypeScript",
      role: "UI & Core Architecture",
      desc: "컴포넌트 기반 UI 렌더링 엔진 및 엄격한 타입 안정성 확보",
    },
    {
      name: "Tailwind CSS",
      role: "Styling System",
      desc: "유틸리티 우선 1px 헤어라인 및 ASDS 디자인 토큰 체계",
    },
    {
      name: "Asta Sans & Pretendard",
      role: "Typography",
      desc: "ASDS 표준 다국어 직립 타이포그래피 시스템",
    },
    {
      name: "Vite & Service Worker (PWA)",
      role: "Build & Offline Engine",
      desc: "초경량 번들링 및 저사양 크롬북 환경 오프라인 캐싱",
    },
    {
      name: "Astronomical Celestial Engine",
      role: "Science Computation",
      desc: "학교 지리좌표 기반 일출·일몰 및 지방 항성시(LST) 실시간 연산",
    },
  ];

  return (
    <div className="pt-20 pb-32 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 text-ink font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-line gap-3">
        <div>
          <div className="text-xs uppercase text-grey-7 mb-1">
            04 Developer &amp; Credits
          </div>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight">
            Credit &amp; Developer Info
          </h1>
        </div>

        <div className="text-xs text-grey-7">
          asterstudio의 철학과 인터랙션을 설계·구현한 개발자 프로필
        </div>
      </div>

      {/* 2-Column Grid: Profile on Left, Tech Stack on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 items-stretch">
        {/* Left Big Card: Developer Profile */}
        <div className="lg:col-span-6 border border-line bg-[#FAF9F5] p-8 sm:p-10 flex flex-col justify-between">
          <div>
            {/* Top Badge Line */}
            <div className="flex items-center justify-between text-xs pb-4 border-b border-line text-grey-7">
              <span className="flex items-center gap-2 font-medium text-ink">
                <span className="w-2 h-2 rounded-full bg-signal" />
                <span>LEAD DEVELOPER &amp; DESIGNER</span>
              </span>
              <span>KOREA</span>
            </div>

            {/* Name & Title */}
            <div className="mt-8">
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-ink">
                황석현
              </h2>
              <p className="text-sm font-medium text-signal mt-2">
                Planning, UI/UX Design &amp; Front-end Systems Architect
              </p>
            </div>

            {/* Core Philosophy Statement */}
            <p className="text-sm sm:text-base text-grey-9 leading-relaxed mt-6">
              흩어진 정보와 일상의 작은 불편을 관찰하여, 명료한 질서와 사용성을 갖춘 단단한 화면으로 연결합니다.
            </p>

            {/* Bullet Points */}
            <div className="mt-8 space-y-3 text-xs sm:text-sm text-ink">
              <div className="flex items-baseline gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-signal shrink-0 mt-1.5" />
                <span>통합 학교생활 플랫폼(asterisk*) 기획 및 전 학년 서비스 설계</span>
              </div>
              <div className="flex items-baseline gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-signal shrink-0 mt-1.5" />
                <span>천문 계산 및 과학 데이터 인터랙티브 시각화 (qets.kro.kr)</span>
              </div>
              <div className="flex items-baseline gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-signal shrink-0 mt-1.5" />
                <span>1px 헤어라인 기반 미니멀 디자인 시스템(ASDS) 구축</span>
              </div>
              <div className="flex items-baseline gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-signal shrink-0 mt-1.5" />
                <span>저사양 크롬북 및 모바일 PWA 환경 최적화 엔지니어링</span>
              </div>
            </div>
          </div>

          {/* Bottom Collaboration Credits */}
          <div className="mt-10 pt-6 border-t border-line text-xs text-grey-7 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>asterisk* 공동 개발: <strong className="text-ink font-medium">황석현, 이재원</strong></span>
            <span>Chungnam Science High School</span>
          </div>
        </div>

        {/* Right Card: Tech Stack */}
        <div className="lg:col-span-6 border border-line bg-[#FAF9F5] p-8 sm:p-10 flex flex-col justify-between">
          <div>
            {/* Top Header */}
            <div className="flex items-center justify-between text-xs pb-4 border-b border-line text-grey-7">
              <span>CREDITS</span>
              <span>SYSTEM STACK</span>
            </div>

            <h3 className="text-2xl font-normal text-ink mt-6 mb-6">
              Tech Stack
            </h3>

            {/* Stack Cards */}
            <div className="space-y-3">
              {techStack.map((item) => (
                <div
                  key={item.name}
                  className="p-4 bg-paper border border-line flex flex-col justify-between gap-1 hover:border-grey-3 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-2 text-xs">
                    <span className="text-sm font-medium text-ink">{item.name}</span>
                    <span className="text-grey-7 text-[11px] shrink-0">{item.role}</span>
                  </div>
                  <p className="text-xs text-grey-9 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-line text-xs text-grey-7 flex justify-between items-center">
            <span>Architecture Verified</span>
            <span className="text-signal font-medium">ASDS-SPEC-2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};
