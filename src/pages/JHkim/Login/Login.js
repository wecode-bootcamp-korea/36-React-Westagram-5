import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginBtn from './Components/LoginBtn';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  function savedUserAccount({ target }) {
    setAccount({
      ...account,
      [target.name]: target.value,
    });
  }

  const inputValidate =
    account.email.includes('@') && account.password.length >= 5;

  const loginHandle = e => {
    e.preventDefault();
    fetch('http://10.58.5.11:3000/auth/signin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: account.email,
        password: account.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem(Object.keys(data)[0], Object.values(data)[0]);
        const tokenValidate = localStorage.getItem('accessToken');
        const passwordValidate =
          localStorage.getItem('message') === 'invalid password';
        const emailValidate =
          localStorage.getItem('message') === 'specified user does not exist';
        if (tokenValidate) {
          navigate('/maink');
        } else if (emailValidate) {
          navigate('/logink');
          alert('email을 다시 입력해주세요.');
        } else if (passwordValidate) {
          navigate('/logink');
          alert('비밀번호가 틀립니다.');
        }
      });
  };

  return (
    <div className="container">
      <main className="loginDiv">
        <h1>westargram</h1>
        <form className="inputForm">
          <input
            name="email"
            type="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={account.email}
            onChange={savedUserAccount}
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={account.password}
            onChange={savedUserAccount}
          />
          {!inputValidate ? (
            <Link to="/logink">
              <LoginBtn to="/logink" className="submitButton" disabled={true} />
            </Link>
          ) : (
            <LoginBtn
              className="submitButton validated"
              disabled={false}
              onClick={loginHandle}
            />
          )}
        </form>
        <Link to="/logink" className="pwLink">
          비밀번호를 잊으셨나요?
        </Link>
      </main>
    </div>
  );
}

export default Login;
