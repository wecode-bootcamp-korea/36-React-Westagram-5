import React, { useState } from 'react';
import './Login.scss';

const Article = () => {
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const saveUserId = event => {
    setUserId(event.target.value);
  };
  const saveUserPwd = event => {
    setUserPwd(event.target.value);
  };
  const Isvalid = (userId, userPwd) => {
    return (
      userId.indexOf('@') !== -1 && userId.length >= 5 && userPwd.length >= 5
    );
  };
  const goToMain = () => {
    fetch('10.58.5.66:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userId,
        password: userPwd,
      }),
    });
  };

  return (
    <article className="main">
      <div className="wrap">
        <div>
          <h1>Westagram</h1>
          <div className="id">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              size={30}
              value={userId}
              onChange={saveUserId}
              onKeyUp={Isvalid}
            />
          </div>
          <div className="password">
            <input
              type="password"
              onChange={saveUserPwd}
              placeholder="비밀번호"
              size={30}
            />
          </div>
          <div>
            <button
              className={
                Isvalid(userId, userPwd) ? 'loginbtn' : 'loginbtn_disabled'
              }
              disabled={Isvalid(userId, userPwd) ? false : true}
              onClick={goToMain}
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
