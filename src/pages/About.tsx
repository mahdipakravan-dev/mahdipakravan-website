import React from "react";
import "./Home.css";
import { Code } from "../components/code";
import { useSearchParams } from "react-router-dom";
import { Tweet } from "../components/tweet";

const md = `/**
  * About me
  * I have 5 years of еxperience in web
  * development lorem ipsum dolor sit amet,
  * consectetur adipiscing elit, sed do eiusmod
  * tempor incididunt ut labore et dolore
  * magna aliqua. Ut enim ad minim veniam,
  * quis nostrud exercitation ullamco laboris
  * nisi ut aliquip ex ea commodo consequat.
  * Duis aute irure dolor in reprehenderit in
  *
  * Duis aute irure dolor in reprehenderit in
  * voluptate velit esse cillum dolore eu fugiat
  * nulla pariatur. Excepteur sint occaecat
  * officia deserunt mollit anim id est laborum.
*/
`;
function About() {
  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("name"));

  return (
    <div className={"w-full h-full lg:flex text-secondary-50 pb-20"}>
      <div className="pr-32 pt-8 grid items-center">
        <Code markdown={md} className={"w-full"} />
      </div>
      <div
        className={
          "border border-transparent p-2 border-l-stroke w-full pt-8 overflow-y-scroll"
        }
      >
        <Code markdown={`const here = "..."`} />

        <div className="tweets">
          {[1, 2, 3, 4, 5, 6].map((tweet) => (
            <Tweet />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
