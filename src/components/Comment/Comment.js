import React from 'react';
import './Comment.scss';

const Comment = () => {
  return (
    <section className="comment">
      <div className="comment_detail">
        <img src="images/JSham/heart.png" className="img_size" />
        <img src="images/JSham/comment.png" className="img_size" />
        <img src="images/JSham/dm.png" className="img_size" />
      </div>
    </section>
  );
};

export default Comment;
