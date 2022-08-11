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
      <ul className="CommentLi">
        {comments.map((comment, idx) => {
          return (
            <li id={idx} key={idx} className="NewLi">
              <span>
                <strong>{users}</strong>
                {comment}
              </span>
              <div>
                <button className="DeleteButton" onClick={deleteLi}>
                  X
                </button>
                <LikeBtn />
              </div>
            </li>
          );
        })}
      </ul>
      <div className="CommentInputWrap">
        <form action="#" method="get">
          <input
            type="text"
            value={input}
            onChange={saveComment}
            placeholder="댓글달기"
          />
          <button
            type="submit"
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
