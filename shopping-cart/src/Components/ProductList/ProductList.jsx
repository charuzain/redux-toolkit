import axios from 'axios';
import './ProductList.scss';
import { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const productList = response.data;
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
              <button className="product__button">+</button>
              <span className="product__quality">1</span>
              <button className="product__button">-</button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProductList;
