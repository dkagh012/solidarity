import React from "react";
import classes from "./LoginForm.module.scss";

function LoginForm(props) {
  const { email, updateEmail, isEmailValid } = props;
  return (
    <div className={classes.loginBoxForm}>
      <form>
        <div className={classes.loginBoxInput}>
          <div>
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
            <input type="password" required placeholder="비밀번호 입력"></input>
          </div>
          <button className={classes.loginBoxBtn} type="submit">
            로그인
          </button>
        </div>
      </form>
      <ul className={classes.loginBoxList}>
        <li>
          <button type="button">이메일 찾기</button>
        </li>
        <li>
          <button type="button">비밀번호 찾기</button>
        </li>
        <li>
          <button type="button" onClick={() => props.onChange("joinForm")}>
            회원가입
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LoginForm;
