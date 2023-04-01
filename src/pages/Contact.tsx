import React from "react";
import "./Home.css";
import { Code } from "../components/code";
import { useSearchParams } from "react-router-dom";
import { Tweet } from "../components/tweet";
import { Button } from "../components/button";
import { useForm } from "react-hook-form";
import { Input } from "../components/input";
import { TextAnimation } from "../components/text-animation";
import useAsync from "../utils/hooks/useAsync";
import { callApi } from "../utils/api";
import { REQUEST_CONTACT_CREATE } from "../constants/webservices";
import { LoadingBlur } from "../components/loading-blur";
import { goToPopup } from "../components/modal";

function About() {
  const { run, isLoading } = useAsync(
    (data) =>
      callApi(REQUEST_CONTACT_CREATE, {
        method: "post",
        data,
      }),
    {
      onSuccess: () => {
        goToPopup("prompt", {
          message: "Your message has just been sent to me!",
        });
      },
    }
  );
  const { register, handleSubmit, watch } = useForm({
    mode: "onChange",
  });
  const md = `
const button = document.querySelector('#sendBtn');
const message = {
name: "${
    watch("name")?.length > 19
      ? watch("name")?.slice(0, 19) + "..."
      : watch("name") || ""
  }",
email:  "${
    watch("email")?.length > 19
      ? watch("email")?.slice(0, 19) + "..."
      : watch("email") || ""
  }",
message:  "${
    watch("message")?.length > 19
      ? watch("message")?.slice(0, 19) + "..."
      : watch("message" + "") || ""
  }",
date: "${new Date().toDateString()}"
}

button.addEventListener('click', () => {
form.send(message);
})
`;

  const onSubmit = (values: Object) => {
    run(values);
  };

  return (
    <div
      className={"w-full h-full md:flex justify-start text-secondary-50 pb-20"}
    >
      <div className="w-3/6 grid items-center px-8 w-full pt-8 relative ">
        {isLoading && <LoadingBlur />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={"pb-6"}>
            <span className={"text-sm font-semibold"}>Contact us :) </span>
            <TextAnimation typistProps={{ className: "text-xs" }}>
              Your message will be sent and read to me immediately !
            </TextAnimation>
          </div>
          <Input
            label={"_name"}
            placeHolder={"name"}
            register={register("name")}
          />
          <Input
            label={"_email"}
            placeHolder={"email"}
            register={register("email")}
          />
          <div>
            <label htmlFor="">_message : </label>
            <textarea
              rows={6}
              onResize={() => {}}
              placeholder={"message"}
              className={
                "bg-body border-2 border-stroke block mt-2 w-full rounded-lg bg-transparent"
              }
              {...register("message")}
            />
          </div>
          <Button
            className={
              "bg-stroke text-secondary-300 text-sm p-2 rounded mt-2 w-full"
            }
          >
            submit-message
          </Button>
        </form>
      </div>
      <div
        className={
          "w-3/6 grid items-center border border-transparent p-2 border-l-stroke pt-8 overflow-hide text-sm"
        }
      >
        <Code markdown={md} />
      </div>
    </div>
  );
}

export default About;
