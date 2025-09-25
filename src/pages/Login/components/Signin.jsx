import Input from "../../../components/common/Input";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";


const Signin = () => {
  return (
    <div className="sign ">
       <Input item="input" type="email" place="Your usernam or email address" name="email" className="inputScond" />  
       <div className="eye f-bet">
        <Input item="input" type="password" place="password " name="password" className="inputpass " />  
        <span className="span"><FaEye /></span>   
        </div>    
        
       <div className="cha f-bet">
        <Input item="check" type="checkbox" placeholder="Remember me " name="Remember me" showSpan="true" ></Input>
        <a href="#"><b>Forgot password?</b></a>
       </div>
       <Link to="/" className="btn"> sign in</Link>
    </div>
  )
}

export default Signin
