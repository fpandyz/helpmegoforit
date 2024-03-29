import Image from 'next/image';
import IconGit from '../../public/images/icon-git.svg';
import IconTg from '../../public/images/icon-tg.svg';
import IconVk from '../../public/images/icon-vk.svg';
import Logo from '../../public/images/logo.png';
import Question from '../../public/images/question.webp';

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
        <a className="footer__links" href="https://www.tourmalinecore.com/ru" target="_blank">
          <div className=" footer__logo">
            <span className="footer__logo-icon">
              <Image
                src={Logo}
                alt="Логотип IT-компании Tourmaline Core"
              />
            </span>
            <p className="text-type-2 footer__logo-text">Tourmaline Core</p>
          </div>
        </a>

        <div className="footer__links footer__links--vk-and-tg">
          <a href="https://vk.com/tourmalinecore" target="_blank">
            <span className="footer__icon">
              <Image
                src={IconVk}
                alt="VK"
              />
            </span>
          </a>
          <a href="https://t.me/+70jzujiNgVxhMDRi" target="_blank">
            <span className="footer__icon">
              <Image
                src={IconTg}
                alt="Telegram"
              />
            </span>
          </a>
        </div>

        <div className="footer__links footer__links--github">
          <a href="https://github.com/fpandyz/helpmegoforit" target="_blank">
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
