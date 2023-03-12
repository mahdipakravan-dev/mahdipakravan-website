import React, { Suspense, lazy, useEffect, useState } from "react";
import { buildClassNames } from "../utils/css";

export let goToPopup = (modalName: string) => {};

type Props = {};
export const Modal = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [Component, setComponent] = useState<any>();

  useEffect(() => {
    goToPopup = (modalName) => {
      setShowModal(true);
      setTimeout(async () => {
        // const dynamicComponent = await import(`./modals/${modalName}`);
        // console.log("Dynamic Component is ", dynamicComponent.default);
        setComponent(lazy(() => import(`./modals/${modalName}`)));
      });
    };
  }, []);

  return (
    <div
      className={buildClassNames(
        "absolute left-0 top-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] grid items-center text-white",
        showModal ? "visible" : "invisible"
      )}
    >
      <i onClick={() => setShowModal(false)}>Close</i>
      <Suspense fallback={<div>Loading...</div>}>
        {Component && <Component />}
      </Suspense>
      {/*{Component && <Component />}*/}
    </div>
  );
};
