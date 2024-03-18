import Image from 'next/image';
import AuthorImage from '../../../../public/images/author.svg';

const LINK = 'https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B0%D1%82%D1%87%D0%B5%D1%82%D1%82,_%D0%A2%D0%B5%D1%80%D1%80%D0%B8';

export function Author() {
  return (
    <div className="author">

      <div className="author__citation author__citation--mobile">
        <div className="author__quotes" role="img" />
        <h2 className="author__citation-text title-type-2">
          <span className="author__citation-quotes">«</span>
          В начале карьеры мы&nbsp;понимаем, что&nbsp;делаем ерунду,
          но&nbsp;мы&nbsp;не&nbsp;знаем, как&nbsp;делать лучше
          <span className="author__citation-quotes">»</span>
        </h2>
      </div>

      <div className="author__info">
        <span className="author__image">
          <Image
            src={AuthorImage}
            alt="Автор"
          />
        </span>
        <div className="author__text">
          <p className="author__name text-type-2">Александр Шинкарев</p>
          <p className="author__description text-type-2">
            Автор курса, разработчик с 12-летним опытом, фанат&nbsp;
            <a className="author__link" href={LINK} target="_blank">Терри&nbsp;Пратчетта</a>
          </p>
        </div>
      </div>
    </div>
  );
}
