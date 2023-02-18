import { useEffect, useState } from "react";

const useAsync = <T = any, P = any>(
  fn: (payload: P) => Promise<T>,
  options?: {
    defaultValue?: T;
    sendOnMount?: {
      shouldSend: boolean;
      payload: P;
    };
    dependencies?: Array<any>;
    onSuccess?: (response: T, requestedWith: P) => void;
  }
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();
  const [result, setResult] = useState<T | undefined>(options?.defaultValue);

  useEffect(() => {
    if (options?.sendOnMount?.shouldSend) run(options.sendOnMount.payload);
  }, []);

  const run = (payload: P) => {
    setIsLoading(true);
    fn(payload).then(
      (res) => {
        setIsLoading(false);
        setResult(res);
        if (options?.onSuccess) options.onSuccess(res, payload);
      },
      (err) => {
        setIsLoading(false);
        setError(err);
      }
    );
  };

  return { isLoading, error, result, run };
};

export default useAsync;
