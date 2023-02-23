import React from "react";
import { Outlet } from "react-router-dom";
import ReloadPrompt from "./serviceworker/ReloadPrompt";

function App() {
  return (
    <>
      <Outlet />
      <ReloadPrompt />
    </>
  );
}

export default App;
