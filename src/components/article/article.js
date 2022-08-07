import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Article = () => {
  const [Id, setId] = useState('');
  const [Pwd, setPwd] = useState('');
  const navigate = useNavigate();
  function saveUsrld(event) {
    setId(event.target.value);
    console.log('id', Id);
  }
  function saveUsrPwd(event) {
    setPwd(event.target.value);
    console.log('pwd', Pwd);
  }

  return (
    <article className="main">
      <div className="wrap">
        <div>
          <h1>Westagram</h1>
          <div className="id">
            <input
              type="text"
              onChange={saveUsrld}
              placeholder="전화번호, 사용자 이름 또는 이메일"
              size={30}
            />
          </div>
          <div className="password">
            <input
              type="password"
              onChange={saveUsrPwd}
              placeholder="비밀번호"
              size={30}
            />
          </div>
          <div>
            <button
              onClick={() => {
                navigate('/mainh');
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
  );
};

export default Article;