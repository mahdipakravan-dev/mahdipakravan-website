import * as React from "react";
import { useSearchParams } from "react-router-dom";
import useAsync from "../utils/hooks/useAsync";
import { callApi } from "../utils/api";
import { REQUEST_PROJECTS } from "../constants/webservices";
import { useEffect } from "react";
import { Code } from "../components/code";
import "./Projects.css";
import { Button } from "../components/button";

type Props = {};
export const Projects = (props: Props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const getProjectsAsync = useAsync<Array<Project>>(
    ({ stacks }: { stacks: string }) => {
      console.log({ stacks });
      return callApi(REQUEST_PROJECTS + `?stack_like=(${stacks})`, {
        method: "get",
      });
    }
  );

  useEffect(() => {
    getProjectsAsync.run({
      stacks: searchParams.get("stacks")?.split(",")?.join("|") || "",
    });
  }, [searchParams]);

  console.log("Result : ", getProjectsAsync.result);
  return (
    <div className={"grid grid-cols-1 md:grid-cols-2 grid-cols-3 gap-2"}>
      {getProjectsAsync.result?.map((project) => (
        <article className={"w-full p-2"}>
          <header className={"flex justify-start items-center"}>
            <span className={"text-secondary-200 text-sm mr-2"}>
              {project.title}
            </span>
            <Code markdown={`//ui_animation`} />
          </header>
          <div className={"border border-stroke rounded-none rounded-t-2xl"}>
            <div>
              <img
                src="/project-1.png"
                alt=""
                style={{
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="border border-stroke rounded-none rounded-b-md">
              <p className={"text-secondary-50 text-xs py-4 px-1"}>
                Duis aute irure dolor in velit esse cillum dolore.
              </p>
              <Button>See demo</Button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
