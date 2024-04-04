import Image from 'next/image';
import { Card } from '../Card/Card';
import ResultImageSmallSrc from '../../public/images/result-image-small.png';
import ResultImageLargeSrc from '../../public/images/result-image-large.png';

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
        <Image
          src={ResultImageSmallSrc}
          className="result__image result__image--small"
          alt="Результат после курса"
        />
        <Image
          src={ResultImageLargeSrc}
          className="result__image result__image--desktop"
          alt="Результат после курса"
        />

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
