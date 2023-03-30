// @flow
import * as React from "react";

type Props = {
  label: string;
  placeHolder: string;
  register: any;
};
export const Input = (props: Props) => {
  return (
    <>
      <label className={"block mt-4"} htmlFor="">
        {props.label}
      </label>
      <input
        type="text"
        placeholder={props.placeHolder}
        className={
          "w-full mb-8 bg-transparent border border-stroke bg-body rounded-md mt-2"
        }
        {...props.register}
      />
    </>
  );
};
