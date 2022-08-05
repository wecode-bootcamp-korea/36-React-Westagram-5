function AsideLeft() {
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
          src={process.env.PUBLIC_URL + '/images/SYHa/option.png'}
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
          src="public/images/SYHa/reply.png"
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

      <div className="comment_list">
        <p className="timecount">42분전</p>
      </div>
      <form className="addcomment">
        <input
          className="commentinputbox"
          type="text"
          placeholder="댓글 달기..."
        />
        <button className="submit button">게시</button>
      </form>
    </aside>
  );
}

export default AsideLeft;
