import { IconLink, Link } from "./link";
import * as React from "react";

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
