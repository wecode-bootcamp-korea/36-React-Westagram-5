import React from 'react';
import './Login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userInfo, setUserInfo] = useState({ id: '', password: '' });

  const saveUserInfo = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const isValid =
    userInfo.id.indexOf('@') !== -1 &&
    userInfo.id.length >= 6 &&
    userInfo.password.length >= 5;

  const navigate = useNavigate();

  const loginProcess = e => {
    e.prevent.preventDefault();
    fetch('http://10.58.0.32:3000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: userInfo.id,
        password: userInfo.password,
      }),
    })
      .then(response => response.json())
      .then(data => localStorage.setItem('token', JSON.stringify(data)));
    if (localStorage.token) {
      navigate('/mainh');
    }
  };

  return (
    <article className="main">
      <div className="wrap">
        <div>
          <h1>Westagram</h1>
          <form>
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={userInfo.id}
              onChange={saveUserInfo}
              name="id"
            />

            <input
              type="password"
              onChange={saveUserInfo}
              value={userInfo.password}
              placeholder="비밀번호"
              name="password"
            />
            <button
              className={`loginbtn ${!isValid ? 'disabled' : ''}`}
              disabled={!isValid}
              onClick={loginProcess}
              type="submit"
            >
              로그인
            </button>
          </form>
          <div className="hr-sect">또는</div>
          <div className="center">
            <a className="forget" href="/">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Login;
