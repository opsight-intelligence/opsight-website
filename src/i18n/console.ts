// Console page copy — /console, /ko/console. One analyst console over every
// line; what a customer sees is set by their role, so each sees what they
// signed up for and nothing else. Written so a new domain (defence and others)
// is one more role, not a new product. No client, no vendor, no internal
// package name; every capability is stated as it is today. Korean by the
// agent, needs a read.

export type ConsoleLocale = 'en' | 'ko';
export interface Block { title: string; body: string }
export interface ConsoleCopy {
  title: string; description: string;
  hero: { eyebrow: string; title: string; lead: string; seePlatform: string };
  roles: { heading: string; lead: string; items: (Block & { state: string })[] };
  inside: { heading: string; lead: string; items: Block[] };
  access: { heading: string; lead: string; steps: Block[]; never: string[] };
  honesty: { heading: string; items: string[] };
  ask: { heading: string; body: string };
}

export const consoleCopy: Record<ConsoleLocale, ConsoleCopy> = {
  en: {
    title: 'Console — Opsight Intelligence',
    description: 'One analyst console over every Opsight line. Your role decides what you see: narcotics and fraud intelligence, public procurement, manufacturing, and the domains that come next.',
    hero: {
      eyebrow: 'Console',
      seePlatform: 'How the data behind it is built: the platform',
      title: 'One console. You see what you signed up for.',
      lead: 'Every Opsight line publishes into one platform, and one console reads it. What appears on your screen is set by your role on the server: the markets, the domains and the tools you contracted for, and nothing else.',
    },
    roles: {
      heading: 'What each customer gets',
      lead: 'A role is a list of domains and markets. Adding a customer is adding a role; adding a domain is adding a line to the roles that should see it.',
      items: [
        { title: 'Narcotics and fraud intelligence', body: 'For agencies and investigators. Daily, weekly and monthly reports on online drug and fraud markets, each statement graded by evidence; the market network; entity pages where every link cites its source record; a watchlist; and a case assistant that answers only from what the records say.', state: 'live; reports reviewed by an analyst before delivery' },
        { title: 'Financial crime and compliance', body: 'For banks and payment firms. The fraud market they operate in, mule accounts and wallets named in criminal channels, sanctions screening of every entity against OFAC and UN lists, and a consortium exchange that corroborates a counterparty across members by hash, never by account number.', state: 'built; screening and exchange switched on per member' },
        { title: 'Public procurement', body: 'For public bodies and audit teams. Every tender, bidder and winning price against its published estimate, related-bidder and closed-company screens, and agency integrity reports, refreshed nightly from the national procurement data.', state: 'live; collected nightly' },
        { title: 'Manufacturing', body: 'For plant and operations leaders. Forensic findings on throughput, cycle-time efficiency and utilisation: each with root cause, quantified impact and ranked actions, from the spreadsheets a plant already keeps.', state: 'live on synthetic data; customer data on request' },
        { title: 'Defence and new domains', body: 'The same console, entity layer and roles carry the next domains, defence first. A new domain arrives as a line publishing to the platform and a role that may read it; nothing a current customer sees changes.', state: 'planned' },
      ],
    },
    inside: {
      heading: 'What is inside',
      lead: 'The same tools for every role, each filtered to that role before it answers.',
      items: [
        { title: 'Reports', body: 'Editions in Korean and English, every statement tagged observed, corroborated or assessed, released only after an analyst marks them reviewed.' },
        { title: 'Network', body: 'A market’s strongest actors and what links them, and for any entity its neighbourhood, each link carrying the record that justified it.' },
        { title: 'Entity pages', body: 'One page per firm, channel, account or wallet, joined across domains by its identifiers, never by a similarity score.' },
        { title: 'Watchlist', body: 'Your own list of names and identifiers, re-checked every night, with a digest when something on it moves.' },
        { title: 'Case assistant', body: 'Questions in plain language, answered only from the records you may see, with the citation beside every claim and a refusal when the records are silent.' },
        { title: 'Quality control', body: 'Channels and entities that do not belong to a market are checked and hidden before reports go out; a hidden item is never deleted and can be restored.' },
      ],
    },
    access: {
      heading: 'How access works',
      lead: 'The rule is on the server, not in the screen.',
      steps: [
        { title: 'Sign in by link', body: 'Enter your work address; a one-time link arrives by mail. No password is kept.' },
        { title: 'Your role is read', body: 'Your address maps to one role: its domains, its markets, and whether it shares in the consortium.' },
        { title: 'Every answer is filtered', body: 'Each request is filtered by the role before it is answered, the same way whether it comes from the console, the API or an assistant.' },
        { title: 'Every request is logged', body: 'Who asked what, and what was refused, goes to an audit log.' },
      ],
      never: [
        'A role sees only what it names. A domain or market left out is not shown.',
        'A person is never a node in the network.',
        'No report reaches a customer without an analyst’s review.',
      ],
    },
    honesty: {
      heading: 'What is true today',
      items: [
        'The console, its roles and every tool above run today over the live platform.',
        'Customers receive reviewed reports by mail today; console access is set up per engagement.',
        'Manufacturing runs on synthetic data until a customer’s own data is connected.',
        'Defence is a direction, not a product yet.',
      ],
    },
    ask: { heading: 'Ask for a walk-through', body: 'Thirty minutes in the console with the role you would have: your markets, your questions.' },
  },
  ko: {
    title: '콘솔 — Opsight Intelligence',
    description: 'Opsight의 모든 라인을 하나로 보는 분석 콘솔. 마약·사기 인텔리전스, 공공조달, 제조, 그리고 다음 분야까지, 무엇을 볼지는 역할이 정합니다.',
    hero: {
      eyebrow: '콘솔',
      seePlatform: '그 뒤의 데이터가 만들어지는 방식: 플랫폼',
      title: '하나의 콘솔. 계약한 만큼만 보입니다.',
      lead: 'Opsight의 모든 라인은 하나의 플랫폼에 발행되고, 하나의 콘솔이 이를 읽습니다. 화면에 무엇이 보이는지는 서버에서 역할로 정해집니다. 계약한 시장·분야·도구만 보이고, 그 외에는 보이지 않습니다.',
    },
    roles: {
      heading: '고객별로 받는 것',
      lead: '역할은 분야와 시장의 목록입니다. 고객을 추가하면 역할이 하나 늘고, 분야를 추가하면 그 분야를 볼 역할에 한 줄이 더해집니다.',
      items: [
        { title: '마약·사기 인텔리전스', body: '수사·감독 기관용. 온라인 마약·사기 시장에 대한 일간·주간·월간 보고서(모든 문장에 근거 등급 표시), 시장 네트워크, 모든 연결이 근거 기록을 가진 엔터티 페이지, 감시 목록, 그리고 기록에 있는 내용만으로 답하는 사건 도우미.', state: '운영 중. 보고서는 분석가 검토 후 전달' },
        { title: '금융범죄·컴플라이언스', body: '은행·결제사용. 해당 사기 시장, 범죄 채널에 언급된 대포통장과 지갑, 모든 엔터티의 OFAC·UN 명단 대조, 그리고 계좌번호가 아닌 해시로 회원사 간 거래상대방을 교차 확인하는 컨소시엄 교환.', state: '구축 완료. 스크리닝과 교환은 회원사별로 활성화' },
        { title: '공공조달', body: '공공기관·감사팀용. 모든 입찰·입찰자·낙찰가를 기초금액과 대조하고, 관련 입찰자·폐업 기업 점검과 수요기관 청렴성 보고서를 제공합니다. 국가 조달 데이터로 매일 밤 갱신됩니다.', state: '운영 중. 매일 밤 수집' },
        { title: '제조', body: '공장·운영 책임자용. 처리량, 사이클타임 효율, 가동률에 대한 진단형 결과. 각 결과에 근본 원인, 정량화된 영향, 우선순위 조치가 붙으며, 공장이 이미 쓰는 스프레드시트로 시작합니다.', state: '합성 데이터로 운영 중. 고객 데이터는 요청 시' },
        { title: '국방과 새로운 분야', body: '같은 콘솔, 엔터티 계층, 역할 체계가 다음 분야를 담습니다. 국방이 첫 번째입니다. 새 분야는 플랫폼에 발행하는 라인 하나와 그것을 볼 수 있는 역할 하나로 추가되며, 기존 고객이 보는 화면은 바뀌지 않습니다.', state: '계획' },
      ],
    },
    inside: {
      heading: '콘솔 안의 도구',
      lead: '모든 역할에 같은 도구가 있고, 각 도구는 답하기 전에 그 역할로 걸러집니다.',
      items: [
        { title: '보고서', body: '한국어·영어 보고서. 모든 문장에 관측·교차 확인·분석 평가 등급이 붙고, 분석가가 검토 완료로 표시한 뒤에만 공개됩니다.' },
        { title: '네트워크', body: '한 시장의 핵심 행위자와 그 연결, 그리고 모든 엔터티의 주변 관계. 각 연결은 근거가 된 기록을 가집니다.' },
        { title: '엔터티 페이지', body: '회사·채널·계정·지갑마다 하나의 페이지. 유사도 점수가 아니라 식별자로 분야를 넘어 연결됩니다.' },
        { title: '감시 목록', body: '직접 등록한 이름과 식별자를 매일 밤 다시 확인하고, 변화가 있으면 요약을 보냅니다.' },
        { title: '사건 도우미', body: '일상 언어로 질문하면, 볼 수 있는 기록만으로 답합니다. 모든 주장 옆에 출처가 있고, 기록에 없으면 답하지 않습니다.' },
        { title: '품질 관리', body: '시장에 속하지 않는 채널과 엔터티는 보고서가 나가기 전에 점검해 숨깁니다. 숨긴 항목은 삭제되지 않으며 되돌릴 수 있습니다.' },
      ],
    },
    access: {
      heading: '접근 방식',
      lead: '규칙은 화면이 아니라 서버에 있습니다.',
      steps: [
        { title: '링크로 로그인', body: '업무용 이메일을 입력하면 일회용 링크가 메일로 옵니다. 비밀번호는 보관하지 않습니다.' },
        { title: '역할 확인', body: '이메일 주소는 하나의 역할에 연결됩니다. 역할에는 분야, 시장, 컨소시엄 참여 여부가 정해져 있습니다.' },
        { title: '모든 답이 걸러짐', body: '콘솔, API, 도우미 어디서 온 요청이든 같은 방식으로, 답하기 전에 역할로 걸러집니다.' },
        { title: '모든 요청이 기록됨', body: '누가 무엇을 물었는지, 무엇이 거부되었는지 감사 기록에 남습니다.' },
      ],
      never: [
        '역할은 명시한 것만 봅니다. 빠진 분야나 시장은 보이지 않습니다.',
        '개인은 네트워크의 노드가 되지 않습니다.',
        '분석가 검토 없이 고객에게 전달되는 보고서는 없습니다.',
      ],
    },
    honesty: {
      heading: '오늘 기준으로 사실인 것',
      items: [
        '콘솔, 역할 체계, 위의 모든 도구는 현재 실제 플랫폼 위에서 운영 중입니다.',
        '현재 고객은 검토된 보고서를 메일로 받으며, 콘솔 접근은 계약별로 설정합니다.',
        '제조는 고객 데이터가 연결되기 전까지 합성 데이터로 운영됩니다.',
        '국방은 아직 제품이 아니라 방향입니다.',
      ],
    },
    ask: { heading: '시연을 요청하세요', body: '귀사가 갖게 될 역할로 30분간 콘솔을 보여드립니다. 귀사의 시장, 귀사의 질문으로.' },
  },
};
