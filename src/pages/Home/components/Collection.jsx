import Col1 from './../../../assets/images/col1.png';
import Col2 from './../../../assets/images/col2.jpg';
import Col3 from './../../../assets/images/col3.jpg';
import { FaArrowRight } from 'react-icons/fa';
const Collection = () => {
  return (
    <div className='collection container f-f g1 f-col '>
      <h2>Shop Collection</h2>
      <div className="col f-bet g2 w100">
        <div className="headphpne">
            <div className="text f-f f-col">
               <span className='title'> headband</span>
               <span className='coll'>Collection <FaArrowRight /> </span>
            </div>
            <div className="imgg">
         <img src={Col1} alt="image" />
            </div>
        </div>
        <div className="headphpne1 f-f f-col g1 ">

          <div className="hp1 f-bet g0-5 ">
            <div className="text f-f f-col g0-5">
               <span className='title'> headband</span>
               <span className='coll'>Collection <FaArrowRight /> </span>
            </div>
            <div className="imgg">
         <img src={Col2} alt="image" />
            </div>
          </div>
           <div className="hp1 f-bet g0-5 ">
            <div className="text f-f f-col">
               <span className='title'> headband</span>
               <span className='coll'>Collection <FaArrowRight /> </span>
            </div>
            <div className="imgg">
           <img src={Col3} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
