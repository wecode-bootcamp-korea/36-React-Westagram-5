import React, { useState, useEffect } from 'react';
import NewFeed from './NewFeed';
import './Feed.scss';

const Feed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('/data/FeedData.json', {
      method: 'Get',
    })
      .then(respose => respose.json())
      .then(setFeed);
  }, []);

  return (
    <div className="feed">
      <div className="feeds">
        {feed.map(feed => {
          return <NewFeed {...feed} key={feed.id} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
