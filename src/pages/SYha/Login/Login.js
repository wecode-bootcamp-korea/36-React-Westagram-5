import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.scss';
const Login = () => {
  // state
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  // set 함수
  const saveUserInfo = event => {
    const ID = event.target.id;
    const VALUE = event.target.value;
    setUserInfo({ ...userInfo, [ID]: VALUE }); //userID에 사용자의 입력값을 넣어줌
  };

  const Isvalid = userInfo => {
    return (
      userInfo.email.indexOf('@') !== -1 &&
      userInfo.email.length >= 6 &&
      userInfo.password.length >= 5
    );
  };

  // Navigate
  const navigate = useNavigate();
  // const goToMain = () => {
  //   navigate('/mainha');
  // };

  // 회원가입
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

  // 로그인

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

  return (
    <main className="body flex login_main">
      <article className="mainBox">
        <header className="login_mainlogo">
          <h1>Westagram</h1>
        </header>
        <form className="flex form">
          <input
            id="email"
            className="pwAndId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={userInfo.email}
            onChange={saveUserInfo}
            // onKeyUp={Isvalid}
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
            className={Isvalid(userInfo) ? 'loginbtn' : 'loginbtn_disabled'}
            disabled={Isvalid(userInfo) ? false : true}
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
