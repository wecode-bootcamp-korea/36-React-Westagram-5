import { useState, useEffect } from 'react';
import CommentLi from './CommentLi';
import './Feed.scss';

function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('/data/HyukskeeFeed.json')
      .then(response => response.json())
      .then(result => setFeed(result));
  }, []);

  return feed.map(feed => {
    return (
      <div key={feed.ID} className="Feed">
        <article>
          <div className="ArticleHead">
            <h2>
              <img src={feed.HeaderImg} alt="This is profile" />
              <p>{feed.userId}</p>
            </h2>
            <i className="fas fa-thin fa-ellipsis" />
          </div>
          <div className="ArticleContent">
            <img
              className="ArticleMainImg"
              src={feed.TitleImg}
              alt="This is article"
            />
            <div className="ArticleBtnImg">
              <div className="LeftSide">
                <img
                  className="BtnImg"
                  src="images/JHKim/heart.png"
                  alt="This is heart icon"
                />
                <img
                  className="BtnImg"
                  src="images/JHKim/chat.png"
                  alt="This is comment icon"
                />
                <img
                  className="BtnImg"
                  src="images/JHKim/export.png"
                  alt="This is share icon"
                />
              </div>
              <img
                className="BtnImg"
                src="images/JHKim/tag.png"
                alt="This is book mark icon"
              />
            </div>
          </div>
          <div className="ArticleComment">
            <CommentLi />
          </div>
        </article>
      </div>
    );
  });
}

export default Feed;
