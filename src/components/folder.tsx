import { memo, useState } from "react";
import { buildClassNames } from "../utils/css";
import * as React from "react";
import { useSearchParams } from "react-router-dom";

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

export const Folder = memo(
  ({
    id,
    title,
    childs,
    isDir,
    isParent,
    isCheckBox,
    onClick,
  }: Case & { onClick: (id: string) => void }) => {
    const [parentIsOpen, setParentIsOpen] = useState(true);
    const [folderIsOpen, setFolderIsOpen] = useState(true);
    let [searchParams, setSearchParams] = useSearchParams();

    const renderParent = (title: string) => {
      return (
        <div
          className={
            "flex justify-start items-center cursor-pointer border border-t-transparent border-stroke pl-2 py-1"
          }
          onClick={() => {
            setParentIsOpen((p) => !p);
          }}
        >
          {renderArrow(parentIsOpen)}
          <span>{title}</span>
        </div>
      );
    };

    const renderCase = ({ isParent, title, isDir, id, isCheckBox }: Case) => {
      const getIcon = (
        <i
          className={buildClassNames(
            isDir ? "ri-folder-2-fill" : "ri-reactjs-fill",
            "pr-1"
          )}
        />
      );

      if (isCheckBox)
        return (
          <div
            className="flex items-center justify-center mt-2"
            onClick={() => onClick(title)}
          >
            {getIcon}
            <label className="container">
              {title}
              <input
                type="checkbox"
                onChange={() => onClick(title)}
                checked={searchParams.get("stacks")?.includes(title)}
              />
              <span className="checkmark" />
            </label>
          </div>
        );
      return (
        <div
          className={buildClassNames(
            "flex items-between cursor-pointer",
            !isDir && "hover:shadow-md",
            searchParams.get("file") === title && "bg-primary-100"
          )}
          onClick={(e) => {
            if (e.currentTarget !== e.target) return;
            if (isDir) return setFolderIsOpen((p) => !p);
            onClick(title);
          }}
        >
          {!isDir && (
            <>
              {getIcon} {title}
            </>
          )}
          {isDir && (
            <>
              {renderArrow(folderIsOpen)} {getIcon} {title}
            </>
          )}
        </div>
      );
    };

    const shouldRenderChild = isParent ? parentIsOpen : folderIsOpen;

    return (
      <div className={"text-sm"}>
        <>
          {isParent
            ? renderParent(title)
            : renderCase({ title, isParent, isDir, id, isCheckBox })}

          <div
            className={buildClassNames(
              "pl-4 pt-1",
              "transition-all",
              shouldRenderChild ? "opacity-1 h-auto" : "opacity-0 h-0"
            )}
          >
            {childs &&
              childs.map((cases) => (
                <Folder
                  key={`case__${cases.id}__${Math.random()}`}
                  onClick={onClick}
                  {...cases}
                />
              ))}
          </div>
        </>
      </div>
    );
  },
  () => true
);
