import './../../assets/styles/navs.css'
import { FaInstagram,FaFacebook,FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-b p2 f-f f-col g0-5 ">
      <div className=" foter f-ard g1 txt-w p1">
        <p>3legant | HeadPhone Store </p>
        <nav className="f-cen g1">
          <a href="#" className="txt-w">Home</a>
          <a href="#" className="txt-w">Shop</a>
          <a href="#" className="txt-w">Blog</a>
          <a href="#" className="txt-w">Product</a>
          <a href="#" className="txt-w">Contact Us</a>
        </nav>
      </div>
      <div className='foter1 f-ard txt-w g1'>
        <p> Copyright © 2023 3legant. All rights reserved
           </p> 
           <span className='span p1 f-cen g1'>privacy Policy <span> Terms of Use </span></span>
          <div className='f-cen g1'>
          <FaInstagram/>
          <FaFacebook/>            
          <FaYoutube/>
           </div>
      </div>
    </footer>
  );
};

export default Footer;
