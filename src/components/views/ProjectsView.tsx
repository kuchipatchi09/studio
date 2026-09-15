import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectsViewProps {
  onNavigateToDesign?: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onNavigateToDesign }) => {
  // Interactive widget states
  const [selectedPeriod, setSelectedPeriod] = useState<number>(7);
  const [selectedElement, setSelectedElement] = useState<{ symbol: string; name: string; num: number; mass: string; cat: string }>({
    symbol: "Fe",
    name: "Iron",
    num: 26,
    mass: "55.845 u",
    cat: "Transition Metal",
  });
  const [bookedRooms, setBookedRooms] = useState<Record<string, boolean>>({
    "스터디룸 1": false,
    "스터디룸 2": true,
    "스터디룸 3": true,
  });

  const timetableData: Record<number, { name: string; time: string }> = {
    1: { name: "수학 II", time: "08:50~09:40" },
    2: { name: "물리학 II", time: "09:50~10:40" },
    3: { name: "화학 II", time: "10:50~11:40" },
    4: { name: "영어 독해", time: "11:50~12:40" },
    5: { name: "정보과학", time: "13:40~14:30" },
    6: { name: "생명과학 II", time: "14:40~15:30" },
    7: { name: "한국사", time: "15:30~16:20" },
  };

  const sampleElements = [
    { symbol: "H", name: "Hydrogen", num: 1, mass: "1.008 u", cat: "Reactive Nonmetal" },
    { symbol: "C", name: "Carbon", num: 6, mass: "12.011 u", cat: "Reactive Nonmetal" },
    { symbol: "O", name: "Oxygen", num: 8, mass: "15.999 u", cat: "Reactive Nonmetal" },
    { symbol: "Fe", name: "Iron", num: 26, mass: "55.845 u", cat: "Transition Metal" },
    { symbol: "Au", name: "Gold", num: 79, mass: "196.97 u", cat: "Transition Metal" },
  ];

  const projects = [
    {
      id: "PROJECT 01",
      category: "School Life Platform",
      title: "asterisk*",
      desc: "충남과학고 학생들이 매일 확인해야 하는 시간표, 방과후, 급식, 공지, 예약 정보를 하나의 대시보드로 집약하고 천문 Ambient 배경을 결합한 통합 학교생활 플랫폼입니다.",
      previewContent: "The Answer to Campus Life, and Everything.",
      linkText: "Visit cnsh.life →",
      linkUrl: "https://cnsh.life",
      isExternal: true,
    },
    {
      id: "PROJECT 02",
      category: "Educational Interface",
      title: "QPI Periodic Table",
      desc: "주기율표 전체의 거시적 위치 관계(70%)와 개별 원소의 미시적 물성 데이터시트(30%)를 한 화면에서 스크롤 없이 동시에 탐색할 수 있는 교육용 웹 인터페이스입니다.",
      previewContent: "70 : 30 Viewport Ratio Matrix",
      linkText: "Visit qets.kro.kr →",
      linkUrl: "https://qets.kro.kr",
      isExternal: true,
    },
    {
      id: "PROJECT 03",
      category: "Service System",
      title: "통합 예약 시스템",
      desc: "공간 및 스터디룸 예약 시 발생하는 중복과 사용 불편을 개선하기 위해, 직관적인 타임테이블과 크로스 디바이스 반응형 플로우를 제공하는 예약 시스템입니다.",
      previewContent: "kuchipatchi09.github.io/reserve/",
      linkText: "Visit Reserve →",
      linkUrl: "https://kuchipatchi09.github.io/reserve/",
      isExternal: true,
    },
    {
      id: "PROJECT 04",
      category: "Design System",
      title: "ASDS",
      desc: "asterstudio Design System - 실제 서비스에서 검증된 핵심 색상 토큰과 1px 헤어라인 기반의 명확한 데이터시트 정보 설계를 디지털 UI로 구현한 디자인 시스템입니다.",
      previewDots: [
        "#3158A6",
        "#A33A31",
        "#2C6B74",
        "#2B2B2E",
        "#F7F6F2",
        "#E7E6E1",
      ],
      linkText: "View ASDS Spec →",
      isInternalTab: true,
    },
  ];

  return (
    <div className="pt-20 pb-32 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 text-ink font-sans">
      {/* Title Header */}
      <div className="pb-8 border-b border-line">
        <div className="text-xs uppercase text-signal font-semibold mb-2">
          02 Verified Projects
        </div>
        <h1 className="text-3xl sm:text-5xl font-normal tracking-tight mb-3">
          Project Archive
        </h1>
        <p className="text-sm sm:text-base text-grey-9 max-w-2xl leading-relaxed">
          실제 사용자 환경에서 발생하는 문제를 발견하고 명확한 인터페이스와 시스템으로 구현한 대표 4대 작업입니다.
        </p>
      </div>

      {/* 2x2 Box Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Project 01: asterisk* */}
        <div className="border border-line bg-[#FAF9F5] p-8 sm:p-10 flex flex-col justify-between min-h-[460px] hover:border-grey-3 transition-all duration-200 hover:shadow-xs group relative">
          <div>
            <div className="flex items-center justify-between text-xs text-grey-7 pb-4 mb-6 border-b border-line">
              <span className="font-medium text-ink flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                <span>PROJECT 01</span>
              </span>
              <span className="uppercase tracking-wider text-[11px]">School Life Platform</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-normal text-ink tracking-tight mb-3 group-hover:text-signal transition-colors duration-150">
              asterisk*
            </h2>
            <p className="text-xs sm:text-sm text-grey-9 leading-relaxed">
              {projects[0].desc}
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {/* Live Interactive Timetable Widget */}
            <div className="p-4 border border-line bg-paper space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-ink flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
                  <span>지금 수업: {selectedPeriod}교시 {timetableData[selectedPeriod].name}</span>
                </span>
                <span className="text-[10px] text-grey-7 font-mono">{timetableData[selectedPeriod].time}</span>
              </div>

              {/* Interactive Period Selector */}
              <div className="grid grid-cols-7 gap-1">
                {[1, 2, 3, 4, 5, 6, 7].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`py-1 text-[10px] font-medium border transition-colors ${
                      selectedPeriod === period
                        ? "bg-ink text-paper border-ink"
                        : "bg-[#FAF9F5] text-grey-9 border-line hover:border-ink"
                    }`}
                  >
                    {period}교시
                  </button>
                ))}
              </div>

              <div className="text-[11px] font-medium text-grey-7 text-center pt-1 border-t border-line/60">
                {projects[0].previewContent}
              </div>
            </div>

            {/* Bottom Link */}
            <div className="pt-2 flex items-center justify-between text-xs font-medium">
              <a
                href={projects[0].linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-signal inline-flex items-center gap-1.5 transition-colors group/link"
              >
                <span>{projects[0].linkText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-grey-7 group-hover/link:text-signal group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Project 02: QPI Periodic Table */}
        <div className="border border-line bg-[#FAF9F5] p-8 sm:p-10 flex flex-col justify-between min-h-[460px] hover:border-grey-3 transition-all duration-200 hover:shadow-xs group relative">
          <div>
            <div className="flex items-center justify-between text-xs text-grey-7 pb-4 mb-6 border-b border-line">
              <span className="font-medium text-ink flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                <span>PROJECT 02</span>
              </span>
              <span className="uppercase tracking-wider text-[11px]">Educational Interface</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-normal text-ink tracking-tight mb-3 group-hover:text-signal transition-colors duration-150">
              QPI Periodic Table
            </h2>
            <p className="text-xs sm:text-sm text-grey-9 leading-relaxed">
              {projects[1].desc}
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {/* Live Interactive Periodic Element Explorer */}
            <div className="p-4 border border-line bg-paper space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#2C6B74] text-paper text-xs font-mono font-bold">
                    {selectedElement.symbol}
                  </span>
                  <span className="font-medium text-ink">{selectedElement.name} ({selectedElement.num})</span>
                </div>
                <span className="text-[10px] text-grey-7 font-mono">{selectedElement.mass}</span>
              </div>

              {/* Interactive Element Buttons */}
              <div className="flex items-center justify-between gap-1.5">
                {sampleElements.map((el) => (
                  <button
                    key={el.symbol}
                    onClick={() => setSelectedElement(el)}
                    className={`flex-1 py-1.5 text-xs font-mono border transition-all ${
                      selectedElement.symbol === el.symbol
                        ? "bg-[#2C6B74] text-paper border-[#2C6B74] font-bold"
                        : "bg-[#FAF9F5] text-grey-9 border-line hover:border-[#2C6B74]"
                    }`}
                  >
                    {el.symbol}
                  </button>
                ))}
              </div>

              <div className="text-[11px] font-medium text-grey-7 text-center pt-1 border-t border-line/60">
                {projects[1].previewContent}
              </div>
            </div>

            {/* Bottom Link */}
            <div className="pt-2 flex items-center justify-between text-xs font-medium">
              <a
                href={projects[1].linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-signal inline-flex items-center gap-1.5 transition-colors group/link"
              >
                <span>{projects[1].linkText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-grey-7 group-hover/link:text-signal group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Project 03: 통합 예약 시스템 */}
        <div className="border border-line bg-[#FAF9F5] p-8 sm:p-10 flex flex-col justify-between min-h-[460px] hover:border-grey-3 transition-all duration-200 hover:shadow-xs group relative">
          <div>
            <div className="flex items-center justify-between text-xs text-grey-7 pb-4 mb-6 border-b border-line">
              <span className="font-medium text-ink flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                <span>PROJECT 03</span>
              </span>
              <span className="uppercase tracking-wider text-[11px]">Service System</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-normal text-ink tracking-tight mb-3 group-hover:text-signal transition-colors duration-150">
              통합 예약 시스템
            </h2>
            <p className="text-xs sm:text-sm text-grey-9 leading-relaxed">
              {projects[2].desc}
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {/* Live Interactive Room Booking Simulator */}
            <div className="p-4 border border-line bg-paper space-y-3">
              <div className="space-y-1.5">
                {Object.keys(bookedRooms).map((room) => (
                  <div
                    key={room}
                    onClick={() => setBookedRooms({ ...bookedRooms, [room]: !bookedRooms[room] })}
                    className="flex items-center justify-between p-2 border border-line bg-[#FAF9F5] hover:border-grey-3 cursor-pointer text-xs transition-colors"
                  >
                    <span className="text-ink font-medium">{room} · 19:00 - 21:00</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 border font-medium ${
                        bookedRooms[room]
                          ? "bg-signal/10 border-signal/30 text-signal"
                          : "bg-paper border-line text-grey-7"
                      }`}
                    >
                      {bookedRooms[room] ? "예약 완료" : "예약 가능"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-[11px] font-medium text-grey-7 text-center pt-1 border-t border-line/60">
                {projects[2].previewContent}
              </div>
            </div>

            {/* Bottom Link */}
            <div className="pt-2 flex items-center justify-between text-xs font-medium">
              <a
                href={projects[2].linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-signal inline-flex items-center gap-1.5 transition-colors group/link"
              >
                <span>{projects[2].linkText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-grey-7 group-hover/link:text-signal group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Project 04: ASDS */}
        <div className="border border-line bg-[#FAF9F5] p-8 sm:p-10 flex flex-col justify-between min-h-[460px] hover:border-grey-3 transition-all duration-200 hover:shadow-xs group relative">
          <div>
            <div className="flex items-center justify-between text-xs text-grey-7 pb-4 mb-6 border-b border-line">
              <span className="font-medium text-ink flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                <span>PROJECT 04</span>
              </span>
              <span className="uppercase tracking-wider text-[11px]">Design System</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-normal text-ink tracking-tight mb-3 group-hover:text-signal transition-colors duration-150">
              ASDS
            </h2>
            <p className="text-xs sm:text-sm text-grey-9 leading-relaxed">
              {projects[3].desc}
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {/* Live Interactive ASDS Swatches */}
            <div className="p-4 border border-line bg-paper space-y-3">
              <div className="flex items-center justify-center gap-2.5 py-2">
                {projects[3].previewDots?.map((dot, idx) => (
                  <div
                    key={idx}
                    className="w-5 h-5 rounded-full border border-black/10 transition-transform duration-200 hover:scale-125 cursor-pointer shadow-xs"
                    style={{ backgroundColor: dot }}
                  />
                ))}
              </div>

              <div className="text-[11px] font-medium text-grey-7 text-center pt-1 border-t border-line/60">
                Actual Production Tokens (6)
              </div>
            </div>

            {/* Bottom Link */}
            <div className="pt-2 flex items-center justify-between text-xs font-medium">
              <button
                onClick={() => {
                  if (onNavigateToDesign) onNavigateToDesign();
                  else window.location.hash = "design";
                }}
                className="text-ink hover:text-signal inline-flex items-center gap-1.5 transition-colors"
              >
                <span>{projects[3].linkText}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
