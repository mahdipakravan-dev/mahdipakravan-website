import React, { memo } from "react";
import "./Home.css";
import { Code } from "../components/code";
import { buildClassNames } from "../utils/css";
import { useOnMountAnimation } from "../utils/hooks/useOnMountAnimation";
import Typist from "react-typist";

const md = `
//welcome to my portfolio website !
// you can also see it on my Github page

const github = 'https://github.com/mahdipakravan'
`;

let mountedBefore = false;

function Home() {
  const frame3 = useOnMountAnimation({
    delayTime: 5000,
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
        <Typist cursor={{ hideWhenDone: true }}>
          <span
            className={buildClassNames(
              "font-regular text-sm text-secondary-50"
            )}
          >
            Hello everyone , I'm ...
          </span>
        </Typist>
        <span className={buildClassNames("font-semibold text-4xl mt-2")}>
          <Typist startDelay={2000} cursor={{ show: false }}>
            Mahdi Pakravan.
          </Typist>
        </span>
        <span
          className={buildClassNames(
            "font-regular text-xl text-secondary-200 mt-2 mb-20"
          )}
        >
          <Typist startDelay={3000} cursor={{ show: false }}>
            {"> Frontend Engineer"}
          </Typist>
        </span>
      </>
    );
  },
  () => true
);
export default Home;
