import { useLocation } from "react-router";
import {
  ROUTE_ABOUT,
  ROUTE_ADMIN,
  ROUTE_HOME,
  ROUTE_PROJECTS,
} from "../constants/routes";
import * as React from "react";
import { buildClassNames } from "../utils/css";
import { About_cases } from "../constants/about_cases";
import { Projects_cases } from "../constants/projects_cases";
import { Folder } from "./folder";
import { useSearchParams } from "react-router-dom";
import { Admin_cases } from "../constants/admin_cases";

export const Aside = () => {
  const { pathname } = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();

  const showBorder = pathname !== ROUTE_HOME;

  const isInAboutRoute = pathname.includes(ROUTE_ABOUT);
  const isInHomeRoute = pathname.includes(ROUTE_HOME);
  const isInProjectsRoute = pathname.includes(ROUTE_PROJECTS);
  const isInAdminRoute = pathname.includes(ROUTE_ADMIN);

  const onClickCheckbox = (id: string) => {
    let currentStacks = searchParams.get("stacks")?.split(",") || [];
    if (currentStacks.includes(id)) {
      currentStacks = currentStacks.filter((stack) => stack !== id);
    } else {
      currentStacks.push(id);
    }
    if (!currentStacks.length) searchParams.delete("stacks");
    else searchParams.set("stacks", currentStacks.join(","));
    setSearchParams(searchParams);
  };

  const onClickFile = (file: string) => setSearchParams({ file });

  return (
    <aside
      className={buildClassNames(
        "absolute top-0 z-10 bg-background md:bg-transparent w-screen md:relative md:block text-secondary-50",
        showBorder && "border border-transparent border-r-stroke md:w-64",
        isInHomeRoute && "md:w-1/6"
      )}
    >
      <>{isInAboutRoute && <Folder onClick={onClickFile} {...About_cases} />}</>
      <>{isInAdminRoute && <Folder onClick={onClickFile} {...Admin_cases} />}</>
      <>
        {isInProjectsRoute && (
          <Folder onClick={onClickCheckbox} {...Projects_cases} />
        )}
      </>
      {/*  @TODO Implement file structure*/}
    </aside>
  );
};
