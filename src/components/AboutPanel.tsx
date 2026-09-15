import React from "react";

export const AboutPanel: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-line bg-paper">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Header */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-grey-7 mb-10 pb-6 border-b border-line">
          <span className="text-signal font-semibold">04</span>
          <span className="w-6 h-[1px] bg-line" />
          <span>About &amp; Credits</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Statement */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.15] text-ink tracking-tight">
              흩어진 정보와 작은 가능성을 <br />
              <span className="text-signal font-medium">실제로 작동하는 형태</span>로 만듭니다.
            </h2>

            <div className="space-y-6 text-[1.125rem] leading-[1.8] text-grey-9 max-w-[65ch]">
              <p>
                저는 생활 속에서 그냥 지나치기 쉬운 불편을 관찰하고,
                그 안에 흩어진 정보와 가능성을 하나의 서비스로 연결합니다.
              </p>
              <p>
                학교생활 플랫폼부터 과학 데이터 인터페이스까지,
                기획과 디자인, 개발의 경계를 나누기보다
                사람이 실제로 사용할 수 있는 형태를 끝까지 만드는 데 관심이 있습니다.
              </p>
            </div>
          </div>

          {/* Credits & Identity Panel */}
          <div className="lg:col-span-4 border border-line bg-[#FAF9F5] p-6 sm:p-8 rounded-sm space-y-6">
            <div className="pb-4 border-b border-line">
              <span className="text-xs font-mono text-grey-7 uppercase block">Studio Identity</span>
              <h3 className="text-xl font-normal text-ink mt-1">
                asterstudio<span className="text-signal font-bold">*</span>
              </h3>
              <p className="text-xs font-mono text-grey-7 mt-0.5">
                Gathering scattered light.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="font-mono text-grey-7 uppercase block mb-1">Creator</span>
                <p className="text-ink font-medium">황석현 (Hwang Seokhyeon)</p>
                <p className="text-grey-7">Planning · Design · Front-end Development</p>
              </div>

              <div>
                <span className="font-mono text-grey-7 uppercase block mb-1">Collaboration Credits</span>
                <p className="text-grey-9 leading-relaxed">
                  <strong className="text-ink font-medium">asterisk*</strong> 공동 개발: 황석현, 이재원
                </p>
                <p className="text-grey-9 leading-relaxed mt-1">
                  <strong className="text-ink font-medium">QPI Project</strong>: asterstudio / QPI Team
                </p>
              </div>

              <div className="pt-2 border-t border-line text-grey-7 leading-relaxed">
                <span>Chungnam Science High School · 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
