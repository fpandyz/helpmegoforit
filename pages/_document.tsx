/* eslint-disable @next/next/no-img-element */
/* eslint-disable @stylistic/max-len */
/* eslint-disable @next/next/inline-script-id */

import { optionYandexMetrika } from '@/components/Cookie/Cookie';
import {
  Html, Head, Main, NextScript,
} from 'next/document';
import Script from 'next/script';

export default function Document() {
  // const isMetricsEnabled = process.env.METRICS_ENABLED === 'true';
  const isMetricsEnabled = true;

  return (
    <Html lang="ru">
      <Head>
        <meta name="yandex-verification" content="d7c2b9f9a4891879" />
      </Head>
      <title>Курсы фронтенд разработчика бесплатно с нуля</title>
      <meta name="description" content="Обучение фронтенд разработке бесплатно! Курсы для тех, кто начинает с нуля или хочет улучшить свой код. Научитесь разворачивать фронтенд в облаке, тестировать, делать фронтенд независимый от бекенда." />
      <body>
        <Main />
        <NextScript />
        {process.env.HOST
        && !process.env.HOST.includes('localhost')
        && (
          <Script id="metrika-counter" strategy="afterInteractive">
            {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
           for (var j = 0; j < document.scripts.length; j++) 
           {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],
            k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              var isCookieAccept = document.cookie.includes('cookieAccept=true');

              if (${isMetricsEnabled} && isCookieAccept) {
                ym(96806068, "init", ${JSON.stringify(optionYandexMetrika)})
              }
            `}
          </Script>
        )}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/96806068"
              style={{
                position: 'absolute',
                left: '-9999px',
              }}
              alt=""
            />
          </div>
        </noscript>
        {' '}
      </body>
    </Html>
  );
}
