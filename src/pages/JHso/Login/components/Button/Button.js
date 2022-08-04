import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.scss';
const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="loginbutton">
      <button onClick={() => navigate('/main')} className="btn">
        로그인
      </button>
    </div>
  );
};

export default Signup;
