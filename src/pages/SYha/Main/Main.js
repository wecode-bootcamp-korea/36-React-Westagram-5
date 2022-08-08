import React from 'react';
import AsideLeft from './components/Aside_left';
import AsideRight from './components/Aside_right';
import Nav from './components/Nav';
import './Main.scss';

const Main = () => {
  return (
    <main className="mainwrap">
      <Nav />
      <main className="main">
        <div className="main_inner">
          <AsideLeft />
          <AsideRight />
        </div>
      </main>
    </main>
  );
};

export default Main;
