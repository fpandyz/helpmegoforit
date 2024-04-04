import Image from 'next/image';
import IconArrow from '../../public/images/arrow.svg';
import HeroImageMobileSrc from '../../public/images/hero-image-mobile.webp';
import HeroImageSrc from '../../public/images/hero-image.webp';

export function Hero() {
  return (
    <section className="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hero__video hero__video--mobile"
      >
        <source media="(max-width: 1023px)" src="video/hero-bg-mobile.mp4" type="video/mp4" />
        <source media="(max-width: 1023px)" src="images/hero-poster-mobile.webp" type="image/webp" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hero__video hero__video--desktop"
      >
        <source media="(min-width: 1024px)" src="video/hero-bg-desktop.mp4" type="video/mp4" />
        <source media="(min-width: 1024px)" src="images/hero-poster-desktop.webp" type="image/webp" />
      </video>

      <div className="container hero__wrapper">
        <Image
          src={HeroImageMobileSrc}
          className="hero__image hero__image--mobile"
          alt="Курса нет, но скоро будет"
        />
        <Image
          src={HeroImageSrc}
          className="hero__image hero__image--desktop"
          alt="Курса нет, но скоро будет"
        />

        <h1 className="hero__title">
          Fron
          <strong className="hero__title--bold">TDD</strong>
          {' '}
          Architecture
        </h1>
        <h2 className="hero__subtitle text-type-2">
          Тестируем материалы курса. Собираем фидбек.
        </h2>
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
