import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const isValid = id.includes('@') && pw.length >= 5;
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/mains');
  };
  return (
    <main className="login">
      <div className="loginTitle">westagram</div>
      <form className="loginForm">
        <div className="loginSection" onSubmit={e => e.preventDefault()}>
          <input
            className="loginId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            type="text"
            onChange={e => {
              setId(e.target.value);
            }}
          />
          <input
            className="loginPwd"
            placeholder="비밀번호"
            type="password"
            onChange={e => {
              setPw(e.target.value);
            }}
          />
          <div className="loginbutton">
            <button
              className={isValid ? 'buttonLogin' : 'buttonLoginDisabled'}
              disabled={!isValid}
              onClick={goToMain}
            >
              로그인
            </button>
          </div>
        </div>
      </form>
      <div className="loginLink">
        <a href="/">비밀번호를 잊으셨나요?</a>
      </div>
    </main>
  );
};

export default Login;
