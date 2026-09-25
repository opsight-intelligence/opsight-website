// Fraud page copy — /fraud, /ko/fraud, /tr/fraud.
//
// Carried over from the 2026 intelligence.html per the copy inventory
// (opsight-company/strategy/product/website-copy-inventory.md): the nine
// capability blocks folded into four (collect / connect / warn / deliver),
// implementation names (PaddleOCR, on-device inference) moved out of the
// customer copy, Turkey described as monitored rather than as a product,
// no pricing, no client reference, the "your current vendor" line kept, the
// one action is the sample report. Korean and Turkish came from the old page
// where it had them; the new sentences were written by the agent on
// 2026-09-15 and need a native read.

import type { Locale } from './common';

export interface Block { title: string; body: string }
export interface FraudCopy {
  title: string;
  description: string;
  hero: { eyebrow: string; title: string; lead: string; live: string; primary: string };
  what: { heading: string; lead: string; blocks: Block[] };
  // Optional: the watchlist subscription (2026-09-25). Rendered only where a
  // locale carries it; Turkish does not, because the TR market is not sold.
  watch?: { heading: string; lead: string; blocks: Block[]; note: string };
  coverage: { heading: string; lead: string; blocks: Block[] };
  numbers: { heading: string; lead: string; entities: string; bank: string; phone: string; crypto: string; clusters: string };
  delivery: { heading: string; body: string };
  contact: { heading: string; lead: string; sharp: string; sample: string; button: string; mailto: string };
}

const CONTACT = 'utku@opsightintel.com'; // becomes contact@ once the alias is confirmed

export const fraud: Record<Locale, FraudCopy> = {
  en: {
    title: 'Fraud Intelligence — Opsight',
    description:
      'Telegram intelligence for financial institutions, regulators and compliance teams: vishing networks, mule accounts, crypto laundering — monitored nightly, delivered as feeds, alerts and evidence-grade reports.',
    hero: {
      eyebrow: 'Fraud intelligence',
      title: 'Telegram intelligence for financial institutions, regulators and compliance teams.',
      lead: 'Continuous monitoring of the Telegram ecosystems where fraud is organised, so you can act before losses, violations or reputational damage occur.',
      live: 'Collected every night. Every figure on this page comes from the live store, dated — not from a brochure.',
      primary: 'Request a sample report',
    },
    what: {
      heading: 'What we do',
      lead: 'Four things, in the order the intelligence travels.',
      blocks: [
        { title: 'Collect', body: 'Real-time tracking of vishing, mule-account and laundering networks across Telegram channels, including the bank accounts, wallets and phone numbers hidden in images — evidence text-only scrapers miss.' },
        { title: 'Connect', body: 'Bank accounts, crypto addresses and phone numbers cross-referenced across channels and markets to trace money-flow paths, shared laundering infrastructure and operators converging under new names.' },
        { title: 'Warn', body: 'Change detection between collection cycles — new entities, confidence shifts, activity bursts, role escalations — with per-channel activity patterns that show when operators work and where they coordinate from.' },
        { title: 'Deliver', body: 'Machine-readable watchlists (CSV, MISP IOC), bank-specific alert feeds, STIX bundles, an authenticated REST API and webhooks for SIEM/SOAR, and evidence-grade reports with confidence scoring, audit trails and legal reference mappings for every finding.' },
      ],
    },
    watch: {
      heading: 'Watchlist monitoring',
      lead: 'Hand over the identifiers you care about — accounts, phone numbers, wallets, channels. Every night they are checked against everything the platform collects, and you are told when something new appears.',
      blocks: [
        { title: 'Your list, checked nightly', body: 'Paste a list once. Each identifier is read the way it was written — a number that could be a phone or a bank account is watched as both — and checked against the whole collection every night.' },
        { title: 'Baseline, then news', body: 'What the platform already knew when you added an identifier is shown as the baseline. Only what arrives afterwards counts as new, so an alert means something changed.' },
        { title: 'Counts by mail, detail behind your sign-in', body: 'The nightly mail says how many new records appeared — never which identifier. The detail, with the record behind every link, is on the console behind your own sign-in.' },
        { title: 'One page a month', body: 'A monthly one-page summary per list: what was watched, what the platform knows, what changed and of what kind — ready to print or file.' },
      ],
      note: '"Not seen" means the platform has not observed an identifier in what it collects. It does not mean the identifier is clean.',
    },
    coverage: {
      heading: 'Coverage',
      lead: 'Active collection across the markets below; Turkish-language ecosystems are monitored and can be scoped into a subscription.',
      blocks: [
        { title: 'Financial crime — Korea', body: 'Vishing, mule account trading, SIM fraud, cryptocurrency laundering; cross-border operations spanning Southeast Asia. Bank-account and phone-number feeds ready for direct ingestion.' },
        { title: 'Money laundering & crypto', body: 'USDT corridor mapping, hawala network detection, crypto address clustering, exchange-abuse monitoring. MISP-format IOC feeds.' },
        { title: 'Drug trafficking networks', body: 'Supply-chain mapping, recruitment channels, darknet-to-Telegram migration tracking, cross-border distribution analysis.' },
        { title: 'Illegal betting & grey markets', body: 'Unlicensed operators, payment-channel mapping, USDT payment corridors, agent recruitment. Relevant to regulators, licensed operators and payment processors.' },
        { title: 'Financial crime — Turkey', body: 'Voice phishing, bank fraud, identity theft and mule recruitment, monitored in Turkish with entity resolution across operator handles.' },
        { title: 'Your market', body: 'Your ecosystem, your language, your threat model. Dedicated pipelines for markets not listed — tell us the scope.' },
      ],
    },
    numbers: {
      heading: 'By the numbers',
      lead: 'Continuously updated from live intelligence collection.',
      entities: 'Entities tracked',
      bank: 'Bank accounts identified',
      phone: 'Phone numbers, active',
      crypto: 'Crypto addresses, laundering',
      clusters: 'Clusters mapped',
    },
    delivery: {
      heading: 'How it arrives',
      body: 'Nightly. A subscription is scoped to your market and your watchlist and arrives by email or webhook: new entities, escalations and networks that have gone quiet — scored, deduplicated, evidence attached. A watchlist subscription adds your own identifiers to the nightly check. Curated feeds, bank risk briefs and the managed intelligence package are scoped per buyer. Pricing on request.',
    },
    contact: {
      heading: 'Get in touch',
      lead: 'We specialise in Korean and Turkish-language Telegram ecosystems —',
      sharp: 'infrastructure your current vendor is not monitoring.',
      sample: 'The first conversation starts with a sample intelligence report — no commitment required.',
      button: 'Request a sample report',
      mailto: `mailto:${CONTACT}?subject=Sample%20intelligence%20report`,
    },
  },
  ko: {
    title: '사기 인텔리전스 — Opsight',
    description:
      '금융기관, 규제기관, 준법감시팀을 위한 텔레그램 인텔리전스: 보이스피싱 네트워크, 대포통장, 암호화폐 세탁 — 매일 밤 모니터링, 피드·알림·증거 수준 보고서로 전달.',
    hero: {
      eyebrow: '사기 인텔리전스',
      title: '금융기관, 규제기관, 준법감시팀을 위한 텔레그램 인텔리전스.',
      lead: '손실, 규정 위반, 평판 훼손이 발생하기 전에 대응할 수 있도록, 사기가 조직되는 텔레그램 생태계를 상시 모니터링합니다.',
      live: '매일 밤 수집합니다. 이 페이지의 모든 수치는 실제 저장소에서 가져오며, 작성일이 함께 표시됩니다.',
      primary: '샘플 보고서 요청',
    },
    what: {
      heading: '서비스 소개',
      lead: '인텔리전스가 이동하는 순서대로, 네 가지.',
      blocks: [
        { title: '수집', body: '텔레그램 채널 전반의 보이스피싱·대포통장·자금세탁 네트워크를 실시간 추적합니다. 이미지 속에 숨겨진 은행 계좌, 지갑, 전화번호까지 — 텍스트 기반 수집이 놓치는 증거를 포착합니다.' },
        { title: '연결', body: '채널과 시장을 넘나들며 은행 계좌, 암호화폐 주소, 전화번호를 교차 분석하여 자금 흐름 경로, 공유 세탁 인프라, 이름을 바꿔 수렴하는 운영자를 추적합니다.' },
        { title: '경보', body: '수집 주기 간 변화 탐지 — 신규 엔티티, 신뢰도 변동, 활동 급증, 역할 변화 — 그리고 운영자가 언제, 어디서 활동하는지 보여주는 채널별 활동 패턴.' },
        { title: '전달', body: '기계 판독 가능한 감시 목록(CSV, MISP IOC), 은행별 알림 피드, STIX 번들, 인증된 REST API와 SIEM/SOAR용 웹훅, 그리고 모든 발견 사항에 신뢰도 점수·감사 추적·법적 참조를 담은 증거 수준 보고서.' },
      ],
    },
    watch: {
      heading: '워치리스트 모니터링',
      lead: '관심 있는 계좌, 전화번호, 지갑 주소, 채널을 알려주시면 매일 밤 플랫폼이 수집한 전체 데이터와 대조하고, 새로운 기록이 생기면 알려드립니다.',
      blocks: [
        { title: '매일 밤 확인하는 목록', body: '목록은 한 번만 등록하면 됩니다. 각 식별자는 입력된 형태 그대로 읽으며, 전화번호와 계좌번호 둘 다로 해석될 수 있는 번호는 두 가지 모두로 감시하고, 매일 밤 전체 수집 데이터와 대조합니다.' },
        { title: '기준선, 그리고 새 기록', body: '등록 시점에 플랫폼이 이미 알고 있던 내용은 기준선으로 표시하고, 그 이후에 들어온 것만 새 기록으로 셉니다. 알림이 왔다면 실제로 무언가 바뀌었다는 뜻입니다.' },
        { title: '메일은 건수만, 상세는 로그인 후', body: '매일 밤 메일에는 새 기록의 건수만 담기며, 어떤 식별자인지는 적지 않습니다. 각 연결의 근거 기록을 포함한 상세 내용은 본인 로그인 후 콘솔에서 확인합니다.' },
        { title: '월 1페이지 요약', body: '목록별 월간 1페이지 요약: 감시 대상, 플랫폼이 파악한 대상, 변화의 건수와 종류를 정리해 출력하거나 보관할 수 있습니다.' },
      ],
      note: '"미확인"은 플랫폼이 수집 범위에서 해당 식별자를 관측하지 못했다는 뜻이며, 문제가 없다는 뜻은 아닙니다.',
    },
    coverage: {
      heading: '커버리지',
      lead: '아래 시장에서 적극적으로 수집합니다. 터키어 생태계는 모니터링 중이며 구독 범위에 포함할 수 있습니다.',
      blocks: [
        { title: '금융범죄 — 한국', body: '보이스피싱, 대포통장 거래, 유심 사기, 암호화폐 세탁. 동남아시아에 걸친 국경 간 조직. 바로 연동 가능한 은행 계좌·전화번호 피드.' },
        { title: '자금세탁 & 암호화폐', body: 'USDT 경로 매핑, 하왈라 네트워크 탐지, 암호화폐 주소 클러스터링, 거래소 악용 모니터링. MISP 형식 IOC 피드.' },
        { title: '마약 밀매 네트워크', body: '공급망 매핑, 모집 채널, 다크넷-텔레그램 이동 추적, 국경 간 유통 분석.' },
        { title: '불법 도박 & 회색 시장', body: '무허가 운영자, 결제 채널 매핑, USDT 결제 경로, 에이전트 모집. 규제기관, 허가 운영자, 결제 처리업체에 유용합니다.' },
        { title: '금융범죄 — 튀르키예', body: '보이스피싱, 은행 사기, 신원 도용, 대포통장 모집. 운영자 핸들 간 엔티티 해석을 포함한 터키어 모니터링.' },
        { title: '고객의 시장', body: '고객의 생태계, 언어, 위협 모델. 위에 없는 시장도 전용 파이프라인을 구축합니다 — 범위를 알려주세요.' },
      ],
    },
    numbers: {
      heading: '주요 수치',
      lead: '실시간 인텔리전스 수집으로 지속 업데이트됩니다.',
      entities: '추적 중인 엔티티',
      bank: '식별된 은행 계좌',
      phone: '활성 전화번호',
      crypto: '세탁 관련 암호화폐 주소',
      clusters: '매핑된 클러스터',
    },
    delivery: {
      heading: '전달 방식',
      body: '매일 밤. 구독은 고객의 시장과 관심 대상에 맞춰 이메일 또는 웹훅으로 전달됩니다: 신규 엔티티, 위험도 상승, 활동이 중단된 네트워크 — 점수화·중복 제거·증거 첨부. 선별 피드, 은행 리스크 브리프, 매니지드 인텔리전스 패키지는 고객별로 범위를 정합니다. 가격은 문의 시 안내합니다.',
    },
    contact: {
      heading: '문의하기',
      lead: '한국어 및 터키어 텔레그램 생태계 전문 —',
      sharp: '기존 벤더가 모니터링하지 않는 인프라입니다.',
      sample: '첫 상담 시 샘플 인텔리전스 보고서를 제공합니다 — 별도의 약정 없이.',
      button: '샘플 보고서 요청',
      mailto: `mailto:${CONTACT}?subject=%EC%83%98%ED%94%8C%20%EB%B3%B4%EA%B3%A0%EC%84%9C%20%EC%9A%94%EC%B2%AD`,
    },
  },
  tr: {
    title: 'Dolandırıcılık İstihbaratı — Opsight',
    description:
      'Finans kuruluşları, düzenleyiciler ve uyum ekipleri için Telegram istihbaratı: sesli dolandırıcılık ağları, sahte hesaplar, kripto aklama — her gece izlenir; besleme, uyarı ve kanıt düzeyinde raporlarla teslim edilir.',
    hero: {
      eyebrow: 'Dolandırıcılık istihbaratı',
      title: 'Finans kuruluşları, düzenleyiciler ve uyum ekipleri için Telegram istihbaratı.',
      lead: 'Kayıplar, ihlaller veya itibar zararı oluşmadan harekete geçebilmeniz için, dolandırıcılığın örgütlendiği Telegram ekosistemlerinin sürekli izlenmesi.',
      live: 'Her gece toplanır. Bu sayfadaki her rakam canlı depodan gelir ve tarihlidir — broşürden değil.',
      primary: 'Örnek rapor isteyin',
    },
    what: {
      heading: 'Ne yapıyoruz',
      lead: 'İstihbaratın izlediği sırayla, dört şey.',
      blocks: [
        { title: 'Topla', body: 'Telegram kanalları genelinde sesli dolandırıcılık, sahte hesap ve aklama ağlarının gerçek zamanlı takibi — görsellerde gizlenmiş banka hesapları, cüzdanlar ve telefon numaraları dahil; yalnızca metin tarayan araçların kaçırdığı kanıt.' },
        { title: 'Bağla', body: 'Banka hesapları, kripto adresleri ve telefon numaraları kanallar ve pazarlar arasında çapraz eşleştirilir: para akışı yolları, paylaşılan aklama altyapısı ve yeni adlar altında birleşen operatörler.' },
        { title: 'Uyar', body: 'Toplama döngüleri arasında değişim tespiti — yeni varlıklar, güvenilirlik değişimleri, aktivite patlamaları, rol yükselmeleri — ve operatörlerin ne zaman çalıştığını, nereden koordine ettiğini gösteren kanal bazlı aktivite kalıpları.' },
        { title: 'Teslim et', body: 'Makine tarafından okunabilir izleme listeleri (CSV, MISP IOC), bankaya özel uyarı beslemeleri, STIX paketleri, kimlik doğrulamalı REST API ve SIEM/SOAR için webhook; her bulgu için güvenilirlik puanı, denetim izi ve yasal referans eşlemesi içeren kanıt düzeyinde raporlar.' },
      ],
    },
    coverage: {
      heading: 'Kapsam',
      lead: 'Aşağıdaki pazarlarda aktif toplama; Türkçe ekosistemler izlenmektedir ve bir aboneliğe dahil edilebilir.',
      blocks: [
        { title: 'Mali suç — Kore', body: 'Sesli dolandırıcılık, sahte hesap ticareti, SIM dolandırıcılığı, kripto aklama; Güneydoğu Asya\'ya uzanan sınır ötesi operasyonlar. Doğrudan entegre edilebilir banka hesabı ve telefon numarası beslemeleri.' },
        { title: 'Kara para aklama & kripto', body: 'USDT koridor haritalama, hawala ağ tespiti, kripto adres kümeleme, borsa kötüye kullanım izleme. MISP formatında IOC beslemeleri.' },
        { title: 'Uyuşturucu kaçakçılığı ağları', body: 'Tedarik zinciri haritalama, işe alım kanalları, darknet–Telegram geçiş takibi, sınır ötesi dağıtım analizi.' },
        { title: 'Yasadışı bahis & gri piyasalar', body: 'Lisanssız operatörler, ödeme kanalı haritalama, USDT ödeme koridorları, acente ağları. Düzenleyiciler, lisanslı operatörler ve ödeme işlemcileri için.' },
        { title: 'Mali suç — Türkiye', body: 'Sesli dolandırıcılık, banka dolandırıcılığı, kimlik hırsızlığı ve kurye ağları; operatör hesapları arası varlık çözümlemesiyle Türkçe izleme.' },
        { title: 'Sizin pazarınız', body: 'Sizin ekosisteminiz, diliniz, tehdit modeliniz. Listelenmeyen pazarlar için özel hatlar — kapsamı bize söyleyin.' },
      ],
    },
    numbers: {
      heading: 'Rakamlarla',
      lead: 'Canlı istihbarat toplamasından sürekli güncellenir.',
      entities: 'Takip edilen varlık',
      bank: 'Tespit edilen banka hesabı',
      phone: 'Aktif telefon numarası',
      crypto: 'Aklama ile ilişkili kripto adresi',
      clusters: 'Haritalandırılmış küme',
    },
    delivery: {
      heading: 'Nasıl ulaşır',
      body: 'Her gece. Abonelik pazarınıza ve izleme listenize göre kapsamlanır; e-posta veya webhook ile gelir: yeni varlıklar, yükselen riskler ve sessizleşen ağlar — puanlanmış, yinelenenlerden arındırılmış, kanıt ekli. Seçilmiş beslemeler, banka risk brifingleri ve yönetilen istihbarat paketi alıcıya göre kapsamlanır. Fiyat talep üzerine.',
    },
    contact: {
      heading: 'İletişim',
      lead: 'Korece ve Türkçe Telegram ekosistemlerinde uzmanız —',
      sharp: 'mevcut tedarikçinizin izlemediği altyapı.',
      sample: 'İlk görüşmede örnek bir istihbarat raporu sunuyoruz — herhangi bir taahhüt gerektirmez.',
      button: 'Örnek rapor isteyin',
      mailto: `mailto:${CONTACT}?subject=%C3%96rnek%20istihbarat%20raporu`,
    },
  },
};
