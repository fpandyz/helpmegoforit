import { Card } from '../Card/Card';

const resultCards = [
  {
    description: 'Майндсет того, как именно работать вне\xA0зависимости от\xA0используемых инструментов',
  },
  {
    description: 'Простая устойчивая к\xA0сбоям энтерпрайз\xA0-\xA0архитектура фронтенда с\xA0примерами',
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
          <img srcSet="images/result-image-small.png" alt="result" />
        </picture>
        <div className="result__cards">
          {resultCards.map(({ description }) => (
            <Card
              key={description}
              description={description}
            />
          ))}
        </div>
      </div>
      <picture className="result__background">
        <source
          srcSet="images/result-bg-large.png"
          media="(min-width: 1366px)"
        />
        <img srcSet="images/result-bg-small.png" alt="resultBackground" />
      </picture>
    </section>
  );
}
