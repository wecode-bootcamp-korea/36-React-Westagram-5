import React from 'react';
import Story from './components/Story';
import Nav from '../../components/Nav/Nav';
import Feed from './components/Feed';
import MainRight from './components/MainRight';
import imgRender from './components/imgRender';
import './main.scss';

function Main() {
  return (
    <div className="wrap">
      <Nav title="westargram" />
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
  { src: 'img/1.png', name: 'name1' },
  { src: 'img/2.jpg', name: 'name2' },
  { src: 'img/3.png', name: 'name3' },
  { src: 'img/4.jfif', name: 'name4' },
  { src: 'img/5.png', name: 'name5' },
  { src: 'img/6.jpg', name: 'name6' },
];
