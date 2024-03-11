import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__wrapper">
        <div className="hero__content">
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
        <Image
          className="hero__arrow"
          src="images/hero-arrow.svg"
          width={17}
          height={64}
          alt="heroArrow"
        />
      </div>
    </section>
  );
}
