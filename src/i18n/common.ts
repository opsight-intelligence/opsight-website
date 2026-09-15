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
  contact: { address: string; emailLabel: string; lineLabel: string; orEmail: string; copied: string; send: string; sending: string; sent: string; failed: string; subjectDefault: string };
}

export const common: Record<Locale, CommonCopy> = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    nav: { brand: 'OPSIGHT INTELLIGENCE', fraud: 'Fraud', procurement: 'Procurement', manufacturing: 'Manufacturing', opsentry: 'OpSentry', method: 'Method', about: 'About' },
    langNames: { en: 'English', ko: '한국어', tr: 'Türkçe' },
    footer: { rights: '© 2026 Opsight Intelligence. All rights reserved.', method: 'Built on public and free-tier sources.' },
    live: { badge: 'Live', lastWritten: 'last written', source: 'source' },
    contact: { address: 'utku@opsightintel.com', emailLabel: 'Your work email', lineLabel: 'One line about what you want to see', orEmail: 'Or write to', copied: 'Copied', send: 'Send the request', sending: 'Sending…', sent: 'Sent — we reply to the address you gave, usually within a day.', failed: 'That did not go through — please write to the address below.', subjectDefault: 'Sample request' },
  },
  ko: {
    htmlLang: 'ko',
    ogLocale: 'ko_KR',
    nav: { brand: 'OPSIGHT INTELLIGENCE', fraud: '사기 인텔리전스', procurement: '공공조달', manufacturing: '제조', opsentry: 'OpSentry', method: '방법론', about: '소개' },
    langNames: { en: 'English', ko: '한국어', tr: 'Türkçe' },
    footer: { rights: '© 2026 Opsight Intelligence. All rights reserved.', method: '공개 및 무료 데이터 소스로 구축했습니다.' },
    live: { badge: '실시간', lastWritten: '작성일', source: '출처' },
    contact: { address: 'utku@opsightintel.com', emailLabel: '업무용 이메일', lineLabel: '보고 싶은 내용 한 줄', orEmail: '또는 이메일로', copied: '복사됨', send: '요청 보내기', sending: '보내는 중…', sent: '보냈습니다 — 남겨주신 주소로 보통 하루 안에 답장드립니다.', failed: '전송되지 않았습니다 — 아래 주소로 보내주세요.', subjectDefault: '샘플 요청' },
  },
  tr: {
    htmlLang: 'tr',
    ogLocale: 'tr_TR',
    nav: { brand: 'OPSIGHT INTELLIGENCE', fraud: 'Dolandırıcılık', procurement: 'Kamu İhaleleri', manufacturing: 'Üretim', opsentry: 'OpSentry', method: 'Yöntem', about: 'Hakkında' },
    langNames: { en: 'English', ko: '한국어', tr: 'Türkçe' },
    footer: { rights: '© 2026 Opsight Intelligence. Tüm hakları saklıdır.', method: 'Açık ve ücretsiz kaynaklar üzerine kuruludur.' },
    live: { badge: 'Canlı', lastWritten: 'yazıldı', source: 'kaynak' },
    contact: { address: 'utku@opsightintel.com', emailLabel: 'İş e-postanız', lineLabel: 'Görmek istediğiniz şey, tek satır', orEmail: 'Ya da yazın', copied: 'Kopyalandı', send: 'Talebi gönder', sending: 'Gönderiliyor…', sent: 'Gönderildi — verdiğiniz adrese genellikle bir gün içinde yanıt veririz.', failed: 'Gönderilemedi — lütfen aşağıdaki adrese yazın.', subjectDefault: 'Örnek talebi' },
  },
};

// Path of a page in a locale. English is unprefixed; others carry /<locale>/.
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === 'en' ? clean : `/${locale}${clean}`;
}
