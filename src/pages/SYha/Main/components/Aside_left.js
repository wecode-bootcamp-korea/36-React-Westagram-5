import React, { useEffect, useState } from 'react';
import './Aside_left.scss';
import Feed from './Aside_left/Feed';

function AsideLeft() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('/data/SYHa/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeed(data);
      });
  }, []);

  return (
    <div className="aside_left">
      {feed.map(feed => {
        return (
          <Feed
            key={feed.id}
            userId={feed.userId}
            feedImg={feed.feedImg}
            desc={feed.description}
          />
        );
      })}
    </div>
  );
}

export default AsideLeft;
