// Home page copy, one object per locale. Every sentence here was carried over
// from the 2026 site or written against strategy/product/website-copy-inventory.md
// in opsight-company. Numbers are NOT in this file: they come from stats.json
// and procurement-stats.json at runtime, dated, or carry a Synthetic label.
//
// Korean: written by the agent on 2026-09-15; needs a native read before the
// professional launch (rule 5 of the UX doc). Mark corrections here, not in
// the templates.

import type { Locale } from './common';
export type HomeLocale = Extract<Locale, 'en' | 'ko'>;

export interface HomeCopy {
  title: string;
  description: string;
  hero: { eyebrow: string; title: string; lead: string; lifecycle: string; primary: string; primaryHref: string; secondary: string; secondaryHref: string };
  numbers: { heading: string; lead: string; entities: string; clusters: string; notices: string; awards: string };
  lines: { heading: string; lead: string; fraud: LineCard; procurement: LineCard; manufacturing: LineCard; opsentry: LineCard; platform: LineCard };
  honesty: { badge: string; title: string; body: string };
  contact: { heading: string; lead: string; emailLabel: string; lineLabel: string; linePlaceholder: string; hint: string; button: string; mailto: string };
}

export interface LineCard { badge: string; title: string; body: string; action: string; href: string }

const CONTACT = 'utku@opsightintel.com'; // becomes contact@ once the alias is confirmed (inventory X2)

export const home: Record<HomeLocale, HomeCopy> = {
  en: {
    title: 'Opsight Intelligence',
    description:
      'An intelligence platform turning raw signals into intelligence products: fraud ecosystems on Telegram, Korean public procurement, manufacturing forensics, and AI governance.',
    hero: {
      eyebrow: 'Intelligence platform',
      title: 'Raw signals in. Intelligence products out.',
      lead:
        'Every Opsight domain runs the same lifecycle — collect signals, normalize, detect, score, and publish a standardized intelligence product. Different data, one common language.',
      lifecycle: 'SIGNALS → OBSERVATIONS → FINDINGS → ASSESSMENTS → INTELLIGENCE',
      primary: 'Request a sample',
      primaryHref: '#contact',
      secondary: 'How it is built',
      secondaryHref: '/method',
    },
    numbers: {
      heading: 'By the numbers',
      lead: 'Collected every night. Every figure here comes from the live store, dated — not from a brochure.',
      entities: 'Entities tracked',
      clusters: 'Clusters mapped',
      notices: 'Tender notices collected',
      awards: 'Awards with winning price',
    },
    lines: {
      heading: 'Three intelligence lines, one platform above them',
      lead: 'Specialized engines that publish to the same bus, so signals stay comparable and auditable across markets.',
      fraud: {
        badge: 'Fraud',
        title: 'Fraud Intelligence',
        body: 'Telegram and OSINT monitoring of criminal and grey-market ecosystems — financial crime, illegal betting, drug trafficking and laundering — delivered as feeds, alerts, evidence-grade reports and a nightly watchlist of your own identifiers.',
        action: 'Request a sample report →',
        href: '/fraud',
      },
      procurement: {
        badge: 'Procurement',
        title: 'Procurement Intelligence',
        body: 'Every Korean public tender, bidder and winning price — against the published estimate. Collected nightly, nationwide, not sampled — and read for integrity: related bidders, and closed companies still bidding.',
        action: 'See what we collect →',
        href: '/procurement',
      },
      manufacturing: {
        badge: 'Manufacturing',
        title: 'Manufacturing Intelligence',
        body: 'Forensic insights for Tier 1 manufacturers — root cause, dollar impact and the fix — from data you already export. No IT project.',
        action: 'Send one Excel file →',
        href: '/manufacturing',
      },
      opsentry: {
        badge: 'OpSentry',
        title: 'AI Governance',
        body: 'Live today as OpSentry — deterministic security guardrails for AI coding assistants, with compliance mapping for ISO 27001, the EU AI Act and the Korean AI Basic Act.',
        action: 'Install free →',
        href: '/opsentry',
      },
      platform: {
        badge: 'Platform',
        title: 'The layer above the lines',
        body: 'One entity per firm, account or wallet across every line, screened nightly against the sanctions lists, enriched from the corporate registry, and a consortium exchange where institutions corroborate a mule signal by hash and band — never a customer.',
        action: 'See the four layers →',
        href: '/platform',
      },
    },
    honesty: {
      badge: 'What is real',
      title: 'Live where it says live, synthetic where it says synthetic.',
      body: 'Figures marked Live are read from the store each night and carry the date they were written. Demos marked Synthetic run on generated data with known faults written in — the reasoning is what the engine produces, unedited. Nothing on this site is a client result.',
    },
    contact: {
      heading: 'Start with a sample',
      lead: 'The first conversation starts with a sample intelligence report for your market — no commitment required. One email, one line about what you want to see.',
      emailLabel: 'Work email',
      lineLabel: 'What would you like to see?',
      linePlaceholder: 'e.g. a sample Early Warning report for the Korean market',
      hint: 'That is all we ask for. No account, no call unless you want one.',
      button: 'Request the sample',
      mailto: `mailto:${CONTACT}?subject=Sample%20request`,
    },
  },
  ko: {
    title: 'Opsight Intelligence',
    description:
      '원시 신호를 인텔리전스 제품으로 바꾸는 플랫폼: 텔레그램 사기 생태계, 한국 공공조달, 제조 포렌식, AI 거버넌스.',
    hero: {
      eyebrow: '인텔리전스 플랫폼',
      title: '원시 신호를 넣으면, 인텔리전스 제품이 나옵니다.',
      lead:
        'Opsight의 모든 도메인은 같은 생명주기를 따릅니다 — 신호 수집, 정규화, 탐지, 점수화, 그리고 표준화된 인텔리전스 제품으로 발행. 데이터는 달라도 언어는 하나입니다.',
      lifecycle: '신호 → 관측 → 발견 → 평가 → 인텔리전스',
      primary: '샘플 요청하기',
      primaryHref: '#contact',
      secondary: '어떻게 만드는지 보기',
      secondaryHref: '/ko/method',
    },
    numbers: {
      heading: '주요 수치',
      lead: '매일 밤 수집합니다. 이 페이지의 모든 수치는 실제 저장소에서 가져오며, 작성일이 함께 표시됩니다.',
      entities: '추적 중인 엔티티',
      clusters: '매핑된 클러스터',
      notices: '수집된 입찰공고',
      awards: '낙찰가가 확인된 낙찰',
    },
    lines: {
      heading: '세 개의 인텔리전스 라인, 하나의 플랫폼',
      lead: '각 엔진은 같은 버스에 발행하므로, 시장이 달라도 신호를 비교하고 감사할 수 있습니다.',
      fraud: {
        badge: '사기',
        title: '사기 인텔리전스',
        body: '텔레그램과 OSINT로 범죄·회색시장 생태계를 모니터링합니다 — 금융범죄, 불법도박, 마약, 자금세탁 — 피드, 알림, 증거 수준 보고서, 그리고 고객이 지정한 식별자를 매일 밤 확인하는 워치리스트로 전달합니다.',
        action: '샘플 보고서 요청 →',
        href: '/ko/fraud',
      },
      procurement: {
        badge: '공공조달',
        title: '공공조달 인텔리전스',
        body: '한국 공공입찰의 모든 공고, 입찰자, 낙찰가를 기초금액과 비교합니다. 매일 밤 전국 단위로 수집하며, 표본이 아닙니다. 관계 업체의 반복 동반 투찰, 폐업 후 입찰 같은 청렴성 점검도 함께 실행합니다.',
        action: '수집 항목 보기 →',
        href: '/ko/procurement',
      },
      manufacturing: {
        badge: '제조',
        title: '제조 인텔리전스',
        body: 'Tier 1 제조사를 위한 포렌식 인사이트 — 원인, 금액 영향, 해결책 — 이미 내보내고 있는 데이터로. IT 프로젝트가 필요 없습니다.',
        action: '엑셀 파일 하나 보내기 →',
        href: '/ko/manufacturing',
      },
      opsentry: {
        badge: 'OpSentry',
        title: 'AI 거버넌스',
        body: 'OpSentry로 지금 사용할 수 있습니다 — AI 코딩 어시스턴트를 위한 결정론적 보안 가드레일. ISO 27001, EU AI법, 한국 AI 기본법 대응 매핑 포함.',
        action: '무료 설치 →',
        href: '/ko/opsentry',
      },
      platform: {
        badge: '플랫폼',
        title: '라인 위의 계층',
        body: '모든 라인에 걸쳐 회사·계정·지갑마다 하나의 엔터티, 매일 밤 제재 명단 대조, 기업 등기 정보 보강, 그리고 기관들이 고객 정보 대신 해시와 구간으로 자금세탁 신호를 교차 확인하는 컨소시엄 교환.',
        action: '네 개의 계층 보기 →',
        href: '/ko/platform',
      },
    },
    honesty: {
      badge: '무엇이 실제인가',
      title: '실시간이라 표시된 곳은 실시간, 합성이라 표시된 곳은 합성입니다.',
      body: '실시간 표시가 있는 수치는 매일 밤 저장소에서 읽어오며 작성일을 함께 표시합니다. 합성 표시가 있는 데모는 결함을 심어 둔 생성 데이터로 실행되며, 그 추론은 엔진이 만든 그대로입니다. 이 사이트의 어떤 것도 고객 결과가 아닙니다.',
    },
    contact: {
      heading: '샘플로 시작하세요',
      lead: '첫 상담은 귀사 시장에 대한 샘플 인텔리전스 보고서로 시작합니다 — 별도 약정 없이. 이메일 하나, 보고 싶은 내용 한 줄이면 됩니다.',
      emailLabel: '업무용 이메일',
      lineLabel: '무엇을 보고 싶으신가요?',
      linePlaceholder: '예: 한국 시장의 조기경보 샘플 보고서',
      hint: '요청하는 정보는 이것뿐입니다. 계정도, 원치 않는 통화도 없습니다.',
      button: '샘플 요청하기',
      mailto: `mailto:${CONTACT}?subject=%EC%83%98%ED%94%8C%20%EC%9A%94%EC%B2%AD`,
    },
  },
};
