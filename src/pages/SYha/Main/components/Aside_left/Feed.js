import React, { useState } from 'react';
import './Feed.scss';
import Newcomment from './Newcomment';

const Feed = ({ userId, feedImg, desc }) => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  const getInputValue = event => {
    setComment(event.target.value);
  };

  const addToList = e => {
    e.preventDefault();
    const id = new Date().getTime();
    const commentvalue = comment;
    setCommentList([...commentList, { id, commentvalue }]);
    setComment('');
  };

  const deleteComment = idVal => {
    setCommentList(commentList.filter(comment => comment.id !== idVal));
  };

  return (
    <aside className="feed">
      <div className="feedhead flex">
        <img
          className="profile_img img"
          src="https://images.unsplash.com/photo-1658681342224-a7a0332cf4a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <h1 className="profile_name">{userId}</h1>
        <img
          className="dropdownmenu_iconimg img"
          src="images/SYHa/option.png"
          alt="dropdownIcon"
        />
      </div>
      <img className="feedimg img" src={feedImg} alt="feedimg" />
      <div className="reaction_icon_wrap flex">
        <img
          className="reaction_iconimg img"
          src="https://cdn-icons-png.flaticon.com/512/2107/2107845.png"
          alt=""
        />
        <img
          className="reaction_iconimg img"
          src="images/SYHa/reply.png"
          alt=""
        />
        <img
          className="reaction_iconimg img"
          src="https://cdn-icons-png.flaticon.com/512/3580/3580382.png"
          alt=""
        />
        <img
          className="reaction_iconimg saveicon img"
          src="https://cdn-icons-png.flaticon.com/512/84/84510.png"
          alt=""
        />
      </div>
      <div className="show_like_wrap flex">
        <img
          className="friendProfile_img img"
          src="https://images.unsplash.com/photo-1658468851594-6f6bbeb68d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <p>
          <strong>abc_234</strong>님 <strong>외 10명</strong>이 좋아합니다
        </p>
      </div>
      <div className="feed_discription_wrap">
        <p className="discription">
          <strong>{userId}</strong> &nbsp; {desc}
        </p>
      </div>
      <div className="comment_wrap">
        {commentList.map((comment, index) => (
          <Newcomment
            item={comment}
            key={index}
            deleteComment={() => deleteComment(comment.id)}
          />
        ))}
      </div>
      <form className="addcomment" onSubmit={addToList}>
        <input
          className="commentinputbox"
          type="text"
          value={comment}
          placeholder="댓글달기...."
          onChange={getInputValue}
        />
        <button disabled={comment.length > 0 ? false : true} className="button">
          게시
        </button>
      </form>
    </aside>
  );
};

export default Feed;
