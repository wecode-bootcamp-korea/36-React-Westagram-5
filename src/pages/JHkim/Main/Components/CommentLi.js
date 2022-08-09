import { useState } from 'react';
import LikeBtn from './LikeBtn';
import './CommentLi.scss';

const CommentLi = () => {
  const [comments, setComment] = useState([]);
  const users = 'Wecode Bootcamp ';

  const handleUpload = event => {
    event.preventDefault();
    setComment(prevState => {
      return [...prevState, input];
    });
    setInput('');
  };

  const deleteLi = event => {
    const div = event.target.parentElement;
    const li = div.parentElement;
    li.remove();
  };
  const [input, setInput] = useState('');

  const saveComment = event => {
    setInput(event.target.value);
  };

  const disableUpload = event => {
    event.preventDefault();
  };
  return (
    <>
      <ul id="comment-list">
        {comments.map((comment, idx) => {
          return (
            <li id={idx} key={idx} className="new-li">
              <span>
                <strong>{users}</strong>
                {comment}
              </span>
              <div>
                <button id="delete-button" onClick={deleteLi}>
                  X
                </button>
                <LikeBtn />
              </div>
            </li>
          );
        })}
      </ul>
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
};
export default CommentLi;
