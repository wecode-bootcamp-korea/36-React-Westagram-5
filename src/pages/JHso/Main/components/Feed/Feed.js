import React from 'react';
import './Feed.scss';
const Feed = () => {
  return (
    <div className="feedsmain">
      <div className="feeds">
        <div className="imgtop">
          <img
            alt="Feed"
            className="porfile"
            src="./images/JHSo/733080D4-CFEC-4792-A206-EBF493F57B89.jpg"
          />
          S0jae
          <img
            alt="Feed"
            className="porfilemenu"
            src="./images/JHSo/8035118.png"
          />
        </div>
        <div className="article">
          <img
            alt="Feed"
            className="articleImg"
            src="./images/JHSo/kyle-cleveland-8y2v6ijBiBo-unsplash.jpg"
          />
        </div>
        <div className="articleicon">
          <img alt="Feed" className="aicon" src="./images/JHSo/2107845.png" />
          <img alt="Feed" className="aicon" src="./images/JHSo/151789.png" />
          <img alt="Feed" className="aicon" src="./images/JHSo/2089736.png" />
          <img
            alt="Feed"
            className="aicon save"
            src="./images/JHSo/5662990.png"
          />
        </div>
        <div className="articleText">
          <img
            alt="Feed"
            className="porfileArticle"
            src="./images/JHSo/IMG_6377.JPG"
          />{' '}
          wecode님 외 1000명이 좋하합니다
        </div>
        <br />
        <div className="articleTextButton">
          <ul>
            <li>
              S0jae 위워크에서 진행한 꽃꽂이 클래스..a es JHSo/{' '}
              <span className="gray">더 보기</span>
              <br />
              neceosecius 거봐 좋았잖아~~~~
              <img
                alt="Feed"
                className="imog"
                src="./images/JHSo/1000_F_336983767_dpzS1kFcCW7zyzCc38hru592ayaYhozB.jpeg"
              />
            </li>
          </ul>
        </div>

        <div className="commentbox">
          <div className="commentList" />
          <form id="comment" className="articleReply">
            <input className="reply" type="text" placeholder="댓글달기..." />
            <button className="replyButton">게시</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feed;
