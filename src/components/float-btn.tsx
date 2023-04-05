import React from "react";
import { buildClassNames } from "../utils/css";

type Props = {
  onClick: () => void;
  icon?: string;
};
export const FloatBtn = ({ onClick, icon }: Props) => {
  return (
    <div
      onClick={onClick}
      className={buildClassNames(
        "fixed right-6 bottom-6 z-[18]",
        "bg-stroke cursor-pointer shadow-md hover:shadow-lg p-4 text-lg rounded-full overflow-hidden w-16 h-16",
        "flex items-center justify-center text-2xl",
        "transition-width ease-in-out delay-150"
      )}
    >
      <i className={icon || "ri-play-line"} />
    </div>
  );
};
