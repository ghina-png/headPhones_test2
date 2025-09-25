import { useState } from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import HP from "./../../assets/images/col1.png";

import './../../assets/styles/login.css';

const Login = () => {

  const [activeInterFace, setactiveInterFace] = useState(0);


  return (
    <div className="login f-bet">
    <div className="image">
        <img src={HP} alt="image" />
    </div>

    <div className="form f-cen ">
    <form className="span">
       <h1>
        Sign  {activeInterFace == 0 ? "in " : "up "} 
      </h1>

        {
          activeInterFace == 0 ?
            <p>Don't have an account? <span className="txt-main" onClick={ () => setactiveInterFace(1)}>Sign up</span></p>
            :
            <p>Already have an account? <span className="txt-main" onClick={ () => setactiveInterFace(0)}>sign in</span></p>
        }
       
        {
          activeInterFace == 0 ? 
          <Signin />
            :
          <Signup />
        }

    </form>  
    </div>
    </div>
  )
}

export default Login
