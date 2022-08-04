import './Nav.scss';

function Nav() {
  return (
    <nav className="nav-bar">
      <div className="nav-h1">
        <h1>
          <i className="fa-brands fa-instagram" />
          westargram
        </h1>
      </div>
      <div className="nav-search">
        <i className="fa-solid fa-magnifying-glass" />
        <input type="text" placeholder="검색" />
      </div>
      <div className="nav-icons">
        <i className="fas fa-thin fa-compass" />
        <i className="fas fa-thin fa-heart" />
        <i className="fas fa-light fa-user" />
      </div>
    </nav>
  );
}

export default Nav;
