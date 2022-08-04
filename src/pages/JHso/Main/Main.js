import React from 'react';
import './Main.scss';
import Feed from './components/Feed/Feed';
import RightFeed from './components/RightFeed/RightFeed';
const Main = () => {
  return (
    <div className="main">
      <Feed />
      <RightFeed />
    </div>
  );
};

export default Main;
