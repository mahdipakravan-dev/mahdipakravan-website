import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { CreatePage } from "./page/create";
import { CreateGallery } from "./gallery/create";
import { CreateProject } from "./project/create";

type Props = {};
export const Admin = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="w-3/6 grid items-center px-8 w-full pt-8 h-[88vh] overflow-y-scroll">
      {!searchParams.get("file") && (
        <div>
          <h1>Control Panel</h1>
          <p>only mahdi can access here , don't try :)</p>
        </div>
      )}
      {searchParams.get("file") === "CreatePage" && <CreatePage />}
      {searchParams.get("file") === "CreateGallery" && <CreateGallery />}
      {searchParams.get("file") === "CreateProject" && <CreateProject />}
    </div>
  );
};
