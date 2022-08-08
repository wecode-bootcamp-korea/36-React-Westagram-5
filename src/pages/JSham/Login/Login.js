import React from 'react';
import './Login.scss';
import Article from '../../../components/article/article';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
        rel="stylesheet"
      />
      <title>Westagram</title>
      <Article />
    </div>
  );
};

export default Login;
