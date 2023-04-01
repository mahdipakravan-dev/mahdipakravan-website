import { useEffect, useState } from "react";
import { callApi } from "../utils/api";
import { CACHE_API_KEY, IDB_KEY } from "../constants/local-storage";
import * as localforage from "localforage";
import useAsync from "../utils/hooks/useAsync";
import { BASE_URL, BASE_URL_API } from "../constants/webservices";

export function useDownloadImage(src: string) {
  const [image, setImage] = useState();
  const { run, result, error, isLoading, setData } = useAsync(() =>
    callApi(BASE_URL + src, {
      responseType: "blob",
    }).then((blob) => {
      localforage.setItem(src, blob);
      createImageFromBlob(blob);
      return blob;
    })
  );

  const createImageFromBlob = (blob: Blob) => {
    const urlCreator = window.URL || window.webkitURL;
    const imageUrl = urlCreator.createObjectURL(blob);
    setImage(imageUrl as any);
  };

  useEffect(() => {
    localforage.getItem(src).then((imageInCache) => {
      if (imageInCache) {
        setData(imageInCache);
        createImageFromBlob(imageInCache as Blob);
      } else run({});
    });
  }, []);

  return { result, error, isLoading, image };
}
