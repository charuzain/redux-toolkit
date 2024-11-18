import { useSelector } from "react-redux";
import './CartTotal.scss'
import { Link } from "react-router-dom";

const CartTotal = () => {

  const totalPrice = useSelector(state => state.cart.reduce((a, c) => a + (c.quantity * c.price), 0))

  return (
    <>
      <div className="total">Sub Total : $ {totalPrice}</div>
      <div className="total__link-container">
        <Link to={'/'} className="total__link">Continue Shopping</Link>
      </div>
    </>
  );
}

export default CartTotal