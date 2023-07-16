import React from 'react';
import classes from './JoinForm.module.css'
function JoinForm() {
  return (
    <div className={classes.JoinBox}>
      <form>
        <div className={classes.JoinBoxInput}>
          <div>
            <h1>이메일을 입력해주세요</h1>
            <input type="text" placeholder='이메일 입력' required></input>
          </div>
          <div>
            <h1>비밀번호를 입력해주세요</h1>
            <input type="password" placeholder='비밀번호 입력' required></input>
          </div>
        </div>
        <div className={classes.JoinBoxDesc}>
          <span>8자 이상 입력해주세요</span>
          <span>영문,숫자,특수문자 중 2가지 이상 조합해 주세요</span>
        </div>
        <div className={classes.loginBoxBtn}>
          <button type="submit">다음</button>
        </div>
      </form>
      <div >
        <p>이미 계정이 있으신가요?</p><button type="button">로그인</button>
      </div>
    </div>
  )
}

export default JoinForm;