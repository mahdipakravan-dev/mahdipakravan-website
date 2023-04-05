import React, { useEffect } from "react";
import { LoadingBlur } from "../../loading-blur";
import { TextAnimation } from "../../text-animation";
import { goToPopup } from "../../modal";
import Typist from "react-typist";
import { useSearchParams } from "react-router-dom";
import { KianStory } from "./kian-story";
import { FloatBtn } from "../../float-btn";

type Props = {
  title: string;
  message: string;
  closeTimeout: number;
};
const Story = (props: Props) => {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <LoadingBlur>
      <div className={"max-w-50"}>
        <KianStory />
      </div>
      <FloatBtn icon={"ri-close-fill"} onClick={() => goToPopup(undefined)} />
    </LoadingBlur>
  );
};

export default Story;
