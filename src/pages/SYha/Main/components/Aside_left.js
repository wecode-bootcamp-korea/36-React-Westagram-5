import React, { useState } from 'react';
import './Aside_left.scss';
import Newcomment from './Aside_left/Newcomment';

function AsideLeft() {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [plceholder, setPlceholder] = useState('댓글 달기...');

  const remove = () => {
    setPlceholder('');
  };

  //1번 함수
  const getInputValue = event => {
    setComment(event.target.value);
  };

  //2번 함수
  const addToList = e => {
    e.preventDefault();
    setCommentList([...commentList, comment]);
    setComment('');
    setPlceholder('댓글 달기...');
  };

  return (
    <aside className="aside_left">
      <div className="feedhead flex">
        <img
          className="profile_img img"
          src="https://images.unsplash.com/photo-1658681342224-a7a0332cf4a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <h1 className="profile_name">erin_ha_seoyul</h1>
        <img
          className="dropdownmenu_iconimg img"
          src="images/SYHa/option.png"
          alt="dropdownIcon"
        />
      </div>

      <img
        className="feedimg img"
        src="https://images.unsplash.com/photo-1658728942183-013fb53281da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
      />

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
          <strong>erin_ha_seoyul</strong> &nbsp; 배고프다....배고프다ㅏㅏ
        </p>
      </div>

      <div className="comment_wrap">
        {commentList.map((item, index) => (
          <Newcomment comment={item} key={index} /> // 3. map 함수로 배열에 저장되어 있는 입력값들을 Newcomment 컴포넌트로 넘겨줌
        ))}
      </div>
      <form className="addcomment" onSubmit={addToList}>
        {/*2. 값이 submit되면 배열로 저장해주는 함수 생성*/}
        <input
          className="commentinputbox"
          type="text"
          placeholder={plceholder}
          value={comment}
          onChange={getInputValue} //1. 사용자가 입력을 시작하면 값을 담아주는 함수 생성
          onClick={remove}
        />
        <button disabled={comment.length > 0 ? false : true} className="button">
          게시
        </button>
      </form>
    </aside>
  );
}

export default AsideLeft;
