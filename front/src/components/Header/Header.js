import React, { useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import classes from './Header.module.scss';
import Login from './Login/Login'
import Logo from '../../assets/image/logo.png';

function Header() {
  const [showLogin, setShowLogin] = useState(false); // 로그인 팝업 표시 상태

  const handleLoginClick = () => {
    setShowLogin(!showLogin); // 로그인 팝업 표시 상태를 토글
  };

  return (
    <BrowserRouter >
      <header className={classes.Header}>
        <div className={classes.HeaderList}>
          <div className={classes.Logo}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className={classes.HeaderMenuList}>
            <ul className={`${classes.HeaderMenuLinkList} ${classes.HeaderFontStyle}`}>
              <li>
                <Link to="/">업체 검색</Link>
              </li>
              <li>
                <Link to="/">업체 등록</Link>
              </li>
            </ul>
          </div>
          <div className={`${classes.HeaderLoginButton} ${classes.HeaderFontStyle}`}>
            <button type="button" onClick={handleLoginClick}>로그인/회원가입</button>
          </div>
        </div>
        {showLogin && <Login onClose={handleLoginClick} />} 로그인 팝업 표시 상태가 true일 때만 Login 컴포넌트를 렌더링
      </header>
    </BrowserRouter>
  );
}

export default Header;
