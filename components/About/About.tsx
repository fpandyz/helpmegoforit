import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export function About() {
  const [viewRef, inView] = useInView(
    {
      threshold: 0.9,
      triggerOnce: true,
    },
  );
  const videoRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const video = document.getElementById('puzzle') as HTMLVideoElement;
      video.play();
    }
  }, [inView]);

  return (
    <section className="about">
      <div className="container about__wrapper">
        <div
          ref={viewRef}
          className="about__video"
        >
          <video
            ref={videoRef}
            id="puzzle"
            src="/video/puzzle.mp4"
            playsInline
            muted
          />
        </div>
        <h2 className="about__title title-type-2">
          Добавим к базовым знаниям навыки для&nbsp;создания сложного приложения
        </h2>
      </div>
    </section>
  );
}
