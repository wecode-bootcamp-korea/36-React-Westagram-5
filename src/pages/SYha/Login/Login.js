import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Login.scss';
const Login = () => {
  // state
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  // set 함수
  const saveUserId = event => {
    setUserId(event.target.value);
  };
  const saveUserPw = event => {
    setUserPw(event.target.value);
  };

  // Navigate
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  };

  return (
    <main className="body flex login_main">
      <article className="mainBox">
        <header className="login_mainlogo">
          <h1 onClick={goToMain}>Westagram</h1>
        </header>
        <form className="flex form">
          <input
            className="pwAndId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={userId}
            onChange={saveUserId}
          />
          <input
            className="pwAndId"
            type="password"
            placeholder="비밀번호"
            value={userPw}
            onChange={saveUserPw}
          />

          <Link className="link" to="/main">
            <button className="loginbtn"> 로그인</button>
          </Link>
        </form>

        <footer>
          <a className="atag" href="/">
            비밀번호를 잊으셨나요?
          </a>
        </footer>
      </article>
    </main>
  );
};

export default Login;
