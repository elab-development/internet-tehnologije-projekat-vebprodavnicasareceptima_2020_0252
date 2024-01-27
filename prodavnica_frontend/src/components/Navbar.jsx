import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";

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
              {/*<li className="nav__item nav__item--search">
                <input type="text" id="kriterijum" placeholder="Pretrazi" 
                       name="search" onChange={()=>pretrazi(document.getElementById('kriterijum').value)}/>
                <button type="submit" className='dugmePretraga'  ><BsSearch></BsSearch></button>
          </li>*/}
              <li className="nav_stavka nav_stavka_link">
                <Link to='/namrinice'> NAMIRNICE </Link>
              </li>
              <li className="nav_stavka nav_stavka_link">
                <Link to='/recepti'> RECEPTI </Link>
              </li>
              {/*<li className="nav_item nav_item--link">
                <Link to='/services'>SERVICES</Link>
        </li>*/}
              <li className="nav_stavka nav_item_link">
                <Link to='/korpa'><TiShoppingCart /></Link>
            </li>
              <li className="nav_stavka nav_stavka-korisnik">
                KORISNIK: {loggedInUser}{' '}
                <button className="logout-button" onClick={handleLogoutClick}>
                  Logout
                </button>
              </li>
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