import React, {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import "./slider.css";
import { keyBy } from "../utils/array";
import { buildClassNames } from "../utils/css";

type Props = {
  gallery: Array<{ src: string; title: string; desc?: string; id: number }>;
  fileName: string;
};
export const Carousel = (props: Props) => {
  const byKey = keyBy(props.gallery, "id");
  const [ref, carouselApi] = useEmblaCarousel();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);

  const onSelect = useCallback(() => {
    if (!carouselApi) return;
    setCanScrollPrev(carouselApi.canScrollPrev());
    setCanScrollNext(carouselApi.canScrollNext());
    setCurrentSlide(carouselApi?.selectedScrollSnap());
  }, [carouselApi]);
  useEffect(() => {
    console.log("API ", carouselApi);
    setCurrentSlide(0);

    carouselApi?.on("select", onSelect);
  }, [carouselApi]);

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
        <span className="inline-block font-semibold text-lg">
          {byKey[currentSlide + 1]?.title}
        </span>
        <br />
        <p className={"block font-regular pt-4"}>
          {byKey[currentSlide + 1]?.desc}
        </p>
      </div>

      {props.gallery.length > 1 && (
        <div className="embla__arrow invisible md:visible">
          <div
            className={buildClassNames(canScrollPrev ? "visible" : "invisible")}
            onClick={() => carouselApi?.scrollPrev()}
          >
            <i className="ri-arrow-left-line cursor-pointer" />
          </div>
          <div
            className={buildClassNames(canScrollNext ? "visible" : "invisible")}
            onClick={() => carouselApi?.scrollNext()}
          >
            <i className="ri-arrow-right-line cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
};
