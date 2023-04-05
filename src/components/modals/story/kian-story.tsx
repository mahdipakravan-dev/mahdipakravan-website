import React from "react";
import Typist from "react-typist";
import { TextAnimation } from "../../text-animation";

type Props = {};
export const KianStory = (props: Props) => {
  return (
    <TextAnimation>
      Story of KianIranian...
      <Typist.Backspace delay={1000} count={40} />
      started working in Jan2021
      <Typist.Backspace delay={3000} count={40} />
      <img src="/kian/1.jpg" alt="" />
    </TextAnimation>
  );
};
