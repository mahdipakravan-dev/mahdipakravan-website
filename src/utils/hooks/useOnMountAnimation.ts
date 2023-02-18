import { useEffect, useState } from "react";

export function useOnMountAnimation({
  onMountClassName = "opacity-0 transition-all ease-in-out duration-300",
  mountClassName = "opacity-1 transition-all ease-in-out duration-300",
  delayTime = 1000,
  showAnimation = true,
  onAnimationEnd,
}: {
  delayTime?: number;
  showAnimation?: boolean;
  mountClassName?: string;
  onMountClassName?: string;
  onAnimationEnd?: NoneToVoidFunction;
}) {
  const [mounted, setMounted] = useState(!showAnimation);

  useEffect(() => {
    showAnimation &&
      setTimeout(() => {
        setMounted(true);
        if (onAnimationEnd) onAnimationEnd();
      }, delayTime);
  }, []);

  return mounted ? mountClassName : onMountClassName;
}
