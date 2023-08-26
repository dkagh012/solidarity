import React from "react";
import classes from "./JoinEmail.module.scss";

function JoinEmail(props) {
  const [codeInputs, setCodeInputs] = React.useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleCodeInputChange = (index, event) => {
    const newCodeInputs = [...codeInputs];
    newCodeInputs[index] = event.target.value;
    setCodeInputs(newCodeInputs);
  };

  const verifyEmailCode = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/verify-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: props.email,
          code: codeInputs.join(""),
        }),
      });

      const data = await response.json();

      if (data.success) {
        props.onChange("JoinFinish");
      } else {
        setErrorMessage(data.message || "Verification code is incorrect");
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
    setIsLoading(false);
  };
  console.log(props.email);
  return (
    <div className={classes.JoinEmailBox}>
      <form>
        <div>
          <div className={classes.JoinEmailTitle}>
            <h1>이메일 인증 코드를 입력해 주세요</h1>
          </div>
          <div className={classes.JoinEmailDesc}>
            <span className={classes.emailaddress}>{props.email}</span>으로
            회원가입 이메일 인증 코드를 전달하였습니다. 30분 이내에 이메일에
            있는 인증코드를 입력해주세요.
          </div>
          <div className={classes.JoinEmailInput}>
            {codeInputs.map((code, index) => (
              <input
                key={index}
                type="number"
                value={code}
                onChange={(e) => handleCodeInputChange(index, e)}
              />
            ))}
          </div>
          {errorMessage && <div className={classes.error}>{errorMessage}</div>}
          <span className={classes.JoinEmailCheck}>
            인증 코드가 수신되지 않은 경우 스팸메일함 또는 입력하신 이메일
            주소가 정확한지 확인해 주세요
          </span>
        </div>
        <button type="button" onClick={verifyEmailCode} disabled={isLoading}>
          회원가입 완료
        </button>
      </form>
    </div>
  );
}

export default JoinEmail;
