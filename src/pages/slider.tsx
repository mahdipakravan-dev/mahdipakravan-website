import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./slider.css";

export const Carousel = () => {
  const [ref, carouselApi] = useEmblaCarousel();

  return (
    <div className="embla" ref={ref}>
      <div className="embla__container">
        {[1, 2, 3, 4].map(() => (
          <div
            className="embla__slide"
            key={`${Math.random()}__${Math.random()}`}
          >
            <img src="/image-test.jpg" alt="" />
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
      <div className="embla__arrow">
        <div className="left" onClick={() => carouselApi?.scrollNext()}>
          <i className="ri-arrow-left-line cursor-pointer" />
        </div>
        <div className="right" onClick={() => carouselApi?.scrollNext()}>
          <i className="ri-arrow-right-line cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
