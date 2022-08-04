import React from 'react';
import './RightFeed.scss';
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
        <div className="rightMiddle">
          <img alt="story" className="middle" src="./images/JHSo/1.jpg" />
          <div className="bootcamp">
            <p className="toptext">_yom_s</p>
            <p className="gray rightWecode">16분전</p>
          </div>
        </div>
        <div className="rightMiddle">
          <img alt="story" className="middle" src="./images/JHSo/2.jpg" />
          <div className="bootcamp">
            <p className="toptext">drink_eat_drink</p>
            <p className="gray rightWecode">3시간 전</p>
          </div>
        </div>
        <div className="rightMiddle">
          <img alt="story" className="middle" src="./images/JHSo/3.jpg" />
          <div className="bootcamp">
            <p className="toptext">hyukyc</p>
            <p className="gray rightWecode">20시간 전</p>
          </div>
        </div>
        <div className="rightMiddle">
          <img alt="story" className="middle" src="./images/JHSo/4.jpg" />
          <div className="bootcamp">
            <p className="toptext">jmunkeek</p>
            <p className="gray rightWecode">54분전</p>
          </div>
        </div>
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
        <p>
          Instagram 정보 &middot; 지원 &middot; 홍보 &middot; 센터 &middot; API
          &middot;
          <br />
          채용정보 &middot; 개인정보처리방침 &middot; 약관 &middot;
          <br />
          디렉터리 &middot; 프로필 &middot; 해시태그 &middot; 언어
        </p>
        <br />
        <br />ⓒ 2019 INSTAGRAM
      </div>
    </div>
  );
};

export default RightFeed;
