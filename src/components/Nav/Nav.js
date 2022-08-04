import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav-bar">
      <div className="nav-h1">
        <h1>
          <Link to="/Main">
            <i className="fa-brands fa-instagram" />
            westargram
          </Link>
        </h1>
      </div>
      <div className="nav-search">
        <i className="fa-solid fa-magnifying-glass" />
        <input type="text" placeholder="검색" />
      </div>
      <div className="nav-icons">
        <i className="fas fa-thin fa-compass">
          <Link to="/Main" />
        </i>
        <i className="fas fa-thin fa-heart">
          <Link to="/Main" />
        </i>
        <i className="fas fa-light fa-user">
          <Link to="/Main" />
        </i>
      </div>
    </nav>
  );
}

export default Nav;
