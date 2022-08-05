import React from 'react';
import Wecode from './Wecode';
import Story from './Story';
import Recommendation from './Recommendation';
import Instainfo from './Instainfo';

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
