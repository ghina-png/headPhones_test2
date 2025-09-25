import { Outlet } from 'react-router-dom';
import Header from './../components/layouts/Header';
import Aside from '../components/layouts/Aside';
import Footer from '../components/layouts/Footer';

const MainLayout = () => {
  return (
    <div>
      <Header ></Header>
      <Aside></Aside>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
