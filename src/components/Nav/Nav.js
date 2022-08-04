import './Nav.scss';

function Nav() {
  return (
    <nav className="nav-bar">
      <div className="nav-h1">
        <h1>
          <img src="images/InstarLogo.png" alt="This is instargram logo" />
          westargram
        </h1>
      </div>
      <div className="nav-search">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png"
          alt="This is search"
        />

        <input type="text" placeholder="검색" />
      </div>
      <div className="nav-images">
        <img
          src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          alt="This is explore"
        />
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt="This is heart"
        />
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          alt="This is profile"
        />
      </div>
    </nav>
  );
}

export default Nav;
