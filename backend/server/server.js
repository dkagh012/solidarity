const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const router = require("../server/routes/index");
const sendEmail = require("../Mail/mailer");
app.use("/api", router);

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "project",
});

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.post("/api/register", async (req, res) => {
  const userEmail = req.body.email;

  // ... 데이터베이스에 사용자 정보 저장 등의 로직 ...

  await sendEmail(userEmail);

  res.send(
    "Registration successful. Please check your email for verification code."
  );
});

app.post("/api/verify-code", async (req, res) => {
  const userEmail = req.body.email;
  const userCode = req.body.code;

  // ... 데이터베이스에서 해당 이메일의 인증 코드를 검색 ...

  if (databaseCode === userCode) {
    // ... 사용자의 인증 상태를 'verified'로 업데이트 ...

    res.json({ success: true, message: "Verification successful" });
  } else {
    res.json({ success: false, message: "Incorrect verification code" });
  }
});

// 회원가입 기능
app.post("/api/Join", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const query = "INSERT INTO users (email, password) VALUES (?, ?)";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error inserting user:", err);
      res.status(500).json({ error: "Failed to insert user" });
    } else {
      res.status(200).json({ message: "User registered successfully" });
    }
  });
});
app.get("/api/Join", (req, res) => {
  const query = "SELECT * FROM users";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Failed to fetch users" });
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});
