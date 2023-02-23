// @flow
import * as React from "react";
import { useSearchParams } from "react-router-dom";

type Props = {};
export const Projects = (props: Props) => {
  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("stacks"));

  return <div></div>;
};
