import './CartHeader.scss';
const CartHeader = () => {
  return (
    <div className="header">
      <p className="header__item">Product Title</p>
      <p className="header__item">Product</p>
      <p className="header__item">Quantity</p>
      <p className="header__item">Price</p>
      <p className="header__item">Total</p>
      <div className="header__item"></div>
    </div>
  );
}

export default CartHeader