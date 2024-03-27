import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import { useEffect } from 'react';
import router from 'next/router';

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
});
const isMetricsEnabled = process.env.NODE_ENV === 'production';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (document.cookie.includes('cookieAccept=true') && typeof window !== 'undefined' && isMetricsEnabled) {
        window.ym(96806068, 'hit', url);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  );
}
