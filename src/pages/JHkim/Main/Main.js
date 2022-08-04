import React from 'react';
import Story from '../Components/Story';
import Nav from '../../../components/Nav/Nav';
import Feed from '../Components/Feed';
import MainRight from '../Components/MainRight';
import imgRender from '../Components/imgRender';
import './Main.scss';

function Main() {
  return (
    <div className="wrap">
      <Nav />
      <main className="main-container">
        <div className="otherAndStory-wrap">
          <div className="main-other-story">
            <Story onEvent={imgRender(url)} />
          </div>
          <Feed />
          <Feed />
        </div>
        <MainRight title="HYUKSKEE" onEvent={imgRender(url)} />
      </main>
    </div>
  );
}
export default Main;

const url = [
  { src: 'images/JHKim/1.png', name: 'name1' },
  { src: 'images/JHKim/2.jpg', name: 'name2' },
  { src: 'images/JHKim/3.png', name: 'name3' },
  { src: 'images/JHKim/4.jfif', name: 'name4' },
  { src: 'images/JHKim/5.png', name: 'name5' },
  { src: 'images/JHKim/6.jpg', name: 'name6' },
];
