import * as React from "react";
import { PropsWithChildren, useState } from "react";
import { buildClassNames } from "../utils/css";
import { Navbar } from "./navbar";
import { IconLink, Link } from "./link";
import "./layout.css";
import { useLocation } from "react-router";
import { ROUTE_ABOUT, ROUTE_HOME } from "../constants/routes";
import { CASES } from "../constants/cases";
import { useSearchParams } from "react-router-dom";
import { Aside } from "./aside";
import { Footer } from "./footer";

type Props = PropsWithChildren;

const gradient = "bg-background";

export const Layout = (props: Props) => {
  return (
    <>
      <div
        className={buildClassNames(
          "relative border border-stroke rounded middle_wrap",
          gradient
        )}
      >
        <Navbar />
        <main className={"flex relative"}>
          <Aside />
          <div className={"w-full md:w-5/6 h-[100vh]"}>{props.children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};
