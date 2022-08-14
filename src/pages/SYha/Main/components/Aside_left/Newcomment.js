import React from 'react';
import './Newcomment.scss';

const Newcomment = ({ item: { commentvalue }, deleteComment }) => {
  return (
    <div className="comment_list">
      <div className="idAndComment">
        <strong>IamFriend </strong>
        <p>{commentvalue}</p>
      </div>
      <span onClick={deleteComment}>X</span>
    </div>
  );
};

export default Newcomment;
