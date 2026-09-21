// About page copy — /about, /ko/about. Who, where, how to reach, the
// honesty statement in full. No client is named. Korean by the agent,
// needs a read.

export type AboutLocale = 'en' | 'ko';
export interface AboutCopy {
  title: string; description: string;
  hero: { eyebrow: string; title: string; lead: string };
  who: { heading: string; body: string[] };
  where: { heading: string; body: string };
  how: { heading: string; items: { title: string; body: string }[] };
  contact: { heading: string; lead: string; email: string; button: string; mailto: string; hint: string };
  statement: { heading: string; body: string[] };
}

const CONTACT = 'utku@opsightintel.com'; // becomes contact@ once the alias is confirmed

export const about: Record<AboutLocale, AboutCopy> = {
  en: {
    title: 'About — Opsight Intelligence',
    description: 'Opsight Intelligence is a small intelligence platform built in Korea: fraud ecosystems on Telegram, Korean public procurement, manufacturing forensics, and AI governance — one lifecycle, public sources, numbers that are live or labelled.',
    hero: {
      eyebrow: 'About',
      title: 'A small platform that says exactly what it knows.',
      lead: 'Opsight turns public signals into intelligence products for people who have to act on them — compliance teams, procurement offices, plant managers, engineering leads — and states plainly what is measured, what is inferred, and what is synthetic.',
    },
    who: {
      heading: 'Who',
      body: [
        'Opsight Intelligence is built and run from Korea by a small team with a background in OSINT entity classification, procurement data and manufacturing analytics. The platform is one codebase per line on one shared bus, collecting nightly on a single schedule.',
        'Three lines are live — fraud, procurement, manufacturing — one product, OpSentry, is open source, and above the lines sits a platform layer: one entity across them, nightly sanctions screening, the corporate registry, and a consortium exchange that shares hashes and bands. The platform runs where the data lives; nothing is hosted for a client that the client has not asked for.',
      ],
    },
    where: {
      heading: 'Where',
      body: 'Seoul, Korea. Korean and English are working languages; Turkish-language ecosystems are monitored on the fraud line.',
    },
    how: {
      heading: 'How we work',
      items: [
        { title: 'Public sources only', body: 'Open channels, open APIs, and data a customer exports from its own systems. The method page lists what that excludes.' },
        { title: 'Nightly, on a schedule', body: 'Every line collects and publishes every night. A figure on this site carries the date it was written.' },
        { title: 'Evidence before opinion', body: 'An alert names its evidence and its legal basis or it is not sent. A demo says whether it is synthetic.' },
        { title: 'Small by design', body: 'One conversation, one sample, one decision. No account to create, no call unless you want one.' },
      ],
    },
    contact: {
      heading: 'Contact',
      lead: 'The first conversation starts with a sample for your market or your data — no commitment required.',
      email: CONTACT,
      button: 'Write to us',
      mailto: `mailto:${CONTACT}`,
      hint: 'One email, one line about what you want to see.',
    },
    statement: {
      heading: 'The honesty statement, in full',
      body: [
        'Every figure on this site is one of two things: read from the live store each night and dated, or labelled synthetic. There is no third kind.',
        'Every demo is one of two things: generated data with known faults written in, labelled synthetic; or real intelligence with every identifier replaced by a stable pseudonym, labelled pseudonymized. In both, the reasoning shown is what the engine produces, unedited.',
        'Nothing on this site is a client result, names a client, or names a firm as anything. Prices are quoted on request until a price has been tested on a real buyer.',
        'Korean sentences written by a non-native speaker are marked for a native read before the professional launch. If one reads wrong to you, tell us.',
      ],
    },
  },
  ko: {
    title: '소개 — Opsight Intelligence',
    description: 'Opsight Intelligence는 한국에서 만든 작은 인텔리전스 플랫폼입니다: 텔레그램 사기 생태계, 한국 공공조달, 제조 포렌식, AI 거버넌스 — 하나의 생명주기, 공개 소스, 실시간이거나 표시된 숫자.',
    hero: {
      eyebrow: '소개',
      title: '아는 것을 정확히 말하는 작은 플랫폼.',
      lead: 'Opsight는 공개 신호를 행동해야 하는 사람들을 위한 인텔리전스 제품으로 바꿉니다 — 준법감시팀, 조달 담당 부서, 공장 관리자, 엔지니어링 리드 — 그리고 무엇이 측정이고, 무엇이 추론이며, 무엇이 합성인지 분명히 말합니다.',
    },
    who: {
      heading: '누가',
      body: [
        'Opsight Intelligence는 OSINT 엔티티 분류, 조달 데이터, 제조 분석 배경을 가진 소규모 팀이 한국에서 만들고 운영합니다. 플랫폼은 라인별 하나의 코드베이스가 하나의 공유 버스 위에서, 하나의 일정으로 매일 밤 수집합니다.',
        '세 개의 라인 — 사기, 공공조달, 제조 — 이 운영 중이고, OpSentry 하나는 오픈소스 제품이며, 라인 위에는 플랫폼 계층이 있습니다: 라인을 가로지르는 하나의 엔터티, 매일 밤의 제재 스크리닝, 기업 등기, 해시와 구간만 교환하는 컨소시엄. 플랫폼은 데이터가 있는 곳에서 돌아가며, 고객이 요청하지 않은 것을 고객 대신 호스팅하지 않습니다.',
      ],
    },
    where: {
      heading: '어디서',
      body: '대한민국 서울. 한국어와 영어가 업무 언어이며, 사기 라인에서는 터키어 생태계도 모니터링합니다.',
    },
    how: {
      heading: '일하는 방식',
      items: [
        { title: '공개 소스만', body: '공개 채널, 공개 API, 고객이 자기 시스템에서 내보낸 데이터. 제외되는 것은 방법론 페이지에 있습니다.' },
        { title: '매일 밤, 일정대로', body: '모든 라인이 매일 밤 수집하고 발행합니다. 이 사이트의 수치에는 작성일이 붙습니다.' },
        { title: '의견보다 근거 먼저', body: '알림은 근거와 법적 근거를 명시하거나 보내지 않습니다. 데모는 합성 여부를 밝힙니다.' },
        { title: '의도적으로 작게', body: '한 번의 대화, 하나의 샘플, 하나의 결정. 만들 계정도, 원치 않는 통화도 없습니다.' },
      ],
    },
    contact: {
      heading: '연락처',
      lead: '첫 상담은 귀사 시장이나 데이터에 대한 샘플로 시작합니다 — 별도 약정 없이.',
      email: CONTACT,
      button: '메일 보내기',
      mailto: `mailto:${CONTACT}`,
      hint: '이메일 하나, 보고 싶은 내용 한 줄.',
    },
    statement: {
      heading: '정직성 선언, 전문',
      body: [
        '이 사이트의 모든 수치는 둘 중 하나입니다: 매일 밤 실제 저장소에서 읽어 날짜를 붙였거나, 합성이라고 표시했거나. 세 번째는 없습니다.',
        '모든 데모는 둘 중 하나입니다: 결함을 심어 둔 생성 데이터(합성 표시), 또는 모든 식별자를 안정적인 가명으로 바꾼 실제 인텔리전스(가명화 표시). 어느 쪽이든 보여지는 추론은 엔진이 만든 그대로입니다.',
        '이 사이트의 어떤 것도 고객 결과가 아니며, 고객을 지목하지 않고, 어떤 업체도 무엇으로 지목하지 않습니다. 가격은 실제 구매자에게 검증되기 전까지 문의 시 안내합니다.',
        '비원어민이 쓴 한국어 문장은 정식 출시 전 원어민 검토 대상입니다. 어색하게 읽히는 문장이 있으면 알려주세요.',
      ],
    },
  },
};
