import React, { useEffect } from "react";
import { LoadingBlur } from "../../loading-blur";
import { TextAnimation } from "../../text-animation";
import { goToPopup } from "../../modal";

type Props = {
  message: string;
};
const Prompt = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      goToPopup(undefined);
    }, 4000);
  }, []);
  return (
    <LoadingBlur>
      <TextAnimation>{props.message}</TextAnimation>
    </LoadingBlur>
  );
};

export default Prompt;
