import React, { useEffect } from "react";
import { LoadingBlur } from "../../loading-blur";
import { TextAnimation } from "../../text-animation";
import { goToPopup } from "../../modal";
import Typist from "react-typist";

type Props = {
  title: string;
  message: string;
  closeTimeout: number;
};
const Prompt = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      goToPopup(undefined);
    }, props.closeTimeout);
  }, []);
  return (
    <LoadingBlur>
      <div>
        <TextAnimation>
          {props.title}
          <Typist.Backspace delay={200} count={15} />
          {props.message}
        </TextAnimation>
      </div>
    </LoadingBlur>
  );
};

export default Prompt;
