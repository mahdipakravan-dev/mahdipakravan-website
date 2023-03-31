import * as React from "react";
import { PropsWithChildren, useEffect } from "react";
import { buildClassNames } from "../utils/css";
import { Navbar } from "./navbar";
import "./layout.css";
import { Aside } from "./aside";
import { Footer } from "./footer";
import { Modal } from "./modal";
import { checkAboutCache } from "../utils/cache/cache-about";

type Props = PropsWithChildren;

const gradient = "bg-background";

export const Layout = (props: Props) => {
  useEffect(() => {
    checkAboutCache();
  }, []);

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
      <Modal />
    </>
  );
};
