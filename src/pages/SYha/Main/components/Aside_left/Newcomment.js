import React from 'react';
import './Newcomment.scss';

const Newcomment = props => {
  const { comment } = props;
  // 4. Newcomment 컴포넌트에서 props로 받아와서 사용
  return (
    <div className="comment_list">
      <strong>IamFriend </strong>
      <p>{comment}</p>
    </div>
  );
};

export default Newcomment;
