import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./slider.css";

export const Carousel = () => {
  const [ref] = useEmblaCarousel();

  return (
    <div className="embla" ref={ref}>
      <div className="embla__container">
        {[1, 2, 3, 4].map(() => (
          <div
            className="embla__slide"
            key={`${Math.random()}__${Math.random()}`}
          >
            <img
              src="https://avatars.githubusercontent.com/u/56352067?v=4"
              alt=""
            />
            {/*<div className="embla__shadow" />*/}
          </div>
        ))}
      </div>

      <div className="embla__content">
        <span className="inline-block font-semibold text-md">my team !</span>
        <br />
        <p className={"block font-regular"}>
          my team was have 8 member and we was verry khfafan
        </p>
      </div>
    </div>
  );
};
