export interface Project {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  status?: string;
  summary: string;
  problem?: string;
  response?: string;
  features?: string[];
  roles?: string[];
  credits?: string[];
  url?: string;
  accent?: string;
  images?: string[];
  featured: boolean;
  editorialDetails?: {
    narrativeSteps: { title: string; desc: string }[];
    designDecisions: { title: string; desc: string }[];
    technicalNotes: string[];
  };
}

export const PROJECTS: Project[] = [
  {
    slug: "asterisk",
    index: "01",
    title: "asterisk*",
    subtitle: "The Answer to Campus Life, and Everything.",
    year: "2026",
    category: "School Life Platform / Product Design & Development",
    status: "Live Service",
    summary: "흩어진 학교생활 정보와 시간의 감각을 하나의 화면으로 연결한 통합 플랫폼",
    problem: "충남과학고 학생들이 시간표, 방과후, 급식, 공지, 커뮤니티, 학습실 예약 등 흩어진 여러 사이트와 정보를 매일 번거롭게 오가야 했고, 교실과 독서실 안에서 바깥의 시간과 하늘의 흐름을 놓치기 쉬웠습니다.",
    response: "매일 필요한 핵심 정보를 하나의 대시보드 구조로 묶고, 학교의 실제 지리 좌표와 시각을 연산하는 천문 Ambient 배경을 결합하여 실용적 편의와 정서적 시간 감각을 동시에 복원했습니다.",
    features: [
      "메인 대시보드: 현재 시정·교시 과목, 시간대별 당일 급식, 실시간 날씨 및 체감온도, 최신 공지, 오늘 시간표를 단일 뷰에서 제공",
      "전 학년 시간표 & 방과후 일정: 학년·반 선택 및 당일/주간 뷰, 요일별 방과후 자동 연동",
      "천문 계산형 Ambient 배경: 학교 위치 기반 일출·일몰, 달의 위상, 지방 항성시, 태양·달 위치 및 밤하늘 실시간 회전",
      "학교 서비스 허브 연결: 커뮤니티(community.qpi.digital), 스터디룸 예약(cnshstudy.kro.kr) 매끄러운 연동",
      "저사양 크롬북 및 모바일 배려: PWA 지원, 배경 켜기/끄기 및 성능 모드 지원, 비활성 탭 렌더링 루프 자동 정지"
    ],
    roles: ["Planning", "Product Design", "Front-end Development", "Astronomical Computation Logic"],
    credits: ["개발: 황석현, 이재원"],
    url: "https://cnsh.life",
    accent: "#A33A31",
    featured: true,
    editorialDetails: {
      narrativeSteps: [
        {
          title: "Fragmented School Information",
          desc: "학생들이 매일 확인해야 하는 6개 이상의 정보 채널(급식, 시간표, 방과후, 기숙사 공지, 예약)을 한 곳으로 집약하여 탐색 비용을 최소화했습니다."
        },
        {
          title: "One Daily Surface",
          desc: "로그인 없이도 지금 당장 필요한 '현재 교시 과목'과 '다음 급식'이 가장 먼저 눈에 들어오도록 시각적 우선순위를 엄격히 정리했습니다."
        },
        {
          title: "A Sense of Time (Ambient)",
          desc: "창문이 제한된 학습 환경 속에서, 학교의 정확한 위도·경도와 로컬 타임을 계산해 하늘의 빛과 천체의 운행을 배경에 조용히 머물게 했습니다."
        }
      ],
      designDecisions: [
        {
          title: "1px Hairline & Structural Density",
          desc: "과도한 카드 섀도우 대신 1px 헤어라인과 명확한 대비를 통해 저해상도 디스플레이에서도 글자와 숫자가 또렷하게 읽히도록 설계했습니다."
        },
        {
          title: "Performance First for Chromebooks",
          desc: "학교 보급형 크롬북의 렌더링 성능을 저하시키지 않도록 SVG/Canvas 연산을 경량화하고 백그라운드 탭에서는 requestAnimationFrame을 즉시 일시 정지합니다."
        }
      ],
      technicalNotes: [
        "지방 항성시(LST) 및 태양/달 적경·적위 실시간 천문 알고리즘 탑재",
        "Service Worker 기반 오프라인 캐싱 및 모바일 PWA 독립 앱 경험 제공",
        "학교 네트워크 환경을 고려한 초경량 번들 최적화"
      ]
    }
  },
  {
    slug: "qets",
    index: "02",
    title: "QPI Periodic Table",
    subtitle: "주기율표를 한눈에.",
    year: "2026",
    category: "Educational Interface / Data Exploration",
    status: "Live Service",
    summary: "전체 원소의 거시적 관계와 개별 원소의 미시적 물성을 한 화면에서 탐색하는 70:30 정보 구조 인터페이스",
    problem: "교과서나 기존 주기율표 사이트는 표 전체를 보면 상세 데이터가 가려지고, 상세 창을 열면 주기율표의 위치적 맥락을 잃어버리는 분절이 있었습니다.",
    response: "화면을 좌측 70%(주기율표 매트릭스)와 우측 30%(원소 세부 물성 및 개념 데이터)로 영구 분할하여, 스크롤과 모달 없이 모든 주기적 경향성을 직관적으로 관찰할 수 있도록 구성했습니다.",
    features: [
      "70:30 화면 분할: 왼쪽에서 원소 클릭 시 오른쪽 패널에서 원자량, 전자배치, 산화수, 발견 역사 등 즉각 렌더링",
      "비교 및 개념노트 모드: 복수 원소 간의 주기적 성질 비교 및 핵심 화학 개념 가이드 제공",
      "스크롤 없는 뷰포트 완결성: 불필요한 헤더/푸터 요소를 걷어내고 데이터 밀도에 집중한 에디토리얼 레이아웃",
      "경량 인터랙션: 원소 블록 호버/선택 시 상태 전환 피드백을 절제된 모션으로 구현"
    ],
    roles: ["UI/UX Design", "Front-end Development", "Information Architecture"],
    credits: ["asterstudio / QPI Project"],
    url: "https://qets.kro.kr",
    accent: "#3158A6",
    featured: true,
    editorialDetails: {
      narrativeSteps: [
        {
          title: "Macroscopic Context",
          desc: "족과 주기의 배열 관계를 한눈에 유지하여 주기적 성질의 규칙성을 시각적으로 잃지 않도록 70% 영역을 할당했습니다."
        },
        {
          title: "Microscopic Precision",
          desc: "선택된 원소의 화학적·물리적 파라미터를 30% 패널에 구조화된 데이터시트 형태로 명확히 표현했습니다."
        }
      ],
      designDecisions: [
        {
          title: "Asta Sans Typography System",
          desc: "원소 기호, 원자 번호, 물성 수치의 폰트 위계를 엄격히 나누어 복잡한 화학 데이터 사이에서 가독성을 확보했습니다."
        }
      ],
      technicalNotes: [
        "순수 클라이언트 사이드 고속 데이터 인덱싱",
        "반응형 뷰포트 스케일링을 통한 다양한 해상도 지원"
      ]
    }
  },
  {
    slug: "qpi-chat",
    index: "03",
    title: "QPI Chat",
    subtitle: "세상 모든 채팅, 안전하게.",
    year: "—",
    category: "Communication Interface",
    status: "Concept & Interface",
    summary: "신뢰와 명료성을 바탕으로 설계된 모바일 및 데스크톱 크로스 플랫폼 대화형 인터페이스",
    problem: "불필요한 장식과 복잡한 부가 기능으로 인해 메시지 전달과 대화의 본질이 흐려지는 기존 메신저의 피로감을 개선하고자 했습니다.",
    response: "군더더기 없는 미니멀한 레이아웃과 높은 가독성의 타이포그래피로 대화의 맥락에 온전히 집중할 수 있는 환경을 설계했습니다.",
    features: [
      "데스크톱 및 모바일 일관된 대화 화면 구성",
      "텍스트 중심의 정갈한 말풍선과 정보 계층",
      "직관적인 채널 및 메시지 상태 표시"
    ],
    roles: ["Interface Design", "Front-end Prototyping"],
    credits: ["QPI Project"],
    featured: false
  },
  {
    slug: "dasein",
    index: "04",
    title: "Dasein;",
    subtitle: "물음은 사유의 경건함이다.",
    year: "—",
    category: "Academic Search / Knowledge Interface",
    status: "Concept & Research",
    summary: "질문에서 출발하여 지식의 심층으로 연결되는 학술 탐색 인터페이스",
    problem: "단순 키워드 매칭 중심의 검색은 연구자와 학습자가 질문의 철학적·학술적 맥락을 발전시키는 데 한계가 있었습니다.",
    response: "질문(물음)의 의미 구조를 시각화하고 관련된 학술 텍스트의 맥락을 단계적으로 탐색할 수 있는 인터페이스를 제안했습니다.",
    features: [
      "질문 중심의 심플한 진입 인터페이스",
      "학술 지식 탐색을 돕는 에디토리얼 레이아웃",
      "사유의 흐름을 방해하지 않는 절제된 타이포그래피"
    ],
    roles: ["Concept & UI Design"],
    credits: ["asterstudio"],
    featured: false
  },
  {
    slug: "pdf-ds",
    index: "05",
    title: "PDF-DS",
    subtitle: "모니터 너머의 질감을 디자인하다.",
    year: "—",
    category: "Design System & Board Interface",
    status: "Visual Study",
    summary: "아날로그 종이의 질감과 디지털 입력 인터페이스의 규칙성을 통합한 디자인 시스템 실험",
    problem: "디지털 화면이 지나치게 평면적이거나 인위적인 효과에 치우쳐, 사용자가 문서 작업 시 느끼는 물리적 안정감이 부족했습니다.",
    response: "종이의 그리드 구조와 1px 헤어라인, 정밀한 레이아웃 규칙을 적용한 모바일 및 데스크톱 보드 인터페이스를 구축했습니다.",
    features: [
      "모바일 입력 폼 및 데스크톱 대시보드 컴포넌트 규격화",
      "종이와 잉크를 연상시키는 고대비 에디토리얼 톤앤매너"
    ],
    roles: ["Design System", "Visual Prototyping"],
    credits: ["asterstudio"],
    featured: false
  },
  {
    slug: "freeview",
    index: "06",
    title: "FreeView",
    subtitle: "프라이버시 중심 로컬 유틸리티",
    year: "—",
    category: "Desktop Utility / Privacy Tool",
    status: "Tool Development",
    summary: "개인정보 보호와 안전한 인터넷 접속을 보조하는 경량 로컬 프록시 유틸리티",
    problem: "네트워크 패킷 검열 및 DNS 감시 환경에서 사용자의 기본적인 탐색 프라이버시가 침해되는 문제가 발생했습니다.",
    response: "DNS 감시 방지 및 SNI 파편화 기법을 적용한 경량 로컬 프록시 구조로 사용자의 프라이버시를 보호하도록 지원했습니다.",
    features: [
      "DNS 암호화 질의 및 로컬 프록시 라우팅",
      "복잡한 설정 없이 원클릭으로 작동하는 미니멀 UI"
    ],
    roles: ["Utility Architecture", "UI Design"],
    credits: ["asterstudio"],
    featured: false
  },
  {
    slug: "reservation-system",
    index: "07",
    title: "통합 예약 시스템",
    subtitle: "예약 시스템이 필요한 곳 어디서든지.",
    year: "—",
    category: "Reservation Interface",
    status: "Service Interface",
    summary: "공간 및 시설 예약을 위한 직관적 타임테이블과 모바일 반응형 예약 인터페이스",
    problem: "서로 다른 공간이나 좌석을 예약할 때 복잡한 단계와 비직관적인 시간표 뷰로 인해 잦은 예약 충돌과 사용 불편이 있었습니다.",
    response: "시간 블록을 한눈에 파악하고 즉시 선택할 수 있는 타임테이블 인터랙션과 크로스 디바이스 예약 플로우를 설계했습니다.",
    features: [
      "실시간 좌석/공간 현황 매트릭스 뷰",
      "모바일 및 데스크톱 최적화 터치 친화형 예약 플로우"
    ],
    roles: ["UI/UX Design", "Front-end Development"],
    credits: ["asterstudio"],
    featured: false
  },
  {
    slug: "challenger-cup",
    index: "08",
    title: "Challenger Cup Volleyball",
    subtitle: "충남과학고 배구대회 승부 예측 플랫폼",
    year: "2025",
    category: "Sports Prediction & Management",
    status: "Operated Archive",
    summary: "교내 배구대회의 관심도를 높이고 경기 예측과 랭킹을 실시간으로 집계한 인터랙티브 플랫폼",
    problem: "교내 스포츠 행사 진행 시 경기 일정과 승패 결과가 단절되어 구성원들의 참여도와 몰입도가 떨어졌습니다.",
    response: "Google 계정 기반 로그인, 실시간 승부 예측, 라운드별 랭킹 산출 및 관리자 운영 대시보드를 구축해 전교생이 함께 즐기는 대회 경험을 만들었습니다.",
    features: [
      "경기별 승부 예측 및 라운드 마감 타이머",
      "실시간 TOP 5 랭킹 및 포인트 시스템",
      "관리자 경기 생성 및 예측 비율/결과 정산 대시보드",
      "Firebase Auth, Firestore, Hosting 기반의 안정적 실시간 운영"
    ],
    roles: ["Full-stack Development", "Operations"],
    credits: ["황석현"],
    featured: false
  },
  {
    slug: "campaign-web",
    index: "09",
    title: "제32대 학생회장 캠페인 웹",
    subtitle: "공약을 실제 화면으로 증명하는 캠페인 인터페이스",
    year: "2025",
    category: "Campaign Interface",
    status: "Campaign Archive",
    summary: "말로만 제시하는 공약이 아닌, 실제 구현된 화면과 서비스 프로토타입으로 신뢰를 전달한 캠페인 웹사이트",
    problem: "선거 공약이 추상적인 글에 머물러 학생들이 실현 가능성과 구체적 변화를 체감하기 어려웠습니다.",
    response: "Black & Off-white, Red 포인트의 정제된 시각 언어로 핵심 공약과 개발 중인 학교생활 플랫폼 화면을 직관적으로 증명했습니다.",
    features: [
      "공약별 핵심 가치와 실제 프로토타입 화면 연계",
      "모바일 친화적인 에디토리얼 레이아웃"
    ],
    roles: ["Campaign Planning", "Web Design & Development"],
    credits: ["황석현"],
    featured: false
  }
];
