import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import {
  REQUEST_GALLERY_CREATE,
  REQUEST_PAGE_CREATE,
} from "../../../constants/webservices";
import { callApi } from "../../../utils/api";
import { Upload } from "../../../components/upload";

type Props = {};
export const CreateGallery = (props: Props) => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (values: any) => {
    if (!values.parentId) delete values.parentId;
    callApi(REQUEST_GALLERY_CREATE, {
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
        <Upload
          onUploaded={(staticUrl) => setValue("src", staticUrl)}
          onErrored={() => {}}
        />
        <Input
          label={"title"}
          placeHolder={"Title"}
          register={register("title")}
        />
        <Input
          label={"pageId"}
          placeHolder={"PageId"}
          register={register("pageId")}
        />
        <Input
          label={"desc"}
          placeHolder={"description (not required)"}
          register={register("desc")}
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
