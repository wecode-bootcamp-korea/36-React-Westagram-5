import React from 'react';
import './MainRight.scss';

const Main_right = () => {
  return (
    <div className="main_right">
      <div className="recommendList">
        <ul>
          <li>
            <img
              src="images/JSham/story_profile.jpg"
              className="recommendSize"
              alt="profile"
            />
            <span className="recommendId" alt="profile">
              clean_0828
            </span>
          </li>
          <li>
            <img
              src="images/JSham/story_profile2.jpg"
              className="recommendSize"
              alt="profile"
            />
            <span className="recommendId" alt="profile">
              taeyon_ss
            </span>
          </li>
          <li>
            <img
              src="images/JSham/story_profile3.jpg"
              className="recommendSize"
              alt="profile"
            />
            <span className="recommendId" alt="profile">
              dlwlrma
            </span>
          </li>
          <li>
            <img
              src="images/JSham/story_profile4.jpg"
              className="recommendSize"
              alt="profile"
            />
            <span className="recommendId" alt="profile">
              jennierubyjane
            </span>
          </li>
          <li>
            <img
              src="images/JSham/story_profile5.jpg"
              className="recommendSize"
              alt="profile"
            />
            <span className="recommendId" alt="profile">
              yuqisong.923
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main_right;
