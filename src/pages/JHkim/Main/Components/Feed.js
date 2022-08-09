import { useState, useEffect } from 'react';
import CommentLi from './CommentLi';
import './Feed.scss';

function Feed(props) {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('/data/HyukskeeFeed.json')
      .then(response => response.json())
      .then(result => setFeed(result));
  }, []);

  return feed.map(feed => {
    return (
      <div key={feed.ID} className="feed">
        <article>
          <div className="article-head">
            <h2>
              <img src={feed.HeaderImg} alt="This is profile" />
              <p>{feed.userId}</p>
            </h2>
            <i className="fas fa-thin fa-ellipsis" />
          </div>
          <div className="article-content">
            <img
              className="article-main-img"
              src={feed.TitleImg}
              alt="This is article"
            />
            <div className="article-btn-img">
              <div className="left-side">
                <img
                  className="btn-img"
                  src="images/JHKim/heart.png"
                  alt="This is heart icon"
                />
                <img
                  className="btn-img"
                  src="images/JHKim/chat.png"
                  alt="This is comment icon"
                />
                <img
                  className="btn-img"
                  src="images/JHKim/export.png"
                  alt="This is share icon"
                />
              </div>
              <img
                className="btn-img"
                src="images/JHKim/tag.png"
                alt="This is book mark icon"
              />
            </div>
          </div>
          <div className="article-comment">
            <CommentLi />
          </div>
        </article>
      </div>
    );
  });
}

export default Feed;
