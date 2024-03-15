import clsx from 'clsx';

const BUZZWORDS_CARDS = [
  {
    description: 'MobX',
    link: '',
  },
  {
    description: 'Swagger',
    link: '',
  },
  {
    description: 'GIT\xA0UI',
    link: '',
  },
  {
    description: 'TypeScript',
    link: '',
  },
  {
    description: 'Contract\xA0First',
    link: '',
  },
  {
    description: 'IDE\xA0Hotkeys',
    link: '',
  },
  {
    description: 'Isolated\xA0Sections',
    link: '',
  },
  {
    description: 'Kubernetes',
    link: '',
  },
  {
    description: 'React\xA0Curly\xA0Braces',
    link: 'https://habr.com/ru/articles/727542/',
  },
  {
    description: 'React',
    link: '',
  },
  {
    description: 'Cypress',
    link: '',
  },
  {
    description: 'Pipelines',
    link: '',
  },
  {
    description: 'Atomic\xA0&\xA0Conventional\xA0Commits',
    link: '',
  },
  {
    description: 'Components\xA0Hierarchy',
    link: '',
  },
  {
    description: 'TDD',
    link: 'https://techtrain.ru/talks/ec239e2202b04247889622d4240f2be3/?referer=/schedule/days/',
  },
  {
    description: 'Dev\xA0Container\xA0in\xA0VSCode',
    link: 'https://devoops.ru/talks/e0b9917700b943dca652404862954f03/?referer=/schedule/days/',
  },
];

export function Buzzword() {
  return (
    <section className="buzzword">
      <picture className="buzzword__image">
        <source
          srcSet="images/buzzword-image-large.png"
          media="(min-width: 1366px)"
        />
        <source
          srcSet="images/buzzword-image-small.png"
          media="(min-width: 768px)"
        />
        <img srcSet="images/buzzword-image-mobile.png" alt="После курса в резюме добавится" />
      </picture>
      <div className="container buzzword__wrapper">
        <h2 className="buzzword__title title-type-2">
          Buzzwords
        </h2>
        <div className="buzzword__tabs">
          {BUZZWORDS_CARDS.map(({ description, link }) => (
            <a
              href={link}
              key={description}
              className={clsx('buzzword__tab-item text-type-2', {
                'buzzword__tab-item--linked': link,
              })}
            >
              {description}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
