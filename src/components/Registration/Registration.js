import React, { useEffect } from "react";
import "./Registration.css";
import FormAuth from "../FormAuth/FormAuth";
import useValidation from "../../utils/Hooks/useValidation";
import Input from "../Input/Input";

export default function Registration() {
  const { values, handleChange, errors, isValid, resetForm } = useValidation();
  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleRegister(event) {
    event.preventDefault();
    console.log(values.email, values.password);
  }
  return (
    <div className="registration">
      <FormAuth
        nameForm={"registration-form"}
        titleForm={"Регистрация"}
        textBtnForm={"Зарегистрироваться"}
        textSpanForm={"Уже зарегистрированы?"}
        linkForm={"/login"}
        textLinkForm={"Войти"}
        onSubmitForm={handleRegister}
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
