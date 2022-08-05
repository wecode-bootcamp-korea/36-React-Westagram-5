import React from 'react';
import './Main.scss';
import AsideLeft from './components/Aside_left';
import AsideRight from './components/Aside_right';
// import Nav from './components/Nav';

const Main = () => {
  return (
    <main className="mainwrap">
      {/* <Nav /> */}
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
