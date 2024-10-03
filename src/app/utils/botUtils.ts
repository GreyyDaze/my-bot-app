export const detectBot = (userAgent: string): boolean =>
  /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent);
