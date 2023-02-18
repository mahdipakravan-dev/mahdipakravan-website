import * as React from "react";
import { PropsWithChildren } from "react";
import { buildClassNames } from "../utils/css";
import { Navbar } from "./navbar";

type Props = PropsWithChildren;

const gradient = "bg-background";

export const Layout = (props: Props) => {
  return (
    <>
      <div
        className={buildClassNames(
          "relative m-2 border border-stroke rounded",
          gradient
        )}
      >
        <Navbar />
        <main className={"flex"}>
          <aside
            className={
              "w-1/6 border border-transparent border-r-stroke min-h-[88vh]"
            }
          >
            <div className="w-full bg-red-200">asad</div>
          </aside>
          <div className={"w-5/6 p-2"}>
            Middle Column And Children {props.children}
          </div>
        </main>
        <footer
          className={
            "sticky bottom-0 border border-transparent border-t-stroke text-secondary-50 leading-7 px-2 flex justify-between items-center"
          }
        >
          <div>
            <span>find me in : </span>
            <span
              className={"px-2 border py-1 border-transparent border-x-stroke"}
            >
              <i className={"ri-twitch-fill"} />
            </span>
            <span
              className={"px-2 border py-1 border-transparent border-x-stroke"}
            >
              <i className={"ri-twitter-fill"} />
            </span>
            <span
              className={"px-2 border py-1 border-transparent border-x-stroke"}
            >
              <i className={"ri-telegram-fill"} />
            </span>
          </div>
          <div className={"flex justify-between items-center"}>
            <i className={"ri-github-fill pr-2"} />
            github
          </div>
        </footer>
      </div>
    </>
  );
};
