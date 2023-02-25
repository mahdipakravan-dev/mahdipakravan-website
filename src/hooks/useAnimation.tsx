import "./styles.css";
import { useState, useEffect, useRef } from "react";
import buildClassName from "@utilities/buildClassName";

export default function useAnimation<T extends any>({
  state,
  mountingDuration = 2000,
  unmountingDuration = 2000,
  mountingClassNames,
  unmountingClassNames,
}: {
  state: T;
  mountingDuration?: number;
  mountingClassNames?: string;
  unmountingDuration?: number;
  unmountingClassNames?: string;
}) {
  const [showComponent, setShowComponent] = useState(false);
  const [mountingStatus, setMountingStatus] = useState<
    "mounting" | "unmounting" | undefined
  >();

  const classNames = buildClassName(
    mountingStatus === "mounting" && mountingClassNames,
    mountingStatus === "unmounting" && unmountingClassNames
  );

  useEffect(() => {
    const isUnmounting = showComponent && !state;
    const isMounting = !showComponent && state;
    if (isMounting) {
      setShowComponent(true);
      setMountingStatus("mounting");

      setTimeout(() => {
        setMountingStatus(undefined);
      }, mountingDuration);
    }
    if (isUnmounting) {
      setMountingStatus("unmounting");
      setTimeout(() => {
        setShowComponent(false);
        setMountingStatus(undefined);
      }, unmountingDuration);
    }
  }, [state]);

  return {
    showComponent,
    mountingStatus,
    classNames,
  };
}
