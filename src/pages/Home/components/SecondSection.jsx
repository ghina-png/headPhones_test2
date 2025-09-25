import img from '../../../assets/images/about.jpg'
import '../../../assets/styles/section.css'
import Button from '../../../components/common/Button'
import Timer from './../../Timer/Timer';


const SecondSection = () => {
  return (
    <div className='heros2 f-f g4 '>
      <div className="imga">
     <img  className=" photo"src={img} alt="" />
      </div>
    <div className='hh  f-f f-col p3 g1'>
      <h3>PROMOTION</h3>
      <h1>Hurry up! 40%OFF</h1>
      <p>thousands of high tech are waiting for you</p>
      <p>offer expires in:</p>
         <Timer />
      <Button type="button" text="Shop now" className="btn_b" />
    </div>
      
    </div>
  )
}

export default SecondSection
