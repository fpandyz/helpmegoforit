import Image from 'next/image';
import IconTraces from '../../public/images/learn-traces.svg';
import IconHeart from '../../public/images/learn-heart.svg';
import IconBox from '../../public/images/learn-box.svg';
import IconHand from '../../public/images/learn-hand.svg';
import IconQuestions from '../../public/images/learn-question.svg';
import { Author } from './components/Author/Author';

const learnCards = [
  {
    description: 'Решать сложные задачи простыми шагами',
    icon: IconTraces,
  },
  {
    description: 'Делать независимый от\xA0бекенда фронтенд',
    icon: IconHeart,
  },
  {
    description: 'Разворачивать фронтенд в\xA0облаке',
    icon: IconBox,
  },
  {
    description: 'Тестировать свой код',
    icon: IconHand,
  },
  {
    description: 'Делать лучше',
    icon: IconQuestions,
  },
];

export function Learn() {
  return (
    <section className="learn">
      <div className="container learn__wrapper">
        <div className="learn__inner">

          <h2 className="learn__title learn__title--mobile title-type-2">
            На курсе
            <br />
            вместе научимся
          </h2>

          <h2 className="learn__title title-type-2">
            Вместе научимся
          </h2>

          {learnCards.map((
            {
              description,
              icon,
            },
          ) => (
            <div key={description} className="learn__card">
              <span className="learn__description text-type-3">{description}</span>
              <span className="learn__icon">
                <Image
                  src={icon}
                  alt="cardIcon"
                  fill
                />
              </span>
            </div>
          ))}
        </div>
        <picture className="learn__background">
          <source
            srcSet="images/blue-bg-big.png"
            media="(min-width: 1920px)"
          />
          <img srcSet="images/blue-bg-small.png" alt="blueBackground" />
        </picture>
        <Author />
      </div>
    </section>
  );
}
