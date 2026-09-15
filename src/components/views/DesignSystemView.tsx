import React, { useState } from "react";
import { Copy, Check, Sparkles } from "lucide-react";

interface RealToken {
  id: string;
  nameEn: string;
  nameKo: string;
  desc: string;
  hex: string;
  domain: string;
  isDarkText?: boolean;
}

const REAL_SYSTEM_TOKENS: RealToken[] = [
  {
    id: "signal-cobalt",
    nameEn: "Signal Cobalt",
    nameKo: "시그널 코발트 (Global Base Anchor)",
    desc: "흩어진 정보와 별빛을 연결하는 asterstudio의 메인 아이덴티티 컬러",
    hex: "#3158A6",
    domain: "asterstudio Brand / Active Links / Focus Signals",
  },
  {
    id: "dancheong-red",
    nameEn: "Dancheong Red",
    nameKo: "단청 레드 (asterisk* Accent)",
    desc: "asterisk* 학교생활 플랫폼의 대표 포인트 컬러 및 시간/급식 활성 알림",
    hex: "#A33A31",
    domain: "asterisk* Platform / Priority Indicators",
  },
  {
    id: "periodic-cyan",
    nameEn: "Periodic Cyan",
    nameKo: "원소 시안 (QPI Periodic Table)",
    desc: "QPI 주기율표 매트릭스 탐색 및 과학 데이터 시각화의 기준 컬러",
    hex: "#2C6B74",
    domain: "QPI Periodic Table / Science Data Matrix",
  },
  {
    id: "ink-black",
    nameEn: "Ink Black",
    nameKo: "잉크 블랙 (Primary Surface & Typography)",
    desc: "가독성을 위한 기본 텍스트 및 대시보드 '지금 수업' 메인 카드 배경색",
    hex: "#2B2B2E",
    domain: "Primary Body Text / Dashboard Highlight Surface",
  },
  {
    id: "paper-white",
    nameEn: "Paper White",
    nameKo: "페이퍼 화이트 (Base Canvas Surface)",
    desc: "순백색을 배제하고 아날로그 종이의 자연스러운 온기를 주는 전체 배경색",
    hex: "#F7F6F2",
    domain: "Global Background Canvas / Structural Cards",
    isDarkText: true,
  },
  {
    id: "hairline-grey",
    nameEn: "Hairline Grey",
    nameKo: "헤어라인 그레이 (1px Boundary Line)",
    desc: "그림자 없이 모든 구획과 12px 그리드를 정밀하게 나누는 1px 경계선",
    hex: "#E7E6E1",
    domain: "1px Hairline Grid / Structural Separator",
    isDarkText: true,
  },
];

const GREYSCALE_SCALE = [
  { name: "Base White", hex: "#F7F6F2", label: "Paper Surface", border: true },
  { name: "Base Black", hex: "#2B2B2E", label: "Ink Headline" },
  { name: "Grey 1", hex: "#E7E6E1", label: "1px Hairline", border: true },
  { name: "Grey 3", hex: "#C2C1BB", label: "Subtle Marker" },
  { name: "Grey 7", hex: "#888783", label: "Metadata & Labels" },
  { name: "Grey 9", hex: "#535356", label: "Body Paragraph" },
  { name: "Grey 11", hex: "#3A3A3D", label: "Deep Boundary" },
];

export const DesignSystemView: React.FC = () => {
  const [activeToken, setActiveToken] = useState<RealToken>(REAL_SYSTEM_TOKENS[0]);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [gridOverlayActive, setGridOverlayActive] = useState<boolean>(true);
  const [activeToggle, setActiveToggle] = useState<boolean>(true);

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <div className="pt-20 pb-32 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 text-ink font-sans">
      {/* Title & Introduction */}
      <div className="pb-8 border-b border-line relative">
        <div className="flex items-center gap-2 text-xs uppercase text-signal font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>01 Design Specification · ASDS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-normal tracking-tight mb-3">
          asterstudio Design System (ASDS)
        </h1>
        <p className="text-sm sm:text-base text-grey-9 max-w-3xl leading-relaxed">
          실제 서비스(asterisk*, QPI Periodic Table, asterstudio)에서 사용하는 핵심 색상 토큰과 레이아웃 규격입니다.
        </p>
      </div>

      {/* 01 REAL COLOUR TOKENS */}
      <section className="py-14 border-b border-line">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-line mb-8 gap-2">
          <div>
            <div className="text-xs uppercase text-grey-7">01 Colour Tokens</div>
            <h2 className="text-2xl font-normal mt-1">Chromatic Architecture</h2>
          </div>
          <div className="text-xs text-grey-7">
            실제 서비스 적용 색상 선택 및 HEX 복사
          </div>
        </div>

        {/* Interactive Token Selector Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {REAL_SYSTEM_TOKENS.map((token) => {
            const isSelected = activeToken.id === token.id;
            return (
              <button
                key={token.id}
                onClick={() => setActiveToken(token)}
                className={`p-3.5 text-left border transition-all duration-150 flex flex-col justify-between h-28 relative ${
                  isSelected
                    ? "border-ink bg-paper shadow-xs ring-1 ring-ink"
                    : "border-line bg-[#FAF9F5] hover:border-grey-3 hover:bg-paper"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className="w-4 h-4 rounded-full border border-black/10 shadow-xs"
                    style={{ backgroundColor: token.hex }}
                  />
                  <span className="text-[10px] text-grey-7 font-mono">{token.hex}</span>
                </div>
                <div>
                  <div className="text-xs font-medium text-ink truncate">{token.nameEn}</div>
                  <div className="text-[10px] text-grey-7 truncate">{token.desc.slice(0, 14)}...</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Workbench: Left Big Showcase & Right Live Component Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Active Token Display */}
          <div
            className={`lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between border border-line min-h-[420px] transition-all duration-300 relative overflow-hidden ${
              activeToken.isDarkText ? "text-ink" : "text-paper"
            }`}
            style={{ backgroundColor: activeToken.hex }}
          >
            <div>
              <div
                className={`flex items-center justify-between text-xs uppercase tracking-wider pb-4 border-b ${
                  activeToken.isDarkText ? "border-ink/20 opacity-80" : "border-white/20 opacity-85"
                }`}
              >
                <span>ACTIVE SERVICE COLOUR</span>
                <span>ASDS-REAL-TOKEN</span>
              </div>

              <div className="mt-8">
                <h3 className="text-3xl sm:text-4xl font-normal tracking-tight">
                  {activeToken.nameEn}
                </h3>
                <p className={`text-xs mt-1 ${activeToken.isDarkText ? "opacity-75" : "opacity-85"}`}>
                  {activeToken.nameKo}
                </p>
                <p className={`text-sm sm:text-base mt-6 leading-relaxed max-w-lg ${activeToken.isDarkText ? "text-ink" : "text-paper"}`}>
                  {activeToken.desc}
                </p>
              </div>
            </div>

            <div
              className={`pt-8 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                activeToken.isDarkText ? "border-ink/20" : "border-white/20"
              }`}
            >
              <div>
                <span className={`text-[10px] uppercase tracking-wider block ${activeToken.isDarkText ? "opacity-60" : "opacity-70"}`}>
                  SYSTEM SCOPE
                </span>
                <span className="text-xs">{activeToken.domain}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-lg font-medium">{activeToken.hex}</span>
                <button
                  onClick={() => copyHex(activeToken.hex)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 border text-xs uppercase tracking-wider transition-all duration-150 active:scale-95 ${
                    activeToken.isDarkText
                      ? "border-ink/40 bg-ink/10 hover:bg-ink/20 text-ink"
                      : "border-white/40 bg-white/15 hover:bg-white/25 text-paper"
                  }`}
                  aria-label="Copy Hex Code"
                >
                  {copiedHex === activeToken.hex ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedHex === activeToken.hex ? "COPIED" : "COPY HEX"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Live Interactive Component Preview Workbench */}
          <div className="lg:col-span-5 border border-line bg-[#FAF9F5] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-grey-7 pb-4 border-b border-line">
                <span>LIVE COMPONENT SANDBOX</span>
                <span className="text-[10px] uppercase text-signal font-medium">REAL-TIME INJECTION</span>
              </div>

              {/* Sandbox Components that adapt to activeToken */}
              <div className="mt-6 space-y-5">
                {/* 1. Status Pill */}
                <div className="p-4 bg-paper border border-line flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-ink font-medium">
                    <span
                      className="w-2.5 h-2.5 rounded-full transition-colors duration-200"
                      style={{ backgroundColor: activeToken.hex }}
                    />
                    <span>Active Interface State</span>
                  </div>
                  <span
                    className="px-2.5 py-0.5 text-[11px] rounded-full border font-medium transition-all"
                    style={{
                      borderColor: activeToken.hex,
                      color: activeToken.hex === "#F7F6F2" ? "#2B2B2E" : activeToken.hex,
                      backgroundColor: `${activeToken.hex}15`,
                    }}
                  >
                    LIVE
                  </span>
                </div>

                {/* 2. Interactive Button */}
                <div className="p-4 bg-paper border border-line">
                  <div className="text-[11px] text-grey-7 mb-2">Interactive Action Target</div>
                  <button
                    className="w-full py-2.5 text-xs font-medium transition-all duration-150 flex items-center justify-center gap-2 active:scale-98"
                    style={{
                      backgroundColor: activeToken.hex,
                      color: activeToken.isDarkText ? "#2B2B2E" : "#F7F6F2",
                      border: activeToken.hex === "#F7F6F2" ? "1px solid #E7E6E1" : "none",
                    }}
                  >
                    <span>Execute Action with {activeToken.nameEn}</span>
                    <span>→</span>
                  </button>
                </div>

                {/* 3. Border Callout Card */}
                <div
                  className="p-4 bg-paper border-l-4 border-y border-r border-line text-xs space-y-1 transition-all"
                  style={{ borderLeftColor: activeToken.hex }}
                >
                  <div className="font-medium text-ink">Design Token Applied</div>
                  <div className="text-grey-7 text-[11px]">{activeToken.domain}</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-line flex items-center justify-between text-xs text-grey-7">
              <span>Primary Anchor: Signal Cobalt (#3158A6)</span>
              <span>Actual Production Verified</span>
            </div>
          </div>
        </div>

        {/* Surface & Neutral Scale */}
        <div className="mt-14 pt-8 border-t border-line">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 gap-2">
            <div>
              <div className="text-xs uppercase text-grey-7">SURFACE &amp; NEUTRAL SCALE</div>
              <h3 className="text-lg font-normal mt-0.5">Off-Neutral Paper &amp; Ink Palette</h3>
            </div>
            <p className="text-xs text-grey-7 max-w-md sm:text-right">
              순백색과 완전한 블랙을 배제하고, 아날로그 인쇄물과 정밀 디스플레이의 가독성을 보장하는 무채색 체계입니다.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {GREYSCALE_SCALE.map((g) => (
              <div
                key={g.name}
                onClick={() => copyHex(g.hex)}
                className="border border-line p-3.5 bg-[#FAF9F5] hover:border-grey-3 transition-all duration-150 cursor-pointer group hover:shadow-xs active:scale-98"
              >
                <div
                  className={`h-12 w-full mb-3 rounded-none transition-transform duration-150 group-hover:scale-[1.02] ${g.border ? "border border-line" : ""}`}
                  style={{ backgroundColor: g.hex }}
                />
                <div className="text-xs font-medium text-ink">{g.name}</div>
                <div className="text-[10px] text-grey-7 mt-0.5">{g.label}</div>
                <div className="text-xs text-grey-7 group-hover:text-ink transition-colors mt-1">
                  {g.hex}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 TYPOGRAPHY SYSTEM */}
      <section className="py-14 border-b border-line">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-line mb-8 gap-2">
          <div>
            <div className="text-xs uppercase text-grey-7">02 Typography Architecture</div>
            <h2 className="text-2xl font-normal mt-1">Asta Sans Typography</h2>
          </div>
          <div className="text-xs text-grey-7">
            Specimen · Asta Sans
          </div>
        </div>

        <div className="divide-y divide-line border-t border-b border-line bg-[#FAF9F5]">
          {/* Row 1: Wordmark */}
          <div className="p-8 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline border-b border-line">
            <div className="md:col-span-3 text-xs text-grey-7">Wordmark</div>
            <div className="md:col-span-9">
              <div className="text-5xl sm:text-6xl font-normal tracking-tight text-ink">
                asterstudio<span className="text-signal font-bold">*</span>
              </div>
            </div>
          </div>

          {/* Row 2: Typography (Latin) */}
          <div className="p-8 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline border-b border-line">
            <div className="md:col-span-3 text-xs text-grey-7">Typography (Latin)</div>
            <div className="md:col-span-9 space-y-4">
              <div className="text-2xl sm:text-3xl font-normal text-ink">Asta Sans</div>
              <p className="text-2xl sm:text-3xl font-normal text-ink leading-snug tracking-tight">
                AaBbCcDdEeFfGgHhIiJjKk<br />
                LlMmNnOoPpQqRrSsTtUuVvWwXxYyZz<br />
                0123456789 !?,.;:--&amp;€$@%*
              </p>
            </div>
          </div>

          {/* Row 3: Multilingual CJK */}
          <div className="p-8 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
            <div className="md:col-span-3 text-xs text-grey-7">Multilingual CJK</div>
            <div className="md:col-span-9 space-y-6">
              <div>
                <div className="text-xs text-grey-7 mb-2">KOREAN · 한국어</div>
                <div className="text-xl sm:text-2xl font-normal text-ink mb-2">
                  가나다라마바사아자차카타파하
                </div>
                <p className="text-sm text-grey-9 leading-relaxed">
                  참나무 타는 소리와 야경만큼 밤의 여유를 표현해 주는 것도 없다
                </p>
                <p className="text-xs text-grey-7 mt-1">
                  0과 1, 흑과 백이라는 이분법을 넘어 사용자의 환경에 가장 완벽하게 맞춘 연속적인 웹 경험.
                </p>
              </div>

              <div className="pt-4 border-t border-line/60">
                <div className="text-xs text-grey-7 mb-2">JAPANESE · 日本語</div>
                <div className="text-lg font-normal text-ink mb-1">
                  星の光を一つに集め、日常の不便を解消する明瞭なデジタル体験を設計します。
                </div>
                <p className="text-xs text-grey-7">
                  흩어진 빛을 모아 하나의 질서를 만들듯, 일상의 불편을 가장 명료한 인터페이스와 단단한 시스템으로 연결합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 STRUCTURE & PRIMITIVES */}
      <section className="py-14">
        <div className="pb-8 border-b border-line mb-8">
          <div className="text-xs uppercase text-grey-7 mb-1">SURFACE SYSTEM 01 · 12PX CONTINUOUS HAIRLINE GRID</div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-normal">12px Linear Marking Grid</h2>
            <button
              onClick={() => setGridOverlayActive(!gridOverlayActive)}
              className="text-xs px-3 py-1.5 border border-line bg-paper text-grey-9 hover:text-ink hover:border-ink transition-colors w-fit"
            >
              {gridOverlayActive ? "✓ Grid Overlay Active" : "Grid Overlay Inactive"}
            </button>
          </div>
          <p className="text-sm text-grey-9 mt-2 max-w-3xl leading-relaxed">
            모눈종이와 천문 좌표계의 정밀 눈금에서 착안하여, 12px 단위의 일관된 공간 비례를 구축합니다.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 pt-6 border-t border-line text-xs">
            <div>
              <span className="text-grey-7 block mb-0.5">GRID PITCH</span>
              <span className="text-ink font-medium">12.00 px</span>
            </div>
            <div>
              <span className="text-grey-7 block mb-0.5">LINE WEIGHT</span>
              <span className="text-ink font-medium">1.00 px Solid</span>
            </div>
            <div>
              <span className="text-grey-7 block mb-0.5">OPACITY</span>
              <span className="text-ink font-medium">15% Alpha (0.15)</span>
            </div>
            <div>
              <span className="text-grey-7 block mb-0.5">REPETITION</span>
              <span className="text-ink font-medium">Continuous Y-Axis</span>
            </div>
          </div>
        </div>

        {/* 2 Big Cards: Border Hierarchy & Control Primitives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: 1px Hairline Boundary */}
          <div className="border border-line bg-[#FAF9F5] p-8 flex flex-col justify-between hover:border-grey-3 transition-colors">
            <div>
              <div className="text-xs uppercase text-grey-7 mb-1">BORDER HIERARCHY 02</div>
              <h3 className="text-xl font-normal mb-3">1px Hairline Boundary</h3>
              <p className="text-xs text-grey-9 leading-relaxed mb-6">
                인위적인 드롭 섀도우(Drop Shadow)를 일체 사용하지 않고, 오직 1px의 명확한 테두리와 분할선으로 모든 공간과 데이터의 위계를 구분합니다.
              </p>

              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-paper border border-line text-xs">
                  <span className="text-ink">01 Outer Container Boundary</span>
                  <span className="text-grey-7">1px solid (grey1 / grey9)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-paper border border-line text-xs">
                  <span className="text-ink">02 Internal Divide Line</span>
                  <span className="text-grey-7">divide-y (grey1 / grey9)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-paper border border-signal text-xs">
                  <span className="text-signal font-medium">03 Active Focus &amp; Hover</span>
                  <span className="text-signal font-medium">1px solid #3158A6</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-line flex justify-between text-xs text-grey-7">
              <span>Shadow Policy: Zero Elevation (0px)</span>
              <span>Boundary: Strict Hairline</span>
            </div>
          </div>

          {/* Card 2: Control Primitives */}
          <div className="border border-line bg-[#FAF9F5] p-8 flex flex-col justify-between hover:border-grey-3 transition-colors">
            <div>
              <div className="text-xs uppercase text-grey-7 mb-1">CONTROL PRIMITIVES 03</div>
              <h3 className="text-xl font-normal mb-3">Tactile Control Triggers</h3>
              <p className="text-xs text-grey-9 leading-relaxed mb-6">
                물리적 스위치처럼 즉각적인 피드백을 전달하는 반응형 컨트롤 프리미티브입니다.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <button className="flex-1 py-3 bg-signal text-paper text-xs font-medium hover:bg-ink transition-colors flex items-center justify-center gap-1.5 active:scale-98">
                    <span>Primary Action</span>
                    <span>→</span>
                  </button>
                  <button
                    onClick={() => setActiveToggle(!activeToggle)}
                    className={`flex-1 py-3 border text-xs transition-colors active:scale-98 ${
                      activeToggle
                        ? "bg-paper border-ink text-ink font-medium"
                        : "bg-paper border-line text-grey-9 hover:border-ink"
                    }`}
                  >
                    Outlined Control
                  </button>
                </div>

                <div className="flex gap-3 text-xs">
                  <div
                    onClick={() => setActiveToggle(!activeToggle)}
                    className="flex-1 p-2.5 bg-paper border border-line flex items-center justify-center gap-2 cursor-pointer hover:border-grey-3 transition-colors"
                  >
                    <span className={`w-2 h-2 rounded-full transition-colors ${activeToggle ? "bg-signal" : "bg-grey-7"}`} />
                    <span>SYSTEM_READY: {activeToggle ? "OK" : "STANDBY"}</span>
                  </div>
                  <div className="flex-1 p-2.5 bg-paper border border-line flex items-center justify-center text-grey-7">
                    <span>SPEC_TAG: ASDS-v2.0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-line flex justify-between text-xs text-grey-7">
              <span>✓ Interactive Primitive Live</span>
              <span>Transition: 300ms</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
