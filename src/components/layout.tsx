import * as React from "react";
import { PropsWithChildren } from "react";
import { buildClassNames } from "../utils/css";
import { Navbar } from "./navbar";

type Props = PropsWithChildren;

const gradient = "bg-background";

export const Layout = (props: Props) => {
  return (
    <div
      className={buildClassNames(
        "relative m-2 min-h-[97vh] h-full border border-stroke rounded",
        gradient
      )}
    >
      <Navbar />
      <main className={"flex"}>
        <aside
          className={
            "w-1/6 border border-transparent border-r-stroke min-h-[92vh]"
          }
        >
          <div className="w-full bg-red-200">asd</div>
        </aside>
        <div className={"w-5/6 p-2"}>
          Middle Column And Children {props.children}
        </div>
      </main>
    </div>
  );
};
