import Image from 'next/image';
import AuthorImage from '../../../../public/images/author.svg';

const LINK = 'https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B0%D1%82%D1%87%D0%B5%D1%82%D1%82,_%D0%A2%D0%B5%D1%80%D1%80%D0%B8';

export function Author() {
  return (
    <div className="author">

      <div className="author__citation">
        <h2 className="title-type-2 author__text">
          <span className="author__quotes">«</span>
          В начале карьеры мы&nbsp;понимаем, что&nbsp;делаем ерунду,
          но&nbsp;мы&nbsp;не&nbsp;знаем, как&nbsp;делать лучше
          <span className="author__quotes">»</span>
        </h2>
      </div>

      <div className="author__info">
        <span className="author__image">
          <Image
            src={AuthorImage}
            alt="Автор"
          />
        </span>
        <div className="author__wrapper">
          <div className="text-type-2 author__name ">Александр Шинкарев</div>
          <div className="text-type-2 author__description">
            Автор курса, разработчик с 12-летним опытом, фанат&nbsp;
            <a className="link" href={LINK} target="_blank">Терри&nbsp;Пратчетта</a>
          </div>
        </div>
      </div>
    </div>
  );
}
