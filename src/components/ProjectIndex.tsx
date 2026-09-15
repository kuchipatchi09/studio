import React, { useState } from "react";
import { Project, PROJECTS } from "../data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectIndexProps {
  onSelectProject?: (slug: string) => void;
}

export const ProjectIndex: React.FC<ProjectIndexProps> = ({ onSelectProject }) => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(PROJECTS[0]);

  return (
    <section id="works" className="py-24 sm:py-32 border-b border-line bg-paper">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-line gap-4">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-grey-7">
            <span className="text-signal font-semibold">02</span>
            <span className="w-6 h-[1px] bg-line" />
            <span>Selected Works</span>
          </div>
          <div className="text-xs text-grey-7 font-mono">
            <span>Index ({PROJECTS.length.toString().padStart(2, "0")})</span>
          </div>
        </div>

        {/* Desktop Layout: Table on Left (7 cols), Live Metadata/Preview on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-8 items-start">
          {/* Projects Table */}
          <div className="lg:col-span-8 divide-y divide-line">
            {PROJECTS.map((project) => {
              const isSelected = hoveredProject?.slug === project.slug;
              const hasDetailPage = project.featured;

              return (
                <div
                  key={project.slug}
                  onMouseEnter={() => setHoveredProject(project)}
                  onFocus={() => setHoveredProject(project)}
                  className={`group py-5 px-3 -mx-3 transition-colors duration-200 cursor-pointer ${
                    isSelected ? "bg-signal/5" : "hover:bg-line/40"
                  }`}
                  onClick={() => {
                    if (onSelectProject) {
                      onSelectProject(project.slug);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      if (onSelectProject) onSelectProject(project.slug);
                    }
                  }}
                  aria-label={`View ${project.title}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="text-xs font-mono text-grey-7 group-hover:text-signal transition-colors w-6">
                        {project.index}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-medium text-ink group-hover:text-signal transition-colors inline-flex items-center gap-1.5">
                          <span>{project.title}</span>
                          {hasDetailPage && (
                            <span className="text-xs text-signal font-mono font-normal">
                              ↗
                            </span>
                          )}
                        </h3>
                        <p className="text-xs sm:text-sm text-grey-7 mt-0.5 sm:hidden">
                          {project.category} · {project.year}
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-8 text-xs font-mono text-grey-7">
                      <span className="text-grey-9">{project.category}</span>
                      <span className="w-12 text-right">{project.year}</span>
                      <span className="w-5 text-right text-signal opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Sticky Preview Panel (Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28 border border-line bg-paper p-6 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            {hoveredProject ? (
              <div className="space-y-5">
                <div className="flex items-center justify-between text-xs font-mono text-grey-7 pb-3 border-b border-line">
                  <span>ITEM {hoveredProject.index}</span>
                  <span className="text-signal uppercase">{hoveredProject.status || "Archived"}</span>
                </div>

                <div>
                  <h4 className="text-2xl font-normal text-ink tracking-tight">
                    {hoveredProject.title}
                  </h4>
                  <p className="text-xs font-mono text-grey-7 mt-1">
                    {hoveredProject.category} · {hoveredProject.year}
                  </p>
                </div>

                <p className="text-sm text-grey-9 leading-relaxed">
                  {hoveredProject.summary}
                </p>

                {hoveredProject.features && (
                  <div className="pt-3 border-t border-line">
                    <span className="text-xs font-mono uppercase text-grey-7 block mb-2">
                      Key Highlights
                    </span>
                    <ul className="text-xs text-grey-9 space-y-1.5 list-disc list-inside">
                      {hoveredProject.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="line-clamp-2">{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {hoveredProject.credits && (
                  <div className="pt-2 text-xs font-mono text-grey-7">
                    <span>Credits: {hoveredProject.credits.join(", ")}</span>
                  </div>
                )}

                <div className="pt-4 border-t border-line flex items-center justify-between gap-3">
                  {hoveredProject.url ? (
                    <a
                      href={hoveredProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-signal hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-grey-7">Internal Archive</span>
                  )}

                  {hoveredProject.featured && (
                    <button
                      onClick={() => onSelectProject && onSelectProject(hoveredProject.slug)}
                      className="text-xs font-mono uppercase tracking-wider text-ink hover:text-signal underline font-medium"
                    >
                      Read Story →
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-xs text-grey-7 font-mono py-12 text-center">
                Hover over a work to preview details
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
