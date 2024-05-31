import { HashRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Layout from "../components/layout";
import { ROUTES } from "../constants/routes";
import About from "../pages/about";
import Rooms from "../pages/rooms";
import Room from "../pages/room";
import Contact from "../pages/contact";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<Navigate to={ROUTES.HOME} replace />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.ROOMS} element={<Outlet />}>
            <Route index element={<Rooms />} />
            <Route path={ROUTES.ROOM} element={<Room />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
