import React from "react";
import { PROJECTS } from "../data/projects";

export const ArchiveProjects: React.FC = () => {
  const archiveList = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="archive" className="py-24 sm:py-32 border-b border-line bg-paper">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-8 border-b border-line gap-2">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-grey-7">
            <span className="text-signal font-semibold">02.5</span>
            <span className="w-6 h-[1px] bg-line" />
            <span>Other Works &amp; System Archive</span>
          </div>
          <div className="text-xs font-mono text-grey-7">
            <span>Verified Projects ({archiveList.length.toString().padStart(2, "0")})</span>
          </div>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {archiveList.map((item) => (
            <div
              key={item.slug}
              className="border border-line bg-[#FAF9F5] p-6 rounded-sm flex flex-col justify-between hover:border-grey-3 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-grey-7 pb-3 border-b border-line">
                  <span>{item.index}</span>
                  <span className="text-grey-9">{item.year}</span>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-medium text-ink tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-signal mt-1">
                    {item.category}
                  </p>
                </div>

                <p className="text-xs text-grey-7 italic mt-2">
                  "{item.subtitle}"
                </p>

                <p className="text-xs text-grey-9 mt-4 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-line flex items-center justify-between text-[11px] font-mono text-grey-7">
                <span>{item.status}</span>
                {item.credits && (
                  <span>{item.credits.join(", ")}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
