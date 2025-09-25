import HeaderTop from './components/HeaderTop';
import Herosection from './components/Herosection';
import Brands from './components/Brands';
import Arrivals from './components/Arrivals';
import Collection from './components/Collection';
import Seller from './components/Seller';
import SecondSection from './components/SecondSection';
import Contact from './components/Contact';
import LastSection from "./components/LastSection"



import './../../assets/styles/section.css'
import './../../assets/styles/home.css'
const Home = () => {
  return (
    
    <div className=''>
      <HeaderTop />
      <Herosection />
      <Brands />
      {/* <Arrivals /> */}
      <Collection />
      <Seller />
      <SecondSection />
      <Contact />
      <LastSection />
           
    </div>
    
  )
}

export default Home
