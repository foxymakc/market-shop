import React from 'react';
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../../routes";

export default function AppRouter() {
  return (
    <Routes>
      {/* {currentUser.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))} */}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact />
      ))}
    </Routes>
  );
}
