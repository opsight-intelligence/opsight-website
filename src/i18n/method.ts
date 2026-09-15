// Method page copy — /method, /ko/method. The credibility page: how every
// line collects, what an intelligence object carries, how severity and
// confidence are meant, what is live and what is synthetic. Written against
// opsight-company/architecture/ARCHITECTURE.md and the lawful-use notes;
// no client, no internal package name. Korean by the agent, needs a read.

export type MethodLocale = 'en' | 'ko';
export interface Block { title: string; body: string }
export interface MethodCopy {
  title: string; description: string;
  hero: { eyebrow: string; title: string; lead: string };
  lifecycle: { heading: string; lead: string; stages: Block[] };
  object: { heading: string; lead: string; fields: Block[] };
  severity: { heading: string; lead: string; rows: { level: 'critical' | 'high' | 'medium' | 'low'; label: string; body: string }[] };
  honesty: { heading: string; live: string; synthetic: string; pseudonymized: string };
  sources: { heading: string; blocks: Block[] };
  limits: { heading: string; items: string[] };
}

export const method: Record<MethodLocale, MethodCopy> = {
  en: {
    title: 'Method — Opsight Intelligence',
    description: 'How Opsight collects, scores and publishes intelligence: one lifecycle, one intelligence object, severity that means the same thing everywhere, and a plain rule for what is live and what is synthetic.',
    hero: {
      eyebrow: 'Method',
      title: 'Different data, one common language.',
      lead: 'Every Opsight line — fraud, procurement, manufacturing — runs the same lifecycle and publishes the same kind of object. This page says what that means, so a number or an alert from any line can be read the same way.',
    },
    lifecycle: {
      heading: 'The lifecycle',
      lead: 'Five stages, in the order a record travels. Every line implements all five; none skips one.',
      stages: [
        { title: 'Signals', body: 'Raw records from a source: a Telegram post, a public tender notice, a shot-level production log. Kept as collected, with the time and place they were collected.' },
        { title: 'Observations', body: 'Signals normalised into a common shape and keyed to an entity — a channel, a firm by its 사업자등록번호, a machine — so the same thing seen twice is the same thing.' },
        { title: 'Findings', body: 'Something a detector noticed: a new entity, an escalation, a network gone quiet, a losing streak, a cluster of stops. A finding names its evidence.' },
        { title: 'Assessments', body: 'Findings weighed together into a judgement about an entity, with a severity, a confidence, and the legal basis on which it may be shared.' },
        { title: 'Intelligence', body: 'Assessments and findings published to one bus, as one kind of object, from which feeds, alerts, reports and this site are all derived.' },
      ],
    },
    object: {
      heading: 'The intelligence object',
      lead: 'One record type carries everything a reader needs to judge it. These are its fields; nothing is published without them.',
      fields: [
        { title: 'Subject', body: 'What the record is about, with a stable id so the same subject across nights is the same subject.' },
        { title: 'Severity and confidence', body: 'How serious, and how well-evidenced — two separate numbers, never collapsed into one.' },
        { title: 'Evidence', body: 'Where it came from: source, reference, and when it was retrieved. An alert without evidence is not sent.' },
        { title: 'Legal basis', body: 'On what grounds the record may be held and shared — public record, published notice, contract — stated on the record, not assumed.' },
        { title: 'Observed and emitted', body: 'When the underlying thing was observed, and when it was published. Both are kept; a republish of the same observation does not become a new event.' },
      ],
    },
    severity: {
      heading: 'Severity means the same thing on every line',
      lead: 'The ladder is fixed. Lines differ in how high they can climb: fraud can reach Critical; a procurement record tops out at High, because a long losing streak is serious but is not a crime.',
      rows: [
        { level: 'critical', label: 'Critical', body: 'Direct indicators of serious criminal activity with corroborating evidence.' },
        { level: 'high', label: 'High', body: 'A strong pattern worth acting on: an escalation, a confirmed network link, a firm that bids often and never wins.' },
        { level: 'medium', label: 'Medium', body: 'A pattern worth watching; on its own it changes nothing.' },
        { level: 'low', label: 'Low', body: 'Context. Kept so the picture is complete, never alerted on.' },
      ],
    },
    honesty: {
      heading: 'What is live, what is synthetic',
      live: 'Figures marked Live are read from the store each night and carry the date they were written. There is no third state: a number is dated, or it is labelled.',
      synthetic: 'Demos marked Synthetic run on generated data with known faults written in. The reasoning is what the engine produces, unedited; the equipment and firms are fictitious.',
      pseudonymized: 'Where a demonstration uses real intelligence, identifiers are replaced with stable pseudonyms so the structure is real and no person, channel or firm is identifiable. Nothing on this site is a client result.',
    },
    sources: {
      heading: 'Sources',
      blocks: [
        { title: 'Public and free-tier only', body: 'Open Telegram channels, the 조달청 / 나라장터 open APIs, data a customer exports from its own systems. No purchased datasets, no scraping behind logins.' },
        { title: 'Collected nightly', body: 'Every line collects on a schedule and publishes what changed. Windows overlap on purpose so a record that arrives late is still caught.' },
        { title: 'Quality stated, not hidden', body: 'Implausible values are flagged and excluded from headline figures, never silently dropped or rewritten. The raw value is kept with the reason.' },
      ],
    },
    limits: {
      heading: 'Limits we state',
      items: [
        'Precision is measured, not assumed. The first measured Early Warning sample scored 67% before a classification fix and is re-measured before any figure is quoted.',
        'Procurement analysis is aggregate until the licence and naming questions with the Korean authorities are answered. No firm is named as a repeat loser in anything public.',
        'Construction (공사) tenders are excluded from win-rate analysis: thousands of bidders against a randomised estimate make it close to a lottery, and we say so.',
        'A Korean sentence on this site written by a non-native is marked for a native read before launch; where you find one, tell us.',
      ],
    },
  },
  ko: {
    title: '방법론 — Opsight Intelligence',
    description: 'Opsight가 인텔리전스를 수집·평가·발행하는 방식: 하나의 생명주기, 하나의 인텔리전스 객체, 어디서나 같은 의미의 심각도, 그리고 무엇이 실시간이고 무엇이 합성인지에 대한 명확한 규칙.',
    hero: {
      eyebrow: '방법론',
      title: '데이터는 달라도, 언어는 하나.',
      lead: 'Opsight의 모든 라인 — 사기, 공공조달, 제조 — 은 같은 생명주기를 따르고 같은 종류의 객체를 발행합니다. 이 페이지는 그것이 무엇을 뜻하는지 설명합니다. 어느 라인의 숫자나 알림이든 같은 방식으로 읽을 수 있도록.',
    },
    lifecycle: {
      heading: '생명주기',
      lead: '기록이 이동하는 순서대로 다섯 단계. 모든 라인이 다섯 단계를 모두 거치며, 건너뛰는 단계는 없습니다.',
      stages: [
        { title: '신호', body: '소스의 원시 기록: 텔레그램 게시물, 공공 입찰공고, 샷 단위 생산 로그. 수집된 그대로, 수집 시각과 위치와 함께 보관합니다.' },
        { title: '관측', body: '신호를 공통 형태로 정규화하고 엔티티에 연결합니다 — 채널, 사업자등록번호로 식별된 업체, 설비 — 같은 것을 두 번 보면 같은 것으로 인식되도록.' },
        { title: '발견', body: '탐지기가 포착한 것: 신규 엔티티, 위험도 상승, 조용해진 네트워크, 연속 패배, 정지의 군집. 발견은 근거를 명시합니다.' },
        { title: '평가', body: '발견을 종합해 엔티티에 대한 판단을 내립니다. 심각도, 신뢰도, 그리고 공유 가능한 법적 근거와 함께.' },
        { title: '인텔리전스', body: '평가와 발견을 하나의 버스에 하나의 객체 형태로 발행합니다. 피드, 알림, 보고서, 이 사이트 모두 여기서 파생됩니다.' },
      ],
    },
    object: {
      heading: '인텔리전스 객체',
      lead: '하나의 기록 유형이 읽는 이가 판단하는 데 필요한 모든 것을 담습니다. 아래 필드 없이는 아무것도 발행되지 않습니다.',
      fields: [
        { title: '대상', body: '기록이 무엇에 관한 것인지, 밤이 바뀌어도 같은 대상이 같은 대상으로 남도록 안정적인 식별자와 함께.' },
        { title: '심각도와 신뢰도', body: '얼마나 심각한지, 얼마나 근거가 충분한지 — 두 개의 별개 숫자이며, 하나로 합치지 않습니다.' },
        { title: '근거', body: '어디서 왔는지: 소스, 참조, 수집 시각. 근거 없는 알림은 보내지 않습니다.' },
        { title: '법적 근거', body: '어떤 근거로 기록을 보유하고 공유할 수 있는지 — 공개 기록, 공고, 계약 — 추정이 아니라 기록에 명시합니다.' },
        { title: '관측 시각과 발행 시각', body: '대상이 관측된 시각과 발행된 시각. 둘 다 보관하며, 같은 관측의 재발행은 새로운 사건이 되지 않습니다.' },
      ],
    },
    severity: {
      heading: '심각도는 모든 라인에서 같은 뜻입니다',
      lead: '등급은 고정입니다. 라인마다 도달할 수 있는 최고 등급이 다를 뿐입니다: 사기는 치명적까지 갈 수 있고, 공공조달 기록은 높음에서 멈춥니다 — 긴 연속 패배는 심각하지만 범죄는 아니기 때문입니다.',
      rows: [
        { level: 'critical', label: '치명적', body: '보강 근거가 있는 심각한 범죄 활동의 직접 지표.' },
        { level: 'high', label: '높음', body: '행동할 가치가 있는 강한 패턴: 위험도 상승, 확인된 네트워크 연결, 자주 입찰하지만 한 번도 낙찰받지 못한 업체.' },
        { level: 'medium', label: '중간', body: '지켜볼 가치가 있는 패턴. 그 자체로는 아무것도 바꾸지 않습니다.' },
        { level: 'low', label: '낮음', body: '맥락. 그림을 완전하게 하기 위해 보관하되, 알림 대상은 아닙니다.' },
      ],
    },
    honesty: {
      heading: '무엇이 실시간이고, 무엇이 합성인가',
      live: '실시간 표시가 있는 수치는 매일 밤 저장소에서 읽어오며 작성일을 함께 표시합니다. 세 번째 상태는 없습니다: 숫자에는 날짜가 있거나, 표시가 있습니다.',
      synthetic: '합성 표시가 있는 데모는 결함을 심어 둔 생성 데이터로 실행됩니다. 추론은 엔진이 만든 그대로이고, 설비와 업체는 가상입니다.',
      pseudonymized: '실제 인텔리전스를 시연에 쓰는 경우 식별자를 안정적인 가명으로 바꿔, 구조는 실제이되 어떤 사람·채널·업체도 식별되지 않게 합니다. 이 사이트의 어떤 것도 고객 결과가 아닙니다.',
    },
    sources: {
      heading: '소스',
      blocks: [
        { title: '공개 및 무료 소스만', body: '공개 텔레그램 채널, 조달청·나라장터 공개 API, 고객이 자기 시스템에서 내보낸 데이터. 구매한 데이터셋도, 로그인 뒤 수집도 없습니다.' },
        { title: '매일 밤 수집', body: '모든 라인은 일정에 따라 수집하고 바뀐 것을 발행합니다. 늦게 도착한 기록도 잡히도록 수집 구간을 의도적으로 겹칩니다.' },
        { title: '품질을 숨기지 않고 명시', body: '비정상 값은 표시하고 헤드라인 수치에서 제외하되, 조용히 버리거나 고쳐 쓰지 않습니다. 원본 값은 사유와 함께 보관합니다.' },
      ],
    },
    limits: {
      heading: '우리가 명시하는 한계',
      items: [
        '정밀도는 가정이 아니라 측정입니다. 조기경보의 첫 측정 표본은 분류 수정 전 67%였고, 수치를 인용하기 전에 재측정합니다.',
        '공공조달 분석은 한국 당국과의 라이선스·실명 관련 질의가 답을 받을 때까지 집계 수준에 머뭅니다. 공개된 어떤 자료에서도 특정 업체를 연속 패배 업체로 지목하지 않습니다.',
        '공사 입찰은 낙찰률 분석에서 제외합니다: 무작위 예비가격에 수천 개 업체가 몰리면 복권에 가깝고, 우리는 그렇게 말합니다.',
        '이 사이트의 한국어 문장 중 비원어민이 쓴 것은 출시 전 원어민 검토 대상입니다. 어색한 문장을 발견하시면 알려주세요.',
      ],
    },
  },
};
