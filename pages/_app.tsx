import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  );
}
