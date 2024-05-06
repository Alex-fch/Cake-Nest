import { Routes, Route } from 'react-router-dom';
import './App.css';
import OrderPage from './pages/order/OrderPage';
import LoginPage from './pages/login/LoginPage';
import ErrorPage from './pages/error/ErrorPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/order/:name' element={<OrderPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
  );
}

export default App;