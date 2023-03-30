import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import {
  REQUEST_PAGE_CREATE,
  REQUEST_PROJECT_CREATE,
} from "../../../constants/webservices";
import { callApi } from "../../../utils/api";
import { Upload } from "../../../components/upload";

type Props = {};
export const CreateProject = (props: Props) => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (values: any) => {
    if (!values.parentId) delete values.parentId;
    callApi(REQUEST_PROJECT_CREATE, {
      method: "post",
      data: values,
    })
      .then(() => alert("OK,Created"))
      .catch(() => alert("Errored , Check Console"));
  };

  return (
    <div>
      <h1 className={"text-white mb-8"}>project/CreateProject</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={"title"}
          placeHolder={"title"}
          register={register("title")}
        />
        <Input
          label={"link"}
          placeHolder={"link"}
          register={register("link")}
        />
        <Input
          label={"stacks"}
          placeHolder={"stacks"}
          register={register("stacks")}
        />
        <Input
          label={"sourceCodeUrl"}
          placeHolder={"sourceCodeUrl"}
          register={register("sourceCodeUrl")}
        />
        <Input
          label={"demoUrl"}
          placeHolder={"demoUrl"}
          register={register("demoUrl")}
        />
        <Upload
          onUploaded={(staticUrl) => setValue("thumbnail", staticUrl)}
          onErrored={() => {}}
        />
        <Button
          className={"bg-stroke text-secondary-300 text-sm p-2 rounded mt-2"}
        >
          submit-message
        </Button>
      </form>
    </div>
  );
};
