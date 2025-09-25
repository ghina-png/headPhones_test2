import { Link } from "react-router-dom";
import Input from "../../../components/common/Input";
import { FaEye } from "react-icons/fa";

const Signup = () => {
  return (
     <div className="sign ">
       <Input item="input" type="text" place="Your name" name="email" className="inputScond" />  
       <Input item="input" type="text" place="username" name="email" className="inputScond" />  
       <Input item="input" type="email" place="Email Address" name="email" className="inputScond" />  
       <div className="eye f-bet">
        <Input item="input" type="password" place="password " name="password" className="inputpass " />  
        <span className="span"><FaEye /></span>   
        </div>    
        
       <div className="cha f-bet">
        <Input item="check" type="checkbox" placeholder="Remember me " name="Remember me" showSpan="true" ></Input>
        <a href="#"><b>Forgot password?</b></a>
       </div>
       <Link to="/" className="btn"> sign up</Link>
    </div>
  )
}

export default Signup
