import { useLocation } from "react-router";
import { ROUTE_ABOUT, ROUTE_HOME, ROUTE_PROJECTS } from "../constants/routes";
import * as React from "react";
import { buildClassNames } from "../utils/css";
import { About_cases } from "../constants/about_cases";
import { Projects_cases } from "../constants/projects_cases";
import { Folder } from "./folder";

export const Aside = () => {
  const { pathname } = useLocation();

  const showBorder = pathname !== ROUTE_HOME;

  const isInAboutRoute = pathname.includes(ROUTE_ABOUT);
  const isInHomeRoute = pathname.includes(ROUTE_HOME);
  const isInProjectsRoute = pathname.includes(ROUTE_PROJECTS);

  return (
    <aside
      className={buildClassNames(
        "absolute top-0 z-10 bg-background md:bg-transparent w-screen md:relative md:block text-secondary-50",
        showBorder && "border border-transparent border-r-stroke md:w-64",
        isInHomeRoute && "md:w-1/6"
      )}
    >
      <>{isInAboutRoute && <Folder {...About_cases} />}</>
      <>{isInProjectsRoute && <Folder {...Projects_cases} />}</>
      {/*  @TODO Implement file structure*/}
    </aside>
  );
};
