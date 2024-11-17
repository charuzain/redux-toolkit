import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './assets/Pages/HomePage';
import CartPage from './assets/Pages/CartPage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
