import React, { memo } from "react";
import "./Home.css";
import { Code } from "../components/code";
import { buildClassNames } from "../utils/css";
import { useOnMountAnimation } from "../utils/hooks/useOnMountAnimation";
import AnimatedText from "react-animated-text-content";

const md = `
//welcome to my portfolio website !
// you can also see it on my Github page

const github = 'https://github.com/mahdipakravan'
`;

let mountedBefore = false;

function Home() {
  const frame3 = useOnMountAnimation({
    delayTime: 3000,
    onAnimationEnd: () => (mountedBefore = true),
  });
  return (
    <div
      className={
        "h-full text-secondary-300 px-2 md:px-0 flex flex-col justify-center items-start"
      }
    >
      <Introduce />
      <Code className={buildClassNames("mb-20", frame3)} markdown={md} />
    </div>
  );
}

const Introduce = memo(
  () => {
    return (
      <>
        <span
          className={buildClassNames("font-regular text-sm text-secondary-50")}
        >
          <AnimatedText
            type="words" // animate words or chars
            animation={{
              x: "600px",
              y: "-20px",
              scale: 1.1,
              ease: "ease-in-out",
            }}
            animationType="float"
            duration={1}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={1}
            rootMargin="20%"
          >
            Hello everyone , I'm ...
          </AnimatedText>
        </span>
        <span className={buildClassNames("font-semibold text-4xl mt-2")}>
          <AnimatedText
            type="words" // animate words or chars
            animation={{
              x: "200px",
              y: "-20px",
              scale: 1.1,
              ease: "ease-in-out",
            }}
            animationType="wave"
            duration={2}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.6}
            rootMargin="20%"
          >
            Mahdi Pakravan.
          </AnimatedText>
        </span>
        <span
          className={buildClassNames(
            "font-regular text-xl text-secondary-200 mt-2 mb-20"
          )}
        >
          <AnimatedText
            type="words" // animate words or chars
            animation={{
              x: "400px",
              y: "-20px",
              scale: 1.6,
              ease: "ease-in-out",
            }}
            animationType="float"
            duration={4}
            tag="span"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            {"> Frontend Engineer :)"}
          </AnimatedText>
        </span>
      </>
    );
  },
  () => true
);
export default Home;
