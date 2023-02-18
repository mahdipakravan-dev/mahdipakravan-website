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
  const [navbarOpen, setNavbarOpen] = useState(false);

  console.log(navbarOpen);
  return (
    <>
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
          <i
            className={buildClassNames(
              "cursor-pointer pr-2 ",
              navbarOpen ? "ri-close-fill" : "ri-menu-fill"
            )}
            onClick={() => setNavbarOpen((prev) => !prev)}
          />
        </div>
      </nav>
      <div
        className={buildClassNames(
          navbarOpen
            ? "visible h-auto opacity-1 top-10"
            : "invisible h-0 opacity-0 -top-10",
          "transition-all ease-in-out duration-300",
          "absolute block md:hidden w-full flex flex-col list-none text-secondary-300 text-sm font-thin bg-background",
          "border border-transparent border-t-stroke"
        )}
      >
        {defaultNavItems?.map((nav) => (
          <MobileNavbarItem
            isActive={false}
            onClick={() => setCurrentNav(nav)}
            title={nav}
          />
        ))}
      </div>
    </>
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

export const MobileNavbarItem = ({
  title,
  onClick,
  isActive,
}: NavbarItemProps) => {
  return (
    <li
      onClick={onClick}
      className={buildClassNames(
        "py-6 px-2 border border-transparent border-b-stroke cursor-pointer"
      )}
    >
      {title}
    </li>
  );
};
