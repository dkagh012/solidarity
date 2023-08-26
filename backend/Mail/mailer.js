require("dotenv").config();

const nodemailer = require("nodemailer");

async function sendEmail(toEmail) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 6자리의 랜덤 인증 코드 생성
  const verificationCode = Math.floor(100000 + Math.random() * 900000);

  let mailOptions = {
    from: `"Your Service Name" <${process.env.EMAIL_ADDRESS}>`, // 보내는 주소
    to: toEmail, // 수신자 이메일 주소
    subject: "Verification Code", // 메일 제목
    text: `Your verification code is: ${verificationCode}`, // 텍스트 본문
    html: `<b>Your verification code is: ${verificationCode}</b>`, // HTML 본문
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return { messageId: info.messageId, code: verificationCode }; // 전송된 메시지의 ID와 생성된 인증 코드를 반환합니다.
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // 오류를 던져서 함수를 호출한 측에서 처리할 수 있게 합니다.
  }
}

module.exports = sendEmail;
