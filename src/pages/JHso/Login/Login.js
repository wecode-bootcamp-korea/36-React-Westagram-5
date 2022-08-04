import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');
  const handleIdInput = event => {
    setId(event.target.value);
  };

  const [pw, setPw] = useState('');
  const handlePwInput = event => {
    setPw(event.target.value);
  };

  const isInputValid = id.includes('@') && pw.length >= 5;

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
            onChange={handleIdInput}
          />
          <input
            className="loginPwd"
            placeholder="비밀번호"
            type="password"
            onChange={handlePwInput}
          />
          <div className="loginbutton">
            <button
              type="button"
              onClick={goToMain}
              className={isInputValid ? 'buttonLogin' : 'buttonLoginDisabled'}
              disabled={isInputValid ? false : true}
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
