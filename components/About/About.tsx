import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export function About() {
  const [viewRef, inView] = useInView(
    {
      threshold: 1,
      triggerOnce: true,
    },
  );
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (inView) {
      videoRef.current?.play();
    }
  }, [inView]);

  return (
    <section className="about">
      <div className="container about__wrapper">
        <div
          className="about__video"
        >
          <video
            ref={videoRef}
            src="/video/puzzle.mp4"
            playsInline
            muted
            preload="auto"
          />
        </div>
        <h2 className="about__title title-type-2">
          Добавим к базовым знаниям навыки для&nbsp;создания сложного приложения
        </h2>
      </div>
      <div ref={viewRef} />
    </section>
  );
}
