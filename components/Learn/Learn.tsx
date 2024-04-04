import React from 'react';
import IconTraces from '../../public/images/learn-traces.svg';
import IconHeart from '../../public/images/learn-heart.svg';
import IconBox from '../../public/images/learn-box.svg';
import IconHand from '../../public/images/learn-hand.svg';
import IconQuestions from '../../public/images/learn-question.svg';
import { Author } from './components/Author/Author';
import { Card } from '../Card/Card';

const LEARN_CARDS = [
  {
    description: ['Решать сложные задачи простыми шагами'],
    icon: IconTraces,
  },
  {
    description: ['Делать независимый от\xA0бекенда фронтенд'],
    icon: IconHeart,
  },
  {
    description: ['Разворачивать', 'фронтенд в облаке'],
    icon: IconBox,
  },
  {
    description: ['Тестировать свой код'],
    icon: IconHand,
  },
  {
    description: ['Делать лучше'],
    icon: IconQuestions,
  },
];

export function Learn() {
  return (
    <section className="learn">
      <div className="container learn__wrapper">
        <div className="learn__inner">
          <h2 className="title-type-2 learn__title">
            <span className="learn__title--mobile">На курсе</span>
            вместе научимся
          </h2>

          {LEARN_CARDS.map((
            {
              description,
              icon,
            },
          ) => (
            <Card
              key={description[0]}
              description={description.map((line) => (
                <React.Fragment key={line}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              icon={icon}
            />
          ))}
        </div>
        <Author />
      </div>
    </section>
  );
}
