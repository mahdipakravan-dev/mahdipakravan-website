import * as React from "react";
import { PropsWithChildren } from "react";
import { buildClassNames } from "../utils/css";
import { Navbar } from "./navbar";
import { IconLink, Link } from "./link";
import "./layout.css";
import { useLocation } from "react-router";
import { ROUTE_HOME } from "../constants/routes";
import {CASES} from "../constants/cases";

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
        <main className={"flex middle_content"}>
          <Aside />
          <div className={"w-full md:w-5/6 h-[100vh]"}>{props.children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export const Aside = () => {
  const { pathname } = useLocation();

  const showBorder = pathname !== ROUTE_HOME;

  const renderFile = (...args : any[]) => {
    return <div className={""}><i className={"ri-arrow-down-fill"}/> {...args}</div>
  }

  const renderFolders = ({id,title,childs,isDir} : Case) => {

    return (
      <div className={"case pl-2"}>
        <>
          {`${isDir ? "📁" : "🗒️"} ${title}`}

          <br/>

          <div className={"pl-5 pt-1"}>
            {childs && childs.map(cases =>
                renderFolders(cases)
            )}
          </div>
        </>
      </div>
    )
  }

  return (
    <aside
      className={buildClassNames(
        "hidden md:block md:w-1/6 min-h-[88vh] text-secondary-50",
        showBorder && "border border-transparent border-r-stroke py-2"
      )}
    >
      <>
        {renderFolders(CASES)}
      </>
      {/*  @TODO Implement file structure*/}
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
