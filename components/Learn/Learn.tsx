import React from 'react';
import { Author } from './components/Author/Author';
import { Card } from '../Card/Card';

const LEARN_CARDS = [
  {
    description: ['Решать сложные задачи простыми шагами'],
    icon: '/images/learn-traces.webp',
  },
  {
    description: ['Делать независимый от\xA0бекенда фронтенд'],
    icon: '/images/learn-heart.webp',
  },
  {
    description: ['Разворачивать', 'фронтенд в облаке'],
    icon: '/images/learn-box.webp',
  },
  {
    description: ['Тестировать свой код'],
    icon: '/images/learn-hand.webp',
  },
  {
    description: ['Делать лучше'],
    icon: '/images/learn-question.webp',
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
