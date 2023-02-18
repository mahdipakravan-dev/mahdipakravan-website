import * as React from "react";
import { PropsWithChildren } from "react";
import { buildClassNames } from "../utils/css";
import { Navbar } from "./navbar";
import { IconLink, Link } from "./link";
import "./layout.css";

type Props = PropsWithChildren;

const gradient = "bg-background";

export const Layout = (props: Props) => {
  return (
    <>
      <div
        className={buildClassNames(
          "relative border border-stroke rounded",
          gradient
        )}
      >
        <Navbar />
        <main className={"flex"}>
          <Aside />
          <div className={"w-full md:w-5/6 h-[100vh] middle_wrap"}>
            <div className="middle_content">
              <button className={"hover:bg-red-200"}>Salam</button>
              {props.children}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export const Aside = () => {
  return (
    <aside
      className={
        "hidden md:block md:w-1/6 border border-transparent border-r-stroke min-h-[88vh]"
      }
    >
      <div className="w-full bg-red-200">asad</div>
    </aside>
  );
};

export const Footer = () => {
  return (
    <footer
      className={
        "sticky bottom-0 border border-transparent border-t-stroke text-secondary-50 leading-7 px-2 flex justify-between items-center"
      }
    >
      <div>
        <span className={"hidden md:contents"}>find me in : </span>
        <IconLink icon={"ri-twitch-fill"} className={"md:pl-2"} />
        <IconLink icon={"ri-twitter-fill"} />
        <IconLink icon={"ri-telegram-fill"} />
      </div>
      <Link
        icon={<i className={"ri-github-fill pr-2"} />}
        title={"github"}
        href={"https://github.com/mahdipakravan-dev"}
        target={"_blank"}
      />
    </footer>
  );
};
