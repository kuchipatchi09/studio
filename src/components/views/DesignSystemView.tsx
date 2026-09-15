import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

export const DesignSystemView: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const [activeTone, setActiveTone] = useState({
    nameEn: "Signal Cobalt",
    nameKo: "시그널 코발트 (Base Anchor)",
    desc: "흩어진 별빛을 모아 길을 밝히는 asterstudio의 중심 신호색",
    hex: "#3158A6",
  });

  const SPECTRUM = [
    { nameEn: "Signal Cobalt", nameKo: "시그널 코발트", desc: "흩어진 별빛을 모으는 중심 주파수", hex: "#3158A6" },
    { nameEn: "Dancheong Red", nameKo: "단청 레드", desc: "asterisk* 플랫폼의 중심 온기", hex: "#A33A31" },
    { nameEn: "Starlight Amber", nameKo: "황혼 앰버", desc: "일출·일몰과 태양의 고도각 빛", hex: "#D4883A" },
    { nameEn: "Deep Cyan", nameKo: "심해 옥빛", desc: "QPI 주기율표와 과학 데이터 탐색", hex: "#2C6B74" },
    { nameEn: "Midnight Navy", nameKo: "자정 네이비", desc: "지방 항성시(LST)와 밤하늘 천체", hex: "#1B2A4A" },
    { nameEn: "Nebula Purple", nameKo: "성운 퍼플", desc: "Dasein; 학술 탐색과 사유의 깊이", hex: "#5B3D6B" },
    { nameEn: "Mugwort Leaf", nameKo: "머그워트 리프", desc: "교정의 생활 속 관찰의 자연색", hex: "#556042" },
  ];

  const GREYSCALE = [
    { name: "Base White", hex: "#F7F6F2", border: true },
    { name: "Base Black", hex: "#2B2B2E" },
    { name: "Grey 1", hex: "#E7E6E1", border: true },
    { name: "Grey 3", hex: "#C2C1BB" },
    { name: "Grey 7", hex: "#888783" },
    { name: "Grey 9", hex: "#535356" },
    { name: "Grey 11", hex: "#3A3A3D" },
  ];

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <div className="pt-20 pb-32 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 text-ink font-sans">
      {/* Top Header */}
      <div className="pb-8 border-b border-line">
        <div className="text-xs uppercase text-grey-7 mb-2">
          01 // Design Specification
        </div>
        <h1 className="text-3xl sm:text-5xl font-normal tracking-tight mb-3">
          asterstudio Design System (ASDS)
        </h1>
        <p className="text-sm sm:text-base text-grey-9 max-w-3xl leading-relaxed">
          물리적 촉각성과 데이터시트의 선형 구조를 디지털 인터페이스로 구현한 asterstudio의 핵심 디자인 시스템입니다.
        </p>
      </div>

      {/* 01 // COLOUR TOKENS */}
      <section className="py-14 border-b border-line">
        <div className="flex items-center justify-between pb-6 border-b border-line mb-8">
          <div>
            <div className="text-xs uppercase text-grey-7">01 // Colour Tokens</div>
            <h2 className="text-2xl font-normal mt-1">Chromatic Architecture</h2>
          </div>
          <div className="text-xs text-grey-7 hidden sm:block">
            색상을 선택하여 상세 내용 확인 및 복사
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Big Base Anchor Preview Card */}
          <div
            className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between border border-line text-paper min-h-[380px] transition-colors duration-200"
            style={{ backgroundColor: activeTone.hex }}
          >
            <div>
              <div className="flex items-center justify-between text-xs uppercase tracking-wider opacity-85 pb-4 border-b border-white/20">
                <span>BASE ANCHOR COLOUR</span>
                <span>ASDS-COLOUR</span>
              </div>
              <div className="mt-8">
                <h3 className="text-3xl sm:text-4xl font-normal tracking-tight">
                  {activeTone.nameEn}
                </h3>
                <p className="text-xs opacity-85 mt-1">{activeTone.nameKo}</p>
                <p className="text-sm sm:text-base mt-6 opacity-95 leading-relaxed max-w-md">
                  {activeTone.desc}
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/20 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase opacity-70 block">COLOUR CODE</span>
                <span className="text-lg font-medium">{activeTone.hex}</span>
              </div>
              <button
                onClick={() => copyHex(activeTone.hex)}
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/40 bg-black/15 hover:bg-black/25 text-xs uppercase tracking-wider transition-all"
              >
                {copiedHex === activeTone.hex ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedHex === activeTone.hex ? "COPIED" : "COPY HEX"}</span>
              </button>
            </div>
          </div>

          {/* 7 Spectrum Tones */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-grey-7 pb-3 border-b border-line">
              <span>ACCENT SPECTRUM // 7 HERITAGE TONES</span>
              <span>SELECT TO PREVIEW</span>
            </div>

            <div className="divide-y divide-line border-b border-line">
              {SPECTRUM.map((tone) => {
                const isSelected = activeTone.hex === tone.hex;
                return (
                  <button
                    key={tone.nameEn}
                    onClick={() => setActiveTone(tone)}
                    className={`w-full py-3.5 px-3 flex items-center justify-between text-left transition-all ${
                      isSelected ? "bg-line/60 font-medium" : "hover:bg-line/30"
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
                          copyHex(tone.hex);
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-grey-7">
              <span>Base Anchor: Signal Cobalt (#3158A6)</span>
              <span>7 Spectrum Tokens</span>
            </div>
          </div>
        </div>

        {/* Surface & Neutral Scale */}
        <div className="mt-14 pt-8 border-t border-line">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 gap-2">
            <div>
              <div className="text-xs uppercase text-grey-7">SURFACE &amp; NEUTRAL SCALE</div>
              <h3 className="text-lg font-normal mt-0.5">Off-Neutral Greyscale Palette</h3>
            </div>
            <p className="text-xs text-grey-7 max-w-md sm:text-right">
              순백색과 완전한 블랙을 배제하고, 아날로그 장비 하우징의 질감을 구현하는 단계별 무채색 스펙트럼입니다.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {GREYSCALE.map((g) => (
              <div
                key={g.name}
                onClick={() => copyHex(g.hex)}
                className="border border-line p-3 bg-paper hover:border-grey-3 transition-colors cursor-pointer group"
              >
                <div
                  className={`h-12 w-full mb-3 ${g.border ? "border border-line" : ""}`}
                  style={{ backgroundColor: g.hex }}
                />
                <div className="text-xs font-medium text-ink">{g.name}</div>
                <div className="text-xs text-grey-7 group-hover:text-ink transition-colors mt-0.5">
                  {g.hex}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 // TYPOGRAPHY SYSTEM (Exact recreation of user reference image 1) */}
      <section className="py-14 border-b border-line">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-line mb-8 gap-2">
          <div>
            <div className="text-xs uppercase text-grey-7">02 // Typography System</div>
            <h2 className="text-2xl font-normal mt-1">Unified Type Architecture</h2>
          </div>
          <div className="text-xs text-grey-7">
            Specimen // Asta Sans
          </div>
        </div>

        <div className="divide-y divide-line border-t border-b border-line">
          {/* Row 1: Wordmark */}
          <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
            <div className="md:col-span-3 text-xs text-grey-7">Wordmark</div>
            <div className="md:col-span-9">
              <div className="text-5xl sm:text-6xl font-normal tracking-tight text-ink">
                asterstudio<span className="text-signal font-bold">*</span>
              </div>
            </div>
          </div>

          {/* Row 2: Typography (Latin) */}
          <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
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
          <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
            <div className="md:col-span-3 text-xs text-grey-7">Multilingual CJK</div>
            <div className="md:col-span-9 space-y-6">
              <div>
                <div className="text-xs text-grey-7 mb-2">KOREAN // 한국어</div>
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
                <div className="text-xs text-grey-7 mb-2">JAPANESE // 日本語</div>
                <div className="text-lg font-normal text-ink mb-1">
                  あいうえおかきくけこ アイウエオカキクケコ
                </div>
                <p className="text-xs text-grey-7">
                  ノブを繊細に回すように、あなたの周波数に合わせた途切れのないウェブ体験を提供します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 // STRUCTURE & PRIMITIVES (Exact recreation of user reference image 2) */}
      <section className="py-14">
        <div className="pb-8 border-b border-line mb-8">
          <div className="text-xs uppercase text-grey-7 mb-1">SURFACE SYSTEM // 01 // 12PX CONTINUOUS HAIRLINE GRID</div>
          <h2 className="text-2xl sm:text-3xl font-normal">12px Linear Marking Grid</h2>
          <p className="text-sm text-grey-9 mt-2 max-w-3xl leading-relaxed">
            모눈종이와 오실로스코프 화면의 정밀 눈금에서 영감을 받았습니다. 12px 간격으로 1px 헤어라인을 연속 전개하여 모호한 장식 대신 물리적인 측정 공간감을 형성합니다.
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
          <div className="border border-line bg-[#FAF9F5] p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase text-grey-7 mb-1">BORDER HIERARCHY // 02</div>
              <h3 className="text-xl font-normal mb-3">1px Hairline Boundary</h3>
              <p className="text-xs text-grey-9 leading-relaxed mb-6">
                인위적인 드롭 섀도우(Drop Shadow)를 일체 사용하지 않고, 오직 1px의 명확한 테두리와 분할선으로 모든 공간과 데이터의 위계를 구분합니다.
              </p>

              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-paper border border-line text-xs">
                  <span className="text-ink">01 // Outer Container Boundary</span>
                  <span className="text-grey-7">1px solid (grey1 / grey9)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-paper border border-line text-xs">
                  <span className="text-ink">02 // Internal Divide Line</span>
                  <span className="text-grey-7">divide-y (grey1 / grey9)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-paper border border-signal text-xs">
                  <span className="text-signal font-medium">03 // Active Focus &amp; Hover</span>
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
          <div className="border border-line bg-[#FAF9F5] p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase text-grey-7 mb-1">CONTROL PRIMITIVES // 03</div>
              <h3 className="text-xl font-normal mb-3">Tactile Control Triggers</h3>
              <p className="text-xs text-grey-9 leading-relaxed mb-6">
                아날로그 물리 스위치를 누르는 듯한 즉각적이고 명확한 피드백을 전달하는 핵심 컴포넌트 프리미티브입니다.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <button className="flex-1 py-3 bg-signal text-paper text-xs font-medium hover:bg-ink transition-colors flex items-center justify-center gap-1.5">
                    <span>Primary Action</span>
                    <span>→</span>
                  </button>
                  <button className="flex-1 py-3 bg-paper border border-line text-xs text-ink hover:border-ink transition-colors">
                    Outlined Control
                  </button>
                </div>

                <div className="flex gap-3 text-xs">
                  <div className="flex-1 p-2.5 bg-paper border border-line flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-signal" />
                    <span>SYSTEM_READY: OK</span>
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
