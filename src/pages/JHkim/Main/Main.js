import React from 'react';
import Story from './Components/Story';
import Nav from '../../../components/Nav/Nav';
import Feed from './Components/Feed';
import MainRight from './Components/MainRight';

import './Main.scss';

function Main() {
  return (
    <div className="Container">
      <Nav />
      <main className="Main">
        <div className="StoryAndFeed">
          <div className="MainStory">
            <Story className="Story" />
          </div>
          <Feed />
          <Feed />
        </div>
        <MainRight userName="HYUKSKEE" />
      </main>
    </div>
  );
}
export default Main;
