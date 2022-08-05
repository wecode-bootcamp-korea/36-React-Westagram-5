import React from 'react';
import './CommentList.scss';
const CommentList = comment => {
  return (
    <div key={comment.key} className="commentList">
      <p className="userName">{comment.userName}</p>
      <div className="userComment">{comment.value}</div>
      <p className="userHeart" />
    </div>
  );
};

export default CommentList;
