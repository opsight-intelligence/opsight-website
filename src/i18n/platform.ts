// Platform page copy — /platform, /ko/platform. The layer above the three
// lines: one entity across domains, screened nightly against the sanctions
// lists, enriched from the corporate registry, and a consortium exchange
// that shares hashes and bands, never values. Written against
// opsight-company/roadmaps/platform-direction.md. Numbers are stated as
// measured on the date given; no client, no internal package name. Korean by
// the agent, needs a read.

export type PlatformLocale = 'en' | 'ko';
export interface Block { title: string; body: string }
export interface PlatformCopy {
  title: string; description: string;
  hero: { eyebrow: string; title: string; lead: string };
  question: { heading: string; lead: string; before: string; after: string };
  layers: { heading: string; lead: string; items: (Block & { state: string })[] };
  exchange: { heading: string; lead: string; steps: Block[]; never: string[] };
  honesty: { heading: string; items: string[] };
  ask: { heading: string; body: string };
}

export const platform: Record<PlatformLocale, PlatformCopy> = {
  en: {
    title: 'Platform — Opsight Intelligence',
    description: 'One entity across fraud and procurement, screened nightly against the sanctions lists, enriched from the corporate registry, and a consortium exchange that shares hashes and bands — never an account number.',
    hero: {
      eyebrow: 'Platform',
      title: 'The same firm, seen from every line at once.',
      lead: 'Three lines collect. The platform joins what they publish into one entity per real-world thing, checks every entity against the lists that matter, and lets institutions corroborate a mule signal without disclosing a customer.',
    },
    question: {
      heading: 'The question it answers',
      lead: 'The one a buyer recognises.',
      before: 'Before: a firm that keeps losing public tenders sits in one dataset; the bank account a mule channel posts sits in another; the sanctions list is a spreadsheet someone checks by hand. Three facts about one thing, and nothing joins them.',
      after: 'After: “This bidder that never wins — is its business number, its address or its CEO shared with a firm a fraud channel names, and is any wallet it touches on the OFAC list?” is one lookup, with every link carrying the record that justified it.',
    },
    layers: {
      heading: 'Four layers, shipped',
      lead: 'Each was built in a day on the same rule: deterministic, cited, never a similarity score. What each one states about itself is measured, not projected.',
      items: [
        { title: 'Entity layer', body: 'One entity per firm, account, bank account, wallet, phone or agency, resolved by its identifiers — a 사업자등록번호, a handle, an address on a chain. Typed links between them: bids on, same as, same address, shares officer. Every link carries the artifact that justified it; a person is never a node.', state: '11,953 entities from 14,144 published artifacts, measured 2026-09-21' },
        { title: 'Sanctions screening', body: 'Every entity, every night, against OFAC’s SDN list (including its digital-currency addresses) and the UN consolidated list; EU and 전략물자 next. A hit is a key equality or an exact normalised-name equality on a corporation — never fuzzy, and never on a person. Each hit is a finding that names the list entry.', state: 'built; switched on per member, with the fetch time on every finding' },
        { title: 'Corporate registry', body: 'For every corporate bidder, its OpenDART profile — 법인등록번호, ticker, CEO, registered address, phone — matched by name and confirmed only by the business number DART itself returns. Two bidders with one CEO or one address become a link you can cite.', state: 'built; profiles fill at up to 300 a night' },
        { title: 'Consortium exchange', body: 'Members contribute keyed hashes of counterparties their own controls flagged, with counts and amounts as bands. A key two or more members contributed is a corroboration. Opsight contributes what fraud channels post, hashed the same way. No member ever sees another member’s rows.', state: 'built; the first member’s file is the first corroboration' },
      ],
    },
    exchange: {
      heading: 'How the exchange keeps a customer out of it',
      lead: 'What crosses the line is a hash and a band. The protocol, in four steps.',
      steps: [
        { title: 'Hash on your side', body: 'A one-file, standard-library script runs inside your perimeter: each counterparty identifier is canonicalised and replaced by an HMAC over it with a pepper the consortium shares out-of-band. The value and the pepper never leave.' },
        { title: 'Bands, not numbers', body: 'Sender counts become 1 / 2–5 / 6–20 / 21+; amounts become four KRW bands. A row cannot be inverted into a customer.' },
        { title: 'Corroborate', body: 'The hub joins hashes across members. Two or more distinct members on one hash is a corroboration; one member is nothing.' },
        { title: 'Read back by your own hash', body: 'A corroboration says how many members and which signals — fan-in, fragmenting, intel mention — and the window. It never says which other member.' },
      ],
      never: [
        'No raw identifier is stored on the hub; the pepper is in no table.',
        'No member sees another member’s contributions.',
        'A key one member contributed is never a finding.',
      ],
    },
    honesty: {
      heading: 'What is true today',
      items: [
        'The entity layer is live and re-run nightly; its first cross-domain links appear as the fraud line publishes typed identifiers.',
        'Sanctions screening and the registry are built and tested against the real list and API formats; each is switched on by a member, not by default.',
        'The exchange has one member — Opsight — and therefore zero corroborations, by construction. The product is the protocol and the running hub.',
        'Nothing on this page is a similarity score. Every link, hit and corroboration can be traced to a record.',
      ],
    },
    ask: { heading: 'Ask for a walk-through', body: 'A thirty-minute session over the gateway: one lookup, every layer, on your own question.' },
  },
  ko: {
    title: '플랫폼 — Opsight Intelligence',
    description: '사기·공공조달 데이터를 하나의 엔터티로 연결하고, 매일 밤 제재 명단과 대조하며, 기업 등기 정보로 보강하고, 계좌번호 대신 해시와 구간만 교환하는 컨소시엄 교환.',
    hero: {
      eyebrow: '플랫폼',
      title: '같은 회사를, 모든 라인에서 동시에.',
      lead: '세 개의 라인이 수집합니다. 플랫폼은 각 라인이 발행한 것을 실제 대상 하나당 하나의 엔터티로 합치고, 모든 엔터티를 중요한 명단과 대조하며, 기관들이 고객 정보를 공개하지 않고도 자금세탁 신호를 교차 확인하게 합니다.',
    },
    question: {
      heading: '답하는 질문',
      lead: '구매자가 바로 알아보는 그 질문.',
      before: '이전: 공공입찰에서 계속 떨어지는 회사는 한 데이터셋에, 사기 채널이 올린 계좌번호는 다른 데이터셋에, 제재 명단은 누군가 수작업으로 확인하는 스프레드시트에 있었습니다. 한 대상에 대한 세 가지 사실이 서로 연결되지 않았습니다.',
      after: '이후: “한 번도 낙찰되지 않는 이 입찰자 — 사업자등록번호, 주소, 대표자가 사기 채널이 언급한 회사와 같은가, 관련 지갑이 OFAC 명단에 있는가”가 한 번의 조회가 됩니다. 모든 연결은 근거가 된 기록을 함께 가집니다.',
    },
    layers: {
      heading: '네 개의 계층, 출시 완료',
      lead: '각 계층은 같은 원칙으로 하루 만에 만들어졌습니다. 결정적이고, 출처가 있으며, 유사도 점수는 쓰지 않습니다. 각 계층이 스스로에 대해 말하는 수치는 측정값이지 전망이 아닙니다.',
      items: [
        { title: '엔터티 계층', body: '회사·계정·계좌·지갑·전화번호·수요기관마다 하나의 엔터티. 사업자등록번호, 핸들, 체인 주소 같은 식별자로 결정됩니다. 유형이 있는 연결: 입찰, 동일 주체, 동일 주소, 임원 공유. 모든 연결은 근거 기록을 가지며, 개인은 절대 노드가 되지 않습니다.', state: '2026-09-21 기준 발행 아티팩트 14,144건에서 엔터티 11,953건' },
        { title: '제재 스크리닝', body: '모든 엔터티를 매일 밤 OFAC SDN 명단(가상자산 주소 포함)과 UN 통합 명단에 대조합니다. EU와 전략물자 명단이 다음입니다. 적중은 키 일치 또는 법인의 정규화된 이름 완전 일치뿐입니다 — 퍼지 매칭 없음, 개인 대상 없음. 각 적중은 명단 항목을 명시한 파인딩이 됩니다.', state: '구축 완료. 회원별로 활성화하며, 모든 파인딩에 명단 수집 시각이 표시됩니다' },
        { title: '기업 등기', body: '모든 법인 입찰자에 대해 OpenDART 프로필 — 법인등록번호, 종목코드, 대표자, 등록 주소, 전화. 이름으로 후보를 찾고 DART가 직접 반환하는 사업자등록번호로만 확정합니다. 대표자나 주소가 같은 두 입찰자는 인용 가능한 연결이 됩니다.', state: '구축 완료. 프로필은 하룻밤 최대 300건씩 채워집니다' },
        { title: '컨소시엄 교환', body: '회원사는 자체 통제로 포착한 거래상대방의 키 해시를 건수와 금액 구간과 함께 기여합니다. 두 개 이상의 회원사가 기여한 키는 교차 확인이 됩니다. Opsight는 사기 채널이 올린 정보를 같은 방식으로 해시해 기여합니다. 어떤 회원사도 다른 회원사의 행을 볼 수 없습니다.', state: '구축 완료. 첫 회원사의 파일이 첫 교차 확인입니다' },
      ],
    },
    exchange: {
      heading: '교환에서 고객 정보를 배제하는 방법',
      lead: '경계를 넘는 것은 해시와 구간뿐입니다. 네 단계 프로토콜.',
      steps: [
        { title: '귀사 내부에서 해시', body: '표준 라이브러리만 쓰는 한 파일 스크립트가 귀사 경계 안에서 실행됩니다. 거래상대방 식별자를 정규화한 뒤, 컨소시엄이 오프라인으로 공유한 페퍼로 HMAC 처리합니다. 값과 페퍼는 밖으로 나가지 않습니다.' },
        { title: '숫자가 아닌 구간', body: '송금인 수는 1 / 2–5 / 6–20 / 21+로, 금액은 원화 네 구간으로 바뀝니다. 행 하나로 고객을 역추적할 수 없습니다.' },
        { title: '교차 확인', body: '허브가 회원사 간 해시를 결합합니다. 한 해시에 서로 다른 회원사 둘 이상이면 교차 확인, 하나면 아무것도 아닙니다.' },
        { title: '자신의 해시로 조회', body: '교차 확인은 회원사 수와 신호 종류(집중 입금, 분할 송금, 인텔 언급), 기간을 알려줍니다. 어느 회원사인지는 절대 말하지 않습니다.' },
      ],
      never: [
        '허브에는 원본 식별자가 저장되지 않으며, 페퍼는 어떤 테이블에도 없습니다.',
        '회원사는 다른 회원사의 기여를 볼 수 없습니다.',
        '한 회원사만 기여한 키는 파인딩이 되지 않습니다.',
      ],
    },
    honesty: {
      heading: '오늘 기준으로 사실인 것',
      items: [
        '엔터티 계층은 운영 중이며 매일 밤 다시 실행됩니다. 사기 라인이 유형화된 식별자를 발행하면서 첫 교차 도메인 연결이 나타납니다.',
        '제재 스크리닝과 기업 등기는 실제 명단과 API 형식으로 테스트를 마쳤습니다. 각각 기본값이 아니라 회원사가 활성화합니다.',
        '교환에는 회원사가 하나(Opsight)뿐이므로 교차 확인은 정의상 0건입니다. 제품은 프로토콜과 가동 중인 허브입니다.',
        '이 페이지의 어떤 것도 유사도 점수가 아닙니다. 모든 연결·적중·교차 확인은 기록으로 추적할 수 있습니다.',
      ],
    },
    ask: { heading: '시연을 요청하세요', body: '게이트웨이를 통한 30분 세션: 귀사의 질문 하나로 모든 계층을 한 번에 조회합니다.' },
  },
};
