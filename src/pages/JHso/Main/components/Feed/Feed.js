import React, { useState, useEffect } from 'react';
import InputComment from './InputComment';
import './Feed.scss';

const Feed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('/data/FeedData.json', {
      method: 'Get',
    })
      .then(respose => respose.json())
      .then(result => setFeed(result));
  }, []);

  return (
    <div className="feedsmain">
      <div className="feeds">
        {feed.map(feed => {
          return (
            <div className="FeedTwo" key={feed.id}>
              <div className="imgtop">
                <img alt="Feed" className="porfile" src={feed.porfile_img} />
                {feed.name}
                <img alt="Feed" className="porfilemenu" src={feed.side_img} />
              </div>
              <div className="article">
                <img alt="Feed" className="articleImg" src={feed.center_img} />
              </div>
              <div className="articleicon">
                <img alt="Feed" className="aicon" src={feed.icon_img} />
                <img alt="Feed" className="aicon" src={feed.icon_two_img} />
                <img alt="Feed" className="aicon" src={feed.icon_third_img} />
                <img
                  alt="Feed"
                  className="aicon save"
                  src={feed.icon_right_img}
                />
              </div>
              <div className="articleText">
                <img
                  alt="Feed"
                  className="porfileArticle"
                  src={feed.feed_profile_img}
                />
                &nbsp;
                {feed.post}
              </div>
              <br />
              <div className="articleTextButton">
                {feed.comment}
                <span className="gray">{feed.view}</span>
                <br />
              </div>
              <InputComment />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
