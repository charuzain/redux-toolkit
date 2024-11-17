import { Link } from "react-router-dom";
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav className="nav">
        <div className="nav__logo">
          <Link to={'/'}>Redux</Link>
        </div>
        <ul className="nav__list">
          <li className="nav__item"><Link to={'/'}>Home</Link></li>
          <li className="nav__item"><Link to={'/cart'}>Cart</Link></li>
        </ul>
        <div>
        <p>Cart Total : 0</p>
        </div>
    </nav>
  )
}

export default NavBar