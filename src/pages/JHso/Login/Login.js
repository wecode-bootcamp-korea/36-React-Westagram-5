import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [userInfo, setUserInfo] = useState({ id: '', pw: '' });

  const getUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const isValid = userInfo.id.includes('@') && userInfo.pw.length >= 5;
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/mains');
  };

  return (
    <main className="login">
      <div className="loginTitle">westagram</div>
      <form
        className="loginForm"
        onSubmit={e => e.preventDefault()}
        onChange={getUserInfo}
      >
        <div className="loginSection">
          <input
            name="id"
            className="loginId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            type="text"
          />
          <input
            name="pw"
            className="loginPwd"
            placeholder="비밀번호"
            type="password"
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
//ToDo
// function dataSend(e) {
//   e.preventDefault();
//   fetch('http://10.58.6.117:3000/auth/signup', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email: userInfo.id,
//       password: userInfo.pw,
//     }),
//   })
//     .then(response => response.json())
//     .then(data => console.log(data));
// }
// function dataSend(e) {
//   e.preventDefault();
//   fetch('http://10.58.6.117:3000/auth/signin', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email: userInfo.id,
//       password: userInfo.pw,
//     }),
//   })
//     .then(response => {
//       if (response.ok === true) {
//         navigate('/mains');
//       }
//       throw new Error('에러 발생!'); //reponse.ok가 true가 아닐 경우 error를 throw
//     })
//     .catch(error => console.log(error));
// }
