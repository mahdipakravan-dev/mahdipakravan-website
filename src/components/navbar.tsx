import * as React from "react";
import { useState } from "react";
import { buildClassNames } from "../utils/css";
import { useLocation, useNavigate } from "react-router";
import {
  ROUTE_ABOUT,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_PROJECTS,
} from "../constants/routes";

type Props = {
  navbarItems?: Array<{ title: string; route: string; selected?: boolean }>;
  showTitle?: boolean;
  showMenu?: boolean;
};

const defaultNavItems = [
  { title: "_home", route: ROUTE_HOME },
  { title: "_about__cv", route: ROUTE_ABOUT },
  { title: "_projects", route: ROUTE_PROJECTS },
  { title: "_contact", route: ROUTE_CONTACT },
];

export const Navbar = ({
  showTitle = true,
  showMenu = true,
  navbarItems = defaultNavItems,
}: Props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(navbarOpen);
  return (
    <>
      <nav
        className={
          "w-full flex justify-between sticky top-0 text-secondary-50 leading-10 border border-transparent border-b-stroke"
        }
      >
        {showTitle && (
          <span className={"min-w-min lg:w-1/6 pl-2"}>mahdi-pakravan</span>
        )}

        <ul
          className={
            "hidden lg:flex w-4/6 flex justify-start items-center h-full z-10"
          }
        >
          {navbarItems?.map(({ title, route, selected }) => (
            <NavbarItem
              key={`nav__${route}`}
              onClick={() => navigate(route)}
              isActive={selected || pathname.includes(route)}
              route={route}
              title={title}
            />
          ))}
        </ul>

        <div
          className={
            "flex justify-end items-center w-20 sm:w-1/6 visible md:invisible"
          }
        >
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
          "z-20",
          navbarOpen
            ? "visible h-auto opacity-1 top-10"
            : "invisible h-0 opacity-0 -top-10",
          "transition-all ease-in-out duration-300",
          "absolute block md:hidden w-full flex flex-col list-none text-secondary-300 text-sm font-thin bg-background",
          "border border-transparent border-t-stroke"
        )}
      >
        {navbarItems?.map(({ title, route, selected }) => (
          <MobileNavbarItem
            key={`nav__${route}`}
            onClick={() => {
              setNavbarOpen(false);
              navigate(route);
            }}
            isActive={selected || pathname.includes(route)}
            route={route}
            title={title}
          />
        ))}
      </div>
    </>
  );
};
type NavbarItemProps = {
  title: string;
  route: string;
  isActive: boolean;
  onClick: NoneToVoidFunction;
};
export const NavbarItem = ({
  title,
  route,
  isActive,
  onClick,
}: NavbarItemProps) => {
  const navigator = useNavigate();
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
  route,
  isActive,
  onClick,
}: NavbarItemProps) => {
  return (
    <li
      onClick={onClick}
      className={buildClassNames(
        "py-6 px-2 border border-transparent border-b-stroke cursor-pointer",
        isActive && "bg-secondary-50"
      )}
    >
      {title}
    </li>
  );
};
