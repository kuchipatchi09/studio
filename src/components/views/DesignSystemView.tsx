import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface HeritageTone {
  id: string;
  nameEn: string;
  nameKo: string;
  desc: string;
  hex: string;
}

const HERITAGE_TONES: HeritageTone[] = [
  {
    id: "dancheong",
    nameEn: "Dancheong Red",
    nameKo: "단청 레드",
    desc: "목조 건축과 인장의 깊고 고풍스러운 붉은색",
    hex: "#A33A31",
  },
  {
    id: "persimmon",
    nameEn: "Ripe Persimmon",
    nameKo: "홍시 오렌지",
    desc: "늦가을 볕에 알맞게 익은 감의 묵직하고 따스한 주황색",
    hex: "#C65D2B",
  },
  {
    id: "canola",
    nameEn: "Canola Yellow",
    nameKo: "유채꽃 옐로우",
    desc: "봄날의 생기를 머금되 전체 톤에 맞춰 차분하게 정돈한 노란색",
    hex: "#E0A93B",
  },
  {
    id: "mugwort",
    nameEn: "Mugwort Green",
    nameKo: "머그워트 그린 (Base Anchor)",
    desc: "들풀의 생명력과 흙내음이 밴 절제된 녹색",
    hex: "#556042",
  },
  {
    id: "celadon",
    nameEn: "Celadon Blue",
    nameKo: "비색 블루",
    desc: "맑은 고려비색 도자기와 깊은 계곡물에서 느껴지는 옥빛 파란색",
    hex: "#45707A",
  },
  {
    id: "indigo",
    nameEn: "Indigo Blue",
    nameKo: "쪽빛 남색",
    desc: "천연 쪽으로 여러 번 정성껏 물들인 단정하고 깊은 남색",
    hex: "#1F3A52",
  },
  {
    id: "gromwell",
    nameEn: "Gromwell Violet",
    nameKo: "지치 바이올렛",
    desc: "전통 지치 뿌리로 염색한 그윽하고 우아한 보라색",
    hex: "#5C3C58",
  },
];

const GREYSCALE_SCALE = [
  { name: "Base White", hex: "#F7F6F2", border: true },
  { name: "Base Black", hex: "#2B2B2E" },
  { name: "Grey 1", hex: "#E7E6E1", border: true },
  { name: "Grey 3", hex: "#C2C1BB" },
  { name: "Grey 7", hex: "#888783" },
  { name: "Grey 9", hex: "#535356" },
  { name: "Grey 11", hex: "#3A3A3D" },
];

export const DesignSystemView: React.FC = () => {
  const [activeTone, setActiveTone] = useState<HeritageTone>(HERITAGE_TONES[3]); // Default Mugwort Green
  const [copied, setCopied] = useState(false);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-20 pb-32 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 text-ink">
      {/* Title & Introduction */}
      <div className="pb-10 border-b border-line">
        <div className="text-xs font-mono uppercase text-grey-7 mb-2">
          01 // Design Specification
        </div>
        <h1 className="text-3xl sm:text-5xl font-normal tracking-tight mb-4">
          Knoblab Universal Design System
        </h1>
        <p className="text-sm sm:text-base text-grey-9 max-w-3xl leading-relaxed">
          물리적 촉각성과 데이터시트의 선형 구조를 디지털 인터페이스로 구현한 핵심 디자인 시스템입니다.
        </p>
      </div>

      {/* SECTION 01: COLOUR TOKENS */}
      <section className="py-16 border-b border-line">
        <div className="flex items-center justify-between pb-6 border-b border-line mb-8">
          <div>
            <div className="text-xs font-mono uppercase text-grey-7">01 // Colour Tokens</div>
            <h2 className="text-xl sm:text-2xl font-normal mt-1">Chromatic Architecture</h2>
          </div>
          <div className="text-xs font-mono text-grey-7">
            색상을 선택하여 상세 내용 확인 및 복사
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Base Anchor Big Card */}
          <div
            className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between rounded-none border border-line text-paper transition-colors duration-300 min-h-[380px]"
            style={{ backgroundColor: activeTone.hex }}
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider opacity-80 pb-4 border-b border-white/20">
                <span>BASE ANCHOR COLOUR</span>
                <span>KUDS-COLOUR</span>
              </div>

              <div className="mt-8">
                <h3 className="text-3xl sm:text-4xl font-normal tracking-tight">
                  {activeTone.nameEn}
                </h3>
                <p className="text-xs font-mono opacity-80 mt-1">
                  {activeTone.nameKo}
                </p>
                <p className="text-sm sm:text-base mt-6 opacity-95 leading-relaxed max-w-md">
                  {activeTone.desc}
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/20 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider block opacity-70">
                  COLOUR CODE
                </span>
                <span className="text-lg font-mono font-medium">{activeTone.hex}</span>
              </div>

              <button
                onClick={() => handleCopyHex(activeTone.hex)}
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/40 bg-black/10 hover:bg-black/20 text-xs font-mono uppercase tracking-wider transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "COPIED" : "COPY HEX"}</span>
              </button>
            </div>
          </div>

          {/* Right: 7 Heritage Tones List */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-mono text-grey-7 pb-3 border-b border-line">
              <span>ACCENT SPECTRUM // 7 HERITAGE TONES</span>
              <span>SELECT TO PREVIEW</span>
            </div>

            <div className="divide-y divide-line border-b border-line">
              {HERITAGE_TONES.map((tone) => {
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

                    <div className="flex items-center gap-2 text-xs font-mono text-grey-9">
                      <span>{tone.hex}</span>
                      <Copy
                        className="w-3.5 h-3.5 text-grey-7 hover:text-ink"
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

            <div className="pt-4 flex items-center justify-between text-xs font-mono text-grey-7">
              <span>Base Anchor: Mugwort Green (#556042)</span>
              <span>7 Spectrum Tokens</span>
            </div>
          </div>
        </div>

        {/* Surface & Neutral Scale */}
        <div className="mt-14 pt-8 border-t border-line">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 gap-2">
            <div>
              <div className="text-xs font-mono uppercase text-grey-7">SURFACE &amp; NEUTRAL SCALE</div>
              <h3 className="text-lg font-normal mt-0.5">Off-Neutral Greyscale Palette</h3>
            </div>
            <p className="text-xs text-grey-7 max-w-md sm:text-right">
              순백색과 완전한 블랙을 배제하고, 아날로그 장비 하우징의 질감을 구현하는 단계별 무채색 스펙트럼입니다.
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
                <div className="text-xs font-mono text-grey-7 group-hover:text-ink transition-colors">
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
          <div className="text-xs font-mono uppercase text-grey-7">02 // Typography System</div>
          <h2 className="text-xl sm:text-2xl font-normal mt-1">Unified Type Architecture</h2>
          <p className="text-xs font-mono text-grey-7 mt-1">Specimen // IBM Plex Sans &amp; Pretendard</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Specimen Left */}
          <div className="lg:col-span-7 space-y-8">
            <div className="border border-line p-6 bg-paper">
              <span className="text-xs font-mono text-grey-7 uppercase block mb-2">Wordmark</span>
              <div className="text-4xl font-normal tracking-tight text-ink">
                asterstudio<span className="text-[#556042] font-bold">*</span>
              </div>
            </div>

            <div className="border border-line p-6 space-y-4">
              <span className="text-xs font-mono text-grey-7 uppercase block">Typography (Latin)</span>
              <div className="text-xl font-normal text-ink">IBM Plex Sans</div>
              <p className="text-sm font-mono text-grey-7 tracking-wide break-all">
                AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz<br />
                0123456789 !?,.;:--&amp;€$@%*
              </p>
            </div>

            <div className="border border-line p-6 space-y-4">
              <span className="text-xs font-mono text-grey-7 uppercase block">Multilingual CJK</span>
              <div className="space-y-3 text-sm leading-relaxed">
                <div>
                  <span className="text-xs font-mono text-grey-7 block">KOREAN // 한국어</span>
                  <p className="text-ink font-normal">
                    0과 1, 흑과 백이라는 이분법을 넘어 사용자의 환경에 가장 완벽하게 맞춘 연속적인 웹 경험.
                  </p>
                </div>
                <div className="pt-2 border-t border-line/60">
                  <span className="text-xs font-mono text-grey-7 block">JAPANESE // 日本語</span>
                  <p className="text-grey-9 text-xs">
                    ノブを繊細に回すように、あなたの周波数に合わせた途切れのないウェブ体験を提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hierarchy Right */}
          <div className="lg:col-span-5 border border-line p-6 bg-paper space-y-6">
            <span className="text-xs font-mono text-grey-7 uppercase block pb-3 border-b border-line">
              Weights &amp; Hierarchy
            </span>

            <div>
              <span className="text-xs font-mono text-grey-7 block">300 Light // Display Subtitle</span>
              <div className="text-lg font-light text-ink mt-0.5">
                Tuning the Web to Your Frequency.
              </div>
            </div>

            <div className="pt-4 border-t border-line/60">
              <span className="text-xs font-mono text-grey-7 block">400 Regular // Body Paragraph</span>
              <div className="text-sm font-normal text-ink mt-0.5 leading-relaxed">
                노브를 섬세하게 돌리듯 사용자의 환경에 최적화된 웹 인터랙션을 제공합니다.
              </div>
            </div>

            <div className="pt-4 border-t border-line/60">
              <span className="text-xs font-mono text-grey-7 block">500 Medium // Section Headings</span>
              <div className="text-base font-medium text-ink mt-0.5">
                Design System &amp; Component Architecture
              </div>
            </div>

            <div className="pt-4 border-t border-line/60">
              <span className="text-xs font-mono text-grey-7 block">600 SemiBold // Key Emphasis</span>
              <div className="text-base font-semibold text-ink mt-0.5">
                Purity, Progress, Performance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: STRUCTURE & PRIMITIVES */}
      <section className="py-16">
        <div className="pb-6 border-b border-line mb-8">
          <div className="text-xs font-mono uppercase text-grey-7">03 // Structure &amp; Primitives</div>
          <h2 className="text-xl sm:text-2xl font-normal mt-1">Hairline &amp; Marking Grid</h2>
          <p className="text-xs font-mono text-grey-7 mt-1">장식용 그림자를 배제한 1px 보더와 정밀 눈금 시스템</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: 12px Grid */}
          <div className="border border-line p-6 flex flex-col justify-between bg-paper">
            <div>
              <span className="text-xs font-mono text-grey-7 uppercase block mb-1">SURFACE SYSTEM // 01</span>
              <h4 className="text-base font-medium mb-3">12px Linear Marking Grid</h4>
              <p className="text-xs text-grey-9 leading-relaxed">
                12px 간격으로 1px 헤어라인을 연속 전개하여 모호한 장식 대신 물리적인 측정 공간감을 형성합니다.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line text-xs font-mono text-grey-7 space-y-1">
              <div className="flex justify-between"><span>GRID PITCH</span><span className="text-ink">12.00 px</span></div>
              <div className="flex justify-between"><span>LINE WEIGHT</span><span className="text-ink">1.00 px Solid</span></div>
              <div className="flex justify-between"><span>OPACITY</span><span className="text-ink">15% Alpha</span></div>
            </div>
          </div>

          {/* Card 2: 1px Hairline Boundary */}
          <div className="border border-line p-6 flex flex-col justify-between bg-paper">
            <div>
              <span className="text-xs font-mono text-grey-7 uppercase block mb-1">BORDER HIERARCHY // 02</span>
              <h4 className="text-base font-medium mb-3">1px Hairline Boundary</h4>
              <p className="text-xs text-grey-9 leading-relaxed">
                인위적인 드롭 섀도우를 일체 사용하지 않고, 오직 1px의 명확한 테두리와 분할선으로 모든 공간을 구분합니다.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line text-xs font-mono text-grey-7 space-y-1">
              <div className="flex justify-between"><span>01 Container</span><span className="text-ink">1px solid</span></div>
              <div className="flex justify-between"><span>02 Divide</span><span className="text-ink">divide-y</span></div>
              <div className="flex justify-between"><span>Shadow Policy</span><span className="text-ink">0px (Zero)</span></div>
            </div>
          </div>

          {/* Card 3: Control Primitives */}
          <div className="border border-line p-6 flex flex-col justify-between bg-paper">
            <div>
              <span className="text-xs font-mono text-grey-7 uppercase block mb-1">CONTROL PRIMITIVES // 03</span>
              <h4 className="text-base font-medium mb-3">Tactile Control Triggers</h4>
              <p className="text-xs text-grey-9 leading-relaxed">
                아날로그 물리 스위치를 누르는 듯한 즉각적이고 명확한 피드백을 전달하는 핵심 컴포넌트입니다.
              </p>
            </div>
            <div className="mt-6 space-y-2">
              <button className="w-full py-2 bg-ink text-paper text-xs font-mono uppercase tracking-wider hover:bg-[#556042] transition-colors">
                Primary Action
              </button>
              <button className="w-full py-2 border border-line text-xs font-mono text-ink hover:border-ink transition-colors">
                Outlined Control
              </button>
            </div>
          </div>

          {/* Card 4: Modular Container */}
          <div className="border border-line p-6 flex flex-col justify-between bg-paper">
            <div>
              <span className="text-xs font-mono text-grey-7 uppercase block mb-1">MODULAR SPEC // 04</span>
              <h4 className="text-base font-medium mb-3">Datasheet Architecture</h4>
              <p className="text-xs text-grey-9 leading-relaxed">
                헤더 인덱스, 데이터 슬롯, 하단 링크가 하나의 규격화된 블록으로 결합되는 설계 원칙입니다.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line text-xs font-mono text-grey-7 space-y-1">
              <div className="flex justify-between"><span>PADDING</span><span className="text-ink">Strict Ratio</span></div>
              <div className="flex justify-between"><span>RADIUS</span><span className="text-ink">0px Sharp</span></div>
              <div className="flex justify-between"><span>SPEC STATUS</span><span className="text-[#556042] font-semibold">VALIDATED</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
