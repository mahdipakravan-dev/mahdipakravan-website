// @flow
import * as React from "react";
import { PropsWithChildren } from "react";
import Typist, { TypistProps } from "react-typist";

type Props = PropsWithChildren<{
  typistProps: TypistProps;
}>;
export const TextAnimation = (props: Props) => {
  return <Typist {...props.typistProps}>{props.children}</Typist>;
};
