// @flow
import * as React from "react";
import { useSearchParams } from "react-router-dom";
import useAsync from "../utils/hooks/useAsync";
import { callApi } from "../utils/api";
import { REQUEST_PROJECTS } from "../constants/webservices";
import { useEffect } from "react";

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
    <div>
      {getProjectsAsync.result?.map((project) => (
        <span>{JSON.stringify(project)}</span>
      ))}
    </div>
  );
};
