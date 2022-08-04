import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
        rel="stylesheet"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="images/instagram.png"
      />
      <link rel="stylesheet" href="Main.css" />
      <title>Westagram</title>
      <main className="container">
        <div className="story">
          <ul>
            <li>
              <div>
                <img
                  src="images/JSham/story_profile.jpg"
                  className="story_size"
                />
              </div>
              <div className="id">clean_0828</div>
            </li>
            <li>
              <div>
                <img
                  src="images/JSham/story_profile2.jpg"
                  className="story_size"
                />
              </div>
              <div className="id">taeyeon_ss</div>
            </li>
            <li>
              <div>
                <img
                  src="images/JSham/story_profile3.jpg"
                  className="story_size"
                />
              </div>
              <div className="id">dlwlrma</div>
            </li>
            <li>
              <div>
                <img
                  src="images/JSham/story_profile4.jpg"
                  className="story_size"
                />
              </div>
              <div className="id">jennierubyjane</div>
            </li>
            <li>
              <div>
                <img
                  src="images/JSham/story_profile5.jpg"
                  className="story_size"
                />
              </div>
              <div className="id">yuqisong.923</div>
            </li>
            <li>
              <div>
                <img
                  src="images/JSham/story_profile6.jpg"
                  className="story_size"
                />
              </div>
              <div className="id">yoona_lim</div>
            </li>
          </ul>
        </div>
        <header className="name">
          <img src="images/JSham/main_profile.jpg" className="name_size" />
          <p>ok.soosoo</p>
        </header>
        <article className="feeds">
          <img src="images/JSham/profile.jpg" className="feed_size" />
        </article>
        <section className="comment">
          <div className="comment_detail">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              className="img_size"
            />
            <img src="images/JSham/comment.png" className="img_size" />
            <img src="images/JSham/dm.png" className="img_size" />
          </div>
        </section>
        <div className="main_right">
          <div className="recommendList">
            <img
              src="images/JSham/story_profile.jpg"
              className="recommendSize"
            />
            <span className="recommendId">clean_0828</span>
          </div>
        </div>
        <div className="profile">
          <img src="images/JSham/main_profile.jpg" className="profile_size" />
          <b>ok.soosoo</b>
        </div>
        <div className="recommend">
          <b> 회원님을 위한 추천 </b>
        </div>
      </main>
    </div>
  );
};

export default Main;
