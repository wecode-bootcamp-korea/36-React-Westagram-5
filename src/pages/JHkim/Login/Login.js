import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginBtn from './Components/LoginBtn';
import './Login.scss';

function Login() {
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
            <LoginBtn to="/logink" className="submitButton" disabled={true} />
          ) : (
            <LoginBtn
              to="/maink"
              className="submitButton validated"
              disabled={false}
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
