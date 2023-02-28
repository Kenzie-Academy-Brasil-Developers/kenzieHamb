import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProtectRoutes from './pages/ProtectRoutes/protectRoutes';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import { CartProvider } from './providers/CartContext';

const Router = () => (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />





      <Route path='/shop' element={<ProtectRoutes />}>

      <Route path='/shop' element={<CartProvider><ShopPage/></CartProvider>} />
      </Route>





    </Routes>
  );

export default Router;
