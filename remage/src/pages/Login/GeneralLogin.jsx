import React from "react";
import { useState } from "react";
import FormInput from "../../components/common/FormInput";
import InputError from "../../components/common/InputError";
import FormCheckbox from "../../components/common/FormCheckbox";
import TextButton from "../../components/common/TextButton";
import Button from "../../components/common/Button";
import styles from "./GeneralLogin.module.css";
import { loginUser } from "../../api/auth";
import useAuthStore from "../../stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../service/user";

const GeneralLogin = ({ userType }) => {
  const { login } = useAuthStore();
  const [usernameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [usernameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const handleLoginClick = async () => {
    if (usernameInput === "") {
      setUserNameError("아이디를 입력해 주세요.");
      return;
    }
    if (passwordInput === "") {
      setUserNameError("");
      setPasswordError("비밀번호를 입력해 주세요.");
      return;
    }
    setUserNameError("");
    setPasswordError("");
    // console.log(usernameInput);
    // console.log(passwordInput);
    try {
      await loginService(usernameInput, passwordInput, navigate, login, userType)
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className={styles["login-page"]}>
      <div className="user-type-selector">
        <Button
          text="일반"
          className={
            userType === "general"
              ? "login-active-button"
              : "login-inactive-button"
          }
          url={userType === "company" ? "/login/general/" : ""}
        />
        <Button
          text="기업"
          className={
            userType === "company"
              ? "login-active-button"
              : "login-inactive-button"
          }
          url={userType === "general" ? "/login/company/" : ""}
        />
      </div>
      <div className={styles["login-content"]}>
        <div className="login-form-group">
          <FormInput
            id="general-user-name"
            label="아이디"
            placeholder="아이디를 입력하세요."
            value={usernameInput}
            onChange={(e) => {
              setUserNameInput(e.target.value);
            }}
          />
          {usernameError && <InputError errorMessage={usernameError} />}
        </div>
        <div className="login-form-group">
          <FormInput
            id="general-user-password"
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요."
            value={passwordInput}
            onChange={(e) => {
              setPasswordInput(e.target.value);
            }}
          />
          {passwordError && <InputError errorMessage={passwordError} />}
        </div>
        <div className="login-options">
          <FormCheckbox id="general-user-checkbox" label="아이디 저장" />
          <div className="text-buttons">
            <TextButton className="user-name-find" text="아이디 찾기" />
            <TextButton className="password-find" text="비밀번호 찾기" />
          </div>
        </div>
        <Button
          className="login-button"
          text="로그인"
          onClick={handleLoginClick}
        />
        <div className="login-guide-group">
          <span className="login-guide-text">아직 회원이 아니신가요?</span>
          <TextButton
            className={"login-guide-button"}
            text="회원가입 하기"
            url="/sign-up/"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralLogin;
