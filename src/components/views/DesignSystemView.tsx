import React, { useState } from "react";
import { Copy, Check, Sparkles } from "lucide-react";

interface AsterTone {
  id: string;
  nameEn: string;
  nameKo: string;
  desc: string;
  hex: string;
  domain: string;
}

const ASTER_TONES: AsterTone[] = [
  {
    id: "signal-cobalt",
    nameEn: "Signal Cobalt",
    nameKo: "시그널 코발트 (Base Anchor)",
    desc: "흩어진 별빛을 모아 길을 밝히는 asterstudio의 핵심 신호색",
    hex: "#3158A6",
    domain: "Brand Anchor / Connection / Active Link",
  },
  {
    id: "dancheong-red",
    nameEn: "Dancheong Red",
    nameKo: "단청 레드",
    desc: "asterisk* 플랫폼의 중심 액센트이자 일상의 온기를 담은 붉은색",
    hex: "#A33A31",
    domain: "asterisk* / Core Identity / Priority Alert",
  },
  {
    id: "starlight-amber",
    nameEn: "Starlight Amber",
    nameKo: "황혼 앰버",
    desc: "일출·일몰과 태양의 고도각 연산에서 피어나는 따스한 빛",
    hex: "#D4883A",
    domain: "Ambient Sun / Morning Horizon",
  },
  {
    id: "deep-cyan",
    nameEn: "Deep Cyan",
    nameKo: "심해 옥빛",
    desc: "QPI 주기율표와 다차원 과학 데이터의 정밀한 탐색 톤",
    hex: "#2C6B74",
    domain: "QPI Data / Science Matrix",
  },
  {
    id: "midnight-navy",
    nameEn: "Midnight Navy",
    nameKo: "자정 네이비",
    desc: "지방 항성시(LST)와 밤하늘 천체 회전을 관측하는 깊은 밤색",
    hex: "#1B2A4A",
    domain: "Sidereal Sky / Night Coordinate",
  },
  {
    id: "nebula-purple",
    nameEn: "Nebula Purple",
    nameKo: "성운 퍼플",
    desc: "Dasein; 학술 탐색과 사유의 깊이를 상징하는 지적인 보라색",
    hex: "#5B3D6B",
    domain: "Dasein; / Philosophical Search",
  },
  {
    id: "mugwort-leaf",
    nameEn: "Mugwort Leaf",
    nameKo: "머그워트 리프",
    desc: "교정의 생활 속에서 작은 불편을 관찰하는 차분한 자연색",
    hex: "#556042",
    domain: "Daily Observation / Calm Neutral",
  },
];

const GREYSCALE_SCALE = [
  { name: "Paper White", hex: "#F7F6F2", label: "Surface Base", border: true },
  { name: "Ink Black", hex: "#2B2B2E", label: "Primary Headline" },
  { name: "Hairline", hex: "#E7E6E1", label: "1px Grid Line", border: true },
  { name: "Grey 3", hex: "#C2C1BB", label: "Subtle Marker" },
  { name: "Grey 7", hex: "#888783", label: "Telemetry & Meta" },
  { name: "Grey 9", hex: "#535356", label: "Body Reading" },
  { name: "Grey 11", hex: "#3A3A3D", label: "Deep Boundary" },
];

export const DesignSystemView: React.FC = () => {
  const [activeTone, setActiveTone] = useState<AsterTone>(ASTER_TONES[0]);
  const [copied, setCopied] = useState(false);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-20 pb-32 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 text-ink font-sans">
      {/* Title & Introduction */}
      <div className="pb-10 border-b border-line">
        <div className="flex items-center gap-2 text-xs uppercase text-[#3158A6] font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>01 // Design Specification · ASDS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-normal tracking-tight mb-4">
          asterstudio Design System (ASDS)
        </h1>
        <p className="text-sm sm:text-base text-grey-9 max-w-3xl leading-relaxed">
          흩어진 정보의 조각을 하나의 선형 질서로 연결하고, 물리적 종이의 질감과 정밀한 데이터시트 구조를 화면에 구현한 asterstudio 고유의 설계 규격입니다.
        </p>
      </div>

      {/* SECTION 01: COLOUR TOKENS */}
      <section className="py-16 border-b border-line">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-line mb-8 gap-2">
          <div>
            <div className="text-xs uppercase text-grey-7">01 // Chromatic Architecture</div>
            <h2 className="text-xl sm:text-2xl font-normal mt-1">Celestial &amp; Signal Spectrum</h2>
          </div>
          <div className="text-xs text-grey-7">
            색상을 선택하여 활성 상태 확인 및 HEX 복사
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Base Anchor Big Card */}
          <div
            className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between rounded-none border border-line text-paper transition-colors duration-300 min-h-[390px]"
            style={{ backgroundColor: activeTone.hex }}
          >
            <div>
              <div className="flex items-center justify-between text-xs uppercase tracking-wider opacity-85 pb-4 border-b border-white/20">
                <span>ACTIVE ANCHOR COLOUR</span>
                <span>ASDS-COLOUR-TOKEN</span>
              </div>

              <div className="mt-8">
                <h3 className="text-3xl sm:text-4xl font-normal tracking-tight">
                  {activeTone.nameEn}
                </h3>
                <p className="text-xs opacity-85 mt-1">
                  {activeTone.nameKo}
                </p>
                <p className="text-sm sm:text-base mt-6 opacity-95 leading-relaxed max-w-md">
                  {activeTone.desc}
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider block opacity-70">
                  SYSTEM SCOPE
                </span>
                <span className="text-xs">{activeTone.domain}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-lg font-medium">{activeTone.hex}</span>
                <button
                  onClick={() => handleCopyHex(activeTone.hex)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/40 bg-black/15 hover:bg-black/25 text-xs uppercase tracking-wider transition-all"
                  aria-label="Copy Hex Code"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "COPIED" : "COPY"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: 7 Spectrum Tones List */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-grey-7 pb-3 border-b border-line">
              <span>ACCENT SPECTRUM // 7 CELESTIAL TONES</span>
              <span>SELECT TO PREVIEW</span>
            </div>

            <div className="divide-y divide-line border-b border-line">
              {ASTER_TONES.map((tone) => {
                const isSelected = activeTone.id === tone.id;
                return (
                  <button
                    key={tone.id}
                    onClick={() => setActiveTone(tone)}
                    className={`w-full py-3.5 px-3 flex items-center justify-between text-left transition-all ${
                      isSelected
                        ? "bg-line/60 font-medium"
                        : "hover:bg-line/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: tone.hex }}
                      />
                      <div>
                        <div className="text-sm text-ink">{tone.nameEn}</div>
                        <div className="text-xs text-grey-7">{tone.desc}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-grey-9">
                      <span>{tone.hex}</span>
                      <Copy
                        className="w-3.5 h-3.5 text-grey-7 hover:text-ink cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyHex(tone.hex);
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-grey-7">
              <span>Base Anchor: Signal Cobalt (#3158A6)</span>
              <span>7 Spectral Tokens Validated</span>
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
              완전한 백색과 인위적인 블랙을 배제하고, 아날로그 인쇄물과 정밀 디스플레이의 가독성을 보장하는 무채색 체계입니다.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {GREYSCALE_SCALE.map((g) => (
              <div
                key={g.name}
                onClick={() => handleCopyHex(g.hex)}
                className="border border-line p-3 bg-paper hover:border-grey-3 transition-colors cursor-pointer group"
              >
                <div
                  className={`h-12 w-full mb-3 ${g.border ? "border border-line" : ""}`}
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

      {/* SECTION 02: TYPOGRAPHY SYSTEM */}
      <section className="py-16 border-b border-line">
        <div className="pb-6 border-b border-line mb-8">
          <div className="text-xs uppercase text-grey-7">02 // Typography Architecture</div>
          <h2 className="text-xl sm:text-2xl font-normal mt-1">Asta Sans Typography</h2>
          <p className="text-xs text-grey-7 mt-1">Specimen // Asta Sans</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Specimen Left */}
          <div className="lg:col-span-7 space-y-8">
            <div className="border border-line p-6 bg-paper">
              <span className="text-xs text-grey-7 uppercase block mb-2">Wordmark Specimen</span>
              <div className="text-4xl font-normal tracking-tight text-ink">
                asterstudio<span className="text-signal font-bold">*</span>
              </div>
              <p className="text-xs text-grey-7 mt-2">
                Gathering scattered light. (ASCII 42 Asterisk Wildcard)
              </p>
            </div>

            <div className="border border-line p-6 space-y-4">
              <span className="text-xs text-grey-7 uppercase block">Primary Typeface: Asta Sans</span>
              <div className="text-xl font-normal text-ink">Asta Sans Regular &amp; Medium</div>
              <p className="text-sm text-grey-7 tracking-wide break-all leading-relaxed">
                AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz<br />
                0123456789 !?,.;:--&amp;€$@%* [ASCII 42]
              </p>
            </div>

            <div className="border border-line p-6 space-y-4">
              <span className="text-xs text-grey-7 uppercase block">Korean CJK Subsetting</span>
              <div className="space-y-3 text-sm leading-relaxed">
                <div>
                  <span className="text-xs text-grey-7 block">KOREAN // 한국어</span>
                  <p className="text-ink font-normal">
                    흩어진 정보와 작은 불편을 발견하고, 사람들의 일상을 밝히는 화면으로 연결합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hierarchy Right */}
          <div className="lg:col-span-5 border border-line p-6 bg-paper space-y-6">
            <span className="text-xs text-grey-7 uppercase block pb-3 border-b border-line">
              Weights &amp; Hierarchy System
            </span>

            <div>
              <span className="text-xs text-grey-7 block">300 Light // Editorial Subtitle</span>
              <div className="text-lg font-light text-ink mt-0.5">
                Gathering scattered light across campus life.
              </div>
            </div>

            <div className="pt-4 border-t border-line/60">
              <span className="text-xs text-grey-7 block">400 Regular // Body &amp; Reading Surface</span>
              <div className="text-sm font-normal text-ink mt-0.5 leading-relaxed">
                학생들이 겪는 현실의 작은 불편을 관찰하고 구조화하여 단일 대시보드로 집약합니다.
              </div>
            </div>

            <div className="pt-4 border-t border-line/60">
              <span className="text-xs text-grey-7 block">500 Medium // Section Header &amp; Index</span>
              <div className="text-base font-medium text-ink mt-0.5">
                01 // Selected Works &amp; Structural Solutions
              </div>
            </div>

            <div className="pt-4 border-t border-line/60">
              <span className="text-xs text-grey-7 block">600 SemiBold // Key Metric &amp; Signal</span>
              <div className="text-base font-semibold text-signal mt-0.5">
                Purity, Precision, Performance (Zero-Lag PWA)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: STRUCTURE & PRIMITIVES */}
      <section className="py-16">
        <div className="pb-6 border-b border-line mb-8">
          <div className="text-xs uppercase text-grey-7">03 // Structure &amp; Layout Primitives</div>
          <h2 className="text-xl sm:text-2xl font-normal mt-1">12px Hairline Grid &amp; Tactile Signals</h2>
          <p className="text-xs text-grey-7 mt-1">인위적인 그림자를 걷어낸 1px 경계와 물리적 클릭 피드백</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: 12px Grid */}
          <div className="border border-line p-6 flex flex-col justify-between bg-paper">
            <div>
              <span className="text-xs text-signal uppercase block mb-1">GRID SYSTEM // 01</span>
              <h4 className="text-base font-medium mb-3">12px Discrete Marking Grid</h4>
              <p className="text-xs text-grey-9 leading-relaxed">
                모눈종이와 천문 좌표계의 정밀 눈금에서 착안하여, 12px 단위의 일관된 공간 비례를 구축합니다.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line text-xs text-grey-7 space-y-1">
              <div className="flex justify-between"><span>GRID PITCH</span><span className="text-ink">12.00 px</span></div>
              <div className="flex justify-between"><span>HAIRLINE</span><span className="text-ink">1.00 px Solid</span></div>
              <div className="flex justify-between"><span>BOUNDARY</span><span className="text-ink">#E7E6E1</span></div>
            </div>
          </div>

          {/* Card 2: 1px Hairline Boundary */}
          <div className="border border-line p-6 flex flex-col justify-between bg-paper">
            <div>
              <span className="text-xs text-signal uppercase block mb-1">BOUNDARY // 02</span>
              <h4 className="text-base font-medium mb-3">Zero-Elevation 1px Line</h4>
              <p className="text-xs text-grey-9 leading-relaxed">
                과장된 섀도우를 일체 배제하고 1px의 명확한 테두리와 톤 대비로만 정보의 위계를 나눕니다.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line text-xs text-grey-7 space-y-1">
              <div className="flex justify-between"><span>Outer Boundary</span><span className="text-ink">1px solid</span></div>
              <div className="flex justify-between"><span>Shadow Policy</span><span className="text-ink">0px (Zero)</span></div>
              <div className="flex justify-between"><span>Corner Radius</span><span className="text-ink">0~2px Sharp</span></div>
            </div>
          </div>

          {/* Card 3: Control Primitives */}
          <div className="border border-line p-6 flex flex-col justify-between bg-paper">
            <div>
              <span className="text-xs text-signal uppercase block mb-1">CONTROLS // 03</span>
              <h4 className="text-base font-medium mb-3">Tactile Signal Triggers</h4>
              <p className="text-xs text-grey-9 leading-relaxed">
                물리적 스위치처럼 즉각적인 피드백을 전달하는 반응형 컨트롤 프리미티브입니다.
              </p>
            </div>
            <div className="mt-6 space-y-2">
              <button className="w-full py-2 bg-ink text-paper text-xs uppercase tracking-wider hover:bg-signal transition-colors">
                Signal Active Action
              </button>
              <button className="w-full py-2 border border-line text-xs text-ink hover:border-signal transition-colors">
                Hairline Outlined
              </button>
            </div>
          </div>

          {/* Card 4: Modular Container */}
          <div className="border border-line p-6 flex flex-col justify-between bg-paper">
            <div>
              <span className="text-xs text-signal uppercase block mb-1">CONTAINER // 04</span>
              <h4 className="text-base font-medium mb-3">Datasheet Architecture</h4>
              <p className="text-xs text-grey-9 leading-relaxed">
                인덱스, 데이터 슬롯, 상태 파라미터가 하나의 규격화된 블록으로 결합되는 컨테이너입니다.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line text-xs text-grey-7 space-y-1">
              <div className="flex justify-between"><span>PADDING RATIO</span><span className="text-ink">Strict 16/24px</span></div>
              <div className="flex justify-between"><span>COMPLIANCE</span><span className="text-signal font-semibold">ASDS-2026</span></div>
              <div className="flex justify-between"><span>LOW-POWER</span><span className="text-ink">Optimized</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
