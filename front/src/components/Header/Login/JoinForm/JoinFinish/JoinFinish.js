import React from "react";
import classes from "./JoinFinish.module.scss";
function JoinFinish(props) {
  return (
    <div>
      <div className={classes.JoinFinishBox}>
        <p className={classes.icon}>👏</p>
        <strong className={classes.Title}>회원가입이 완료 되었습니다 !</strong>
        <div>
          <h4 className={classes.Desc}>로그인 후 제휴 업체를 확인해 보세요</h4>
          <h4 className={classes.Desc}>
            회사 등록 또는 관리자 등록을 완료하고 파트너 제휴 신청을 할 수
            있습니다.
          </h4>
        </div>
      </div>
      <button
        type="button"
        className={classes.JoinFinishBtn}
        onClick={() => props.onChange("loginForm")}
      >
        로그인 페이지 이동
      </button>
    </div>
  );
}

export default JoinFinish;
