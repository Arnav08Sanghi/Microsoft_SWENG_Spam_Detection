import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="site-title">SPAM DETECTION</Link>
      </div>
      <div className="nav-center">
        <Link to="/about">/about</Link>
        <Link to="/sustainability">/sustainability</Link>
        <Link to="/faq">/faq</Link>
      </div>
    </nav>
  );
}

export default NavBar;
