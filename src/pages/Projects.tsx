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
  const getProjectsAsync = useAsync(() =>
    callApi(REQUEST_PROJECTS + "?stack=nodejs", { method: "get" })
  );

  useEffect(() => {
    getProjectsAsync.run({});
  }, []);
  console.log(searchParams.get("stacks"), getProjectsAsync.result);

  return <div></div>;
};
