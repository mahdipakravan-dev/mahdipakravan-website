import * as React from "react";
import "./code.css";
import hljs from "highlight.js";
import { HTMLAttributes, useEffect } from "react";

type Props = {
  markdown: string;
} & HTMLAttributes<HTMLPreElement>;
export const Code = ({ markdown, ...attr }: Props) => {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <pre contentEditable {...attr}>
      <code className="language-typescript rounded">{markdown}</code>
    </pre>
  );
};
