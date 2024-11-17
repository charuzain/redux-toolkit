import ProductList from '../../Components/ProductList/ProductList';
import './HomePage.scss'

const HomePage = () => {
  return (
    <main className='main'>
      <h1 className='main__title'>Products</h1>
      <ProductList />
    </main>
  );
};

export default HomePage;
