import React, { useEffect } from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import "./reset.scss";
import axios from "axios";

function App() {
  // 서버에서 받은 데이터를 console로 찍어서 확인한다.
  useEffect(() => {
    axios
      .get("/api/test")
      .then((res) => console.log(res))
      .catch();
  });
  return (
    <div className={classes.Wrap}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
