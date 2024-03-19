import Image from 'next/image';
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
            className="result-mobile__video"
          >
            <video
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
