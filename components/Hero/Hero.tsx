import Image from 'next/image';
import IconArrow from '../../public/images/arrow.svg';

export function Hero() {
  return (
    <section className="hero">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero__video hero__video--mobile"
        poster="images/hero-poster-mobile.webp"
        src="video/hero-bg-mobile.mp4"
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero__video hero__video--desktop"
        poster="images/hero-poster-desktop.webp"
        src="video/hero-bg-desktop.webm"
      />

      <div className="container hero__wrapper">
        <div className="hero__inner">
          <picture className="hero__image">
            <source
              srcSet="images/hero-image.webp"
              media="(min-width: 768px)"
            />
            <img srcSet="images/hero-image-mobile.webp" alt="heroImage" />
          </picture>
          <h1 className="hero__title">
            Fron
            <strong className="hero__title--bold">TDD</strong>
            {' '}
            Architecture
          </h1>
          <h2 className="hero__subtitle text-type-2">
            Тестируем материалы курса. Собираем фидбек.
          </h2>
        </div>
        <span className="hero__arrow">
          <Image
            src={IconArrow}
            fill
            alt="Стрелка, указывающая на следующий блок"
          />
        </span>
      </div>
    </section>
  );
}
