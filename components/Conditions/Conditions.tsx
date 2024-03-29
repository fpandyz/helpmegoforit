import { Card } from '../Card/Card';

const CONDITIONS_CARDS = [
  {
    title: 'Расскажите о\xA0себе ',
    description: 'Мы ищем разработчиков, которым интересно узнать новые\xA0подходы в\xA0работе.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdVzFawz_-6L-ltYAMJVh3w9QsSIbSH1nddSbUjnHAfHp3cew/viewform',
    linkText: 'в\xA0гугл\xA0форме',
  },
  {
    title: 'Мы выберем участников',
    description: 'На основе анкеты мы отберем участников, с\xA0которыми\xA0нам было бы интересно пообщаться в\xA0рамках тестирования курса.',
  },
  {
    title: 'Начинаем обучение',
    description: 'Мы добавим участников в\xA0закрытый телеграм-канал и\xA0предоставим доступ к\xA0материалам\xA0курса.',
  },
];

export function Conditions() {
  return (
    <section className="conditions">
      <div className="container conditions__wrapper">

        <h2 className="title-type-2 conditions__title">
          Как принять участие в&nbsp;тестировании
          {' '}
          <span className="conditions__title--not-visible-mobile">
            <br />
            материалов
          </span>
          {' '}
          курса
        </h2>

        <div className="conditions__cards">
          {CONDITIONS_CARDS.map((
            {
              title,
              link,
              linkText,
              description,
            },
          ) => (
            <Card
              key={description}
              title={title}
              link={link}
              linkText={linkText}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
