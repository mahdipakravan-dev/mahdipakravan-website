import * as React from "react";
import "./code.css";
import hljs from "highlight.js";
import { HTMLAttributes, useEffect } from "react";
import { buildClassNames } from "../utils/css";

type Props = {
  markdown: string;
} & HTMLAttributes<HTMLPreElement>;
export const Code = ({ markdown, ...attr }: Props) => {
  useEffect(() => {
    // hljs.highlightAll();
  }, []);

  console.log(attr.className);
  return (
    <div className={"max-w-screen"}>
      <pre {...attr}>
        <code className="language-typescript rounded">{markdown}</code>
      </pre>
    </div>
  );
};
