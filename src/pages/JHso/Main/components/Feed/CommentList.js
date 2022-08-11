import React from 'react';
import './CommentList.scss';
const CommentList = ({ userName, value }) => {
  return (
    <div className="commentList">
      <p className="userName">{userName}</p>
      <div className="userComment">{value}</div>
      <p className="userHeart" />
    </div>
  );
};

export default CommentList;
