import React, { useState, useEffect } from "react";
import { SiteHeader, TabType } from "../components/SiteHeader";
import { OverviewView } from "../components/views/OverviewView";
import { ProjectsView } from "../components/views/ProjectsView";
import { DesignSystemView } from "../components/views/DesignSystemView";
import { SpecView } from "../components/views/SpecView";
import { AsteriskLiveView } from "../components/views/AsteriskLiveView";
import { SiteFooter } from "../components/SiteFooter";

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  // Sync tab with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (
        hash === "projects" ||
        hash === "design" ||
        hash === "spec" ||
        hash === "asterisk" ||
        hash === "overview"
      ) {
        setActiveTab(hash as TabType);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col justify-between relative selection:bg-signal/20">
      {/* Ambient background atmosphere */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-signal/[0.04] to-transparent pointer-events-none blur-3xl z-0" />

      <div className="relative z-10">
        <SiteHeader activeTab={activeTab} onTabChange={handleTabChange} />

        <main className="transition-opacity duration-200">
          {activeTab === "overview" && <OverviewView onTabChange={handleTabChange} />}
          {activeTab === "projects" && <ProjectsView onNavigateToDesign={() => handleTabChange("design")} />}
          {activeTab === "design" && <DesignSystemView />}
          {activeTab === "spec" && <SpecView />}
          {activeTab === "asterisk" && <AsteriskLiveView />}
        </main>
      </div>

      <SiteFooter onTabChange={handleTabChange} />
    </div>
  );
};
