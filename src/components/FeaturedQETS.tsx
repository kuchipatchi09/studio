import React, { useState } from "react";
import { ArrowUpRight, Grid } from "lucide-react";

export const FeaturedQETS: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState({
    num: 6,
    symbol: "C",
    nameKo: "탄소",
    nameEn: "Carbon",
    group: "14족 (비금속)",
    period: "2주기",
    mass: "12.011 u",
    electronConfig: "[He] 2s² 2p²",
    oxidation: "+4, +2, -4",
    summary: "유기 화합물의 골격을 이루며 다양한 동소체(흑연, 다이아몬드, 풀러렌)를 형성하는 생명과 물질의 중심 원소입니다.",
  });

  const SAMPLE_ELEMENTS = [
    { num: 1, symbol: "H", nameKo: "수소", nameEn: "Hydrogen", group: "1족", mass: "1.008 u", electronConfig: "1s¹", oxidation: "+1, -1", summary: "우주에서 가장 풍부한 원소로 가벼운 기체 상태로 존재합니다." },
    { num: 6, symbol: "C", nameKo: "탄소", nameEn: "Carbon", group: "14족", mass: "12.011 u", electronConfig: "[He] 2s² 2p²", oxidation: "+4, +2, -4", summary: "유기 화합물의 골격을 이루며 다양한 동소체를 형성하는 중심 원소입니다." },
    { num: 7, symbol: "N", nameKo: "질소", nameEn: "Nitrogen", group: "15족", mass: "14.007 u", electronConfig: "[He] 2s² 2p³", oxidation: "+5, +3, -3", summary: "지구 대기의 약 78%를 구성하는 무색, 무취의 비금속 기체입니다." },
    { num: 8, symbol: "O", nameKo: "산소", nameEn: "Oxygen", group: "16족", mass: "15.999 u", electronConfig: "[He] 2s² 2p⁴", oxidation: "-2", summary: "호흡과 연소에 필수적인 원소로 지각과 해양에 널리 존재합니다." },
    { num: 14, symbol: "Si", nameKo: "규소", nameEn: "Silicon", group: "14족", mass: "28.085 u", electronConfig: "[Ne] 3s² 3p²", oxidation: "+4, -4", summary: "반도체 소자의 핵심 기판 물질이자 지각 구성의 주성분입니다." },
    { num: 26, symbol: "Fe", nameKo: "철", nameEn: "Iron", group: "8족", mass: "55.845 u", electronConfig: "[Ar] 3d⁶ 4s²", oxidation: "+2, +3", summary: "지구 핵과 산업 문명의 뼈대를 이루는 대표적인 전이 금속입니다." },
  ];

  return (
    <article id="featured-qets" className="py-24 sm:py-32 border-b border-line bg-paper">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Header Metadata */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-line gap-2">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-grey-7">
            <span className="text-signal font-semibold">Featured Story 02</span>
            <span className="w-6 h-[1px] bg-line" />
            <span>Educational Interface / Data Exploration</span>
          </div>
          <div className="text-xs font-mono text-grey-7">
            <span>2026 · Live Service</span>
          </div>
        </div>

        {/* Title & Core Statement */}
        <div className="my-10 lg:my-14 max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-4 px-2.5 py-1 bg-signal/10 text-signal text-xs font-mono border border-signal/20 rounded-sm">
            <span>qets.kro.kr</span>
          </div>

          <h2 className="text-[clamp(2.4rem,5.5vw,4.8rem)] font-normal leading-[1.05] tracking-tight text-ink mb-6">
            QPI Periodic Table
          </h2>

          <p className="text-[clamp(1.2rem,2.2vw,1.75rem)] leading-[1.4] text-grey-9 font-normal">
            주기율표를 한눈에. 거시적 관계와 미시적 물성을 한 시야에 담다.
          </p>
        </div>

        {/* Problem & Architectural Solution Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-line">
          <div className="lg:col-span-6 space-y-4 text-sm text-grey-9 leading-relaxed">
            <h3 className="text-xs font-mono uppercase text-signal font-semibold">The Information Fracture</h3>
            <p>
              교과서와 기존 웹 주기율표는 표 전체를 볼 때 개별 원소의 세부 수치가 생략되고, 상세 창을 열면 주기율표 전체의 위치적 맥락과 주기성이 시야에서 가려지는 단절이 있었습니다.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4 text-sm text-grey-9 leading-relaxed">
            <h3 className="text-xs font-mono uppercase text-signal font-semibold">The 70:30 Structural Solution</h3>
            <p>
              화면을 좌측 약 70%(주기율표 매트릭스)와 우측 약 30%(원소 상세 데이터시트)로 영구 분할하여, 스크롤이나 모달 창 없이 즉각적인 탐색과 비교가 가능한 단일 시야 뷰포트를 완성했습니다.
            </p>
          </div>
        </div>

        {/* 70:30 Interface Architectural Simulation */}
        <div className="my-16 border border-line bg-[#FAF9F5] p-6 sm:p-10 rounded-sm">
          <div className="flex items-center justify-between pb-6 border-b border-line">
            <div className="flex items-center gap-3">
              <Grid className="w-4 h-4 text-signal" />
              <span className="font-mono text-xs font-semibold text-ink uppercase tracking-wider">
                70 : 30 Viewport Ratio Simulation
              </span>
            </div>
            <div className="text-xs font-mono text-grey-7 hidden sm:block">
              Asta Sans Typography System
            </div>
          </div>

          {/* Simulation Container */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mt-8">
            {/* Left 70% Matrix */}
            <div className="lg:col-span-7 border border-line bg-paper p-5 sm:p-6 rounded-sm">
              <div className="flex items-center justify-between text-xs font-mono text-grey-7 pb-4 mb-4 border-b border-line">
                <span>PERIODIC MATRIX (70% VIEWPORT)</span>
                <span className="text-signal">Click element to inspect</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                {SAMPLE_ELEMENTS.map((el) => {
                  const isSelected = selectedElement.symbol === el.symbol;
                  return (
                    <button
                      key={el.symbol}
                      onClick={() =>
                        setSelectedElement({
                          num: el.num,
                          symbol: el.symbol,
                          nameKo: el.nameKo,
                          nameEn: el.nameEn,
                          group: el.group,
                          period: "2-3주기",
                          mass: el.mass,
                          electronConfig: el.electronConfig,
                          oxidation: el.oxidation,
                          summary: el.summary,
                        })
                      }
                      className={`p-3 border text-left transition-all rounded-sm flex flex-col justify-between h-24 ${
                        isSelected
                          ? "border-signal bg-signal/10 text-ink ring-1 ring-signal"
                          : "border-line bg-[#FAF9F5] hover:border-grey-3 text-grey-9"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-grey-7">{el.num}</span>
                        <span className="text-[10px] text-grey-7">{el.group}</span>
                      </div>
                      <div className="text-2xl font-normal tracking-tight text-ink">{el.symbol}</div>
                      <div className="text-[11px] font-medium text-grey-9">{el.nameKo}</div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-line flex items-center justify-between text-xs font-mono text-grey-7">
                <span>Modes: Comparison · Concept Notes · Resources</span>
                <span>Zero-scroll Experience</span>
              </div>
            </div>

            {/* Right 30% Datasheet Panel */}
            <div className="lg:col-span-3 border border-line bg-paper p-5 sm:p-6 rounded-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-grey-7 pb-3 border-b border-line">
                  <span>ELEMENT DATASHEET</span>
                  <span className="text-signal font-mono">30% PANEL</span>
                </div>

                <div className="mt-4 pb-4 border-b border-line">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-normal text-ink">{selectedElement.symbol}</span>
                    <span className="text-base font-medium text-grey-9">{selectedElement.nameKo}</span>
                  </div>
                  <div className="text-xs font-mono text-grey-7 mt-0.5">{selectedElement.nameEn} · Atomic #{selectedElement.num}</div>
                </div>

                <div className="mt-4 space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-line/60">
                    <span className="text-grey-7">Atomic Mass</span>
                    <span className="text-ink font-medium">{selectedElement.mass}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-line/60">
                    <span className="text-grey-7">Electron Config</span>
                    <span className="text-ink font-medium">{selectedElement.electronConfig}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-line/60">
                    <span className="text-grey-7">Oxidation States</span>
                    <span className="text-ink font-medium">{selectedElement.oxidation}</span>
                  </div>
                </div>

                <p className="text-xs text-grey-9 mt-4 leading-relaxed bg-[#FAF9F5] p-3 rounded-sm border border-line">
                  {selectedElement.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-line text-right">
                <span className="text-[11px] font-mono text-grey-7">High-density data exploration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Decisions & Credits */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-line text-xs">
          <div className="md:col-span-4">
            <span className="font-mono uppercase text-grey-7 block mb-1">Roles &amp; Focus</span>
            <p className="text-grey-9 leading-relaxed">
              UI/UX Design, Front-end Development, Information Architecture
            </p>
          </div>

          <div className="md:col-span-4">
            <span className="font-mono uppercase text-grey-7 block mb-1">Credits</span>
            <p className="text-grey-9 leading-relaxed">
              asterstudio / QPI Project
            </p>
          </div>

          <div className="md:col-span-4 flex md:justify-end items-center">
            <a
              href="https://qets.kro.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper text-xs font-mono uppercase tracking-wider rounded-sm hover:bg-signal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            >
              <span>Visit qets.kro.kr</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
