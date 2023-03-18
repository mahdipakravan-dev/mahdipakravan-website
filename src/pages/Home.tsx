import React from "react";
import "./Home.css";
import { Code } from "../components/code";
import { buildClassNames } from "../utils/css";
import { useOnMountAnimation } from "../utils/hooks/useOnMountAnimation";
import { useAudio } from "../hooks/useAudio";
import { AudioType } from "../constants/types";
import { TRACK_MUSIC_1 } from "../constants/tracks";

const md = `
//welcome to my portfolio website !
// you can also see it on my Github page

const github = 'https://github.com/mahdipakravan'
`;

let mountedBefore = false;

function Home() {
  const frame1 = useOnMountAnimation({
    delayTime: 1000,
    showAnimation: !mountedBefore,
  });
  const frame2 = useOnMountAnimation({
    delayTime: 4000,
    showAnimation: !mountedBefore,
  });
  const frame3 = useOnMountAnimation({
    delayTime: 6500,
    showAnimation: !mountedBefore,
    onAnimationEnd: () => (mountedBefore = true),
  });
  // useAudio({
  //   playSrc: TRACK_MUSIC_1,
  //   audioType: AudioType.Music,
  // });
  return (
    <div
      className={
        "h-full text-secondary-300 px-2 md:px-0 flex flex-col justify-center items-start"
      }
    >
      <span
        className={buildClassNames(
          "font-regular text-sm text-secondary-50",
          frame1
        )}
      >
        Hello everyone , I'm ...
      </span>

      <span className={buildClassNames("font-semibold text-4xl mt-2", frame2)}>
        Mahdi Pakravan.
      </span>
      <span
        className={buildClassNames(
          "font-regular text-xl text-secondary-200 mt-2 mb-20",
          frame2
        )}
      >
        {">"} Frontend Engineer :)
      </span>

      <Code className={buildClassNames("mb-20", frame3)} markdown={md} />
    </div>
  );
}

export default Home;
