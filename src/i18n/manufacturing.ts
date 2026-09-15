// Manufacturing page copy — /manufacturing, /ko/manufacturing.
//
// Lens names are Opsight's own (throughput, cycle-time efficiency,
// utilisation, ROI). "Run rate" and "capacity" are product names on the
// operator's employer's roadmap and must not appear here (2026-09-16).
// Carried over from the 2026 manufacturing.html per the copy inventory: the
// unsourced "$2 billion" market statistic dropped from the hero; the six
// "Insights, not dashboards" blocks, the industries, the three worked
// insights and the honesty statement kept word for word (the statement is
// the site-wide model); the ISO/IATF paragraph cut to one sentence with a
// link; the "48hrs" promise kept because the operator honours it. The worked
// insights are SYNTHETIC by construction and say so. Korean written by the
// agent on 2026-09-15; needs a native read.

export type MfgLocale = 'en' | 'ko';
export interface Block { title: string; body: string }
export interface Insight {
  lens: string;
  title: string;
  severity?: 'critical' | 'high';
  severityLabel?: string;
  confidence: string;
  causality: string;
  body: string;
  impactLabel: string;
  impact: string;
  actions: string[];
}
export interface Demo { label: string; href: string }
export interface ManufacturingCopy {
  title: string;
  description: string;
  hero: { eyebrow: string; title: string; lead: string; primary: string };
  tiles: { value: string; label: string }[];
  insights: { heading: string; lead: string; blocks: Block[] };
  industries: { heading: string; lead: string; blocks: Block[] };
  compliance: { body: string; link: string; href: string };
  honesty: { badge: string; title: string; body: string };
  examples: { heading: string; lead: string; items: Insight[] };
  demos: { heading: string; lead: string; items: Demo[]; more: string };
  contact: { heading: string; lead: string; button: string; mailto: string; sample: string };
}

const CONTACT = 'utku@opsightintel.com'; // becomes contact@ once the alias is confirmed

const DEMOS: Demo[] = [
  { label: 'Utilisation & losses', href: '/demodashboard/utilisation_dashboard.html' },
  { label: 'Cycle-time performance', href: '/demodashboard/ct_efficiency_dashboard.html' },
  { label: 'Throughput', href: '/demodashboard/throughput_dashboard.html' },
  { label: 'Supplier delivery (OTIF)', href: '/demodashboard/supplier_otif_dashboard.html' },
  { label: 'Scrap & rework rate', href: '/demodashboard/scrap_rework_dashboard.html' },
  { label: 'Downtime analysis', href: '/demodashboard/downtime_pareto_dashboard.html' },
];

const EXAMPLES_EN: Insight[] = [
  {
    lens: 'Throughput · Die casting', title: 'DCM-401 underperforms — elevated MTTR and poor MTBF',
    severity: 'high', severityLabel: 'Severity: High', confidence: 'Confidence: 85%', causality: 'Correlational',
    body: 'Cycle-time dashboards scored this die ~99%. The downtime lens found the truth: MTBF of 15 min and MTTR of 19 min drove a Red status — 516 stops caused 121 hours of downtime, capping utilization at 49%.',
    impactLabel: 'Impact', impact: '~12–15% of annual output, ≈$2,100–$2,520/yr at $0.50 margin/part',
    actions: ['Investigate tooling wear causing mid-shift abnormal cycles', 'Verify material consistency across lots', 'Design review for frequent stops'],
  },
  {
    lens: 'Utilisation · Injection molding', title: 'PRESS-201 output loss is downtime-dominated',
    severity: 'critical', severityLabel: 'Severity: Critical', confidence: 'Confidence: 85%', causality: 'Correlational',
    body: 'PRESS-201 reached only 28% of theoretical max output, with 99% of an 18,618-part loss attributed to downtime. OEE availability of 34% and MTBF of 11 min point to a systemic availability problem, not isolated events.',
    impactLabel: 'Target', impact: 'lift availability to 50% of theoretical max (12,943 parts) within 14 days',
    actions: ['Prioritize availability: analyze MTBF/MTTR patterns', 'Address recurring downtime events first'],
  },
  {
    lens: 'CT efficiency · Stamping', title: 'Master-data misalignment, not performance, drives anomalies',
    confidence: 'Confidence: 85%', causality: 'Correlational',
    body: 'Sub-second cycle times, judged to the hundredth of a second. A fleet "102.8% efficiency" masks tool-level gaps: STAMP-503\'s 118% comes from an approved CT (1.40s) slower than actual (1.19s) — a standards error, not an operational one.',
    impactLabel: 'Fix', impact: 'recalibrate approved CT to actual; re-baseline efficiency',
    actions: ['Recalibrate STAMP-503 approved CT to 1.19s', 'Audit STAMP-502 approved CT against actual', 'Re-baseline after correction'],
  },
];

export const manufacturing: Record<MfgLocale, ManufacturingCopy> = {
  en: {
    title: 'Manufacturing Intelligence — Opsight',
    description: 'Forensic insights for Tier 1 manufacturers — root cause, dollar impact and the fix — from data you already export. No IT project.',
    hero: {
      eyebrow: 'Opsight Manufacturing',
      title: 'Forensic insights with the dollar impact and the fix attached — not another dashboard.',
      lead: 'Built from data you already export. No IT project. Each finding tells you the cause, the cost, and what to do on Monday.',
      primary: 'Send one Excel file',
    },
    tiles: [
      { value: '48 hrs', label: 'First insights delivered' },
      { value: 'Zero', label: 'IT setup required' },
      { value: 'Tier 1', label: 'Cross-industry focus' },
      { value: 'Excel', label: 'Native input format' },
    ],
    insights: {
      heading: 'Insights, not dashboards',
      lead: 'A dashboard shows you a number. An insight tells you the cause, the cost, and the fix.',
      blocks: [
        { title: 'Root-cause forensics', body: 'We go past the headline metric to the real driver. A die can score ~99% on cycle time while the downtime lens finds the truth — frequent stops, not slow cycles, are eating the shift.' },
        { title: 'Quantified dollar impact', body: 'Every finding carries an expected loss or gain in your window — "12–15% of annual output, $2,100–$2,520 at $0.50 margin/part" — so priorities are obvious.' },
        { title: 'Prioritized actions', body: 'Each insight ships with ranked actions — impact × confidence ÷ effort — tagged quick-win, procedural, or capex, so the next step is never ambiguous.' },
        { title: 'Causal honesty', body: 'Every insight states whether it is causal or correlational and lists the disconfirming evidence we checked. No confident hand-waving — judgments you can trust or challenge.' },
        { title: 'Success criteria', body: 'Each finding defines what "fixed" looks like — "MTTR below 15 min and MTBF above 30 min for two consecutive weeks" — so you can verify the result, not just hope for it.' },
        { title: 'Four analysis lenses', body: 'Throughput, cycle-time efficiency, utilisation, and ROI — each reads sub-second cycle data most dashboards cannot ingest, and each emits the same structured insight.' },
      ],
    },
    industries: {
      heading: 'Industries we serve',
      lead: 'Tier 1 manufacturers — the analysis is the same, whatever you make.',
      blocks: [
        { title: 'Automotive', body: 'Tier 1 suppliers and OEMs — injection molding, stamping, machining, assembly. OEE, OTIF, and supplier performance reported up to the OEM.' },
        { title: 'Industrial & diversified', body: 'Asset utilization, downtime, and maintenance prediction from SCADA exports, historian dumps, and maintenance logs.' },
        { title: 'Food & beverage', body: 'OEE, waste, energy per unit, and batch consistency — with the traceability that food-safety reporting demands.' },
        { title: 'Consumer electronics & appliances', body: 'Cycle time, first-pass yield, and warranty-claim reduction from MES exports, inspection logs, and test results.' },
      ],
    },
    compliance: { body: 'The same analyses structure your operational data for ISO 27001 and IATF 16949 evidence. Need AI governance controls for your engineering team?', link: 'OpSentry provides them.', href: '/opsentry' },
    honesty: {
      badge: 'Synthetic',
      title: 'These are not client results.',
      body: 'The equipment below (DCM-401, PRESS-201, STAMP-503) is fictitious, and the production data is generated — 14 days of shot-level output with a known fault written into each machine. What is real is the reasoning: the analysis, the quantified impact and the ranked actions are exactly what the engine produces, unedited. We can rerun it in front of you.',
    },
    examples: { heading: 'Insight examples', lead: 'Unedited engine output, regenerated in two clicks — run on our synthetic demo dataset by the same pipeline that would run on yours.', items: EXAMPLES_EN },
    demos: { heading: 'Interactive demos', lead: 'Explore the underlying analyses, running on the same synthetic demo dataset.', items: DEMOS, more: 'Additional analyses available: energy per unit, shift handover, OEM order fulfillment.' },
    contact: {
      heading: 'See your data come alive',
      lead: 'Send us one Excel file. We run a free pilot analysis and send you the insights. Zero risk, zero cost.',
      button: 'Send one Excel file',
      mailto: `mailto:${CONTACT}?subject=Pilot%20analysis`,
      sample: 'The first conversation starts with a pilot insight report from your data — no commitment required.',
    },
  },
  ko: {
    title: '제조 인텔리전스 — Opsight',
    description: 'Tier 1 제조사를 위한 포렌식 인사이트 — 원인, 금액 영향, 해결책 — 이미 내보내고 있는 데이터로. IT 프로젝트 없이.',
    hero: {
      eyebrow: 'Opsight 제조',
      title: '금액 영향과 해결책이 붙어 있는 포렌식 인사이트 — 또 하나의 대시보드가 아닙니다.',
      lead: '이미 내보내고 있는 데이터로 만듭니다. IT 프로젝트가 필요 없습니다. 모든 발견은 원인, 비용, 그리고 월요일에 할 일을 말해줍니다.',
      primary: '엑셀 파일 하나 보내기',
    },
    tiles: [
      { value: '48시간', label: '첫 인사이트 전달' },
      { value: '없음', label: '필요한 IT 설정' },
      { value: 'Tier 1', label: '업종 불문' },
      { value: 'Excel', label: '기본 입력 형식' },
    ],
    insights: {
      heading: '대시보드가 아니라 인사이트',
      lead: '대시보드는 숫자를 보여줍니다. 인사이트는 원인, 비용, 해결책을 말해줍니다.',
      blocks: [
        { title: '근본 원인 포렌식', body: '헤드라인 지표를 지나 실제 원인까지 갑니다. 사이클 타임에서 99%를 받은 금형이라도, 다운타임 렌즈는 진실을 찾아냅니다 — 느린 사이클이 아니라 잦은 정지가 교대를 잡아먹고 있습니다.' },
        { title: '정량화된 금액 영향', body: '모든 발견에는 기간 내 예상 손실 또는 이익이 붙습니다 — "연간 생산량의 12–15%, 부품당 $0.50 마진 기준 $2,100–$2,520" — 우선순위가 분명해집니다.' },
        { title: '우선순위가 매겨진 조치', body: '각 인사이트에는 순위가 매겨진 조치가 따릅니다 — 영향 × 신뢰도 ÷ 노력 — 즉시 개선, 절차, 설비투자로 분류되어 다음 단계가 모호하지 않습니다.' },
        { title: '인과관계의 정직성', body: '모든 인사이트는 인과인지 상관인지 명시하고, 검토한 반증 근거를 나열합니다. 자신감 있는 얼버무림은 없습니다 — 신뢰하거나 반박할 수 있는 판단입니다.' },
        { title: '성공 기준', body: '각 발견은 "해결됨"의 모습을 정의합니다 — "2주 연속 MTTR 15분 미만, MTBF 30분 초과" — 결과를 바라는 게 아니라 검증할 수 있습니다.' },
        { title: '네 가지 분석 렌즈', body: '처리량, 사이클 타임 효율, 설비 활용도, ROI — 각각 대부분의 대시보드가 다루지 못하는 1초 미만 사이클 데이터를 읽고, 같은 구조의 인사이트를 냅니다.' },
      ],
    },
    industries: {
      heading: '대상 산업',
      lead: 'Tier 1 제조사 — 무엇을 만들든 분석은 같습니다.',
      blocks: [
        { title: '자동차', body: 'Tier 1 협력사와 OEM — 사출, 프레스, 가공, 조립. OEE, OTIF, 협력사 성과를 OEM 보고 수준으로.' },
        { title: '산업·복합', body: 'SCADA 내보내기, 히스토리안 덤프, 정비 기록으로 설비 가동률, 다운타임, 정비 예측.' },
        { title: '식음료', body: 'OEE, 폐기, 단위당 에너지, 배치 일관성 — 식품안전 보고가 요구하는 추적성과 함께.' },
        { title: '가전·전자', body: 'MES 내보내기, 검사 기록, 시험 결과로 사이클 타임, 초도 수율, 보증 클레임 감소.' },
      ],
    },
    compliance: { body: '같은 분석이 운영 데이터를 ISO 27001, IATF 16949 증빙 형태로 구조화합니다. 엔지니어링 팀의 AI 거버넌스 통제가 필요하신가요?', link: 'OpSentry가 제공합니다.', href: '/opsentry' },
    honesty: {
      badge: '합성 데이터',
      title: '고객 결과가 아닙니다.',
      body: '아래 설비(DCM-401, PRESS-201, STAMP-503)는 가상이며, 생산 데이터는 생성된 것입니다 — 설비마다 알려진 결함을 심어 둔 14일치 샷 단위 출력. 실제인 것은 추론입니다: 분석, 정량화된 영향, 순위가 매겨진 조치는 엔진이 만든 그대로, 편집하지 않았습니다. 눈앞에서 다시 실행해 드릴 수 있습니다.',
    },
    examples: { heading: '인사이트 예시', lead: '편집하지 않은 엔진 출력, 두 번의 클릭으로 재생성 — 귀사 데이터에 돌아갈 같은 파이프라인을 합성 데모 데이터셋에 돌린 결과입니다.', items: EXAMPLES_EN },
    demos: { heading: '인터랙티브 데모', lead: '같은 합성 데모 데이터셋에서 돌아가는 기반 분석을 살펴보세요.', items: DEMOS, more: '추가 분석 가능: 단위당 에너지, 교대 인수인계, OEM 주문 이행.' },
    contact: {
      heading: '귀사 데이터가 살아나는 것을 보세요',
      lead: '엑셀 파일 하나만 보내주세요. 무료 파일럿 분석을 실행해 인사이트를 보내드립니다. 리스크도, 비용도 없습니다.',
      button: '엑셀 파일 하나 보내기',
      mailto: `mailto:${CONTACT}?subject=%ED%8C%8C%EC%9D%BC%EB%9F%BF%20%EB%B6%84%EC%84%9D`,
      sample: '첫 상담은 귀사 데이터로 만든 파일럿 인사이트 보고서로 시작합니다 — 별도 약정 없이.',
    },
  },
};
