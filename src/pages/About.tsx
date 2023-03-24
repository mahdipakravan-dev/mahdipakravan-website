import React, { useEffect } from "react";
import "./Home.css";
import { Code } from "../components/code";
import { useSearchParams } from "react-router-dom";
import { callApi } from "../utils/api";
import useAsync from "../utils/hooks/useAsync";

function About() {
  let [searchParams, setSearchParams] = useSearchParams();
  const { run, result } = useAsync(
    (fileName) => callApi("/api/about" + "?file=" + fileName, {}),
    { defaultValue: "const need = 'wait...'" }
  );

  useEffect(() => {
    run(searchParams.get("file"));
  }, [searchParams]);

  return (
    <div className={"w-full h-full lg:flex text-secondary-50 pb-20"}>
      <div className="px-8 pt-8 grid items-center">
        <Code markdown={result} className={"w-full"} />
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
