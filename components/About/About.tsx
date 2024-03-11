import Image from 'next/image';

export default function About() {
  // const [animated, setAnimated] = useState<'not' | 'start' | 'end'>('not');

  // useEffect(() => {
  //   if (animated === 'not') {
  //     const options = {
  //       root: document.querySelector('document'),
  //       rootMargin: '5px',
  //       threshold: 0.5,
  //     };

  //     const callback = () => {
  //       setAnimated('start');
  //       setTimeout(() => setAnimated('end'), 5000);
  //     };

  //     const observer = new IntersectionObserver(callback, options);

  //     const target = document.getElementById('puzzle');
  //     observer.observe(target!);
  //   }
  // }, []);

  // console.log(animated);

  // function getImage() {
  //   if (animated === 'not') {
  //     return <Image id="puzzle" src="/images/about-puzzle-static.png" alt="puzzle" fill />;
  //   }
  //   if (animated === 'start') {

  //   }
  //   return <Image id="puzzle" src="/images/about-puzzle-static.png" alt="puzzle" fill />;
  // }

  return (
    <section className="about">
      <div className="container about__wrapper">
        <span className="about__image">
          <Image id="puzzle" src="/images/about-puzzle.gif" alt="puzzle" fill />
        </span>
        <h2 className="about__title title-type-2">
          Добавим к базовым знаниям навыки для создания сложного приложения
        </h2>
      </div>
    </section>
  );
}
