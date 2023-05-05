import React from "react";
import "./Auth.css";
import { useLocation } from "react-router-dom";
import Login from "../../components/Login/Login";
import Registration from "../../components/Registration/Registration";

export default function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <div className="auth">
      <div className="auth__container">
        {isLogin ? <Login /> : <Registration />}
      </div>
    </div>
  );
}
