import React from "react";
import "./Home.css";
import { Code } from "../components/code";
import { useSearchParams } from "react-router-dom";
import { Tweet } from "../components/tweet";
import { Button } from "../components/button";

const md = `
const button = document.querySelector('#sendBtn');
const message = {
name: "Jonathan Davis",
email: "jonathan-davis@gmail.com",
message: "Hey! Just checked your website and it looks awesome! Also \n, I checked your articled on Medium. Lerned a few nice tips. Thanks!",
date: "Thu 21 Apr"
}

button.addEventListener('click', () => {
form.send(message);
})
`;
function About() {
  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("name"));

  return (
    <div
      className={
        "w-full h-full md:flex justify-between text-secondary-50 pb-20"
      }
    >
      <div className="w-3/6 grid items-center px-8 w-full pt-8">
        <form action="">
          <div>
            <label htmlFor="">_name : </label>
            <input
              type="text"
              placeholder={"ex : Cristiano Ronaldo!"}
              className={
                "w-full mb-8 bg-transparent border border-stroke bg-body rounded-md mt-2"
              }
            />
          </div>
          <div>
            <label htmlFor="">_email : </label>
            <input
              type="email"
              placeholder={"ex : cristiano@ronaldo.com"}
              className={
                "w-full mb-8 bg-transparent border border-stroke bg-body rounded-md mt-2"
              }
            />
          </div>

          <div>
            <label htmlFor="">_message : </label>
            <textarea
              name=""
              id=""
              rows={6}
              onResize={() => {}}
              placeholder={"message"}
              className={
                "bg-body border-2 border-stroke block mt-2 w-full rounded-lg bg-transparent"
              }
            />
          </div>
          <Button
            className={"bg-stroke text-secondary-300 text-sm p-2 rounded mt-2"}
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
