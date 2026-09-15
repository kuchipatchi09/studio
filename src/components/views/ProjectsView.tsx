import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../../data/projects";

export const ProjectsView: React.FC = () => {
  return (
    <div className="pt-20 pb-32 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 text-ink font-sans">
      {/* Title */}
      <div className="pb-10 border-b border-line">
        <div className="text-xs uppercase text-signal font-semibold mb-2">
          02 // Verified Projects
        </div>
        <h1 className="text-3xl sm:text-5xl font-normal tracking-tight mb-4">
          Project Archive
        </h1>
        <p className="text-sm sm:text-base text-grey-9 max-w-2xl leading-relaxed">
          실제 사용자 환경에서 발생하는 문제를 발견하고 명확한 인터페이스와 시스템으로 구현한 작업 목록입니다.
        </p>
      </div>

      {/* Projects List Table */}
      <div className="divide-y divide-line border-b border-line">
        {PROJECTS.map((p) => (
          <div key={p.slug} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline hover:bg-line/20 px-2 -mx-2 transition-colors">
            {/* Index & Title */}
            <div className="lg:col-span-4 flex items-baseline gap-4">
              <span className="text-xs text-grey-7">{p.index}</span>
              <div>
                <h3 className="text-xl sm:text-2xl font-normal text-ink flex items-center gap-2">
                  <span>{p.title}</span>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-signal hover:underline inline-flex items-center"
                      aria-label={`Visit ${p.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </h3>
                <div className="text-xs text-grey-7 mt-1">
                  {p.category} · {p.year}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-5 text-sm text-grey-9 leading-relaxed">
              <p>{p.summary}</p>
              {p.problem && (
                <p className="text-xs text-grey-7 mt-2">{p.problem}</p>
              )}
            </div>

            {/* Metadata / Credits */}
            <div className="lg:col-span-3 text-xs text-grey-7 lg:text-right space-y-1">
              <div>{p.status || "Completed"}</div>
              {p.credits && (
                <div className="text-grey-9">{p.credits.join(", ")}</div>
              )}
              {p.url && (
                <div className="pt-2">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-signal font-medium hover:underline"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
