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
  ({ id, title, childs, isDir, isParent, isCheckBox }: Case) => {
    const [parentIsOpen, setParentIsOpen] = useState(true);
    const [folderIsOpen, setFolderIsOpen] = useState(false);
    let [searchParams, setSearchParams] = useSearchParams();

    const renderParent = (title: string) => {
      return (
        <div
          className={
            "flex justify-start items-center cursor-pointer border border-t-transparent border-stroke pl-2 py-1"
          }
          onClick={() => {
            alert("Arrow");
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

      const onClickCheckbox = () => {
        let currentStacks = searchParams.get("stacks")?.split(",") || [];
        if (currentStacks.includes(title)) {
          currentStacks = currentStacks.filter((stack) => stack !== title);
        } else {
          currentStacks.push(title);
        }
        if (!currentStacks.length) searchParams.delete("stacks");
        else searchParams.set("stacks", currentStacks.join(","));
        setSearchParams(searchParams);
      };

      if (isCheckBox)
        return (
          <div
            className="flex items-center justify-center mt-2"
            onClick={onClickCheckbox}
          >
            {getIcon}
            <label className="container">
              {title}
              <input
                type="checkbox"
                onChange={onClickCheckbox}
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
            !isDir && "hover:shadow-md"
          )}
          onClick={(e) => {
            if (e.currentTarget !== e.target) return;
            if (isCheckBox) return setSearchParams({ file: title });
            if (isDir) return setFolderIsOpen((p) => !p);
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
                  {...cases}
                />
              ))}
          </div>
        </>
      </div>
    );
  }
);
