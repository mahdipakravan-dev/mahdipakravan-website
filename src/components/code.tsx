import * as React from "react";
import "./code.css";
import hljs from "highlight.js";
import { useEffect } from "react";

type Props = {
  markdown: string;
};
export const Code = ({ markdown }: Props) => {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <pre>
      <code className="language-typescript rounded">{markdown}</code>
    </pre>
  );
};
