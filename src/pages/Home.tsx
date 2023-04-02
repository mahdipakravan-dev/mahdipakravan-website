import React, { memo } from "react";
import "./Home.css";
import { Code } from "../components/code";
import { buildClassNames } from "../utils/css";
import { useOnMountAnimation } from "../utils/hooks/useOnMountAnimation";
import { TextAnimation } from "../components/text-animation";

const md = `
//welcome to my portfolio-web!

const github = 'https://github.com/mahdipakravan'
`;

function Home() {
  const frame3 = useOnMountAnimation({
    delayTime: 5000,
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
        <TextAnimation typistProps={{ cursor: { hideWhenDone: true } }}>
          <span
            className={buildClassNames(
              "font-regular text-sm text-secondary-50"
            )}
          >
            Hello everyone , I'm ...
          </span>
        </TextAnimation>
        <span className={buildClassNames("font-semibold text-4xl mt-2")}>
          <TextAnimation
            typistProps={{
              startDelay: 2000,
              cursor: { show: false },
            }}
          >
            Mahdi Pakravan.
          </TextAnimation>
        </span>
        <span
          className={buildClassNames(
            "font-regular text-xl text-secondary-200 mt-2 mb-20"
          )}
        >
          <TextAnimation
            typistProps={{
              startDelay: 3000,
              cursor: { show: false },
            }}
          >
            {"> Frontend Engineer"}
          </TextAnimation>
        </span>
      </>
    );
  },
  () => true
);
export default Home;
