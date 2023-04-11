import * as React from "react";
import { HTMLAttributes, PropsWithChildren } from "react";
import { buildClassNames } from "../utils/css";

type Props = PropsWithChildren<{} & HTMLAttributes<HTMLButtonElement>>;
export const Button = ({ children, ...elementProps }: Props) => {
  return (
    <button
      className={buildClassNames(
        "bg-stroke text-secondary-300 text-sm p-2 rounded m-2 cursor-pointer hover:shadow-md w-full",
        elementProps.className && elementProps.className
      )}
      {...elementProps}
    >
      {children}
    </button>
  );
};
