import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { Card } from '../Card/Card';
import IconArrow from '../../public/images/arrow.svg';

const RESULT_MOBILE_CARDS = [
  {
    description: 'Майндсет того, как именно работать вне\xA0зависимости от\xA0используемых инструментов',
  },
  {
    description: 'Простая устойчивая к\xA0сбоям энтерпрайз\xA0-\xA0архитектура фронтенда с\xA0примерами',
  },
];

export function ResultMobile() {
  const [viewRef, inView] = useInView(
    {
      threshold: 0.9,
      triggerOnce: true,
    },
  );
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (inView) {
      videoRef.current?.play();
    }
  }, [inView]);

  return (
    <section className="result-mobile">
      <div className="container result-mobile__wrapper">
        <h2 className="title-type-2 result-mobile__title">
          Результат после курса
        </h2>
        <div className="result-mobile__inner">
          <div className="result-mobile__cards">
            {RESULT_MOBILE_CARDS.map(({ description }) => (
              <Card
                key={description}
                description={description}
              />
            ))}
          </div>
          <span className="result-mobile__arrow">
            <Image
              src={IconArrow}
              fill
              alt="Стрелка, указывающая на следующий блок"
            />
          </span>
          <div
            ref={viewRef}
            className="result-mobile__video"
          >
            <video
              ref={videoRef}
              src="/video/puzzle.mp4"
              playsInline
              muted
            />
          </div>
        </div>
      </div>
    </section>
  );
}
