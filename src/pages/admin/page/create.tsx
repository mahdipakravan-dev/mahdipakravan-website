import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { REQUEST_PAGE_CREATE } from "../../../constants/webservices";
import { callApi } from "../../../utils/api";

type Props = {};
export const CreatePage = (props: Props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values: any) => {
    if (!values.parentId) delete values.parentId;
    if (prompt("isDir ? ") === "y") {
      values.isDir = true;
    }
    callApi(REQUEST_PAGE_CREATE, {
      method: "post",
      data: values,
    })
      .then(() => alert("OK,Created"))
      .catch(() => alert("Errored , Check Console"));
  };

  return (
    <div className="">
      <h1 className={"text-white mb-8"}>page/CreatePage</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={"name"}
          placeHolder={"page name"}
          register={register("name")}
        />
        <Input
          label={"parentId"}
          placeHolder={"parentId (not required)"}
          register={register("parentId")}
        />
        <div>
          <label htmlFor="">Md : </label>
          <textarea
            id=""
            rows={15}
            onResize={() => {}}
            placeholder={"MD"}
            className={
              "bg-body border-2 border-stroke block mt-2 w-full rounded-lg bg-transparent"
            }
            {...register("md")}
          />
        </div>
        <Button
          className={"bg-stroke text-secondary-300 text-sm p-2 rounded mt-2"}
        >
          submit-message
        </Button>
      </form>
    </div>
  );
};
