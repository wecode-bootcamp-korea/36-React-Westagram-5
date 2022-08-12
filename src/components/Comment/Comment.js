import React from 'react';
import './Comment.scss';

const Comment = () => {
  return (
    <section className="comment">
      <div className="comment_detail">
        <img src="images/JSham/heart.png" className="img_size" alt="heart" />
        <img
          src="images/JSham/comment.png"
          className="img_size"
          alt="comment"
        />
        <img src="images/JSham/dm.png" className="img_size" alt="dm" />
      </div>
      <div>
        <span className="emphasis">ok.soosoo</span> 님
        <span className="emphasis">외 10명</span>이 좋아합니다
      </div>
    </section>
  );
};

export default Comment;
