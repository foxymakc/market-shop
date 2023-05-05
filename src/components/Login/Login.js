import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormAuth from "../FormAuth/FormAuth";
import Input from "../Input/Input";
import useValidation from "../../utils/Hooks/useValidation";
import { BackLogin } from "../../utils/backFunction";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../store/userReduser";
import "./Login.css";

export default function Login() {
  let navigate = useNavigate();
  const { values, handleChange, errors, isValid, resetForm } = useValidation();
  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const dispatch = useDispatch();
  const loginUser = (data) => {
    dispatch(loginUserAction(data));
  };

  function handleLogin(event) {
    event.preventDefault();
    BackLogin(values.email, values.password).then((data) => {
      if (data.auth === true) {
        localStorage.setItem("jwt", data.jwt);
        loginUser(data.auth);
        navigate("/");
      }
    });
  }

  return (
    <div className="login">
      <FormAuth
        nameForm={"login-form"}
        titleForm={"Авторизация"}
        textBtnForm={"Войти"}
        textSpanForm={"Ещё не зарегистрированы?"}
        linkForm={"/registration"}
        textLinkForm={"Зарегистироваться"}
        onSubmitForm={handleLogin}
        isDisabled={!isValid}
      >
        <Input
          textLabelInput={"Email"}
          typeInput="email"
          id="email"
          name="email"
          maxLength="40"
          minLength="2"
          pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
          required
          errorId={"email-error"}
          errorText={errors.email}
          onChange={handleChange}
          value={values.email || ""}
        />
        <Input
          textLabelInput={"Пароль"}
          typeInput={"password"}
          id={"password"}
          name={"password"}
          required
          errorId={"password-error"}
          errorText={errors.password}
          onChange={handleChange}
          value={values.password || ""}
        />
      </FormAuth>
    </div>
  );
}
