import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "./assets/fonts/font.css";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import { Layout } from "./components/layout";
import About from "./pages/About";
import {
  ROUTE_ABOUT,
  ROUTE_BLOG,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_PREFIX,
  ROUTE_PROJECTS,
} from "./constants/routes";
import { Projects } from "./pages/Projects";

createRoot(document.getElementById("app")!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path={ROUTE_PREFIX} element={<App />}>
          <Route
            index
            path={ROUTE_PREFIX}
            element={<Navigate to={ROUTE_HOME} replace />}
          />
          <Route index path={ROUTE_HOME} element={<Home />} />
          <Route index path={ROUTE_ABOUT} element={<About />} />
          <Route index path={ROUTE_PROJECTS} element={<Projects />} />
          <Route index path={ROUTE_BLOG} element={<About />} />
          <Route index path={ROUTE_CONTACT} element={<About />} />
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
);
