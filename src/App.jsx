import MainLayout from './Layouts/MainLayout';
import AuthLayout from './Layouts/AuthLayout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Signin from './pages/Login/Login';
import Signup from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

import './assets/styles/main.css';
import './assets/styles/style.css'

import { Routes,Route } from 'react-router-dom';



function App() {

  return (
    <>
    <Routes>
          <Route element={<AuthLayout />}>
            <Route path='/signin'  element={<Signin/>} />
            <Route path='/signup'  element={<Signup/>} />
        </Route>
        <Route element={<MainLayout  />}>
            <Route path='/'  element={<Home/>} />
            <Route path='/Products/'  element={<Products />} />
            <Route path='/Product/'  element={<Product />} />
            <Route path='/Product/:id/'  element={<Product />} />
            <Route path='/Contact/'  element={<Contact />} />
            <Route path='/About/'  element={<About />} />
        </Route>
        
    </Routes>
    </>
  )
}

export default App
