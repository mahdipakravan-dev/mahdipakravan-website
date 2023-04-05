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
import { LoadingBlur } from "../components/loading-blur";
import { FloatBtn } from "../components/float-btn";
import { goToPopup } from "../components/modal";

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

  const playStory = () => {
    goToPopup("story");
  };

  return (
    <div
      className={
        "w-full h-full lg:flex text-secondary-50 pb-20 overflow-y-scroll"
      }
    >
      {isLoading && <LoadingBlur />}
      <div className="pt-8 pl-4">
        <Code markdown={result?.object?.md} className={"w-full"} />
      </div>
      <FloatBtn onClick={playStory} />
      {/*<div*/}
      {/*  className={buildClassNames(*/}
      {/*    "hidden md:block shadow-sm rounded-md w-full",*/}
      {/*    "relative md:absolute right-0 top-0 z-2 p-8 md:p-0",*/}
      {/*    "md:w-[50vw] lg:w-[30vw] md:h-[98vh] border border-transparent border-l-stroke"*/}
      {/*  )}*/}
      {/*>*/}
      {/*</div>*/}
      {/*<span className={"bg-green-400 rounded-full fixed left-20 bottom-0"}>*/}
      {/*  Play Story of KianIranian*/}
      {/*</span>*/}
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
