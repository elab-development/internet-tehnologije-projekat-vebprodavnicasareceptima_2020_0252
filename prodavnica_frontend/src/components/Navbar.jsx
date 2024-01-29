import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import '../style/navbar.css';

function Navbar({ loggedInUser, handleLogout }) {

    const navigate = useNavigate();

    const handleLogoutClick = () => {
        handleLogout();
        navigate('/');
  };
  return (
    <div>
      <nav className="nav">
        <div className="nav_naziv">
          <h1>NINOMI</h1>
        </div>
        <ul className="nav_lista">
          {loggedInUser ? (
            <>
            <div className="ninin_div">
              <li className="nav_stavka nav_stavka_link">
                <Link to='/namirnice'> NAMIRNICE </Link>
              </li>
              <li className="nav_stavka nav_stavka_link">
                <Link to='/recepti'> RECEPTI </Link>
              </li>
              <li className="nav_stavka nav_stavka_link velika-stavka">
                <Link to='/korpa'><TiShoppingCart /></Link>
              </li>
              </div>
              <div className="ninin_div_2">
              <li className="nav_stavka nav_stavka-korisnik">
                KORISNIK: {loggedInUser}{' '}
                <button className="logout_dugme" onClick={handleLogoutClick}>
                  Logout
                </button>
              </li>
              </div>
            </>
          ) : (
            <li className="nav_stavka nav_stavka_link">
              <Link to="/">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );

}

  export default Navbar;