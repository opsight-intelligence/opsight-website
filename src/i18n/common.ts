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
  contact: { address: string; emailLabel: string; lineLabel: string; copy: string; copied: string; openMail: string; send: string; sending: string; sent: string; failed: string; fallback: string; subjectDefault: string };
}

export const common: Record<Locale, CommonCopy> = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    nav: { brand: 'OPSIGHT INTELLIGENCE', fraud: 'Fraud', procurement: 'Procurement', manufacturing: 'Manufacturing', opsentry: 'OpSentry', method: 'Method', about: 'About' },
    langNames: { en: 'English', ko: '한국어', tr: 'Türkçe' },
    footer: { rights: '© 2026 Opsight Intelligence. All rights reserved.', method: 'Built on public and free-tier sources.' },
    live: { badge: 'Live', lastWritten: 'last written', source: 'source' },
    contact: { address: 'utku@opsightintel.com', emailLabel: 'Your work email', lineLabel: 'One line about what you want to see', copy: 'Copy address', copied: 'Copied', openMail: 'Open in your mail app', send: 'Send the request', sending: 'Sending…', sent: 'Sent — we reply to the address you gave, usually within a day.', failed: 'That did not go through. Copy the address and write from your mail instead.', fallback: 'If nothing opens, copy the address and write from wherever you read mail. One email, one line — that is all.', subjectDefault: 'Sample request' },
  },
  ko: {
    htmlLang: 'ko',
    ogLocale: 'ko_KR',
    nav: { brand: 'OPSIGHT INTELLIGENCE', fraud: '사기 인텔리전스', procurement: '공공조달', manufacturing: '제조', opsentry: 'OpSentry', method: '방법론', about: '소개' },
    langNames: { en: 'English', ko: '한국어', tr: 'Türkçe' },
    footer: { rights: '© 2026 Opsight Intelligence. All rights reserved.', method: '공개 및 무료 데이터 소스로 구축했습니다.' },
    live: { badge: '실시간', lastWritten: '작성일', source: '출처' },
    contact: { address: 'utku@opsightintel.com', emailLabel: '업무용 이메일', lineLabel: '보고 싶은 내용 한 줄', copy: '주소 복사', copied: '복사됨', openMail: '메일 앱에서 열기', send: '요청 보내기', sending: '보내는 중…', sent: '보냈습니다 — 남겨주신 주소로 보통 하루 안에 답장드립니다.', failed: '전송되지 않았습니다. 주소를 복사해 평소 쓰는 메일에서 보내주세요.', fallback: '아무것도 열리지 않으면 주소를 복사해 평소 쓰는 메일에서 보내주세요. 이메일 하나, 한 줄이면 됩니다.', subjectDefault: '샘플 요청' },
  },
  tr: {
    htmlLang: 'tr',
    ogLocale: 'tr_TR',
    nav: { brand: 'OPSIGHT INTELLIGENCE', fraud: 'Dolandırıcılık', procurement: 'Kamu İhaleleri', manufacturing: 'Üretim', opsentry: 'OpSentry', method: 'Yöntem', about: 'Hakkında' },
    langNames: { en: 'English', ko: '한국어', tr: 'Türkçe' },
    footer: { rights: '© 2026 Opsight Intelligence. Tüm hakları saklıdır.', method: 'Açık ve ücretsiz kaynaklar üzerine kuruludur.' },
    live: { badge: 'Canlı', lastWritten: 'yazıldı', source: 'kaynak' },
    contact: { address: 'utku@opsightintel.com', emailLabel: 'İş e-postanız', lineLabel: 'Görmek istediğiniz şey, tek satır', copy: 'Adresi kopyala', copied: 'Kopyalandı', openMail: 'Posta uygulamasında aç', send: 'Talebi gönder', sending: 'Gönderiliyor…', sent: 'Gönderildi — verdiğiniz adrese genellikle bir gün içinde yanıt veririz.', failed: 'Gönderilemedi. Adresi kopyalayıp kullandığınız postadan yazın.', fallback: 'Hiçbir şey açılmazsa adresi kopyalayıp kullandığınız postadan yazın. Bir e-posta, bir satır — hepsi bu.', subjectDefault: 'Örnek talebi' },
  },
};

// Path of a page in a locale. English is unprefixed; others carry /<locale>/.
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === 'en' ? clean : `/${locale}${clean}`;
}
