import React from 'react';
import './Newcomment.scss';

const Newcomment = ({ comment }) => {
  return (
    <div className="comment_list">
      <div className="idAndComment">
        <strong>IamFriend </strong>
        <p>{comment}</p>
      </div>
      <span>X</span>
    </div>
  );
};

export default Newcomment;
