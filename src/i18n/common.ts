// Copy shared by every page: nav labels, footer, the language switch.
// One object per locale. Korean and Turkish written by the agent on
// 2026-09-15; both need a native read before the professional launch.

export type Locale = 'en' | 'ko' | 'tr';

export interface CommonCopy {
  htmlLang: string;
  ogLocale: string;
  nav: { brand: string; fraud: string; procurement: string; manufacturing: string; opsentry: string; method: string; about: string };
  langNames: Record<Locale, string>;
  footer: { rights: string; method: string };
  live: { badge: string; lastWritten: string; source: string };
}

export const common: Record<Locale, CommonCopy> = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    nav: { brand: 'OPSIGHT INTELLIGENCE', fraud: 'Fraud', procurement: 'Procurement', manufacturing: 'Manufacturing', opsentry: 'OpSentry', method: 'Method', about: 'About' },
    langNames: { en: 'English', ko: '한국어', tr: 'Türkçe' },
    footer: { rights: '© 2026 Opsight Intelligence. All rights reserved.', method: 'Built on public and free-tier sources.' },
    live: { badge: 'Live', lastWritten: 'last written', source: 'source' },
  },
  ko: {
    htmlLang: 'ko',
    ogLocale: 'ko_KR',
    nav: { brand: 'OPSIGHT INTELLIGENCE', fraud: '사기 인텔리전스', procurement: '공공조달', manufacturing: '제조', opsentry: 'OpSentry', method: '방법론', about: '소개' },
    langNames: { en: 'English', ko: '한국어', tr: 'Türkçe' },
    footer: { rights: '© 2026 Opsight Intelligence. All rights reserved.', method: '공개 및 무료 데이터 소스로 구축했습니다.' },
    live: { badge: '실시간', lastWritten: '작성일', source: '출처' },
  },
  tr: {
    htmlLang: 'tr',
    ogLocale: 'tr_TR',
    nav: { brand: 'OPSIGHT INTELLIGENCE', fraud: 'Dolandırıcılık', procurement: 'Kamu İhaleleri', manufacturing: 'Üretim', opsentry: 'OpSentry', method: 'Yöntem', about: 'Hakkında' },
    langNames: { en: 'English', ko: '한국어', tr: 'Türkçe' },
    footer: { rights: '© 2026 Opsight Intelligence. Tüm hakları saklıdır.', method: 'Açık ve ücretsiz kaynaklar üzerine kuruludur.' },
    live: { badge: 'Canlı', lastWritten: 'yazıldı', source: 'kaynak' },
  },
};

// Path of a page in a locale. English is unprefixed; others carry /<locale>/.
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === 'en' ? clean : `/${locale}${clean}`;
}
