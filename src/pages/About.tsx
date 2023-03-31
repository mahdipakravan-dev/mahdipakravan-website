import React, { useEffect } from "react";
import "./Home.css";
import { Code } from "../components/code";
import { useSearchParams } from "react-router-dom";
import { callApi } from "../utils/api";
import useAsync from "../utils/hooks/useAsync";
import { ROUTE_HOME } from "../constants/routes";
import { Carousel } from "./slider";
import { buildClassNames } from "../utils/css";
import { REQUEST_PAGE_FIND_ONE } from "../constants/webservices";
import { TextAnimation } from "../components/text-animation";
import Typist from "react-typist";

function About() {
  let [searchParams, setSearchParams] = useSearchParams();
  const navItems = [
    {
      title: `_stories`,
      route: ROUTE_HOME,
      selected: true,
    },
  ];
  const { isLoading, run, result } = useAsync<{
    object: {
      md: string;
      gallery: any;
    };
  }>(
    (fileName = "me.tsx") =>
      callApi(REQUEST_PAGE_FIND_ONE + "?file=" + fileName, {}),
    {}
  );

  useEffect(() => {
    if (!searchParams.get("file")) {
      setSearchParams({ file: "me.tsx" });
    }
    run(searchParams.get("file"));
  }, [searchParams]);

  console.log("RESULT ", result);
  return (
    <div
      className={
        "w-full h-full lg:flex text-secondary-50 pb-20 overflow-y-scroll"
      }
    >
      <div className="pt-8 pl-4">
        {isLoading ? (
          <TextAnimation typistProps={{}}>
            Please Wait my friend, it's loading...
            <Typist.Backspace count={3} delay={3000} />
            ...
            <Typist.Backspace count={3} delay={300} />
            ... :)
            <Typist.Backspace count={6} delay={3000} />
          </TextAnimation>
        ) : (
          <Code markdown={result?.object?.md} className={"w-full"} />
        )}
      </div>
      <div
        className={buildClassNames(
          "bg-background shadow-sm rounded-md w-full",
          "relative md:absolute right-0 top-0 z-2 p-8 md:p-0",
          "md:w-[50vw] lg:w-[30vw] md:h-[93vh] border border-transparent border-l-stroke"
        )}
      >
        <nav
          className={
            "w-full flex justify-between sticky top-0 text-secondary-50 leading-10 border border-transparent border-b-stroke"
          }
        >
          <span
            className={
              "transition-all duration-100 ease-in-out delay-75 border border-transparent border-r-stroke border-r-stroke px-4 cursor-pointer hover:bg-primary-200 border-b-accent-50 border-b-2"
            }
          >
            _stories
          </span>
        </nav>
        <div className="shadow">
          <div className={"w-full flex flex-col justify-start items-center"}>
            {isLoading ? (
              <TextAnimation typistProps={{}}>wait...</TextAnimation>
            ) : (
              <Carousel gallery={result?.object?.gallery || []} />
            )}
          </div>
        </div>
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
