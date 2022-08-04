import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style_login.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
        rel="stylesheet"
      />
      <link rel="shortcut icon" type="image/x-icon" href="img/instagram.png" />
      <title>Westagram</title>
      <article className="main">
        <div className="wrap">
          <div>
            <h1>Westagram</h1>
            <div className="id">
              <input
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                size={30}
              />
            </div>
            <div className="password">
              <input type="password" placeholder="비밀번호" size={30} />
            </div>
            <div>
              <button
                onClick={() => {
                  navigate('/Main');
                }}
              >
                로그인
              </button>
            </div>
            <div className="hr-sect">또는</div>
            <div className="center">
              <a className="forget" href="/">
                비밀번호를 잊으셨나요?
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Login;
