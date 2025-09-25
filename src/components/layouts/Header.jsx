import { useEffect, useState } from 'react';

import Searchicon from "./../../icons/Searchicon";
import Personalicon from "./../../icons/Personalicon";
import Towicon from "../../icons/Towicon";
import Badicon from './../../icons/Bagicon'
import { FaPercent, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/styles/navs.css";

const Header = ({isHome}) => {

   const [offsetTop, setOffsetTop] = useState(isHome ? 50 : 0);

    useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setOffsetTop(window.scrollY > 50 ? 0 : 50);
    };

    const HeadStyle= isHome ?
    {
      position:"sticky",
      top: offsetTop
    }
    :
    {
       position:"fixed",
        top:"0"
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);
  
  return (
    <div className="header2 f-ard w100 " style={{top:offsetTop }} >
        <h1>headPhones</h1>
        <nav className="nav f-cen g2 ">
          <Link to="/" className="txt-b">Home</Link>
          <Link to="/Products/" className="txt-b">Shop</Link>
          <Link to="/Products/" className="txt-b">Products</Link>
          <Link to="/Contact/" className="txt-b">Contact Us</Link>
          <Link to="/About/" className="txt-b">About</Link>
        </nav>
        <div className="  f-cen txt-sub g1">
          <Searchicon  />
          <Link to="/signin" className="txt-b"><Personalicon /></Link>
          <Badicon />
           <Towicon  />
        </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
