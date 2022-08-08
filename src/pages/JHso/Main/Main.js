import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './components/Feed/Feed';
import RightFeed from './components/RightFeed/RightFeed';
import './Main.scss';
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
