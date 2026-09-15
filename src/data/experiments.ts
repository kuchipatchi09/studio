export interface Experiment {
  id: string;
  index: string;
  title: string;
  category: string;
  period: string;
  summary: string;
  details: string[];
  relevanceToUI: string;
}

export const EXPERIMENTS: Experiment[] = [
  {
    id: "hinnamnor-ocean",
    index: "EXP-01",
    title: "태풍 힌남노의 풍응력 컬과 에크만 펌핑 분석",
    category: "Earth Science & Data Analysis",
    period: "Research",
    summary: "ERA5 재분석 데이터와 위성 SST 자료를 기반으로 태풍 통과 시 풍응력 컬에 의한 에크만 펌핑 및 해수면 온도 하강 메커니즘을 정량 분석했습니다.",
    details: [
      "ERA5 바람장 데이터로부터 풍응력 벡터 및 컬(Curl) 계산",
      "용승(Upwelling) 속도와 해수면 온도(SST) 하강 사이의 시공간 상관관계 도출",
      "복잡한 해양-대기 다차원 데이터셋의 공간 시각화 처리"
    ],
    relevanceToUI: "방대한 다차원 과학 데이터를 노이즈 없이 정돈하여 의미 있는 패턴으로 변환하는 정보 시각화 감각의 바탕이 되었습니다."
  },
  {
    id: "pleiades-gaia",
    index: "EXP-02",
    title: "Gaia 시차 및 고유운동 기반 플레이아데스 성단 구성원 선별",
    category: "Astronomy & Vector Kinematics",
    period: "Research",
    summary: "ESA Gaia 위성의 천문 관측 데이터를 활용해 시차(Parallax)와 고유운동(Proper Motion) 벡터 분포를 분석하고, 배경 별과 산개성단 구성원을 통계적으로 분리했습니다.",
    details: [
      "Gaia DR3 카탈로그 천문 데이터 필터링 및 오차 보정",
      "고유운동 벡터 평면 상의 군집 클러스터링 알고리즘 적용",
      "성단 중심으로부터의 공간 밀도 및 색등급도(HR도) 검증"
    ],
    relevanceToUI: "점과 벡터 데이터가 맺는 공간적 관계를 이해하고, asterstudio의 핵심 비유인 별빛과 좌표계 인터랙션을 정밀하게 설계하는 기하학적 기초가 되었습니다."
  },
  {
    id: "lissajous-fft-biometrics",
    index: "EXP-03",
    title: "리사주 위상차와 FFT/STFT 기반 오프라인 생체 인식 연구",
    category: "Acoustic Signal Processing & Security",
    period: "Research",
    summary: "외부 클라우드 연결 없이 로컬 디바이스에서 음성 신호의 리사주 도형 위상차와 주파수 스펙트럼(STFT) 변수를 분석하는 독립 보안 알고리즘을 설계했습니다.",
    details: [
      "Raspberry Pi 환경에서의 실시간 음향 신호 수집 및 순음(Pure Tone) 검증",
      "FFT 및 단시간 푸리에 변환(STFT)을 통한 화자 고유 주파수 특성 추출",
      "네트워크 없는 환경에서의 초경량 연산 최적화 파이프라인 수립"
    ],
    relevanceToUI: "네트워크 지연이나 외부 의존성 없이 로컬 연산만으로 즉각 반응하는 견고한 시스템 구조와 사용자 상태 피드백 설계에 영향을 주었습니다."
  },
  {
    id: "cansat-lora-direction",
    index: "EXP-04",
    title: "CanSat LoRa RSSI와 IMU 기반 산악 조난자 방향 추정",
    category: "Embedded & Telemetry Experiment",
    period: "Experiment",
    summary: "소형 캔위성(CanSat) 플랫폼에서 LoRa 수신 신호 강도(RSSI)와 IMU 자세 센서 방위각 데이터를 결합하여 산악 지형 내 무선 송신원 방향을 추정하는 시스템을 실험했습니다.",
    details: [
      "LoRa 통신 패킷의 RSSI 감쇄 패턴 모델링",
      "지자계 및 가속도 센서 융합을 통한 실시간 방향각 보정",
      "극단적 환경에서의 텔레메트리 데이터 무선 전송 및 수신"
    ],
    relevanceToUI: "약하고 불완전한 신호들을 모아 명확한 방향(벡터)을 찾아내는 문제 해결 태도를 인터페이스 설계 원칙으로 발전시켰습니다."
  }
];
