import React from 'react';
import './CommentList.scss';
const CommentList = ({ userName, value, key }) => {
  return (
    <div key={key} className="commentList">
      <p className="userName">{userName}</p>
      <div className="userComment">{value}</div>
      <p className="userHeart" />
    </div>
  );
};

export default CommentList;
