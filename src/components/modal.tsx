import React, { Suspense, lazy, useEffect, useState } from "react";
import { buildClassNames } from "../utils/css";

export let goToPopup = (modalName?: string, payload?: any) => {};
export let loadPopUp = (modalName?: string) => {};

const PromptModal = lazy(() => import("./modals/prompt"));

type Props = {};
export const Modal = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [componentName, setComponentName] = useState<any>();
  const [payload, setPayload] = useState({});

  const modalsMap: Record<string, any> = {
    prompt: PromptModal,
  };

  const Component = componentName ? modalsMap[componentName] : undefined;

  useEffect(() => {
    goToPopup = (modalName, payload) => {
      if (!modalName) {
        setShowModal(false);
        setComponentName(undefined);
        return;
      }
      if (payload) setPayload(payload);
      setShowModal(true);
      setTimeout(async () => {
        setComponentName(modalName);
      });
    };
    loadPopUp = (modalName) => modalsMap[modalName as string];
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
