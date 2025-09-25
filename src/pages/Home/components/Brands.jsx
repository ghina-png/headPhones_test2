import B1 from './../../../assets/images/b1.png';
import B2 from './../../../assets/images/b2.png';
import B3 from './../../../assets/images/b3.png';
import B4 from './../../../assets/images/b4.png';
import B5 from './../../../assets/images/b5.png';
import B6 from './../../../assets/images/b6.png';
const Brands = () => {
  return (
    <div className="brands f-cen g2-5 w100">
      <img src={B1} alt="image" />      
      <img src={B2} alt="image" />      
      <img src={B3} alt="image" className='branimg'  />      
      <img src={B4} alt="image" className='branimg'  />      
      <img src={B5} alt="image" className='branimg'  />      
      <img src={B6} alt="image" className='branimg' />      
    </div>
  )
}

export default Brands
