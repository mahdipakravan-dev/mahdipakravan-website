import * as React from "react";
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
} from "react";
import { buildClassNames } from "../utils/css";

type Props = {
  icon?: ReactElement;
  title?: string;
  buttonAttributes?: HTMLAttributes<HTMLDivElement>;
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
export const Link = ({
  icon: Icon,
  title,
  buttonAttributes,
  ...htmlProps
}: Props) => {
  return (
    <div
      {...(buttonAttributes || {})}
      className={buildClassNames(
        buttonAttributes?.className ||
          "flex justify-between items-center cursor-pointer hover:text-secondary-200"
      )}
    >
      {Icon && Icon}
      {title && <a {...htmlProps}>{title}</a>}
    </div>
  );
};

export const IconLink = ({
  icon,
  className,
  ...attributes
}: {
  icon: string;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...attributes}
      className={buildClassNames(
        "md:pl-2 pr-2 border py-1 cursor-pointer border-transparent md:border-x-stroke hover:text-secondary-100",
        className
      )}
    >
      <i className={icon} />
    </span>
  );
};
