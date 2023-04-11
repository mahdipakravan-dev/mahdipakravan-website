// @flow
import * as React from "react";
import { callApi } from "../utils/api";
import { REQUEST_FILE_UPLOAD } from "../constants/webservices";

type Props = {
  onUploaded: (staticUrl: string) => void;
  onErrored: (error: string) => void;
};
export const Upload = (props: Props) => {
  return (
    <input
      type="file"
      onChange={(e) => {
        const files = e.target.files;
        const formData = new FormData();
        formData.append("file", files![0]);
        if (files && files[0])
          callApi(REQUEST_FILE_UPLOAD, {
            method: "post",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            data: formData,
          })
            .then(props.onUploaded)
            .catch(props.onErrored);
      }}
    />
  );
};
