import React from 'react';
import './Story.scss';
const RightStory = ({ img, userId, time }) => {
  return (
    <div className="rightMiddle">
      <img alt="story" className="middle" src={img} />
      <div className="bootcamp">
        <p className="toptext">{userId}</p>
        <p className="gray rightWecode">{time}</p>
      </div>
    </div>
  );
};

export default RightStory;
