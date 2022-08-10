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

  const isValidate =
    account.email.includes('@') && account.password.length >= 5;

  const loginHandle = e => {
    e.preventDefault();
    fetch('http://10.58.6.178:3333/auth/signin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: account.email,
        password: account.password,
      }),
    })
      .then(response => response.json())
      .then(data =>
        localStorage.setItem(Object.keys(data)[0], Object.values(data)[0])
      );
    if (localStorage.getItem('accessToken')) {
      navigate('/maink');
    } else if (localStorage.getItem('message') === 'invalid password') {
      navigate('/logink');
      alert('비밀번호가 틀립니다.');
    } else if (
      localStorage.getItem('message') === 'specified user does not exist'
    ) {
      navigate('/logink');
      alert('email을 다시 입력해주세요.');
    }
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
          {!isValidate ? (
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
