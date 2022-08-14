import React from 'react';
import Wecode from './Aside_right/Wecode';
import Story from './Aside_right/Story';
import Recommendation from './Aside_right/Recommendation';
import Instainfo from './Aside_right/Instainfo';
import './Aside_right.scss';

function AsideRight() {
  return (
    <aside className="aside_right">
      <Wecode />
      <Story />
      <Recommendation />
      <Instainfo />
    </aside>
  );
}

export default AsideRight;
