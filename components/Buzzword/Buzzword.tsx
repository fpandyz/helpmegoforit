import clsx from 'clsx';
import Image from 'next/image';
import BuzzwordImageMobileSrc from '../../public/images/buzzword-image-mobile.webp';
import BuzzwordImageSmallSrc from '../../public/images/buzzword-image-small.webp';
import BuzzwordImageLargeSrc from '../../public/images/buzzword-image-large.webp';

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
      <div className="container buzzword__wrapper">

        <Image
          src={BuzzwordImageMobileSrc}
          className="buzzword__image buzzword__image--mobile"
          id="image-mobile"
          alt="После курса в резюме добавится"
        />
        <Image
          src={BuzzwordImageSmallSrc}
          className="buzzword__image buzzword__image--small"
          id="image-small"
          alt="После курса в резюме добавится"
        />
        <Image
          src={BuzzwordImageLargeSrc}
          className="buzzword__image buzzword__image--large"
          id="image-large"
          alt="После курса в резюме добавится"
        />

        <h2 className="title-type-2 buzzword__title ">
          Buzzwords
        </h2>
        <div className="buzzword__tabs">
          {BUZZWORDS_CARDS.map(({ description, link }) => (
            <a
              href={link}
              target="_blank"
              key={description}
              className={clsx('text-type-2 buzzword__tab-item', {
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
