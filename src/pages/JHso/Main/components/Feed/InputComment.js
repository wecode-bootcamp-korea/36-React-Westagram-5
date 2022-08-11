import React, { useState } from 'react';
import CommentList from './CommentList';
import './InputComment.scss';
const InputComment = () => {
  const userName = 's0jae';

  const [comment, setComment] = useState('');

  const [feedComments, setFeedComments] = useState([]);

  const isValid = comment.length;

  const post = e => {
    const copyFeedComments = [...feedComments];
    copyFeedComments.push(comment);
    setFeedComments(copyFeedComments);
    setComment('');
  };

  const enter = e => {
    e.preventDefault();
    if (comment === '') {
      return;
    }
    const copyFeedComments = [...feedComments];
    copyFeedComments.push(comment);
    setFeedComments(copyFeedComments);
    setComment('');
  };

  return (
    <div className="inputComment">
      {feedComments.map((comments, i) => (
        <CommentList userName={userName} value={comments} key={i} />
      ))}
      <form onSubmit={enter} id="comment" className="articleReply">
        <input
          className="reply"
          type="text"
          placeholder="댓글달기..."
          onChange={e => {
            setComment(e.target.value);
          }}
          value={comment}
        />
        <button
          type="button"
          className={isValid > 0 ? 'replyButton' : 'replyButtondisabled'}
          onClick={post}
          disabled={!isValid}
        >
          게시
        </button>
      </form>
    </div>
  );
};

export default InputComment;
