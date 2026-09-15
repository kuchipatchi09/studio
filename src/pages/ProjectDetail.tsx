import React, { useEffect } from "react";
import { Project } from "../data/projects";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  return (
    <div className="min-h-screen bg-paper text-ink pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Back Navigation Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-line">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-grey-9 hover:text-signal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Index</span>
          </button>

          <div className="text-xs font-mono text-grey-7">
            <span>asterstudio* / Works / {project.index}</span>
          </div>
        </div>

        {/* Project Header */}
        <div className="my-12 max-w-4xl">
          <div className="flex items-center gap-3 text-xs font-mono uppercase text-signal mb-4">
            <span className="font-semibold">{project.index}</span>
            <span className="w-4 h-[1px] bg-signal" />
            <span>{project.category}</span>
            <span className="text-grey-7">· {project.year}</span>
          </div>

          <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[1.05] tracking-tight text-ink mb-6">
            {project.title}
          </h1>

          <p className="text-[clamp(1.2rem,2vw,1.6rem)] leading-[1.45] text-grey-9 font-normal">
            {project.summary}
          </p>
        </div>

        {/* Overview & Live Link */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-t border-b border-line items-start">
          <div className="lg:col-span-8 space-y-8">
            {project.problem && (
              <div>
                <h2 className="text-xs font-mono uppercase text-signal font-semibold mb-2">
                  The Problem &amp; Context
                </h2>
                <p className="text-base text-grey-9 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {project.response && (
              <div>
                <h2 className="text-xs font-mono uppercase text-signal font-semibold mb-2">
                  The Structural Response
                </h2>
                <p className="text-base text-grey-9 leading-relaxed">
                  {project.response}
                </p>
              </div>
            )}
          </div>

          {/* Metadata Sidebar */}
          <div className="lg:col-span-4 border border-line bg-[#FAF9F5] p-6 rounded-sm space-y-5 text-xs font-mono">
            {project.status && (
              <div>
                <span className="text-grey-7 uppercase block mb-1">Status</span>
                <span className="text-ink font-medium">{project.status}</span>
              </div>
            )}

            {project.roles && (
              <div>
                <span className="text-grey-7 uppercase block mb-1">Roles</span>
                <span className="text-ink">{project.roles.join(", ")}</span>
              </div>
            )}

            {project.credits && (
              <div>
                <span className="text-grey-7 uppercase block mb-1">Credits</span>
                <span className="text-ink">{project.credits.join(", ")}</span>
              </div>
            )}

            {project.url && (
              <div className="pt-3 border-t border-line">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-ink text-paper text-xs uppercase tracking-wider rounded-sm hover:bg-signal transition-colors"
                >
                  <span>Visit Live Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Narrative Steps */}
        {project.editorialDetails?.narrativeSteps && (
          <div className="my-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-grey-7 mb-8">
              Editorial Narrative &amp; Evolution
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.editorialDetails.narrativeSteps.map((step, idx) => (
                <div key={idx} className="border border-line bg-[#FAF9F5] p-6 rounded-sm">
                  <div className="text-xs font-mono text-signal font-semibold mb-2">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-medium text-ink mb-2">{step.title}</h3>
                  <p className="text-xs text-grey-9 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features List */}
        {project.features && (
          <div className="my-16 border-t border-line pt-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-grey-7 mb-6">
              Verified Implemented Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 border border-line bg-[#FAF9F5] rounded-sm">
                  <CheckCircle2 className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                  <span className="text-xs text-ink leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical & Design Notes */}
        {project.editorialDetails?.technicalNotes && (
          <div className="my-12 p-6 border border-line bg-paper rounded-sm">
            <h2 className="text-xs font-mono uppercase text-signal font-semibold mb-3">
              Performance &amp; Architectural Decisions
            </h2>
            <ul className="text-xs text-grey-9 space-y-1.5 list-disc list-inside">
              {project.editorialDetails.technicalNotes.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="pt-12 border-t border-line flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink hover:text-signal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Editorial Index</span>
          </button>
        </div>
      </div>
    </div>
  );
};
