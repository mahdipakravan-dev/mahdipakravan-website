import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "./assets/fonts/font.css";
import "./index.css";
import { Layout } from "./components/layout";

import {
  ROUTE_ABOUT,
  ROUTE_ADMIN,
  ROUTE_BLOG,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_PREFIX,
  ROUTE_PROJECTS,
} from "./constants/routes";
import { Projects } from "./pages/Projects";
import { Admin } from "./pages/admin/Admin";

const Contact = lazy(() => import("./pages/Contact"));
const App = lazy(() => import("./App"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

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
          <Route
            index
            path={ROUTE_HOME}
            element={
              <Suspense fallback={<>...</>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            index
            path={ROUTE_ABOUT}
            element={
              <Suspense fallback={<>...</>}>
                <About />
              </Suspense>
            }
          />
          <Route
            index
            path={ROUTE_PROJECTS}
            element={
              <Suspense fallback={<>...</>}>
                <Projects />
              </Suspense>
            }
          />
          <Route
            index
            path={ROUTE_BLOG}
            element={
              <Suspense fallback={<>...</>}>
                <About />
              </Suspense>
            }
          />
          <Route
            index
            path={ROUTE_CONTACT}
            element={
              <Suspense fallback={<>...</>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            index
            path={ROUTE_ADMIN}
            element={
              <Suspense fallback={<>...</>}>
                <Admin />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
);
