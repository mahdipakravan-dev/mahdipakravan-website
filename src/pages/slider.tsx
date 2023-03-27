import React, { memo, useLayoutEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import "./slider.css";
import { keyBy } from "../utils/array";

type Props = {
  gallery: Array<{ src: string; title: string; desc?: string; id: number }>;
};
export const Carousel = memo(
  (props: Props) => {
    const byKey = keyBy(props.gallery, "id");
    const [ref, carouselApi] = useEmblaCarousel({ loop: false }, [
      Autoplay({ delay: 2000 }),
    ]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useLayoutEffect(() => {
      carouselApi?.reInit();

      carouselApi?.on("select", (e) => {
        setCurrentSlide(carouselApi?.selectedScrollSnap());
      });
    }, [props.gallery]);

    return (
      <div className="embla" ref={ref}>
        <div className="embla__container">
          {props.gallery.map((item) => (
            <div
              className="embla__slide"
              key={`${Math.random()}__${Math.random()}`}
            >
              <img src={item.src} alt="" />
            </div>
          ))}
        </div>

        <div className="embla__content">
          <span className="inline-block font-semibold text-md">
            {byKey[currentSlide]?.title}
          </span>
          <br />
          <p className={"block font-regular"}>{byKey[currentSlide]?.desc}</p>
        </div>
      </div>
    );
  },
  () => false
);
