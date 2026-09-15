import React, { useState } from "react";
import { ArrowUpRight, Sun, Compass } from "lucide-react";

export const FeaturedAsterisk: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"dashboard" | "ambient" | "schedule">("dashboard");

  return (
    <article id="featured-asterisk" className="py-24 sm:py-32 border-b border-line bg-paper">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Header Metadata */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-line gap-2">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-grey-7">
            <span className="text-signal font-semibold">Featured Story 01</span>
            <span className="w-6 h-[1px] bg-line" />
            <span>School Life Platform</span>
          </div>
          <div className="text-xs font-mono text-grey-7">
            <span>2026 · Live Service</span>
          </div>
        </div>

        {/* Title & Core Statement */}
        <div className="my-10 lg:my-14 max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-4 px-2.5 py-1 bg-ink text-paper text-xs font-mono rounded-sm">
            <span className="text-[#A33A31] font-bold">*</span>
            <span>cnsh.life</span>
          </div>
          
          <h2 className="text-[clamp(2.4rem,5.5vw,4.8rem)] font-normal leading-[1.05] tracking-tight text-ink mb-6">
            asterisk*
          </h2>
          
          <p className="text-[clamp(1.2rem,2.2vw,1.75rem)] leading-[1.4] text-grey-9 font-normal">
            흩어진 학교생활을 하나의 화면으로 연결하다.
          </p>
        </div>

        {/* Storytelling Narrative 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-line">
          <div className="border-t border-line pt-6">
            <div className="text-xs font-mono text-signal font-semibold mb-2">01 / DISCOVERY</div>
            <h3 className="text-lg font-medium text-ink mb-3">흩어진 6개의 정보 채널</h3>
            <p className="text-sm text-grey-9 leading-relaxed">
              학생들은 시간표, 방과후, 급식, 학교 공지, 커뮤니티, 스터디룸 예약을 확인하기 위해 매일 6개 이상의 서로 다른 사이트와 링크를 오가야 했습니다.
            </p>
          </div>

          <div className="border-t border-line pt-6">
            <div className="text-xs font-mono text-signal font-semibold mb-2">02 / STRUCTURE</div>
            <h3 className="text-lg font-medium text-ink mb-3">한눈에 들어오는 오늘</h3>
            <p className="text-sm text-grey-9 leading-relaxed">
              설명을 읽지 않아도 지금 당장 필요한 '현재 교시 과목'과 '다음 급식', '오늘 시간표'가 가장 먼저 보이는 단일 대시보드 표면으로 정보 위계를 정리했습니다.
            </p>
          </div>

          <div className="border-t border-line pt-6">
            <div className="text-xs font-mono text-signal font-semibold mb-2">03 / AMBIENT</div>
            <h3 className="text-lg font-medium text-ink mb-3">창밖의 시간을 다시 느끼다</h3>
            <p className="text-sm text-grey-9 leading-relaxed">
              독서실과 교실 안에서 잊히기 쉬운 바깥 하늘을 위해, 학교의 실제 지리 좌표와 시각을 실시간 계산하여 일출·일몰과 밤하늘 항성시를 배경에 담았습니다.
            </p>
          </div>
        </div>

        {/* Interactive Editorial Visual Simulation */}
        <div className="my-16 border border-line bg-[#FAF9F5] p-6 sm:p-10 rounded-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-line gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A33A31]" />
              <span className="font-mono text-xs font-semibold text-ink uppercase tracking-wider">
                asterisk* Interface Architecture
              </span>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center gap-1 bg-line/60 p-1 rounded-sm text-xs font-mono">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`px-3 py-1.5 rounded-sm transition-all ${
                  activeTab === "dashboard"
                    ? "bg-paper text-ink font-medium shadow-xs"
                    : "text-grey-7 hover:text-ink"
                }`}
              >
                Daily Surface
              </button>
              <button
                onClick={() => setActiveTab("ambient")}
                className={`px-3 py-1.5 rounded-sm transition-all ${
                  activeTab === "ambient"
                    ? "bg-paper text-ink font-medium shadow-xs"
                    : "text-grey-7 hover:text-ink"
                }`}
              >
                Ambient Sky
              </button>
              <button
                onClick={() => setActiveTab("schedule")}
                className={`px-3 py-1.5 rounded-sm transition-all ${
                  activeTab === "schedule"
                    ? "bg-paper text-ink font-medium shadow-xs"
                    : "text-grey-7 hover:text-ink"
                }`}
              >
                Schedule &amp; Timetable
              </button>
            </div>
          </div>

          {/* Interactive Mockup Display */}
          <div className="mt-8 bg-paper border border-line p-6 sm:p-8 rounded-sm shadow-xs min-h-[320px] flex flex-col justify-between">
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Current Class Indicator */}
                  <div className="md:col-span-4 border border-line p-5 bg-[#FAF9F5] rounded-sm">
                    <div className="flex items-center justify-between text-xs font-mono text-grey-7 mb-2">
                      <span>CURRENT STATUS</span>
                      <span className="text-signal font-semibold">● 3교시 진행 중</span>
                    </div>
                    <div className="text-2xl font-medium text-ink">고급 물리학 I</div>
                    <div className="text-xs text-grey-7 mt-1 font-mono">10:40 – 11:30 · 과학동 302호</div>
                  </div>

                  {/* Next Meal */}
                  <div className="md:col-span-5 border border-line p-5 bg-[#FAF9F5] rounded-sm">
                    <div className="flex items-center justify-between text-xs font-mono text-grey-7 mb-2">
                      <span>TODAY'S LUNCH</span>
                      <span className="text-xs font-mono text-grey-7">중식</span>
                    </div>
                    <div className="text-sm font-medium text-ink line-clamp-2">
                      현미밥, 쇠고기미역국, 돈육간장불고기, 배추김치, 친환경사과
                    </div>
                    <div className="text-xs text-grey-7 mt-2 font-mono">열량: 742 kcal</div>
                  </div>

                  {/* Weather & Astro Time */}
                  <div className="md:col-span-3 border border-line p-5 bg-[#FAF9F5] rounded-sm">
                    <div className="text-xs font-mono text-grey-7 mb-2">LOCAL AMBIENT</div>
                    <div className="flex items-center gap-2 text-xl font-medium text-ink">
                      <Sun className="w-5 h-5 text-signal" />
                      <span>18.4°C</span>
                    </div>
                    <div className="text-xs text-grey-7 mt-1 font-mono">LST 14h 22m · 맑음</div>
                  </div>
                </div>

                <div className="border border-line p-4 text-xs font-mono text-grey-7 flex flex-wrap items-center justify-between gap-2">
                  <span>Integrated Hub: Community (community.qpi.digital) · Study Room Reservation (cnshstudy.kro.kr)</span>
                  <span className="text-signal font-medium">PWA Installed ✓</span>
                </div>
              </div>
            )}

            {activeTab === "ambient" && (
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-b from-[#2B2B2E] to-[#1E1E22] text-paper rounded-sm">
                  <div className="flex items-center justify-between text-xs font-mono text-grey-3 mb-4">
                    <span className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-signal" />
                      <span>Chungnam Science High School Astronomical Grid (Lat 36.45°N)</span>
                    </span>
                    <span>Sidereal Engine Active</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
                    <div>
                      <span className="text-grey-3 block">Sun Position</span>
                      <span className="text-sm text-white font-medium">RA 11h 38m · Dec +04°</span>
                    </div>
                    <div>
                      <span className="text-grey-3 block">Moon Phase</span>
                      <span className="text-sm text-white font-medium">Waxing Crescent (28%)</span>
                    </div>
                    <div>
                      <span className="text-grey-3 block">Local Sidereal Time</span>
                      <span className="text-sm text-white font-medium">14h 22m 45s</span>
                    </div>
                    <div>
                      <span className="text-grey-3 block">Night Sky Rotation</span>
                      <span className="text-sm text-white font-medium">True Celestial Motion</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-grey-9 leading-relaxed">
                  * 크롬북 및 저전력 기기를 위해 비활성 탭에서는 렌더링 루프를 즉시 일시 중단하며, 저사양 기기 사용자를 위한 배경 끄기 스위치를 기본 탑재했습니다.
                </div>
              </div>
            )}

            {activeTab === "schedule" && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-grey-7 flex items-center justify-between pb-2 border-b border-line">
                  <span>GRADE 2 · CLASS 1 WEEKLY TIMETABLE MATRIX</span>
                  <span>Auto-synced with Afterschool Courses</span>
                </div>

                <div className="grid grid-cols-5 gap-2 text-center text-xs font-mono">
                  {["MON", "TUE", "WED", "THU", "FRI"].map((day) => (
                    <div key={day} className="border border-line p-3 bg-[#FAF9F5] rounded-sm">
                      <div className="font-bold text-ink mb-2">{day}</div>
                      <div className="space-y-1 text-grey-9 text-[11px]">
                        <div>01 물리학</div>
                        <div>02 화학</div>
                        <div className="text-signal font-semibold">03 정보과학</div>
                        <div>04 미적분학</div>
                        <div className="text-grey-7">05 방과후(심화)</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Technical Decisions & Credits */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-line text-xs">
          <div className="md:col-span-4">
            <span className="font-mono uppercase text-grey-7 block mb-1">Roles &amp; Focus</span>
            <p className="text-grey-9 leading-relaxed">
              Planning, Product Design, Front-end Development, Astronomical Computation Logic
            </p>
          </div>

          <div className="md:col-span-4">
            <span className="font-mono uppercase text-grey-7 block mb-1">Credits</span>
            <p className="text-grey-9 leading-relaxed">
              개발: <strong className="font-medium text-ink">황석현, 이재원</strong>
            </p>
          </div>

          <div className="md:col-span-4 flex md:justify-end items-center">
            <a
              href="https://cnsh.life"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper text-xs font-mono uppercase tracking-wider rounded-sm hover:bg-signal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            >
              <span>Visit cnsh.life</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
