import LikeBtn from './LikeBtn';
import './CommentLi.scss';

const CommentLi = props => {
  const deleteLi = event => {
    const div = event.target.parentElement;
    const li = div.parentElement;
    li.remove();
  };
  return props.comments.map((comment, idx) => {
    return (
      <li id={idx} key={idx} className="new-li">
        <span>
          <strong>{props.users}</strong>
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
  });
};
export default CommentLi;
