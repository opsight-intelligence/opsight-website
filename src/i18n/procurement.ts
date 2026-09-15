// Procurement page copy — /procurement, /ko/procurement.
//
// Carried over from the 2026 procurement.html per the copy inventory: the
// hero and "The Problem" kept word for word, the six Live blocks kept, the
// maritime "in development" roadmap and the vessel/Copernicus disclaimer
// dropped (the SAR thesis is recorded as unsellable), "sellable footprint"
// replaced by plain language, and the call to action changed from a named
// 사업자등록번호 record to the aggregate sample until the licence (Q5) and
// naming (Q1/Q6) questions are answered. All three headline figures are read
// live from procurement-stats.json and dated. Korean written by the agent
// on 2026-09-15; needs a native read.

export type ProcLocale = 'en' | 'ko';
export interface Block { title: string; body: string }
export interface ProcurementCopy {
  title: string;
  description: string;
  hero: { eyebrow: string; title: string; lead: string; live: string; primary: string };
  numbers: { notices: string; awards: string; bids: string };
  problem: { heading: string; body: string };
  collect: { heading: string; lead: string; liveBadge: string; blocks: Block[] };
  coverage: { heading: string; blocks: Block[] };
  how: { heading: string; body: string; platform: string };
  figures: { heading: string; lead: string; rateTitle: string; rateNote: string; dailyTitle: string; noticesLabel: string; awardsLabel: string; tableLabel: string; awardsCol: string; medianCol: string; rangeCol: string; dateCol: string };
  contact: { heading: string; lead: string; button: string; mailto: string; disclaimer: string };
}

const CONTACT = 'utku@opsightintel.com'; // becomes contact@ once the alias is confirmed

export const procurement: Record<ProcLocale, ProcurementCopy> = {
  en: {
    title: 'Procurement Intelligence — Opsight',
    description:
      'Korean public procurement, collected nightly and made comparable: every tender, every bidder, every winning price — against the published estimate.',
    hero: {
      eyebrow: 'Opsight Procurement',
      title: 'Korean public procurement, collected nightly and made comparable.',
      lead: 'Every tender, every bidder, every winning price — against the published estimate.',
      live: 'Collected every night from public sources. Every figure on this page comes from the live store, dated.',
      primary: 'See the aggregate sample',
    },
    numbers: { notices: 'Tender notices collected', awards: 'Awards with winning price and rate', bids: 'Individual bids, named per company' },
    problem: {
      heading: 'The problem',
      body: 'Korean public tenders are published, awarded and closed in the open — and then effectively forgotten. A company can bid thirty times without winning once and never learn what the winning price was, how many rivals it was up against, or how far off its own number sat. The record exists; nobody assembles it.',
    },
    collect: {
      heading: 'What we collect today',
      lead: 'Every figure below comes from data already in the store, collected nightly from public sources.',
      liveBadge: 'Live',
      blocks: [
        { title: 'Every tender, every category', body: 'Public bid notices across 공사, 용역, 물품, 외자 and 기타 — the demanding agency, the budget, the deadline and how the contract is let.' },
        { title: 'Who won, at what price', body: 'Awards with the winning company, the amount, and the 낙찰률 — the winning bid as a percentage of the estimate. The price benchmark, published rather than inferred.' },
        { title: 'The full bidding field', body: 'Individual bids naming every company that competed, not just the winner — with its 투찰률 and rank. A firm that bids often and rarely wins is visible only here.' },
        { title: 'The estimate behind the rate', body: '기초금액 — the figure a tender is scored against — with the 예비가격 randomisation band. Without it a win rate is a percentage; with it, it is a number you can price against.' },
        { title: 'Competitive position', body: 'How contested a tender was, how a bid compared to the one that won, and which agencies concentrate their awards. Keyed on 사업자등록번호, so a company is tracked through renames.' },
        { title: 'Data quality, stated', body: 'Implausible figures are flagged, never silently dropped or rewritten — the raw public value is preserved and the reason for exclusion travels with it.' },
      ],
    },
    coverage: {
      heading: 'Coverage',
      blocks: [
        { title: 'Every public buyer', body: 'Central government, local authorities, schools and public bodies — whoever published the tender, named and coded, so award concentration is visible per agency.' },
        { title: 'Nationwide, not sampled', body: 'The whole country, every category, collected nightly — not a sector slice. A firm\'s record is complete rather than whatever happened to be sampled.' },
        { title: '용역 bidder detail', body: 'Service tenders are enriched with the full bidding field. 공사 is deliberately excluded: with thousands of bidders against a randomised estimate, win-rate analysis there is close to worthless.' },
      ],
    },
    figures: {
      heading: 'The shape of the market',
      lead: 'Two aggregates, refreshed nightly from the store. No firm, agency or lot is named.',
      rateTitle: 'Clearing rate by category',
      rateNote: 'The middle half of winning bids (p25–p75) as a percentage of the estimate, median marked. Categories with fewer than 50 rated awards are left out.',
      dailyTitle: 'Last 30 days',
      noticesLabel: 'Notices posted',
      awardsLabel: 'Awards opened',
      tableLabel: 'Show as a table',
      awardsCol: 'Awards', medianCol: 'Median', rangeCol: 'p25–p75', dateCol: 'Date',
    },
    how: {
      heading: 'How it is built',
      body: 'A deterministic pipeline: collect the public procurement record nightly, normalize it, key it per lot and per company, flag implausible figures, and report — every output traceable to the published record it came from. Built on public and free-tier sources.',
      platform: 'Part of the Opsight Intelligence Platform: every domain emits the same standardized intelligence object, so signals stay comparable and auditable across markets.',
    },
    contact: {
      heading: 'Early access',
      lead: 'Price-benchmark and bid-history analysis for Korean public procurement, aggregate by category, agency and size band. Ask for the sample and we will send the figures for the segment you name.',
      button: 'Request the aggregate sample',
      mailto: `mailto:${CONTACT}?subject=Procurement%20sample`,
      disclaimer: 'Factual measurements derived from public data. Not investment advice.',
    },
  },
  ko: {
    title: '공공조달 인텔리전스 — Opsight',
    description: '한국 공공조달을 매일 밤 수집하여 비교 가능하게: 모든 공고, 모든 입찰자, 모든 낙찰가를 기초금액과 비교합니다.',
    hero: {
      eyebrow: 'Opsight 공공조달',
      title: '한국 공공조달, 매일 밤 수집하여 비교 가능하게.',
      lead: '모든 공고, 모든 입찰자, 모든 낙찰가 — 공개된 기초금액 기준으로.',
      live: '매일 밤 공개 데이터에서 수집합니다. 이 페이지의 모든 수치는 실제 저장소에서 가져오며, 작성일이 함께 표시됩니다.',
      primary: '집계 샘플 보기',
    },
    numbers: { notices: '수집된 입찰공고', awards: '낙찰가·낙찰률이 확인된 낙찰', bids: '업체별로 기록된 개별 입찰' },
    problem: {
      heading: '문제',
      body: '한국 공공입찰은 공개적으로 공고되고, 낙찰되고, 마감됩니다 — 그리고 사실상 잊힙니다. 한 업체가 서른 번 입찰하고 한 번도 낙찰받지 못해도, 낙찰가가 얼마였는지, 경쟁자가 몇이었는지, 자기 금액이 얼마나 벗어났는지 알 길이 없습니다. 기록은 존재하지만, 아무도 모으지 않습니다.',
    },
    collect: {
      heading: '지금 수집하는 것',
      lead: '아래 모든 수치는 이미 저장소에 있는 데이터에서 나오며, 매일 밤 공개 소스에서 수집합니다.',
      liveBadge: '실시간',
      blocks: [
        { title: '모든 공고, 모든 업종', body: '공사, 용역, 물품, 외자, 기타 전 업종의 입찰공고 — 수요기관, 예산, 마감일, 계약 방식.' },
        { title: '누가, 얼마에 낙찰받았나', body: '낙찰업체, 금액, 그리고 낙찰률 — 기초금액 대비 낙찰가 비율. 추정이 아니라 공개된 가격 기준.' },
        { title: '전체 입찰 참여 현황', body: '낙찰자뿐 아니라 경쟁한 모든 업체를 투찰률과 순위와 함께 기록합니다. 자주 입찰하지만 거의 낙찰받지 못하는 업체는 여기서만 보입니다.' },
        { title: '낙찰률의 기준, 기초금액', body: '기초금액 — 입찰이 평가되는 기준 금액 — 과 예비가격 범위. 이것이 없으면 낙찰률은 그저 백분율이고, 있으면 가격을 맞춰볼 수 있는 숫자가 됩니다.' },
        { title: '경쟁 위치', body: '경쟁 강도, 낙찰가 대비 입찰가, 발주가 집중되는 기관. 사업자등록번호를 기준으로 하므로 상호가 바뀌어도 추적됩니다.' },
        { title: '데이터 품질, 명시', body: '비정상 수치는 표시하되 조용히 버리거나 고쳐 쓰지 않습니다 — 원본 공개값을 보존하고 제외 사유를 함께 남깁니다.' },
      ],
    },
    coverage: {
      heading: '커버리지',
      blocks: [
        { title: '모든 공공 발주처', body: '중앙정부, 지자체, 학교, 공공기관 — 공고를 낸 곳이 어디든 기관명과 코드로 기록하여, 기관별 낙찰 집중도가 보입니다.' },
        { title: '전국, 표본 아님', body: '전국, 전 업종, 매일 밤 — 일부 업종 조각이 아닙니다. 업체의 기록은 표본이 아니라 완전한 기록입니다.' },
        { title: '용역 입찰자 상세', body: '용역 입찰은 전체 입찰 참여 현황으로 보강합니다. 공사는 의도적으로 제외합니다: 무작위 예비가격에 수천 개 업체가 몰리는 곳에서 낙찰률 분석은 거의 의미가 없습니다.' },
      ],
    },
    figures: {
      heading: '시장의 형태',
      lead: '매일 밤 저장소에서 갱신되는 두 가지 집계. 업체, 기관, 건은 어디에도 나오지 않습니다.',
      rateTitle: '업종별 낙찰률',
      rateNote: '낙찰가의 중간 절반(p25–p75)을 기초금액 대비 비율로, 중앙값 표시. 평가된 낙찰이 50건 미만인 업종은 제외.',
      dailyTitle: '최근 30일',
      noticesLabel: '게시된 공고',
      awardsLabel: '개찰된 낙찰',
      tableLabel: '표로 보기',
      awardsCol: '낙찰', medianCol: '중앙값', rangeCol: 'p25–p75', dateCol: '날짜',
    },
    how: {
      heading: '어떻게 만드는가',
      body: '결정론적 파이프라인: 매일 밤 공공조달 기록을 수집하고, 정규화하고, 건별·업체별로 키를 부여하고, 비정상 수치를 표시하고, 보고합니다 — 모든 출력은 그것이 나온 공개 기록으로 추적됩니다. 공개 및 무료 데이터 소스로 구축했습니다.',
      platform: 'Opsight 인텔리전스 플랫폼의 일부입니다: 모든 도메인이 같은 표준 인텔리전스 객체를 발행하므로, 시장이 달라도 신호를 비교하고 감사할 수 있습니다.',
    },
    contact: {
      heading: '얼리 액세스',
      lead: '한국 공공조달의 가격 벤치마크와 입찰 이력 분석 — 업종, 기관, 규모 구간별 집계. 샘플을 요청하시면 지정하신 구간의 수치를 보내드립니다.',
      button: '집계 샘플 요청',
      mailto: `mailto:${CONTACT}?subject=%EA%B3%B5%EA%B3%B5%EC%A1%B0%EB%8B%AC%20%EC%83%98%ED%94%8C`,
      disclaimer: '공개 데이터에서 도출한 사실 기반 측정치입니다. 투자 조언이 아닙니다.',
    },
  },
};
