import { Outlet,useLocation } from 'react-router-dom';
import Header from './../components/layouts/Header';
import Aside from '../components/layouts/Aside';
import Footer from '../components/layouts/Footer';

const MainLayout = () => {


   const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div>
      <Header isHome={isHome} ></Header>
      <Aside></Aside>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
