import * as React from "react";
import { useForm } from "react-hook-form";
import { callApi } from "../../../utils/api";
import { REQUEST_FILE_UPLOAD } from "../../../constants/webservices";
import { Button } from "../../../components/button";
import { Upload } from "../../../components/upload";
import { Input } from "../../../components/input";

type Props = {};
export const CreatePage = (props: Props) => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (values: any) => {
    if (!values.parentId) delete values.parentId;
    // callApi()
  };

  return (
    <div className="w-3/6 grid items-center px-8 w-full pt-8">
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
          <label htmlFor="">_message : </label>
          <textarea
            id=""
            rows={6}
            onResize={() => {}}
            placeholder={"message"}
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
