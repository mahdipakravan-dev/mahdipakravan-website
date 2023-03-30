import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { CreatePage } from "./page/create";

type Props = {};
export const Admin = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="w-3/6 grid items-center px-8 w-full pt-8 overflow-y-scroll">
      {searchParams.get("file") === "CreatePage" && <CreatePage />}
    </div>
  );
};
