import './Nav.scss';

const Nav = () => {
  return (
    <header className="flex nav">
      <div className="inner flex">
        <div className="header_left flex">
          <img
            className="img"
            src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
            alt="logo"
          />
          <img
            className="img"
            src="https://cdn-icons-png.flaticon.com/512/7500/7500298.png"
            alt=""
          />
          <h1>Westagram</h1>
        </div>

        <div>
          <input className="header_search" type="text" placeholder="검색" />
        </div>

        <div className="header_right">
          <img
            className="rightop_icon img"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt=""
          />
          <img
            className="rightop_icon img"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt=""
          />
          <img
            className="rightop_icon img"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Nav;
