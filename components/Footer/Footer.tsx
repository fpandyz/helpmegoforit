import Image from 'next/image';
import IconGit from '../../public/images/icon-git.svg';
import IconTg from '../../public/images/icon-tg.svg';
import IconVk from '../../public/images/icon-vk.svg';
import Logo from '../../public/images/logo.svg';
import Question from '../../public/images/question.png';

export function Footer() {
  return (
    <section className="footer">
      <span className="footer__image">
        <Image
          src={Question}
          alt="Задать вопрос"
        />
      </span>
      <div className="container footer__wrapper">
        <a href="https://www.tourmalinecore.com/ru">
          <div className="footer__logo">
            <span className="footer__logo-icon">
              <Image
                src={Logo}
                alt="Logo"
              />
            </span>
            <p className="footer__logo-text text-type-2">Tourmaline Core</p>
          </div>
        </a>

        <div className="footer__links footer__links--vk-and-tg">
          <a href="https://vk.com/tourmalinecore">
            <span className="footer__icon">
              <Image
                src={IconVk}
                alt="VK"
              />
            </span>
          </a>
          <a href="https://vk.com/tourmalinecore">
            <span className="footer__icon">
              <Image
                src={IconTg}
                alt="Telegram"
              />
            </span>
          </a>
        </div>

        <div className="footer__links footer__links--github">
          <a href="https://github.com/fpandyz/helpmegoforit">
            <span className="footer__icon">
              <Image
                src={IconGit}
                alt="GitHub"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
