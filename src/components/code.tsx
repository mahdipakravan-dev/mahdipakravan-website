import * as React from "react";
import { HTMLAttributes } from "react";
import "./code.css";
import Highlight from "react-highlight";

type Props = {
  markdown: string;
} & HTMLAttributes<HTMLPreElement>;
export const Code = ({ markdown, ...attr }: Props) => {
  console.log(attr.className);
  return (
    <div className={"max-w-screen"}>
      <Highlight className="language-typescript rounded text-xs md:text-sm">
        {markdown}
      </Highlight>
    </div>
  );
};
