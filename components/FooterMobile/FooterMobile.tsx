import Image from 'next/image';
import IconGit from '../../public/images/icon-git.svg';
import IconTg from '../../public/images/icon-tg.svg';
import IconVk from '../../public/images/icon-vk.svg';
import Logo from '../../public/images/logo.svg';
import Question from '../../public/images/question.png';

const SOCIAL_LINKS = [
  {
    link: 'https://github.com/fpandyz/helpmegoforit',
    iconSrc: IconGit,
    alt: 'GitHub',
  },
  {
    link: 'https://vk.com/tourmalinecore',
    iconSrc: IconVk,
    alt: 'VK',
  },
  {
    link: 'https://t.me/+70jzujiNgVxhMDRi',
    iconSrc: IconTg,
    alt: 'Telegram',
  },
];

export function FooterMobile() {
  return (
    <section className="footer-mobile">
      <span className="footer-mobile__image">
        <Image
          src={Question}
          alt="Задать вопрос"
        />
      </span>
      <div className="container footer-mobile__wrapper">
        <div className="footer-mobile__links">
          {SOCIAL_LINKS.map((
            {
              link,
              iconSrc,
              alt,
            },
          ) => (
            <a key={iconSrc} href={link}>
              <span className="footer-mobile__icon">
                <Image
                  src={iconSrc}
                  alt={alt}
                />
              </span>
            </a>
          ))}
        </div>

        <a href="https://www.tourmalinecore.com/ru">
          <div className="footer-mobile__logo">
            <span className="footer-mobile__logo-icon">
              <Image
                src={Logo}
                alt="Логотип IT-компании Tourmaline Core"
              />
            </span>
            <p className="text-type-2 footer-mobile__logo-text ">Tourmaline Core</p>
          </div>
        </a>
      </div>
    </section>
  );
}
