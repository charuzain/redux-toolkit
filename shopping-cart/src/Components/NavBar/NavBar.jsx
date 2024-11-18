import { Link } from "react-router-dom";
import './NavBar.scss'
import { useSelector } from "react-redux";

const NavBar = () => {
  const totalProduct = useSelector(state => state.cart.reduce((a,c)=> a + c.quantity ,0))
  console.log(totalProduct)
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
        <p>Cart Total : {totalProduct}</p>
        </div>
    </nav>
  )
}

export default NavBar