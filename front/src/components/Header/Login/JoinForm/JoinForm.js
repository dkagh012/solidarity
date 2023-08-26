import React, { useState } from "react";
import classes from "./JoinForm.module.scss";
import axios from "axios";
function JoinForm(props) {
  const {
    setEmail,
    updateEmail,
    isEmailValid,
    isPasswordMatch,
    setPasswordCheck,
    // password,
    setPassword,
    passwordCheck,
  } = props;
  // 회원가입 기능
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailValue(emailValue); // It seems you are maintaining a local state for email in JoinForm. If it's not necessary, you can consider removing it.
    updateEmail(emailValue);
  };
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
    setPassword(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/Join", {
        email: emailValue,
        password: passwordValue,
      });
      console.log(response.data.message);
      props.onChange("JoinEmail"); // onClick에서 실행하던 것을 여기로 이동
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className={classes.JoinBox}>
      <form onSubmit={handleSubmit}>
        <div className={classes.JoinBoxInput}>
          <div>
            <h1>이메일을 입력해주세요</h1>
            <input
              type="text"
              value={emailValue}
              required
              placeholder="이메일 입력"
              id="email"
              autoComplete="email"
              onChange={handleEmailChange}
            ></input>
            {!isEmailValid && (
              <span className="Check">이메일 형식이 맞지 않습니다.</span>
            )}
          </div>
          <div>
            <h1>비밀번호를 입력해주세요</h1>
            <input
              type="password"
              id="password"
              autoComplete="password"
              placeholder="비밀번호"
              required
              value={passwordValue}
              onChange={handlePasswordChange}
            ></input>
          </div>
          <div>
            <input
              type="password"
              id="passwordCheck"
              placeholder="비밀번호 입력"
              required
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
            ></input>
          </div>
          {!isPasswordMatch() && (
            <span className="Check">비밀번호가 일치하지 않습니다</span>
          )}
        </div>
        <div className={classes.JoinBoxDesc}>
          <span>8자 이상 입력해주세요</span>
          <span>영문,숫자,특수문자 중 2가지 이상 조합해 주세요</span>
        </div>
        <div className={classes.loginBoxBtn}>
          <button type="submit"> 다음</button>
        </div>
      </form>
      <div className={classes.JoinBoxLoginBtn}>
        <p>이미 계정이 있으신가요?</p>
        <button type="button" onClick={() => props.onChange("loginForm")}>
          로그인
        </button>
      </div>
    </div>
  );
}

export default JoinForm;
