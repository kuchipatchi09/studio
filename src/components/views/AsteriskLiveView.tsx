import React, { useState } from "react";
import { ArrowUpRight, Edit3 } from "lucide-react";

export const AsteriskLiveView: React.FC = () => {
  const [subView, setSubView] = useState<"dashboard" | "meal">("dashboard");
  const [mealType, setMealType] = useState<"breakfast" | "lunch" | "dinner">("dinner");

  return (
    <div className="pt-20 pb-32 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 text-ink font-sans">
      {/* Intro Header */}
      <div className="pb-8 border-b border-line flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase text-signal font-semibold mb-2">
            03 Live Architecture Showcase
          </div>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight">
            asterisk*
          </h1>
          <p className="text-sm sm:text-base text-grey-9 mt-2">
            실제 충남과학고 학생들이 사용하는 통합 학교생활 플랫폼의 인터페이스 아키텍처입니다.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://cnsh.life"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-ink text-paper text-xs font-medium hover:bg-signal transition-colors"
          >
            <span>Live Site (cnsh.life)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="my-8 flex items-center justify-between border-b border-line pb-4">
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => setSubView("dashboard")}
            className={`px-4 py-2 border transition-all ${
              subView === "dashboard"
                ? "bg-ink text-paper border-ink font-medium"
                : "bg-paper text-grey-9 border-line hover:border-ink"
            }`}
          >
            메인 대시보드
          </button>
          <button
            onClick={() => setSubView("meal")}
            className={`px-4 py-2 border transition-all ${
              subView === "meal"
                ? "bg-ink text-paper border-ink font-medium"
                : "bg-paper text-grey-9 border-line hover:border-ink"
            }`}
          >
            이번 주 급식 뷰
          </button>
        </div>

        <div className="text-xs text-grey-7 hidden sm:block">
          개발: 황석현, 이재원 · 2학년 2반 기준
        </div>
      </div>

      {/* Frame Container: Exact Recreation of asterisk* UI */}
      <div className="border border-line bg-paper shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        {/* asterisk* Mini Header */}
        <div className="h-14 border-b border-line px-6 sm:px-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 font-medium tracking-tight">
            <span className="leading-tight text-xs">aste<br />risk *</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-grey-9">
            <button
              onClick={() => setSubView("dashboard")}
              className={`px-3 py-1 ${subView === "dashboard" ? "bg-ink text-paper font-medium" : "hover:text-ink"}`}
            >
              메인
            </button>
            <span className="hover:text-ink cursor-pointer">공지</span>
            <button
              onClick={() => setSubView("meal")}
              className={`px-3 py-1 ${subView === "meal" ? "bg-ink text-paper font-medium" : "hover:text-ink"}`}
            >
              학교생활 ›
            </button>
            <span className="hover:text-ink cursor-pointer hidden sm:inline">기타 ›</span>
            <span className="hover:text-ink cursor-pointer hidden sm:inline">커뮤니티 ↗</span>
            <span className="flex items-center gap-1 text-ink font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-signal" />
              <span>석현 ↗</span>
            </span>
          </div>
        </div>

        {/* Inner Content Body */}
        <div className="p-6 sm:p-10 space-y-8 bg-paper">
          {/* Greeting Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-line gap-3">
            <div>
              <div className="text-xs text-grey-7 mb-1">9월 15일 (화)</div>
              <div className="text-lg sm:text-2xl font-normal text-ink flex items-center gap-2">
                <span>청명한 파란 하늘처럼 석현님의 하루도 맑음 가득하길 바라요.</span>
                <Edit3 className="w-4 h-4 text-grey-7" />
              </div>
            </div>

            <div className="px-3 py-1 border border-line bg-[#FAF9F5] text-xs font-medium text-ink w-fit">
              2학년 2반
            </div>
          </div>

          {subView === "dashboard" ? (
            <div className="space-y-8">
              {/* 1. Primary Big Black Card: 지금 수업 */}
              <div className="bg-ink text-paper p-6 sm:p-8 rounded-none flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex items-center justify-between text-xs text-grey-3 mb-4">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 bg-paper" />
                      <span>지금 수업</span>
                    </span>
                    <span className="text-grey-3">종료까지 1분 99.476%</span>
                  </div>

                  <div className="text-xs text-grey-3">7교시 · 15:30~16:20</div>
                  <div className="text-3xl sm:text-5xl font-normal tracking-tight text-paper mt-1">
                    한국사
                  </div>
                  <div className="text-xs text-grey-3 mt-1">2학년 2반</div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs text-grey-3">
                    다음 일과 청소 시간 · 16:20
                  </div>
                  <button className="px-3 py-1 border border-white/30 text-xs text-paper hover:bg-white/10 transition-colors w-fit">
                    종업 타이머로
                  </button>
                </div>
              </div>

              {/* 2. Three Column Cards: Weather / Today's Meal / Latest Notice */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Weather */}
                <div className="border border-line p-6 bg-paper flex flex-col justify-between min-h-[200px]">
                  <div>
                    <div className="text-xs text-grey-7 mb-3">* LIVE WEATHER</div>
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-grey-7" />
                      <span className="text-3xl sm:text-4xl font-normal text-ink">25°</span>
                    </div>
                    <div className="text-sm font-medium text-ink mt-2">맑음</div>
                    <div className="text-xs text-grey-7 mt-0.5">체감 25° · 습도 35%</div>
                  </div>
                  <div className="pt-4 border-t border-line/60 text-[10px] text-grey-7">
                    Weather data © OpenWeather
                  </div>
                </div>

                {/* Today's Meal */}
                <div className="border border-line p-6 bg-paper flex flex-col justify-between min-h-[200px]">
                  <div>
                    <div className="text-xs text-grey-7 mb-1">* TODAY'S MEAL</div>
                    <h4 className="text-base font-medium text-ink mb-2">오늘의 석식</h4>
                    <p className="text-xs text-grey-9 leading-relaxed">
                      새우볶음밥 · 미니짬뽕 · 갈비만두/김치만두 · 사천식탕수육 · 쿠키번 · 배추김치 · 골라먹는라떼 · 단무지
                    </p>
                  </div>
                  <div className="pt-4 border-t border-line/60">
                    <button
                      onClick={() => setSubView("meal")}
                      className="text-xs text-ink hover:text-signal font-medium inline-flex items-center gap-1"
                    >
                      <span>주간 급식 보기</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

                {/* Latest Notice */}
                <div className="border border-line p-6 bg-paper flex flex-col justify-between min-h-[200px]">
                  <div>
                    <div className="text-xs text-grey-7 mb-1">* LATEST NOTICE</div>
                    <h4 className="text-base font-medium text-ink mb-2">최신 공지</h4>
                    <p className="text-xs text-grey-7">
                      공지를 불러오는 중입니다.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-line/60 text-xs text-grey-7">
                    학교 공식 알림 연동
                  </div>
                </div>
              </div>

              {/* 3. Today's Schedule Timeline */}
              <div className="border border-line p-6 bg-paper">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-line">
                  <div>
                    <span className="text-xs text-grey-7 block mb-0.5">* TODAY'S SCHEDULE</span>
                    <h4 className="text-base font-medium text-ink">오늘 시간표</h4>
                  </div>
                  <button className="text-xs text-grey-9 hover:text-ink border border-line px-3 py-1">
                    전체 시간표 →
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 text-xs">
                  <div className="p-3 border border-line bg-[#FAF9F5]">
                    <div className="text-grey-7 mb-1 font-mono">1 · 08:40</div>
                    <div className="font-medium text-ink">AP선대(김)</div>
                  </div>
                  <div className="p-3 border border-line bg-[#FAF9F5]">
                    <div className="text-grey-7 mb-1 font-mono">2 · 09:40</div>
                    <div className="font-medium text-ink">AP선대(정)</div>
                  </div>
                  <div className="p-3 border border-line bg-[#FAF9F5]">
                    <div className="text-grey-7 mb-1 font-mono">3 · 10:40</div>
                    <div className="font-medium text-ink">생/지</div>
                  </div>
                  <div className="p-3 border border-line bg-[#FAF9F5]">
                    <div className="text-grey-7 mb-1 font-mono">4 · 11:40</div>
                    <div className="font-medium text-ink">생/지</div>
                  </div>
                  <div className="p-3 border border-line bg-[#FAF9F5]">
                    <div className="text-grey-7 mb-1 font-mono">5 · 13:30</div>
                    <div className="font-medium text-ink">스포츠</div>
                  </div>
                  <div className="p-3 border border-line bg-[#FAF9F5]">
                    <div className="text-grey-7 mb-1 font-mono">6 · 14:30</div>
                    <div className="font-medium text-ink">영어2</div>
                  </div>
                  <div className="p-3 bg-ink text-paper border border-ink">
                    <div className="text-grey-3 mb-1 font-mono">7 · 15:30</div>
                    <div className="font-medium text-paper">한국사 (현재)</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Weekly Meal Schedule View */
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 border-b border-line gap-3">
                <div>
                  <div className="text-xs text-grey-7 mb-1">* WEEKLY MEAL</div>
                  <h3 className="text-xl sm:text-2xl font-normal text-ink">이번 주 급식</h3>
                </div>

                <div className="flex gap-1 border border-line p-1 bg-[#FAF9F5] text-xs">
                  <button
                    onClick={() => setMealType("breakfast")}
                    className={`px-3 py-1 ${mealType === "breakfast" ? "bg-ink text-paper font-medium" : "text-grey-7"}`}
                  >
                    조식
                  </button>
                  <button
                    onClick={() => setMealType("lunch")}
                    className={`px-3 py-1 ${mealType === "lunch" ? "bg-ink text-paper font-medium" : "text-grey-7"}`}
                  >
                    중식
                  </button>
                  <button
                    onClick={() => setMealType("dinner")}
                    className={`px-3 py-1 ${mealType === "dinner" ? "bg-ink text-paper font-medium" : "text-grey-7"}`}
                  >
                    석식
                  </button>
                </div>
              </div>

              {/* 5-Day Weekly Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {/* Mon */}
                <div className="border border-line p-4 bg-paper">
                  <div className="flex justify-between items-baseline pb-2 mb-3 border-b border-line text-xs">
                    <span className="font-medium text-ink">월</span>
                    <span className="text-grey-7">9.14</span>
                  </div>
                  <div className="space-y-1 text-xs text-grey-9 leading-relaxed">
                    <div>미니밥</div>
                    <div>브로콜리크림스프</div>
                    <div>리코타치즈샐러드</div>
                    <div>미트볼스파게티</div>
                    <div>고구마치즈롤가스</div>
                    <div>배추김치</div>
                    <div>유산균음료</div>
                    <div>마늘빵</div>
                  </div>
                </div>

                {/* Tue (Today Active) */}
                <div className="border-2 border-ink p-4 bg-[#F2F1EC] relative shadow-xs">
                  <div className="flex justify-between items-baseline pb-2 mb-3 border-b border-ink/40 text-xs">
                    <span className="font-bold text-ink">화 (오늘)</span>
                    <span className="text-ink font-medium">9.15</span>
                  </div>
                  <div className="space-y-1 text-xs text-ink font-medium leading-relaxed">
                    <div>새우볶음밥</div>
                    <div>미니짬뽕</div>
                    <div>갈비만두/김치만두</div>
                    <div>사천식탕수육</div>
                    <div>쿠키번</div>
                    <div>배추김치</div>
                    <div>골라먹는라떼</div>
                    <div>단무지</div>
                  </div>
                </div>

                {/* Wed */}
                <div className="border border-line p-4 bg-paper">
                  <div className="flex justify-between items-baseline pb-2 mb-3 border-b border-line text-xs">
                    <span className="font-medium text-ink">수</span>
                    <span className="text-grey-7">9.16</span>
                  </div>
                  <div className="space-y-1 text-xs text-grey-9 leading-relaxed">
                    <div>쌀밥</div>
                    <div>사골순대국</div>
                    <div>육전&amp;골뱅이소면무침</div>
                    <div>부추무침</div>
                    <div>달걀말이떡볶이</div>
                    <div>깍두기</div>
                    <div>딸기&amp;화이트롤케익</div>
                    <div>골라먹는주스</div>
                  </div>
                </div>

                {/* Thu */}
                <div className="border border-line p-4 bg-paper">
                  <div className="flex justify-between items-baseline pb-2 mb-3 border-b border-line text-xs">
                    <span className="font-medium text-ink">목</span>
                    <span className="text-grey-7">9.17</span>
                  </div>
                  <div className="space-y-1 text-xs text-grey-9 leading-relaxed">
                    <div>감오징어유산슬덮밥</div>
                    <div>황태달걀국</div>
                    <div>눈꽃치즈샐러드</div>
                    <div>시즈닝감자튀김</div>
                    <div>매콤로제찜닭</div>
                    <div>배추김치</div>
                    <div>비타500</div>
                    <div>페페로니피자</div>
                  </div>
                </div>

                {/* Fri */}
                <div className="border border-line p-4 bg-paper">
                  <div className="flex justify-between items-baseline pb-2 mb-3 border-b border-line text-xs">
                    <span className="font-medium text-ink">금</span>
                    <span className="text-grey-7">9.18</span>
                  </div>
                  <div className="text-xs text-grey-7 pt-2">
                    예정된 급식이 없습니다.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
