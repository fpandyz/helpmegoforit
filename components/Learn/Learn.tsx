import IconTraces from '../../public/images/learn-traces.svg';
import IconHeart from '../../public/images/learn-heart.svg';
import IconBox from '../../public/images/learn-box.svg';
import IconHand from '../../public/images/learn-hand.svg';
import IconQuestions from '../../public/images/learn-question.svg';
import { Author } from './components/Author/Author';
import { Card } from '../Card/Card';

const LEARN_CARDS = [
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
          <h2 className="title-type-2 learn__title learn__title--mobile">
            На курсе
            <br />
            вместе научимся
          </h2>

          <h2 className="title-type-2 learn__title">
            Вместе научимся
          </h2>

          {LEARN_CARDS.map((
            {
              description,
              icon,
            },
          ) => (
            <Card
              key={description}
              description={description}
              icon={icon}
            />
          ))}
        </div>
        <Author />
      </div>
    </section>
  );
}
