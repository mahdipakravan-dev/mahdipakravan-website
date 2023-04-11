import { IconLink, Link } from "./link";
import * as React from "react";

export const Footer = () => {
  return (
    <footer
      className={
        "sticky bottom-0 bg-background border border-transparent border-t-stroke text-secondary-50 leading-7 px-2 flex justify-between items-center z-4"
      }
    >
      <div>
        <span className={"hidden md:contents"}>find me in : </span>
        <IconLink
          icon={"ri-twitch-fill"}
          className={"md:pl-2"}
          onClick={() => {
            window.open("http://instagram.com/mahdipakravan", "_blank");
          }}
        />
        <IconLink
          className={"z-10"}
          icon={"ri-telegram-fill"}
          onClick={() => {
            window.open("http://t.me/mahdipakravan", "_blank");
          }}
        />
        <IconLink
          className={"z-10"}
          icon={"ri-instagram-fill"}
          onClick={() => {
            window.open("http://instagram.com/mahdipakravan", "_blank");
          }}
        />
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
