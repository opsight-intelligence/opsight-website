// OpSentry page copy — /opsentry (English only for now: its audience is
// developers and its channels are GitHub, PyPI and Homebrew; a Korean mirror
// is a follow-up).
//
// A faithful port of the 2026 opsentry.html per the copy inventory: the
// dense sections kept, the two value-less tiles given their numbers, the
// anonymous testimonial replaced by the plain fact it described, and the
// plan buttons pointed at something real (the repo, or a mail). The plan
// prices stay as they were — OpSentry sits outside the intelligence lines'
// "no numbers until tested" rule and the operator has not decided otherwise.

export interface Block { title: string; body: string }
export interface Plan { name: string; price: string; per: string; items: string[]; cta: string; href: string; primary?: boolean }
export interface OpsentryCopy {
  title: string;
  description: string;
  hero: { eyebrow: string; title: string; lead: string; sub: string; primary: string; primaryHref: string; secondary: string; secondaryHref: string };
  tiles: { value: string; label: string }[];
  facts: string[];
  deterministic: { heading: string; p1: string; p2: string; p3: string };
  problem: { heading: string; lead: string; blocks: Block[] };
  layers: { heading: string; lead: string; blocks: Block[] };
  redteam: { heading: string; lead: string; link: string; href: string; blocks: Block[] };
  production: { heading: string; blocks: Block[] };
  install: { heading: string; lead: string; items: { label: string; cmd: string }[] };
  governance: { heading: string; lead: string; blocks: Block[] };
  blocked: { heading: string; blocks: Block[] };
  plans: { heading: string; lead: string; items: Plan[] };
  other: { heading: string; p1: string; p2: string };
  cta: { heading: string; lead: string; primary: string; primaryHref: string; secondary: string; secondaryHref: string };
}

const REPO = 'https://github.com/opsight-intelligence/opsentry';
const CONTACT = 'utku@opsightintel.com'; // becomes contact@ once the alias is confirmed

export const opsentryEn: OpsentryCopy = {
  title: 'OpSentry — Security Guardrails for AI Coding Assistants',
  description: 'Three layers of defense for AI coding agents: runtime guardrails, CI/CD composition analysis, OS-level sandbox profiles. From a single YAML config. Apache 2.0.',
  hero: {
    eyebrow: 'OpSentry',
    title: 'Three layers of defense for AI coding agents — detect, prevent, and make dangerous actions architecturally impossible.',
    lead: 'Competitors match patterns. OpSentry makes entire attack classes impossible.',
    sub: 'Runtime guardrails. CI/CD composition analysis. OS-level sandbox profiles. From a single YAML config.',
    primary: 'Install free', primaryHref: '#install',
    secondary: 'View on GitHub', secondaryHref: REPO,
  },
  tiles: [
    { value: '3', label: 'Defense layers' },
    { value: '8', label: 'Red-team attack classes defeated' },
    { value: '203', label: 'Automated tests' },
    { value: '3', label: 'Sandbox platforms (macOS, Linux, Docker)' },
  ],
  facts: [
    'Used internally at Opsight Intelligence, deployed ahead of an ISO 27001 renewal: when the auditor asked how AI assistant access to credentials and production systems is controlled, the answer was the incident log and the guardrail config.',
    'Built by the team behind the fraud and manufacturing intelligence platforms.',
    'Apache 2.0 — open source.',
  ],
  deterministic: {
    heading: 'Why "deterministic" matters',
    p1: 'Most AI coding tools can only be guided with rules they may or may not follow. If the AI is confused, hallucinating, or misunderstands context — the rules don\'t hold.',
    p2: 'Claude Code is different. Its PreToolUse hook architecture intercepts every tool call before execution. OpSentry\'s bash scripts inspect each call and block with exit code 2 if it matches a dangerous pattern.',
    p3: 'The AI cannot bypass this. Exit code 2 is final. This is enforcement, not advice.',
  },
  problem: {
    heading: 'The problem',
    lead: 'AI coding assistants have full access to your development environment.',
    blocks: [
      { title: 'Secret exposure', body: 'AI can read .env files, credentials.json, SSH keys, API tokens, and cloud configs. One wrong move and secrets end up in logs or commits.' },
      { title: 'Destructive commands', body: 'Nothing stops the AI from running rm -rf, DROP TABLE, git push --force, or chmod 777. One hallucination away from data loss.' },
      { title: 'Data exfiltration', body: 'AI can curl files to external servers, base64-encode secrets, write to /tmp, or pipe data through netcat. No audit trail.' },
      { title: 'Zero visibility', body: 'Security teams have no way to see what the AI accessed, what commands it ran, or what it tried to do. Compliance auditors ask questions you cannot answer.' },
      { title: 'Zero enforcement', body: 'Other tools give the AI rules to follow. Rules are advisory. An AI that ignores them faces no consequence. OpSentry\'s hooks make "no" mean no — at the execution layer.' },
    ],
  },
  layers: {
    heading: 'Three layers of defense',
    lead: 'Each layer uses a different detection strategy. Defense in depth means an attacker must defeat all three — not just one.',
    blocks: [
      { title: 'Detect — runtime guardrails', body: '8 hook scripts + 18 behavioral rules + 70+ permission denials. Pre-execution pattern matching blocks known attack vectors before they run. Battle-tested against 8 adversarial attack classes.' },
      { title: 'Prevent — CI/CD analysis', body: 'Cross-file AST composition analysis at PR time. Import-graph-aware — catches exfiltration patterns assembled across multiple files. Auto-fix and merge gating.' },
      { title: 'Make impossible — sandbox profiles', body: 'Generated platform-specific sandbox configs (macOS sandbox-exec, Linux bubblewrap, Docker). Dangerous actions are denied at the OS kernel level — not detected, denied.' },
    ],
  },
  redteam: {
    heading: 'Red-team tested',
    lead: 'We attacked our own framework with 8 adversarial attack classes and documented every finding, patch, and residual risk.',
    link: 'Read the full report', href: `${REPO}/blob/main/docs/red-team-log.md`,
    blocks: [
      { title: '8 attacks, 8 patched', body: 'Indirect file reads, content blind spots, prompt injection, salami attacks, env poisoning, symlink redirection, persistence, and resource exhaustion — all patched, all documented.' },
      { title: '203 automated tests', body: '168 hook tests plus 42 cross-file composition tests plus 23 network-exposure tests. Covers full-path evasion, encoding, PII formats, pipe logic, symlink bypass, and more.' },
      { title: 'Published evidence', body: 'No other AI-agent security tool publishes adversarial testing evidence. Our red-team log is public — attack vectors, patches, and an honest residual-risk assessment.' },
    ],
  },
  production: {
    heading: 'Built for production',
    blocks: [
      { title: 'Protection levels', body: 'Choose strict (regulated environments), balanced (recommended default), or permissive (evaluation). One config field controls the entire security posture.' },
      { title: 'Filesystem immutability', body: 'Guardrail files are locked with OS-level immutability flags (chflags uchg on macOS, chattr +i on Linux). Even root cannot modify them without explicitly unlocking first.' },
      { title: 'Compliance patrol', body: 'Scheduled posture assessment scans for unexpected persistence, hook tampering (sha256 hash verification), and immutability drift. Runs on launchd (macOS) or cron (Linux).' },
    ],
  },
  install: {
    heading: 'Install in 2 minutes',
    lead: 'Four ways to get started.',
    items: [
      { label: 'pip (recommended)', cmd: 'pip install opsentry && opsentry install' },
      { label: 'Homebrew', cmd: 'brew tap opsight-intelligence/opsentry && brew install opsentry' },
      { label: 'Git clone', cmd: 'git clone https://github.com/opsight-intelligence/opsentry && cd opsentry && ./install.sh' },
      { label: 'GitHub Action (CI/CD)', cmd: 'uses: opsight-intelligence/opsentry-action@v1' },
    ],
  },
  governance: {
    heading: 'AI governance, not just security',
    lead: 'Regulators are not asking if you use AI. They are asking how you control it.',
    blocks: [
      { title: 'Korean AI Basic Act', body: 'Effective January 2026. Article-by-article compliance mapping: Art. 31 (transparency), Art. 32 (safety), Art. 34 (high-impact AI obligations), Art. 35 (impact assessment).' },
      { title: 'EU AI Act', body: 'Enforcement began August 2025. High-risk AI systems require documented risk controls and human oversight. OpSentry\'s three-layer enforcement and incident logging map to those obligations.' },
      { title: 'ISO 27001 / SOC 2', body: 'Auditors want evidence that AI tools are governed. OpSentry generates JSON incident logs, tracks every blocked action, and provides a verifiable control framework.' },
      { title: 'Full audit trail', body: 'Every blocked action is logged with timestamp, hook name, reason, and detail. Export-ready for compliance reviews, internal audits, and regulatory submissions.' },
    ],
  },
  blocked: {
    heading: 'What gets blocked',
    blocks: [
      { title: 'Sensitive files', body: '.env, credentials, certificates, SSH keys, cloud configs, database connection strings, secrets directories.' },
      { title: 'Dangerous commands', body: 'rm -rf, sudo, chmod 777, kill -9, disk ops, pipe-to-shell, DROP TABLE, TRUNCATE, DELETE without WHERE.' },
      { title: 'Data exfiltration', body: 'curl/wget uploads, base64 encoding of secrets, /tmp writes, clipboard exfiltration, netcat channels.' },
      { title: 'Untrusted packages', body: 'pip/npm/gem from git URLs, custom registries, or direct downloads. Standard registries allowed.' },
      { title: 'Environment escape', body: 'SSH/SCP, docker run/exec/build, production env vars, destructive terraform/kubectl.' },
      { title: 'PII leakage', body: 'Social Security Numbers, credit card numbers, Korean Resident Registration Numbers written into code.' },
    ],
  },
  plans: {
    heading: 'Plans',
    lead: 'Start free, upgrade when you need CI/CD enforcement and compliance.',
    items: [
      { name: 'Community', price: 'Free', per: '', items: ['8 hook scripts', '18 behavioral rules', '70+ deny patterns', '3 slash commands', 'Local incident logging', '168 automated tests', 'Apache 2.0 license'], cta: 'Install now', href: '#install' },
      { name: 'Team', price: '$15', per: '/dev/mo', items: ['Everything in Community', 'CI/CD agents — blocks the PR before it merges, not after', 'Sandbox profile generator (macOS, Linux, Docker)', 'Cross-file exfiltration detection (AST)', 'LLM-powered code review (bring your own key)', 'Auto-fix on PR', 'Compliance mapping (ISO 27001, EU AI Act, Korean AI Basic Act)', 'Vertical config packs (fintech, healthcare, manufacturing)', '48-hour email support', 'Up to 50 developers'], cta: 'Ask about Team', href: `mailto:${CONTACT}?subject=OpSentry%20Team`, primary: true },
      { name: 'Business', price: '$25', per: '/dev/mo', items: ['Everything in Team', 'Sandbox profiles + centralized policy push', 'Centralized incident dashboard across teams', 'Team compliance view & rule analytics', 'Compliance reports (PDF/CSV) — evidence packages for auditors', 'SSO/SAML & admin policy push', 'Custom rule development', 'SLA support (24h response, 4h critical)'], cta: 'Contact sales', href: `mailto:${CONTACT}?subject=OpSentry%20Business` },
    ],
  },
  other: {
    heading: 'Using Copilot, Cursor, or Windsurf?',
    p1: 'Full three-layer deterministic enforcement requires Claude Code\'s PreToolUse hook architecture.',
    p2: 'For teams using other AI coding assistants, OpSentry\'s advisory policy layer is available as a starting point. Full enforcement requires Claude Code.',
  },
  cta: {
    heading: 'Ready to secure your AI workflow?',
    lead: 'Install the community edition in 2 minutes. No signup. No account. Just clone and run.',
    primary: 'GitHub — opsight-intelligence/opsentry', primaryHref: REPO,
    secondary: 'Enterprise teams', secondaryHref: `mailto:${CONTACT}?subject=OpSentry%20Enterprise`,
  },
};


// Korean mirror. Product names, commands, statute and standard names stay as
// they are. Written by the agent on 2026-09-15; needs a native read.
export const opsentryKo: OpsentryCopy = {
  title: 'OpSentry — AI 코딩 어시스턴트 보안 가드레일',
  description: 'AI 코딩 에이전트를 위한 3계층 방어: 런타임 가드레일, CI/CD 구성 분석, OS 수준 샌드박스 프로필. YAML 설정 하나로. Apache 2.0.',
  hero: {
    eyebrow: 'OpSentry',
    title: 'AI 코딩 에이전트를 위한 3계층 방어 — 탐지하고, 차단하고, 위험한 행동을 구조적으로 불가능하게.',
    lead: '경쟁 도구는 패턴을 맞춥니다. OpSentry는 공격 유형 전체를 불가능하게 만듭니다.',
    sub: '런타임 가드레일. CI/CD 구성 분석. OS 수준 샌드박스 프로필. YAML 설정 하나로.',
    primary: '무료 설치', primaryHref: '#install',
    secondary: 'GitHub에서 보기', secondaryHref: REPO,
  },
  tiles: [
    { value: '3', label: '방어 계층' },
    { value: '8', label: '방어한 레드팀 공격 유형' },
    { value: '203', label: '자동화 테스트' },
    { value: '3', label: '샌드박스 플랫폼 (macOS, Linux, Docker)' },
  ],
  facts: [
    'Opsight Intelligence 내부에서 ISO 27001 갱신 심사 전에 도입했습니다. 심사관이 AI 어시스턴트의 자격증명·운영 시스템 접근을 어떻게 통제하느냐고 물었을 때, 답은 사고 로그와 가드레일 설정이었습니다.',
    '사기·제조 인텔리전스 플랫폼을 만든 팀이 만들었습니다.',
    'Apache 2.0 — 오픈소스.',
  ],
  deterministic: {
    heading: '"결정론적"이 중요한 이유',
    p1: '대부분의 AI 코딩 도구는 지킬 수도, 안 지킬 수도 있는 규칙으로만 안내할 수 있습니다. AI가 혼란스럽거나, 환각을 일으키거나, 맥락을 오해하면 — 규칙은 무너집니다.',
    p2: 'Claude Code는 다릅니다. PreToolUse 훅 아키텍처가 실행 전에 모든 도구 호출을 가로챕니다. OpSentry의 bash 스크립트가 각 호출을 검사하고, 위험한 패턴에 해당하면 종료 코드 2로 차단합니다.',
    p3: 'AI는 이것을 우회할 수 없습니다. 종료 코드 2는 최종입니다. 이것은 조언이 아니라 강제입니다.',
  },
  problem: {
    heading: '문제',
    lead: 'AI 코딩 어시스턴트는 개발 환경 전체에 접근할 수 있습니다.',
    blocks: [
      { title: '비밀 노출', body: 'AI는 .env 파일, credentials.json, SSH 키, API 토큰, 클라우드 설정을 읽을 수 있습니다. 한 번의 실수로 비밀이 로그나 커밋에 남습니다.' },
      { title: '파괴적 명령', body: 'rm -rf, DROP TABLE, git push --force, chmod 777을 막는 것은 아무것도 없습니다. 환각 한 번이면 데이터가 사라집니다.' },
      { title: '데이터 유출', body: 'AI는 파일을 외부 서버로 curl하고, 비밀을 base64로 인코딩하고, /tmp에 쓰고, netcat으로 흘려보낼 수 있습니다. 감사 추적은 없습니다.' },
      { title: '가시성 제로', body: '보안팀은 AI가 무엇에 접근했고, 어떤 명령을 실행했고, 무엇을 시도했는지 볼 방법이 없습니다. 심사관의 질문에 답할 수 없습니다.' },
      { title: '강제 제로', body: '다른 도구는 AI에게 따를 규칙을 줍니다. 규칙은 권고일 뿐입니다. 무시해도 아무 결과가 없습니다. OpSentry의 훅은 실행 계층에서 "안 됨"을 진짜 안 됨으로 만듭니다.' },
    ],
  },
  layers: {
    heading: '3계층 방어',
    lead: '각 계층은 다른 탐지 전략을 씁니다. 심층 방어란 공격자가 하나가 아니라 셋 모두를 뚫어야 한다는 뜻입니다.',
    blocks: [
      { title: '탐지 — 런타임 가드레일', body: '훅 스크립트 8개 + 행동 규칙 18개 + 권한 거부 70개 이상. 실행 전 패턴 매칭으로 알려진 공격 벡터를 실행 전에 차단합니다. 8가지 적대적 공격 유형으로 검증.' },
      { title: '차단 — CI/CD 분석', body: 'PR 시점의 파일 간 AST 구성 분석. 임포트 그래프를 인식하여 여러 파일에 걸쳐 조립된 유출 패턴을 잡습니다. 자동 수정과 병합 게이팅.' },
      { title: '불가능하게 — 샌드박스 프로필', body: '플랫폼별 샌드박스 설정 생성(macOS sandbox-exec, Linux bubblewrap, Docker). 위험한 행동은 OS 커널 수준에서 거부됩니다 — 탐지가 아니라 거부.' },
    ],
  },
  redteam: {
    heading: '레드팀 검증',
    lead: '8가지 적대적 공격 유형으로 우리 프레임워크를 직접 공격하고, 모든 발견·패치·잔여 위험을 문서화했습니다.',
    link: '전체 보고서 읽기', href: `${REPO}/blob/main/docs/red-team-log.md`,
    blocks: [
      { title: '8개 공격, 8개 패치', body: '간접 파일 읽기, 콘텐츠 사각지대, 프롬프트 인젝션, 살라미 공격, 환경 오염, 심볼릭 링크 우회, 지속성, 자원 고갈 — 모두 패치, 모두 문서화.' },
      { title: '자동화 테스트 203개', body: '훅 테스트 168개, 파일 간 구성 테스트 42개, 네트워크 노출 테스트 23개. 전체 경로 회피, 인코딩, PII 형식, 파이프 로직, 심볼릭 링크 우회 등을 다룹니다.' },
      { title: '공개된 근거', body: '적대적 테스트 근거를 공개하는 AI 에이전트 보안 도구는 달리 없습니다. 레드팀 로그는 공개되어 있습니다 — 공격 벡터, 패치, 솔직한 잔여 위험 평가.' },
    ],
  },
  production: {
    heading: '운영 환경을 위한 설계',
    blocks: [
      { title: '보호 수준', body: 'strict(규제 환경), balanced(권장 기본값), permissive(평가) 중 선택. 설정 필드 하나가 보안 태세 전체를 결정합니다.' },
      { title: '파일시스템 불변성', body: '가드레일 파일은 OS 수준 불변 플래그로 잠깁니다(macOS chflags uchg, Linux chattr +i). root조차 명시적으로 잠금을 풀지 않으면 수정할 수 없습니다.' },
      { title: '컴플라이언스 순찰', body: '예기치 않은 지속성, 훅 변조(sha256 해시 검증), 불변성 드리프트를 정기적으로 점검합니다. launchd(macOS) 또는 cron(Linux)으로 실행.' },
    ],
  },
  install: {
    heading: '2분 안에 설치',
    lead: '네 가지 시작 방법.',
    items: [
      { label: 'pip (권장)', cmd: 'pip install opsentry && opsentry install' },
      { label: 'Homebrew', cmd: 'brew tap opsight-intelligence/opsentry && brew install opsentry' },
      { label: 'Git clone', cmd: 'git clone https://github.com/opsight-intelligence/opsentry && cd opsentry && ./install.sh' },
      { label: 'GitHub Action (CI/CD)', cmd: 'uses: opsight-intelligence/opsentry-action@v1' },
    ],
  },
  governance: {
    heading: '보안을 넘어 AI 거버넌스',
    lead: '규제기관은 AI를 쓰는지 묻지 않습니다. 어떻게 통제하는지 묻습니다.',
    blocks: [
      { title: '한국 AI 기본법', body: '2026년 1월 시행. 조문별 대응 매핑: 제31조(투명성), 제32조(안전성), 제34조(고영향 AI 의무), 제35조(영향평가).' },
      { title: 'EU AI법', body: '2025년 8월 집행 시작. 고위험 AI 시스템에는 문서화된 위험 통제와 인간 감독이 요구됩니다. OpSentry의 3계층 강제와 사고 로깅이 그 의무에 대응합니다.' },
      { title: 'ISO 27001 / SOC 2', body: '심사관은 AI 도구가 통제된다는 증거를 원합니다. OpSentry는 JSON 사고 로그를 생성하고, 차단된 모든 행동을 추적하며, 검증 가능한 통제 프레임워크를 제공합니다.' },
      { title: '완전한 감사 추적', body: '차단된 모든 행동이 타임스탬프, 훅 이름, 사유, 세부 내용과 함께 기록됩니다. 컴플라이언스 검토, 내부 감사, 규제 제출용으로 바로 내보낼 수 있습니다.' },
    ],
  },
  blocked: {
    heading: '무엇이 차단되나',
    blocks: [
      { title: '민감 파일', body: '.env, 자격증명, 인증서, SSH 키, 클라우드 설정, 데이터베이스 연결 문자열, secrets 디렉터리.' },
      { title: '위험한 명령', body: 'rm -rf, sudo, chmod 777, kill -9, 디스크 작업, 셸 파이프, DROP TABLE, TRUNCATE, WHERE 없는 DELETE.' },
      { title: '데이터 유출', body: 'curl/wget 업로드, 비밀의 base64 인코딩, /tmp 쓰기, 클립보드 유출, netcat 채널.' },
      { title: '신뢰할 수 없는 패키지', body: 'git URL, 사용자 지정 레지스트리, 직접 다운로드로부터의 pip/npm/gem. 표준 레지스트리는 허용.' },
      { title: '환경 이탈', body: 'SSH/SCP, docker run/exec/build, 운영 환경 변수, 파괴적 terraform/kubectl.' },
      { title: 'PII 유출', body: '주민등록번호, 신용카드 번호, 사회보장번호가 코드에 기록되는 것.' },
    ],
  },
  plans: {
    heading: '플랜',
    lead: '무료로 시작하고, CI/CD 강제와 컴플라이언스가 필요할 때 업그레이드하세요.',
    items: [
      { name: 'Community', price: '무료', per: '', items: ['훅 스크립트 8개', '행동 규칙 18개', '거부 패턴 70개 이상', '슬래시 명령 3개', '로컬 사고 로깅', '자동화 테스트 168개', 'Apache 2.0 라이선스'], cta: '지금 설치', href: '#install' },
      { name: 'Team', price: '$15', per: '/개발자/월', items: ['Community의 모든 것', 'CI/CD 에이전트 — 병합 후가 아니라 병합 전에 PR 차단', '샌드박스 프로필 생성기(macOS, Linux, Docker)', '파일 간 유출 탐지(AST)', 'LLM 코드 리뷰(자체 키 사용)', 'PR 자동 수정', '컴플라이언스 매핑(ISO 27001, EU AI법, 한국 AI 기본법)', '업종별 설정 팩(핀테크, 헬스케어, 제조)', '48시간 이메일 지원', '개발자 50명까지'], cta: 'Team 문의', href: `mailto:${CONTACT}?subject=OpSentry%20Team`, primary: true },
      { name: 'Business', price: '$25', per: '/개발자/월', items: ['Team의 모든 것', '샌드박스 프로필 + 중앙 정책 배포', '팀 전체 중앙 사고 대시보드', '팀 컴플라이언스 뷰 & 규칙 분석', '컴플라이언스 보고서(PDF/CSV) — 심사관용 증빙 패키지', 'SSO/SAML & 관리자 정책 배포', '맞춤 규칙 개발', 'SLA 지원(24시간 응답, 긴급 4시간)'], cta: '영업 문의', href: `mailto:${CONTACT}?subject=OpSentry%20Business` },
    ],
  },
  other: {
    heading: 'Copilot, Cursor, Windsurf를 쓰시나요?',
    p1: '완전한 3계층 결정론적 강제는 Claude Code의 PreToolUse 훅 아키텍처가 필요합니다.',
    p2: '다른 AI 코딩 어시스턴트를 쓰는 팀에게는 OpSentry의 권고 정책 계층을 출발점으로 제공합니다. 완전한 강제는 Claude Code에서만 가능합니다.',
  },
  cta: {
    heading: 'AI 워크플로를 지킬 준비가 되셨나요?',
    lead: '커뮤니티 에디션을 2분 안에 설치하세요. 가입도, 계정도 없이. 클론하고 실행하면 됩니다.',
    primary: 'GitHub — opsight-intelligence/opsentry', primaryHref: REPO,
    secondary: '엔터프라이즈 문의', secondaryHref: `mailto:${CONTACT}?subject=OpSentry%20Enterprise`,
  },
};

export const opsentry = { en: opsentryEn, ko: opsentryKo };
