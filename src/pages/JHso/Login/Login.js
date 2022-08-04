import React from 'react';
import './Login.scss';
import Signup from './components/Signup/Signup';

const Login = () => {
  return (
    <main className="login">
      <div className="loginTitle">westagram</div>
      <Signup />
      <div className="loginLink">
        <a href="/">비밀번호를 잊으셨나요?</a>
      </div>
    </main>
  );
};

export default Login;
