export const CACHE_API_KEY = "MAHDI__CACHE";
export const STORAGE_APP = "MAHDI__APP";

export function getAppStorage(): AppStorage | undefined {
  const current = window.localStorage.getItem(STORAGE_APP);
  return current ? JSON.parse(current) : (undefined as AppStorage | undefined);
}

export function setAppStorage(payload: Partial<AppStorage>) {
  const current = getAppStorage();
  window.localStorage.setItem(
    STORAGE_APP,
    JSON.stringify({ ...current, ...payload })
  );
}
