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

export const opsentry: OpsentryCopy = {
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
