import { useState } from 'react';
import CommentLi from './CommentLi';

function CommentInput() {
  const [comments, setComment] = useState([]);
  const [input, setInput] = useState('');

  const handleUpload = event => {
    event.preventDefault();
    setComment(prevState => {
      return [...prevState, input];
    });
    setInput('');
  };

  const saveComment = event => {
    setInput(event.target.value);
  };

  const disableUpload = event => {
    event.preventDefault();
  };
  return (
    <>
      <CommentLi comments={comments} setComment={setComment} />
      <div className="comment-input-wrap">
        <form action="#" method="get">
          <input
            id="comment-input"
            type="text"
            value={input}
            onChange={saveComment}
            placeholder="댓글달기"
          />
          <button
            type="submit"
            id="upload-button"
            onClick={input !== '' ? handleUpload : disableUpload}
          >
            게시
          </button>
        </form>
      </div>
    </>
  );
}

export default CommentInput;
