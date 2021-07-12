import React, { useState } from "react";
import "../css/Register.css";
import { useSpring, animated } from "react-spring";




function RegisterComponent() {
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
      <div className="registercontainer"> 
    <div className="login-register-wrapper">
      <div className="nav-buttons">
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
      <animated.div className="forgot-panel" style={loginProps}>
        <a herf="#">Forgot your password?</a>
      </animated.div>
    </div>
    </div>
  );
}

function LoginForm() {
  return (
    <React.Fragment>
      <label for="username">USERNAME</label>
      <input type="text" id="username" required />
      <label for="password">PASSWORD</label>
      <input type="text" id="password" required />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}

function RegisterForm() {
  return (
    <React.Fragment>
      <label for="username">username *</label>
      <input type="text" id="username" required />

      <label for="password">password *</label>
      <input type="text" id="password" required />

      <label for="confirmpassword">confirm password *</label>
      <input type="text" id="confirmpassword" required />

      <label for="firstname">first name *</label>
      <input type="text" id="firstname" required />

      <label for="lastname">last name</label>
      <input type="text" id="lastname" />

      {/* <select className="form-select" aria-label="Default select example" name="country"
        id="input-country-field" style={{ fontSize: '16px' }}>
        <option selected disabled required >COUNTRY *</option>
        <option value="1" style={{ color: 'darkBlue' }}>Latvia</option>
        <option value="2" style={{ color: 'darkBlue' }} >Italy</option>
        <option value="3" style={{ color: 'darkBlue' }}>France</option>
      </select> */}


     {/* <div className="align-left" style={{ display: 'flex', justifyContent: 'row', textAlign: 'left'}}>
     <label style={{color: 'black'}}>
        <input type="checkbox" />
        Agree with terms
      </label>
      </div> */}



   

      <input type="submit" value="submit" className="submit align-center" />
    </React.Fragment>
    
  );
}

export default RegisterComponent;




{/* <label for="email">email</label>
      <input type="text" id="email" /> */}
