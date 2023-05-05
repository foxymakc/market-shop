import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes, authRoutes } from "../../routes";
import { useSelector } from "react-redux";

export default function AppRouter() {
  const userRedux = useSelector((state) => state.user);
  return (
    <Routes>
      {userRedux.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact />
      ))}
    </Routes>
  );
}
