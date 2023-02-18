import * as React from "react";
import useAsync from "../utils/hooks/useAsync";
import { callApi } from "../utils/api";
import { REQUEST_NAVIGATION } from "../constants/webservices";
import { useState } from "react";
import { first } from "../utils/array";
import { buildClassNames } from "../utils/css";

type Props = {};

const defaultNavItems = ["_home", "_about", "_blog", "_contact"];

export const Navbar = (props: Props) => {
  const [currentNav, setCurrentNav] = useState(first(defaultNavItems));

  return (
    <nav
      className={
        "w-full flex justify-between sticky top-0 text-secondary-50 leading-10 border border-transparent border-b-stroke"
      }
    >
      <span className={"min-w-min lg:w-1/6 pl-2"}>mahdi-pakravan</span>

      <ul
        className={
          "hidden lg:flex w-4/6 flex justify-start items-center h-full"
        }
      >
        {defaultNavItems?.map((nav) => (
          <NavbarItem
            isActive={currentNav === nav}
            onClick={() => setCurrentNav(nav)}
            title={nav}
          />
        ))}
      </ul>

      <div className={"flex justify-end items-center w-20 sm:w-1/6"}>
        <i className={"ri-menu-fill cursor-pointer pr-2"} />
      </div>
    </nav>
  );
};
type NavbarItemProps = {
  title: string;
  isActive: boolean;
  onClick: NoneToVoidFunction;
};
export const NavbarItem = ({ title, onClick, isActive }: NavbarItemProps) => {
  return (
    <li
      onClick={onClick}
      className={buildClassNames(
        "transition-all duration-100 ease-in-out delay-75 border border-transparent border-r-stroke border-l-stroke px-4 cursor-pointer hover:bg-primary-200",
        isActive && "border-b-accent-50 border-b-2"
      )}
    >
      {title}
    </li>
  );
};
