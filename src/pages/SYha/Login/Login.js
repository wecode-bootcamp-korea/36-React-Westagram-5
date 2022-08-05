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
    setUserId(event.target.value); //userID에 사용자의 입력값을 넣어줌
  };
  const saveUserPw = event => {
    setUserPw(event.target.value);
  };
  const validation = (userId, userPw) => {
    return (
      userId.indexOf('@') !== -1 && userId.length >= 6 && userPw.length >= 5
    );
  };

  // Navigate
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/mainha');
  };

  return (
    <main className="body flex login_main">
      <article className="mainBox">
        <header className="login_mainlogo">
          <h1 onClick={goToMain}>Westagram</h1>
        </header>
        <form className="flex form">
          <input
            classId=""
            className="pwAndId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={userId}
            onChange={saveUserId}
            onKeyUp={validation}
          />
          <input
            className="pwAndId"
            type="password"
            placeholder="비밀번호"
            value={userPw}
            onChange={saveUserPw}
          />

          <Link className="link" to="/mainha">
            <button
              className="loginbtn"
              disabled={validation(userId, userPw) === true ? false : true}
            >
              로그인
            </button>
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
