import Image from 'next/image';

export function Hero() {
  return (
    <section className="hero">
      <picture className="hero__background">
        <source
          srcSet="images/hero-bg-desktop.gif"
          media="(min-width: 1024px)"
        />
        <img srcSet="images/hero-bg-mobile.gif" alt="heroBackground" />
      </picture>
      <div className="container hero__wrapper">
        <div className="hero__inner">
          <picture className="hero__image">
            <source
              srcSet="images/hero-image.png"
              media="(min-width: 768px)"
            />
            <img srcSet="images/hero-image-mobile.png" alt="heroImage" />
          </picture>
          <h1 className="hero__title">
            Fron
            <strong className="hero__title--bold">TDD</strong>
            {' '}
            Architecture
          </h1>
          <h2 className="hero__subtitle text-type-2">
            Building Modern Mindset
            {' '}
            <br className="hero__indent" />
            <span className="hero__subtitle--pink">for Junior</span>
            {' '}
            Frontend Developers
          </h2>
        </div>
        <span className="hero__arrow">
          <Image
            src="images/hero-arrow.svg"
            fill
            alt="heroArrow"
          />
        </span>
      </div>
    </section>
  );
}
