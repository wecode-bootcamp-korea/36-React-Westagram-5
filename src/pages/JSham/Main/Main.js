import React from 'react';
import './Main.scss';
import Story from '../../../components/Story/Story';
import Header from '../../../components/Header/Header';
import Feeds from '../../../components/Feeds/Feeds';
import Comment from '../../../components/Comment/Comment';
import Profile from '../../../components/Profile/Profile';
import Recommend from '../../../components/Recommend/Recommend';
import Main_right from '../../../components/Main_right/Main_right';

const Main = () => {
  return (
    <div>
      <title>Westagram</title>
      <main className="container">
        <Story />
        <Header />
        <Feeds />
        <Comment />
        <Profile />
        <Recommend />
        <Main_right />
      </main>
    </div>
  );
};

export default Main;
