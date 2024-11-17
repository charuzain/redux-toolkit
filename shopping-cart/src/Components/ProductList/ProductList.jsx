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
    <div>
      {products.map((product) => (
        <article key={product.id}>
          <div>
            <img src={product.image} alt={product.title} />
          </div>
          <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
          <div>
            <button>+</button>
            <span>1</span>
            <button>-</button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProductList;
