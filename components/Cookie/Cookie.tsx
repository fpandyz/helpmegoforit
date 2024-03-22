'use client';

import { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';

import { OptionYM } from '../../types/globals';

const cookieAccept = 'cookieAccept';

export const optionYandexMetrika: OptionYM = {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
};

function Cookie() {
  const [isCookie, setIsCookie] = useState(true);
  const [date, setDate] = useState<Date>();

  const isMetricsEnabled = process.env.METRICS_ENABLED === 'true';

  useEffect(() => {
    setDate(new Date());

    if (typeof getCookie(cookieAccept) === 'string') {
      setIsCookie(true);
    } else {
      setIsCookie(false);
    }
  }, []);

  if (isCookie) {
    return null;
  }

  return (
    <div>
      {!isCookie ? (
        <div className="cookie">
          <div className="cookie__inner">
            <div className="cookie__text">
              Мы используем файлы
              {' '}
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="documents/cookie-information-ru.pdf"
              >
                cookie
              </a>
              {' '}
              для аналитики и маркетинга, чтобы вам было удобно пользоваться нашим веб-сайтом.
            </div>

            <button
              type="button"
              className="cookie__accept"
              onClick={() => acceptCookie()}
            >
              Хорошо
            </button>

            <button
              type="button"
              className="cookie__reject"
              onClick={rejectCookie}
            >
              Отказаться
            </button>
          </div>
        </div>
      ) : <div />}
    </div>
  );

  function acceptCookie() {
    setCookie(cookieAccept, true);
    setIsCookie(true);

    if (isMetricsEnabled) {
      window.gtag('js', date);

      window.ym(96806068, 'init', optionYandexMetrika);
    }
  }

  function rejectCookie() {
    setCookie(cookieAccept, false);
    setIsCookie(true);
  }
}

export default Cookie;
