import img1 from '../../../assets/images/col1.png'
import { FaRegEnvelope } from 'react-icons/fa' 
import { Link } from 'react-router-dom'


const LastSection = () => {
  return (
    < div className='Last f-f g0-5'>
       <div className='img1'>
         <img src={img1} alt="image" />
      </div>
      <div className=' ll f-cen f-col g-5'>
        <h1>Join Our Newsletter</h1>
       <p>Sign up for deals, new products and promotions</p>
        <div className="ss f-evn g4">
            <div className="mm f-cen g0-5">
                <FaRegEnvelope />
                <h4 className='txt-sub'>Email Address</h4>
            </div >
            <Link to="/signup" className='as txt-shd' >sign up</Link>
      </div>
    </div>
    </div>
  )
}

export default LastSection
