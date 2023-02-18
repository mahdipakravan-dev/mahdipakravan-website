import React, { useEffect } from "react";
import "./Home.css";
import { Code } from "../components/code";

const md = `
//welcome to my portfolio website !
// you can also see it on my Github page

const github = 'https://github.com/mahdipakravan'
`;

function Home() {
  return (
    <div
      className={
        "h-full text-secondary-300 flex flex-col justify-center items-start"
      }
    >
      <span className={"font-regular text-sm text-secondary-50"}>
        Hello everyone , I'm ...
      </span>
      <span className={"font-semibold text-4xl mt-2"}>Mahdi Pakravan.</span>
      <span className={"font-regular text-xl text-secondary-200 mt-2 mb-20"}>
        {">"} Frontend Engineer :)
      </span>

      <Code className={"mb-20"} markdown={md} />
    </div>
  );
}

export default Home;
