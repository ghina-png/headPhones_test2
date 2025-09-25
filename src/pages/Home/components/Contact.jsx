import { FaShippingFast,FaPhone,FaLock,FaShieldAlt} from "react-icons/fa"
import img1 from '../../../assets/images/c1.jpg'
import img2 from '../../../assets/images/c2.jpg'
import img3 from '../../../assets/images/c3.jpg'
import img4 from '../../../assets/images/c4.jpg'

const Contact = () => {
  return (
     <div className=" container f-cen f-col">
    <div className="  f-cen w100 g3 p3">
      <div className="sell ">
        <FaShippingFast className="icon"/>
        <h3>Free Shipping</h3>
        <p>order above $200</p>
      </div>
     <div className="sell ">
        <FaShieldAlt className="icon"/>
        <h3>Money-back</h3>
        <p>30 days guarantee</p>
      </div> 
      <div className="sell">
        <FaLock className="icon"/>
        <h3>Secure Payments</h3>
        <p>Secured by Stripe</p>
      </div>
       <div className="sell ">
        <FaPhone className="icon" />
        <h3>24/7 support</h3>
        <p>Phone and Email support</p>
      </div>
    </div>

    <div className="sel2 f-cen f-col">
        <p className="txt-sub">NEWSFEED</p>
        <h1>Instegram</h1>
        <p>Follow us on social media for more discount & promotion</p>
        <p className="txt-sub"> @HeadPhone-official</p>
</div>

<div className="m w100 f-cen g2 p3">

  <div className="img">
  <img src={img1} alt="" />
  </div>
  <div className="img">
  <img src={img2} alt="" />
  </div>
   <div className="img">
  <img src={img3} alt="" />
  </div>
   <div className="img">
  <img src={img4} alt="" />
  </div>
</div>
</ div>
  )
}

export default Contact
