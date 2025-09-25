import MainLayout from './Layouts/MainLayout';
import AuthLayout from './Layouts/AuthLayout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Login from './pages/Login/Login';

import './assets/styles/main.css';

import { Routes,Route } from 'react-router-dom';



function App() {

  return (
    <>
    <Routes>
          <Route element={<AuthLayout />}>
            <Route path='/login'  element={<Login/>} />
        </Route>
        <Route element={<MainLayout  />}>
            <Route path='/'  element={<Home/>} />
            <Route path='/Products/'  element={<Products />} />
            <Route path='/Product/:id/'  element={<Product />} />
        </Route>
        
    </Routes>
    </>
  )
}

export default App
