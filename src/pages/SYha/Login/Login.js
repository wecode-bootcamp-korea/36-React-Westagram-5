import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };

  return (
    <main className="body flex login_main">
      <article className="mainBox">
        <header className="login_mainlogo">
          <h1 onClick={goToMain}>Westagram</h1>
        </header>
        <form className="flex form">
          <input
            className="pwAndId"
            type="text"
            // onkeyup='buttonactive()'
            placeholder="전화번호, 사용자 이름 또는 이메일"
            required
            size="1"
          />
          <input
            className="pwAndId"
            type="password"
            // onkeyup='buttonactive()'
            placeholder="비밀번호"
            required
            size="1"
          />

          <Link className="link" to="/main">
            <button className="loginbtn"> 로그인</button>
          </Link>
        </form>

        <footer>
          <a className="atag" href="/">
            비밀번호를 잊으셨나요?
          </a>
        </footer>
      </article>
    </main>
  );
};

export default Login;
