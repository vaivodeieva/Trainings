import React, { useState } from "react";
import "../css/Register.css";
import { useSpring, animated } from "react-spring";
import RegisterSelect from '../Components/RegisterSelect'




function Register() {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const loginProps = useSpring({
    left: registrationFormStatus ? -500 : 0, // Login form sliding positions
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 0px transparent"
      : "solid 2px #1059FF",  //Animate bottom border of login button
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2px #1059FF"
      : "solid 0px transparent", //Animate bottom border of register button
  });

  function registerClicked() {
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
  }


  

  return (
    <div>
      <div className="register-container"> 
    <div className="login-register-wrapper">
      <div className="navigation-buttons">
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
          Login
        </animated.button>
        <animated.button
          onClick={registerClicked}
          id="registerBtn"
          style={registerBtnProps}
        >
          Register
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.form>
        <animated.form action="" id="registerform" style={registerProps}>
          <RegisterForm />
        </animated.form>
      </div>
      </div>

    </div>
   
    </div>
    
  );
}

function LoginForm() {
  return (
    <React.Fragment>
      <label for="username">USERNAME</label>
      <input type="text" id="username" required />
      <label for="password" >PASSWORD</label>
      <input type="text" className="hide-password" id="password" required />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}

function RegisterForm() {
  return (
      <div>
    <React.Fragment>
      <label for="username">username *</label>
      <input type="text" id="username" required />

      <label for="password">password *</label>
      <input type="text" className="hide-password" minlength="8" id="password" required/>

      <label for="confirmpassword">confirm password *</label>
      <input type="text" className="hide-password" minlength="8" id="confirmpassword" required />

    
      <label for="firstname">first name *</label>
      <input type="text" id="firstname" required />

      <label for="lastname">last name</label>
      <input type="text" id="lastname" />


      <RegisterSelect />
      
      </React.Fragment>

       <div className="row">
           <div className="col-1">
           <input type="checkbox" required className="checkbox" id="checkbox" />
           </div>

           <div className="col-11">
           <label for="checkbox" className="checkbox-label" required>Agree with the terms and conditions * </label>
           </div>
       </div>

      
      <input type="submit" value="submit" className="submit align-center" />
      </div>
  );
}

export default Register;



