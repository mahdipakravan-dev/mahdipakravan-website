import { useEffect, useState } from "react";

export function useOnMountAnimation({
  onMountClassName = "opacity-0 transition-all ease-in-out duration-300",
  mountClassName = "opacity-1 transition-all ease-in-out duration-300",
  delayTime = 1000,
}: {
  delayTime?: number;
  mountClassName?: string;
  onMountClassName?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, delayTime);
  }, []);

  return mounted ? mountClassName : onMountClassName;
}
