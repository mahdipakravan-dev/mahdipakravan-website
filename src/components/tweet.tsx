// @flow
import * as React from "react";
import { Code } from "./code";

const md = `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`;
type Props = {};
export const Tweet = (props: Props) => {
  return (
    <article className={"mt-2"}>
      <header className={"w-full flex justify-between items-center p-2"}>
        <div className={"flex justify-between"}>
          <img
            src="/avatar.png"
            className={"rounded-full"}
            alt=""
            style={{
              objectFit: "contain",
            }}
          />
          <div className="flex flex-col pl-2">
            <span className={"text-accent text-sm text-secondary-200"}>
              @MahdiParkavan
            </span>
            <span className={"text-accent text-xs"}>Created 5 month ago</span>
          </div>
        </div>
        <div className={"flex"}>
          <div className="flex justify-between items-center pr-4">
            <i className={"ri-chat-1-fill"} />
            details
          </div>
          <div className="flex justify-between items-center">
            <i className={"ri-star-fill"} />
            2stars
          </div>
        </div>
      </header>
      <div className="my-2 border border-stroke bg-primary-200 rounded p-4">
        <Code markdown={md} />
      </div>
    </article>
  );
};
