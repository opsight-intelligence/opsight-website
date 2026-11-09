// Copy shared by every page: nav labels, footer, the language switch.
// One object per locale. Korean written by the agent on
// 2026-09-15; both need a native read before the professional launch.

export type Locale = 'en' | 'ko';

export interface CommonCopy {
  htmlLang: string;
  ogLocale: string;
  nav: { brand: string; fraud: string; procurement: string; manufacturing: string; opsentry: string; platform: string; console: string; method: string; about: string };
  langNames: Record<Locale, string>;
  footer: { rights: string; method: string };
  live: { badge: string; lastWritten: string; source: string };
  contact: { address: string; emailLabel: string; lineLabel: string; orEmail: string; copied: string; send: string; sending: string; sent: string; failed: string; subjectDefault: string };
}

export const common: Record<Locale, CommonCopy> = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    nav: { brand: 'OPSIGHT INTELLIGENCE', fraud: 'Fraud', procurement: 'Procurement', manufacturing: 'Manufacturing', opsentry: 'OpSentry', platform: 'Platform', console: 'Console', method: 'Method', about: 'About' },
    langNames: { en: 'English', ko: '한국어' },
    footer: { rights: '© 2026 Opsight Intelligence. All rights reserved.', method: 'Built on data collected by Opsight.' },
    live: { badge: 'Live', lastWritten: 'last written', source: 'source' },
    contact: { address: 'utku@opsightintel.com', emailLabel: 'Your work email', lineLabel: 'One line about what you want to see', orEmail: 'Or write to', copied: 'Copied', send: 'Send the request', sending: 'Sending…', sent: 'Sent — we reply to the address you gave, usually within a day.', failed: 'That did not go through — please write to the address below.', subjectDefault: 'Sample request' },
  },
  ko: {
    htmlLang: 'ko',
    ogLocale: 'ko_KR',
    nav: { brand: 'OPSIGHT INTELLIGENCE', fraud: '사기 인텔리전스', procurement: '공공조달', manufacturing: '제조', opsentry: 'OpSentry', platform: '플랫폼', console: '콘솔', method: '방법론', about: '소개' },
    langNames: { en: 'English', ko: '한국어' },
    footer: { rights: '© 2026 Opsight Intelligence. All rights reserved.', method: 'Opsight가 수집한 데이터로 구축했습니다.' },
    live: { badge: '라이브', lastWritten: '작성일', source: '출처' },
    contact: { address: 'utku@opsightintel.com', emailLabel: '업무용 이메일', lineLabel: '보고 싶은 내용 한 줄', orEmail: '또는 이메일로', copied: '복사됨', send: '요청 보내기', sending: '보내는 중…', sent: '보냈습니다 — 남겨주신 주소로 보통 하루 안에 답장드립니다.', failed: '전송되지 않았습니다 — 아래 주소로 보내주세요.', subjectDefault: '샘플 요청' },
  },
};

// Path of a page in a locale. English is unprefixed; others carry /<locale>/.
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === 'en' ? clean : `/${locale}${clean}`;
}
