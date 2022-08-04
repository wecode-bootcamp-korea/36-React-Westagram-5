import React from 'react';
import Button from '../Button/Button';
import './Signup.scss';
const Input = () => {
  return (
    <form className="loginForm">
      <div className="loginSection" onSubmit={e => e.preventDefault()}>
        <input
          id="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          type="text"
        />
        <input id="password" placeholder="비밀번호" type="password" />
        <Button />
      </div>
    </form>
  );
};
export default Input;
