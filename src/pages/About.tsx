import React, { useEffect } from "react";
import "./Home.css";
import { Code } from "../components/code";
import { useSearchParams } from "react-router-dom";
import { callApi } from "../utils/api";
import useAsync from "../utils/hooks/useAsync";
import { Navbar } from "../components/navbar";
import { ROUTE_HOME } from "../constants/routes";
import { Carousel } from "./slider";

function About() {
  let [searchParams, setSearchParams] = useSearchParams();
  const navItems = [
    {
      title: `_stories`,
      route: ROUTE_HOME,
      selected: true,
    },
  ];
  const { run, result } = useAsync(
    (fileName) =>
      callApi("/api/about" + "?file=" + fileName, {})
        .then(JSON.parse)
        .catch((err) => {
          console.log("RESPONSED ", JSON.parse(err));
          return "";
        }),
    { defaultValue: "const need = 'wait...'" }
  );

  console.log(result);
  useEffect(() => {
    run(searchParams.get("file"));
  }, [searchParams]);

  console.log(result);
  return (
    <div className={"w-full h-full lg:flex text-secondary-50 pb-20"}>
      <div className="pt-8 pl-4">
        <Code markdown={result.md} className={"w-full"} />
      </div>
      <div
        className={
          "absolute z-2 bg-background right-0 top-0 shadow-sm rounded-md w-full md:w-[50vw] lg:w-[30vw] h-[90vh] border border-transparent border-l-stroke invisible md:visible"
        }
      >
        <div className="shadow">
          <Navbar showTitle={false} navbarItems={navItems} />

          <div className={"w-full flex flex-col justify-start items-center"}>
            <Carousel gallery={result.gallery || []} />
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
