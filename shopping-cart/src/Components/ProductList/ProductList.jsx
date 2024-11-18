import axios from 'axios';
import './ProductList.scss';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../slice/cartSlice';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  const count = useSelector(state => state.cart)

  const productCount = (id) => {
    return count.filter(product => product.id === id).length

  } 




  const IncrementHandler = (product) => {
    dispatch(addToCart(product))
  }

  const decrementHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const productList = response.data;
      console.log(productList)
      setProducts(productList);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="product">
      {products.map((product) => (
        <article key={product.id} className="product__card">
          <div className="product__image-container">
            <img
              src={product.image}
              alt={product.title}
              className="product__image"
            />
          </div>
          <div>
            <div className="product__info">
              <p className="product__title">{product.title}</p>
              <p className="product__price">{product.price}</p>
            </div>
            <div className="product__buttons">
              <button
                onClick={() => IncrementHandler(product)}
                className="product__button"
              >
                +
              </button>
              <span className="product__quality">{productCount(product.id)}</span>
              <button
                onClick={() => decrementHandler(product.id)}
                className="product__button"
              >
                -
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProductList;
