import React from "react";
import "./Home.css";
import { Code } from "../components/code";
import { useSearchParams } from "react-router-dom";
import { Tweet } from "../components/tweet";

const md = `/**
  * About me
  
  * Born in 24.12.2000 , Tehran
  * Married ♥
  
  * working status : Senior Frontend Developer at KianIranian S.T.D.G
  
  * <= see another detail in sidebar <=
*/
`;
function About() {
  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("name"));

  return (
    <div className={"w-full h-full lg:flex text-secondary-50 pb-20"}>
      <div className="px-8 pt-8 grid items-center">
        <Code markdown={md} className={"w-full"} />
      </div>
      {/*<div*/}
      {/*  className={*/}
      {/*    "border border-transparent p-2 border-l-stroke w-full pt-8 overflow-y-scroll"*/}
      {/*  }*/}
      {/*>*/}
      {/*  <Code markdown={`const here = "..."`} />*/}

      {/*  <div className="tweets">*/}
      {/*    {[1, 2, 3, 4, 5, 6].map((tweet) => (*/}
      {/*      <Tweet />*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}

export default About;
