import React from "react";
import "./Home.css";
import { Code } from "../components/code";
import { useSearchParams } from "react-router-dom";

const md = `
/**
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
    <div className={"w-full h-full flex justify-start text-secondary-50 pl-2"}>
      <Code markdown={md} />
    </div>
  );
}

export default About;
