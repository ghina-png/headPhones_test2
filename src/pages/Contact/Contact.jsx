import Input from '../../components/common/Input'
import Button from '../../components/common/Button'

import './../../assets/styles/contact.css'

const Contact = () => {
  return (
   <div className='txt f-cen f-col'>
   <div className="text f-cen f-col">
   <h1>Product order form</h1>
   <p>Fill  out the form below to submit your ablication and we will contact
     you to confirm the details </p>
  </div>
  <div className="text1 ">
    <h1 >Customer Information</h1>
  </div>
  <div className=" inputs f-cen f-col">
    <div className="input f-bet g4">
  <Input item="input" type="text" placeholder=" full name" showSpan="true"/>
  <Input item="input" type="email" placeholder="e-mail " showSpan="true"/>
  </div>
  <div className="input f-bet g4">
  <Input item="input" type="text" placeholder=" phone number" showSpan="true"/>
  <Input item="input" type="text" placeholder=" the address" showSpan="true"/>
  </div>
  <div className="input f-bet g4">
  <Input item="input" type="text" placeholder=" city" showSpan="true"/>
  <Input item="input" type="text" placeholder=" zip code " showSpan="true"/>
  </div>
  <Input   placeholder=" Additional notes (optional) " />
  
 </div>
 
  <Button text=" Submit the application" type="button" className="btnScon "/>
   </div>
  )
}

export default Contact
