import * as React from "react";
import { useSearchParams } from "react-router-dom";
import useAsync from "../utils/hooks/useAsync";
import { callApi } from "../utils/api";
import { REQUEST_PROJECTS } from "../constants/webservices";
import { useEffect } from "react";
import { Code } from "../components/code";
import "./Projects.css";
import { Button } from "../components/button";
import { useDownloadImage } from "../hooks/useDownloadImage";
import { LoadingBlur } from "../components/loading-blur";
import { goToPopup } from "../components/modal";

let hintedBefore = false;

type Props = {};
export const Projects = (props: Props) => {
  let [searchParams] = useSearchParams();
  const getProjectsAsync = useAsync<{ items: Array<Project> }>(
    ({ stacks }: { stacks: string }) => {
      console.log({ stacks });
      return callApi(
        REQUEST_PROJECTS +
          `?page=1&limit=11${
            stacks?.length ? "&stack=" + stacks.replace("|", ",") : ""
          }`,
        {
          method: "get",
        },
        { useCache: false }
      );
    }
  );

  useEffect(() => {
    if (!hintedBefore) {
      goToPopup("prompt", {
        title: "being completed...",
        message: "will be better in the next version :)",
        closeTimeout: 10000,
      });

      setTimeout(() => {
        hintedBefore = true;
      }, 6000);
    }
  }, []);

  useEffect(() => {
    getProjectsAsync.run({
      stacks: searchParams.get("stacks")?.split(",")?.join("|") || "",
    });
  }, [searchParams]);

  return (
    <div
      className={
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 overflow-y-scroll h-[90vh]"
      }
    >
      {getProjectsAsync.result?.items?.map((project) => (
        <Project project={project} key={`__project__${project.id}`} />
      ))}
    </div>
  );
};

const Project = ({ project }: { project: Project }) => {
  const { image } = useDownloadImage(project.thumbnail);
  return (
    <article className={"w-full p-2 h-80"}>
      <header className={"flex justify-start items-center"}>
        <span className={"text-secondary-200 text-sm mr-2"}>
          {project.title}
        </span>
        <Code markdown={`//${project.stacks.slice(0, 10)}...`} />
      </header>
      <div
        className={
          "border border-stroke rounded-none rounded-t-2xl overflow-hidden"
        }
      >
        <div className={"h-60"}>
          <img
            src={image}
            alt=""
            className={"w-full h-full"}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="border border-stroke rounded-none rounded-b-md  py-2 px-1">
          <span className="block text-lg font-semibold text-secondary-200">{`${project.title}`}</span>
          <p className={"text-secondary-50 text-xs pt-2"}>
            the , {project.title}
          </p>
          <div className={"flex justify-between"}>
            {project.link && <Button>project</Button>}
            {project.sourceCodeUrl && <Button>source</Button>}
            {project.demoUrl && <Button>demo</Button>}
          </div>
        </div>
      </div>
    </article>
  );
};
