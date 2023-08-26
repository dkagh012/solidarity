import React from "react";
import classes from "./Footer.module.css";
import { BrowserRouter, Link } from "react-router-dom"
import Logo from "../../assets/image/logo.png"
function Footer() {
  return (
    <BrowserRouter>
      <footer>
        <div className={classes.footer}>
          <div className={classes.footerDesc}>
            <div className={classes.footerLogo}>
              <img src={Logo}></img>
            </div>
            <ul className={classes.footerItems}>
              <li><Link to="#">서비스 이용약관</Link></li>
              <li><Link to="#">개인정보처리방침</Link></li>
              <li><Link to="#">결제/환불약관</Link></li>
              <li><Link to="#">고객센터</Link></li>
            </ul>
          </div>
          <div className={classes.footerInfo}>
            <h1>Copyright 2023 (C) Solidarity. All Rights Reserved.</h1>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default Footer;