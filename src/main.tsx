import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "./assets/fonts/font.css";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import { Layout } from "./components/layout";
import About from "./pages/About";

createRoot(document.getElementById("app")!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route index element={<About />} />
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
);
