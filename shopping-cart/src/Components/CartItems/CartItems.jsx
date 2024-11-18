import { useDispatch, useSelector } from 'react-redux';
import './CartItems.scss';
import CartTotal from '../CartTotal/CartTotal';
import { emptyCart, addToCart, removeFromCart } from '../../slice/cartSlice';
import CartHeader from '../CartHeader/CartHeader';
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart);

 const count = useSelector((state) => state.cart);
  const productTotal = (id) => {
    const product = cartItems.filter((item) => item.id === id)[0];
    const total = product.quantity * product.price;
    return total;
  };

  const IncrementHandler = (product) => {
    dispatch(addToCart(product));
  };

  const decrementHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const productCount = (id) => {
    const productFound = count.filter((product) => product.id === id);
    if (productFound.length >= 1) {
      return productFound[0].quantity;
    } else {
      return 0;
    }
  };

  const productQuantity = (id) =>
    cartItems.filter((item) => item.id === id)[0].quantity;

  const dispatch = useDispatch();
  const removeHandler = (id) => {
    dispatch(emptyCart(id));
  };
  return (
    <>
      <CartHeader />
      {cartItems.map((item) => (
        <article key={item.id} className="cart">
          <p className="cart__item">{item.title}</p>
          <div className="cart__image-container">
            <img src={item.image} alt={item.title} className="cart__image" />
          </div>
          <div className="cart__item">
            <button
              onClick={() => decrementHandler(item.id)}
              className="product__button"
              disabled={productCount(item.id) === 0}
            >
              -
            </button>
            <p>{productQuantity(item.id)}</p>
            <button
              onClick={() => IncrementHandler(item)}
              className="product__button"
            >
              +
            </button>
          </div>
          <p className="cart__item">${item.price}</p>
          <p className="cart__item">${productTotal(item.id)}</p>
          <div className="cart__item">
            <button onClick={() => removeHandler(item.id)}>Remove</button>
          </div>
        </article>
      ))}
      <CartTotal />
    </>
  );
};

export default CartItems;
