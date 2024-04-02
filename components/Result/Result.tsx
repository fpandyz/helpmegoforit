import Image from 'next/image';
import { Card } from '../Card/Card';
import ResultImageSrc from '../../public/images/result-image-small.png';

const RESULT_CARDS = [
  {
    description: 'Майндсет того, как именно работать, вне\xA0зависимости от\xA0используемых инструментов',
  },
  {
    description: 'Простая устойчивая к\xA0сбоям энтерпрайз-архитектура фронтенда с\xA0примерами',
  },
];

export function Result() {
  return (
    <section className="result">
      <div className="container result__wrapper">
        <picture className="result__image">
          <source
            srcSet="images/result-image-large.png"
            media="(min-width: 1366px)"
          />
          <Image src={ResultImageSrc} alt="Результат после курса" />
        </picture>
        <div className="result__cards">
          {RESULT_CARDS.map(({ description }) => (
            <Card
              className="result__card"
              key={description}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
