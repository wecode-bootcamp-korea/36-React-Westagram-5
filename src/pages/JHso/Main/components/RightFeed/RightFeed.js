import React from 'react';
import './RightFeed.scss';
import RightStory from './Story/RightStory';
import { STORY_IMG } from './Story/RightData';
import Information from './Information/Information';
import { INFORMATION_TEXT } from './Information/InformationData';
const RightFeed = () => {
  return (
    <div className="feedsRight">
      <div className="rightTop">
        <img alt="wecode" className="wecode" src="./images/JHSo/wecode.png" />
        <div className="bootcamp">
          <p className="toptext">wecode_bootcamp</p>
          <p className="gray rightWecode">Wecode ㅣ 위코드</p>
        </div>
      </div>
      <div className="rightCenter">
        <p className="pcenter">스토리</p>
        <span className="centertext">모두 보기</span>
        {STORY_IMG.map(story => (
          <RightStory
            key={story.id}
            img={story.img}
            userId={story.userId}
            time={story.time}
          />
        ))}
      </div>
      <div className="rightBottom">
        <p className="pcenter">회원님을 위한 추천</p>
        <span className="centertextbottom">모두 보기</span>
        <div className="rightMiddle">
          <img alt="story" className="middle" src="./images/JHSo/5.jpg" />
          <div className="bootcamp">
            <p className="toptext">joaaaayr</p>
            <p className="gray rightWecode">_daswq님 외 2명이...</p>
            <div className="follow">팔로우</div>
          </div>
        </div>
        <div className="rightMiddle">
          <img alt="story" className="middle" src="./images/JHSo/6.jpg" />
          <div className="bootcamp">
            <p className="toptext">dq1233</p>
            <p className="gray rightWecode">dasjdaiqweq님 외 12...</p>
            <div className="follow">팔로우</div>
          </div>
        </div>

        <div className="rightMiddle">
          <img alt="story" className="middle" src="./images/JHSo/7.jpg" />
          <div className="bootcamp">
            <p className="toptext">shiiwwwk</p>
            <p className="gray rightWecode">iwojojsddddd님 외 1...</p>
            <div className="follow">팔로우</div>
          </div>
        </div>
      </div>
      <div className="Information">
        {INFORMATION_TEXT.map(info => (
          <Information key={info.id} text={info.text} />
        ))}
        <br />
        <br />
        <br />
        <p>ⓒ 2019 INSTAGRAM</p>
      </div>
    </div>
  );
};

export default RightFeed;
