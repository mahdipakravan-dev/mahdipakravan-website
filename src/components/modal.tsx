import React, { Suspense, lazy, useEffect, useState } from "react";
import { buildClassNames } from "../utils/css";

export let goToPopup = (modalName?: string, payload?: any) => {};
export let loadPopUp = (modalName?: string) => {};

type Props = {};
export const Modal = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [Component, setComponent] = useState<any>();
  const [payload, setPayload] = useState({});

  useEffect(() => {
    goToPopup = (modalName, payload) => {
      if (!modalName) {
        setShowModal(false);
        setComponent(undefined);
        return;
      }
      if (payload) setPayload(payload);
      setShowModal(true);
      setTimeout(async () => {
        /* @vite-ignore */
        setComponent(lazy(() => import(`./modals/${modalName}`)));
      });
    };
    loadPopUp = (modalName) => import(`./modals/${modalName}`);
  }, []);

  return (
    <div
      className={buildClassNames(
        "absolute left-0 top-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] grid items-center text-white",
        showModal ? "visible" : "invisible"
      )}
    >
      <Suspense fallback={<></>}>
        {Component && <Component {...payload} />}
      </Suspense>
      {/*{Component && <Component />}*/}
    </div>
  );
};
