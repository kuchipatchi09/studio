import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectsViewProps {
  onNavigateToDesign?: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onNavigateToDesign }) => {
  const projects = [
    {
      id: "PROJECT 01",
      category: "School Life Platform",
      title: "asterisk*",
      desc: "충남과학고 학생들이 매일 확인해야 하는 시간표, 방과후, 급식, 공지, 예약 정보를 하나의 대시보드로 집약하고 천문 Ambient 배경을 결합한 통합 학교생활 플랫폼입니다.",
      previewType: "text",
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
      previewType: "text",
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
      previewType: "text",
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
      previewType: "dots",
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
        {projects.map((p) => (
          <div
            key={p.id}
            className="border border-line bg-[#FAF9F5] p-8 sm:p-10 flex flex-col justify-between min-h-[390px] hover:border-grey-3 transition-all duration-200 hover:shadow-xs group relative"
          >
            <div>
              {/* Top Meta Line */}
              <div className="flex items-center justify-between text-xs text-grey-7 pb-4 mb-6 border-b border-line">
                <span className="font-medium text-ink flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                  <span>{p.id}</span>
                </span>
                <span className="uppercase tracking-wider text-[11px]">{p.category}</span>
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl sm:text-3xl font-normal text-ink tracking-tight mb-3 group-hover:text-signal transition-colors duration-150">
                {p.title}
              </h2>
              <p className="text-xs sm:text-sm text-grey-9 leading-relaxed">
                {p.desc}
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {/* Center Signature Preview Box */}
              <div className="p-4 border border-line bg-paper flex items-center justify-center min-h-[64px] transition-colors group-hover:border-grey-3">
                {p.previewType === "text" && (
                  <span className="text-xs font-medium text-grey-9 text-center tracking-tight">
                    {p.previewContent}
                  </span>
                )}
                {p.previewType === "dots" && (
                  <div className="flex items-center gap-2.5">
                    {p.previewDots?.map((dot, idx) => (
                      <span
                        key={idx}
                        className="w-3.5 h-3.5 rounded-full border border-black/10 transition-transform duration-200 hover:scale-125"
                        style={{ backgroundColor: dot }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Link */}
              <div className="pt-2 flex items-center justify-between text-xs font-medium">
                {p.isExternal && p.linkUrl ? (
                  <a
                    href={p.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-signal inline-flex items-center gap-1.5 transition-colors group/link"
                  >
                    <span>{p.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-grey-7 group-hover/link:text-signal group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      if (onNavigateToDesign) onNavigateToDesign();
                      else window.location.hash = "design";
                    }}
                    className="text-ink hover:text-signal inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{p.linkText}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
