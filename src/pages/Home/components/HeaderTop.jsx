import { useEffect, useState } from 'react';
import { FaPercent, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderTop = () => {
      const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div  className={hidden ? ' hidden' : 'header1 f-cen bg-b w100 txt-w '}>
          <FaPercent />
          <p>30% off storwide- Limited time!  </p>
          <Link to="/Products/  " className=" txt-main">  Shop Now <FaArrowRight /></Link>
    </div>
  )
}

export default HeaderTop
