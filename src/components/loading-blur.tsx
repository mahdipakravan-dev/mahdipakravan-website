// @flow
import * as React from "react";
import { TextAnimation } from "./text-animation";
import { PropsWithChildren } from "react";

const defaultChildren = <TextAnimation>Please Wait...</TextAnimation>;
type Props = PropsWithChildren<{}>;
export const LoadingBlur = ({ children = defaultChildren }: Props) => {
  return (
    <div
      className={
        "absolute left-0 top-0 w-full h-full blur-xs bg-[rgba(0,0,0,0.6)] animate-pulse flex items-center justify-center"
      }
    >
      {children}
    </div>
  );
};
