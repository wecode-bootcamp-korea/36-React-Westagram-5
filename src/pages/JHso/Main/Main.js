import React from 'react';
import './Main.scss';
import Feed from './components/Feed/Feed';
import RightFeed from './components/RightFeed/RightFeed';
import Nav from '../../../components/Nav/Nav';
const Main = () => {
  return (
    <>
      <Nav />
      <div className="main">
        <Feed />
        <RightFeed />
      </div>
    </>
  );
};

export default Main;
