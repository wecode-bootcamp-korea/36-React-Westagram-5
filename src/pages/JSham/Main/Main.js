import React from 'react';
import './Main.scss';
import Story from '../../../components/Story/Story';
import Header from '../../../components/Header/Header';
import Feeds from '../../../components/Feeds/Feeds';
import Comment from '../../../components/Comment/Comment';
import Profile from '../../../components/Profile/Profile';
import Recommend from '../../../components/Recommend/Recommend';
import MainRight from '../../../components/MainRight/MainRight';

const Main = () => {
  return (
    <div>
      <main className="container">
        <Story />
        <Header />
        <Feeds />
        <Comment />
        <Profile />
        <Recommend />
        <MainRight />
      </main>
    </div>
  );
};

export default Main;
