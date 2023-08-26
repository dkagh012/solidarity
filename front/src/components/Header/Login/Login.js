import React, { useState } from "react";
import classes from "./Login.module.scss";
import Logo from "../../../assets/image/logo.png";
import { IoClose } from "react-icons/io5";
import LoginForm from "./LoginForm/LoginForm";
import JoinForm from "./JoinForm/JoinForm";
import JoinEmail from "./JoinForm/JoinEmail/JoinEmail";
import JoinFinish from "./JoinForm/JoinFinish/JoinFinish";
import "./LoginBox.scss";
function Login({ onClose }) {
  const [activeForm, setActiveForm] = useState("loginForm");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  // 이메일 업데이트 함수
  const updateEmail = (newEmail) => {
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  // 이메일 형식 검사 함수
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  // 비밀번호와 비밀번호 확인 값이 일치하는지 확인하는 함수를 추가합니다.
  const isPasswordMatch = () => {
    return password === passwordCheck;
  };
  // 활성 폼 변경 함수
  const changeForm = (formName) => {
    setActiveForm(formName);
    setPassword("");
    setPasswordCheck("");
    setEmail(""); // 이메일 상태 초기화
    setIsEmailValid(true);
  };
  return (
    <div>
      <div className={classes.loginBox}>
        <div className={classes.loginBoxClose}>
          <button type="button" onClick={onClose}>
            <IoClose />
          </button>
        </div>
        {activeForm !== "JoinEmail" && activeForm !== "JoinFinish" && (
          <div className={classes.loginBoxLogo}>
            <img src={Logo}></img>
          </div>
        )}
        {activeForm === "loginForm" && (
          <LoginForm
            onChange={changeForm}
            email={email}
            updateEmail={updateEmail}
            isEmailValid={isEmailValid}
          />
        )}
        {activeForm === "joinForm" && (
          <JoinForm
            onChange={changeForm}
            setEmail={setEmail}
            email={email}
            updateEmail={updateEmail}
            isEmailValid={isEmailValid}
            password={password}
            setPassword={setPassword}
            passwordCheck={passwordCheck}
            setPasswordCheck={setPasswordCheck}
            isPasswordMatch={isPasswordMatch}
          />
        )}
        {activeForm === "JoinEmail" && (
          <JoinEmail email={email} onChange={changeForm} />
        )}
        {activeForm === "JoinFinish" && <JoinFinish onChange={changeForm} />}
      </div>
      <div onClick={onClose} className={classes.loginBoxBackground}></div>
    </div>
  );
}

export default Login;
