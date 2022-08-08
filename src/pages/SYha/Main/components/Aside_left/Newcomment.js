import React from 'react';
import './Newcomment.scss';

const Newcomment = ({ comment }) => {
  // const { comment, key } = props;
  // const delete = () => {

  // }

  // 4. Newcomment 컴포넌트에서 props로 받아와서 사용
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
