import * as React from "react";
import { PropsWithChildren, useState } from "react";
import { buildClassNames } from "../utils/css";
import { Navbar } from "./navbar";
import { IconLink, Link } from "./link";
import "./layout.css";
import { useLocation } from "react-router";
import { ROUTE_ABOUT, ROUTE_HOME } from "../constants/routes";
import { CASES } from "../constants/cases";

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

const renderArrow = (isOpen: boolean) => {
  return (
    <i
      className={buildClassNames(
        "pr-1",
        isOpen ? "ri-arrow-down-s-fill" : "ri-arrow-up-s-fill"
      )}
    />
  );
};
export const Aside = () => {
  const { pathname } = useLocation();

  const showBorder = pathname !== ROUTE_HOME;

  const isInAboutRoute = pathname.includes(ROUTE_ABOUT);

  const renderFolders = ({ id, title, childs, isDir, isParent }: Case) => {
    const [parentIsOpen, setParentIsOpen] = useState(true);
    const [folderIsOpen, setFolderIsOpen] = useState(true);

    const renderParent = (title: string) => {
      return (
        <div
          className={"flex justify-start items-center cursor-pointer pr-2"}
          onClick={() => setParentIsOpen((p) => !p)}
        >
          {renderArrow(parentIsOpen)}
          <span>{title}</span>
        </div>
      );
    };

    const renderCase = ({
      isParent,
      title,
      isDir,
      id,
    }: Pick<Case, "title" | "id" | "isDir" | "isParent">) => {
      const getIcon = (
        <i
          className={buildClassNames(
            isDir ? "ri-folder-2-fill" : "ri-reactjs-fill",
            "pr-1"
          )}
        />
      );
      return (
        <div
          className={"flex items-between cursor-pointer"}
          onClick={() => setFolderIsOpen((p) => !p)}
        >
          {isDir && renderArrow(folderIsOpen)} {getIcon} {title}
        </div>
      );
    };

    const shouldRenderChild = isParent ? parentIsOpen : folderIsOpen;

    return (
      <div className={"case pl-2 text-sm"}>
        <>
          {isParent
            ? renderParent(title)
            : renderCase({ title, isParent, isDir, id })}

          <div
            className={buildClassNames(
              "pl-4 pt-1",
              "transition-all",
              shouldRenderChild ? "opacity-1 h-auto" : "opacity-0 h-0"
            )}
          >
            {childs && childs.map((cases) => renderFolders(cases))}
          </div>
        </>
      </div>
    );
  };

  return (
    <aside
      className={buildClassNames(
        "hidden md:block md:w-1/6 min-h-[88vh] text-secondary-50",
        showBorder && "border border-transparent border-r-stroke py-2"
      )}
    >
      <>{isInAboutRoute && renderFolders(CASES)}</>
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
