import React from "react";
import classes from "./JoinForm.module.css";
function JoinForm(props) {
  const { email, updateEmail, isEmailValid, isPasswordMatch, setPasswordCheck, password, setPassword, passwordCheck } = props;
  return (
    <div className={classes.JoinBox}>
      <form>
        <div className={classes.JoinBoxInput}>
          <div>
            <h1>이메일을 입력해주세요</h1>
            <input
              type="text"
              value={email}
              required
              placeholder="이메일 입력"
              id="email"
              onChange={(e) => updateEmail(e.target.value)}
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
              placeholder="비밀번호"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <button type="submit" onClick={() => props.onChange("JoinEmail")}>다음</button>
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
