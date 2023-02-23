import { useLocation } from "react-router";
import { ROUTE_ABOUT, ROUTE_HOME } from "../constants/routes";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { buildClassNames } from "../utils/css";
import { CASES } from "../constants/cases";
import * as React from "react";

const renderArrow = (isOpen: boolean) => {
  return (
    <i
      className={buildClassNames(
        "pr-1",
        isOpen ? "ri-arrow-down-s-fill" : "ri-arrow-up-s-fill"
      )}
    />
  );
};
export const Aside = () => {
  const { pathname } = useLocation();

  const showBorder = pathname !== ROUTE_HOME;
  let [searchParams, setSearchParams] = useSearchParams();

  const isInAboutRoute = pathname.includes(ROUTE_ABOUT);
  const isInHomeRoute = pathname.includes(ROUTE_HOME);

  const Folder = ({ id, title, childs, isDir, isParent }: Case) => {
    const [parentIsOpen, setParentIsOpen] = useState(true);
    const [folderIsOpen, setFolderIsOpen] = useState(true);

    const renderParent = (title: string) => {
      return (
        <div
          className={"flex justify-start items-center cursor-pointer pr-2"}
          onClick={() => setParentIsOpen((p) => !p)}
        >
          {renderArrow(parentIsOpen)}
          <span>{title}</span>
        </div>
      );
    };

    const renderCase = ({
      isParent,
      title,
      isDir,
      id,
    }: Pick<Case, "title" | "id" | "isDir" | "isParent">) => {
      const getIcon = (
        <i
          className={buildClassNames(
            isDir ? "ri-folder-2-fill" : "ri-reactjs-fill",
            "pr-1"
          )}
        />
      );
      return (
        <div
          className={buildClassNames(
            "flex items-between cursor-pointer",
            !isDir && "hover:shadow-md"
          )}
          onClick={() => {
            if (isDir) return setFolderIsOpen((p) => !p);
            setSearchParams({ file: title });
          }}
        >
          {isDir && renderArrow(folderIsOpen)} {getIcon} {title}
        </div>
      );
    };

    const shouldRenderChild = isParent ? parentIsOpen : folderIsOpen;

    return (
      <div className={"case pl-2 text-sm"}>
        <>
          {isParent
            ? renderParent(title)
            : renderCase({ title, isParent, isDir, id })}

          <div
            className={buildClassNames(
              "pl-4 pt-1",
              "transition-all",
              shouldRenderChild ? "opacity-1 h-auto" : "opacity-0 h-0"
            )}
          >
            {childs &&
              childs.map((cases) => (
                <Folder key={`case__${cases.id}`} {...cases} />
              ))}
          </div>
        </>
      </div>
    );
  };

  return (
    <aside
      className={buildClassNames(
        "hidden md:block text-secondary-50",
        showBorder &&
          "border border-transparent border-r-stroke pr-8 py-4 md:w-auto",
        isInHomeRoute && "md:w-1/6"
      )}
    >
      <>{isInAboutRoute && <Folder {...CASES} />}</>
      {/*  @TODO Implement file structure*/}
    </aside>
  );
};
