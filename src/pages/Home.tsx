import React, { useEffect, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { EditorialHero } from "../components/EditorialHero";
import { PhilosophyStatement } from "../components/PhilosophyStatement";
import { ProjectIndex } from "../components/ProjectIndex";
import { FeaturedAsterisk } from "../components/FeaturedAsterisk";
import { FeaturedQETS } from "../components/FeaturedQETS";
import { ArchiveProjects } from "../components/ArchiveProjects";
import { ProcessRail } from "../components/ProcessRail";
import { ExperimentsSection } from "../components/ExperimentsSection";
import { AboutPanel } from "../components/AboutPanel";
import { SiteFooter } from "../components/SiteFooter";
import { ProjectDetail } from "./ProjectDetail";
import { PROJECTS } from "../data/projects";

export const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);

  // Sync with URL Hash for direct links (e.g. #work/asterisk)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#work/")) {
        const slug = hash.replace("#work/", "");
        setSelectedProjectSlug(slug);
      } else {
        setSelectedProjectSlug(null);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Track scroll position for section spy and constellation progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;
      setScrollProgress(progress);

      // Section Spy
      const sections = ["hero", "philosophy", "works", "featured-asterisk", "featured-qets", "archive", "process", "experiments", "about"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId.startsWith("featured") ? "works" : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectProject = (slug: string) => {
    const proj = PROJECTS.find((p) => p.slug === slug);
    if (proj?.featured) {
      window.location.hash = `work/${slug}`;
      setSelectedProjectSlug(slug);
    } else {
      // For archive project without dedicated detail page, scroll to archive
      const archiveEl = document.getElementById("archive");
      if (archiveEl) archiveEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBackToHome = () => {
    window.location.hash = "";
    setSelectedProjectSlug(null);
  };

  const selectedProject = selectedProjectSlug
    ? PROJECTS.find((p) => p.slug === selectedProjectSlug)
    : null;

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-paper text-ink selection:bg-signal selection:text-paper selection:bg-opacity-20">
        <SiteHeader
          activeSection="works"
          isDetailView={true}
          onBackToHome={handleBackToHome}
        />
        <main>
          <ProjectDetail
            project={selectedProject}
            onBack={handleBackToHome}
          />
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-signal selection:text-paper selection:bg-opacity-20">
      <SiteHeader
        activeSection={activeSection}
        onNavigate={(id) => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />
      
      <main>
        <EditorialHero
          scrollProgress={scrollProgress}
          onExploreClick={() => {
            const el = document.getElementById("philosophy");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <PhilosophyStatement />

        <ProjectIndex onSelectProject={handleSelectProject} />

        <FeaturedAsterisk />

        <FeaturedQETS />

        <ArchiveProjects />

        <ProcessRail />

        <ExperimentsSection />

        <AboutPanel />
      </main>

      <SiteFooter />
    </div>
  );
};
