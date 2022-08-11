import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.scss';
const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const saveUserInfo = event => {
    const { id, value } = event.target;
    setUserInfo({ ...userInfo, [id]: value });
  };

  const IsValid =
    userInfo.email.indexOf('@') !== -1 &&
    userInfo.email.length >= 6 &&
    userInfo.password.length >= 5;

  const navigate = useNavigate();

  const signup = e => {
    e.preventDefault();
    fetch('http://10.58.4.94:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
      }),
    })
      .then(response => response.json())
      .then(data => data);
  };
  const checkLogin = e => {
    e.preventDefault();
    fetch('http://10.58.4.94:3000/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
      }),
    })
      .then(response => response.json())
      .then(data => localStorage.setItem('token', JSON.stringify(data)));
    if (localStorage.token) {
      navigate('/mainha');
    }
  };

  // const token = localStorage.getItem('token) 으로 먼저 변수에 지정하고 사용
  // 보통에러메세지는 로컬스토리지에 저장 하지 않는다.

  return (
    <main className="body flex login_main">
      <article className="mainBox">
        <header className="login_mainlogo">
          <h1>Westagram</h1>
        </header>
        <form className="flex form">
          <input
            id="email" //id 보다 name을 사용
            className="pwAndId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={userInfo.email}
            onChange={saveUserInfo}
          />
          <input
            id="password"
            className="pwAndId"
            type="password"
            placeholder="비밀번호"
            value={userInfo.password}
            onChange={saveUserInfo}
          />
          <button
            className={`loginbtn ${!IsValid ? 'disabled' : ''}`}
            disabled={!IsValid}
            onClick={checkLogin}
            type="submit"
          >
            로그인
          </button>
        </form>

        <footer>
          <a className="atag" href="/" onClick={signup}>
            회원가입
          </a>
          <br />
          <br />
          <a className="atag" href="/">
            비밀번호를 잊으셨나요?
          </a>
        </footer>
      </article>
    </main>
  );
};

export default Login;
