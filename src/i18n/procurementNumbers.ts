// Copy for /procurement/numbers — the public "Korean public procurement in
// numbers" page. Every figure on it is read at load from
// procurement-numbers.json (maritime, nightly, governed views); the copy here
// only names and explains. Public bodies are named; no firm is, anywhere.
export type NumLocale = 'en' | 'ko';
export interface NumbersCopy {
  title: string; description: string;
  hero: { eyebrow: string; title: string; lead: string };
  span: string;
  headline: { uncontested: string; uncontestedNote: string; awards: string; agencies: string };
  categories: { heading: string; lead: string; cat: string; awards: string; median: string; range: string; iqr: string; bidders: string; note: string };
  depth: { heading: string; lead: string; band: string; awards: string; bidders: string; solo: string };
  league: { heading: string; lead: string; most: string; least: string; agency: string; awards: string; solo: string; share: string; rate: string; floor: string };
  labels: Record<string, string>;
  calculator: { text: string; link: string };
  method: string; unavailable: string;
}
export const procurementNumbers: Record<NumLocale, NumbersCopy> = {
  en: {
    title: 'Korean public procurement in numbers — Opsight',
    description: 'What Korean public tenders actually clear at, how contested they are, and which agencies keep awarding without competition. From 나라장터 open data, refreshed nightly. No firm is named.',
    hero: { eyebrow: 'Public procurement · live', title: 'Korean public procurement in numbers', lead: 'Every figure below is computed nightly from 조달청 나라장터 open data through one governed definition per metric. Public bodies are named; no firm is.' },
    span: 'Awards from {from} to {to}: {awards}. Updated {as_of}.',
    headline: { uncontested: 'of awards had a single bidder', uncontestedNote: 'Tenders where the published participant count is exactly one — won by showing up, usually at close to the full estimate.', awards: 'awards with a usable clearing rate', agencies: 'agencies in the league tables' },
    categories: { heading: 'What tenders clear at, by category', lead: 'The 낙찰률 is the winning price as a percentage of the published 기초금액. The middle half (p25–p75) is the honest number; the IQR is its width in points.', cat: 'Category', awards: 'Awards', median: 'Median', range: 'Middle half', iqr: 'IQR (points)', bidders: 'Median bidders', note: '공사 is pinned near the 적격심사 floor — the spread is a fraction of a point. 용역 and 물품 vary by 5–15 points, which is where a should-price is worth computing.' },
    depth: { heading: 'How contested tenders are, by size', lead: 'Median bidders per tender and the share won unopposed, per category and size band of the award amount.', band: 'Size band (KRW)', awards: 'Awards', bidders: 'Median bidders', solo: 'Single-bidder share' },
    league: { heading: 'Agencies that award without competition — and those that never do', lead: 'Demanding agencies ranked by the share of their awards that had one participant. Agencies are public bodies; naming them is public information, not a claim about any firm.', most: 'Most uncontested', least: 'Most contested', agency: 'Demanding agency', awards: 'Awards', solo: 'Single-bidder', share: 'Share', rate: 'Solo median rate', floor: 'Agencies with at least {n} awards with a published participant count. 각 수요기관 (framework contracts) and 조달청 as buyer are excluded — single-bidder by construction.' },
    labels: { servc: '용역 — services', cnstwk: '공사 — construction', thng: '물품 — goods' },
    calculator: { text: 'Have a tender in front of you?', link: 'Compute what comparable tenders cleared at →' },
    method: 'Method: awards the collector flagged as implausible and rates that are missing or non-positive are excluded before anything is counted. Size bands at KRW 10M / 50M / 200M / 1B on the award amount. Percentiles over the awards in each group; no smoothing, no model. Definitions: analytics.award_rate, competition_depth, uncontested_by_agency — one SQL view each, shared with the calculator and the customer files. A measurement of past awards, not advice.',
    unavailable: 'The figures are not reachable right now.',
  },
  ko: {
    title: '숫자로 보는 한국 공공조달 — Opsight',
    description: '한국 공공입찰의 실제 낙찰률, 경쟁 강도, 그리고 경쟁 없이 낙찰하는 수요기관. 나라장터 공개데이터로 매일 갱신. 개별 업체는 표시하지 않습니다.',
    hero: { eyebrow: '공공조달 · 실시간', title: '숫자로 보는 한국 공공조달', lead: '아래 모든 수치는 조달청 나라장터 공개데이터에서 지표별 하나의 정의로 매일 산출됩니다. 수요기관은 표시하되 개별 업체는 표시하지 않습니다.' },
    span: '{from} ~ {to} 낙찰 {awards}건 기준. {as_of} 갱신.',
    headline: { uncontested: '단독 입찰 낙찰 비율', uncontestedNote: '공개된 투찰업체 수가 정확히 1개인 건 — 참여만으로 낙찰되며 대개 기초금액에 가깝게 낙찰됩니다.', awards: '낙찰률이 유효한 낙찰 건수', agencies: '순위표에 오른 기관 수' },
    categories: { heading: '공종별 낙찰률', lead: '낙찰률은 조달청이 공개한 기초금액 대비 낙찰가의 비율입니다. 사분위 범위(p25~p75)가 실질적인 수치이며, IQR은 그 폭(%p)입니다.', cat: '공종', awards: '낙찰 건수', median: '중앙값', range: '사분위 범위', iqr: 'IQR (%p)', bidders: '투찰업체 수 중앙값', note: '공사는 적격심사 낙찰하한율에 묶여 편차가 1%p 미만입니다. 용역·물품은 5~15%p로 편차가 커서, 참고 낙찰가를 산출할 실익이 있는 쪽입니다.' },
    depth: { heading: '규모별 경쟁 강도', lead: '공종·낙찰금액 구간별 투찰업체 수 중앙값과 단독 입찰 낙찰 비율.', band: '규모 구간 (원)', awards: '낙찰 건수', bidders: '투찰업체 수 중앙값', solo: '단독 입찰 비율' },
    league: { heading: '경쟁 없이 낙찰하는 기관, 항상 경쟁하는 기관', lead: '수요기관을 단독 입찰 낙찰 비율로 정렬했습니다. 기관은 공공기관이므로 기관명 표시는 공개 정보이며, 어떤 업체에 대한 주장도 아닙니다.', most: '단독 입찰 비율 상위', least: '경쟁 입찰 비율 상위', agency: '수요기관', awards: '낙찰 건수', solo: '단독 입찰', share: '비율', rate: '단독 낙찰률 중앙값', floor: '투찰업체 수가 공개된 낙찰이 {n}건 이상인 기관. 각 수요기관(단가계약)과 수요기관으로서의 조달청은 구조상 단독 입찰이므로 제외했습니다.' },
    labels: { servc: '용역', cnstwk: '공사', thng: '물품' },
    calculator: { text: '검토 중인 공고가 있으십니까?', link: '비교 가능한 낙찰 결과 계산하기 →' },
    method: '산출 방법: 수집 과정에서 비정상으로 표시된 건과 낙찰률이 없거나 0 이하인 건은 집계 전에 제외합니다. 규모 구간은 낙찰금액 기준 1천만/5천만/2억/10억 원. 각 집단 내 백분위수이며 보정이나 모델은 없습니다. 정의: analytics.award_rate, competition_depth, uncontested_by_agency — 지표별 하나의 SQL 뷰를 계산기와 고객용 파일이 함께 사용합니다. 과거 낙찰의 측정값이며 조언이 아닙니다.',
    unavailable: '수치를 불러올 수 없습니다.',
  },
};
