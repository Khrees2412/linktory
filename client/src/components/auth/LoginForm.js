import React,
{
useState, 
useEffect, 
Fragment
} from "react";
import PropTypes from "prop-types";
import classnames from "classnames"
import {useDispatch,useSelector }from "react-redux"
import Navbar from "../Navbar"
import "../../styles/Onboard.css";
//import { Box } from "@chakra-ui/core";
import {Link,withRouter,useHistory} from "react-router-dom"
import { loginUser } from "../../redux/actions/authActions"

function LogIn(){

    const history = useHistory()
    const auth = useSelector(state => state.auth);
    const errorsState = useSelector(state => state.errors)
    
    if(auth.isAuthenticated){
        history.push("/dashboard")
    };
    
    useEffect(() => {
        document.title = "Login | LinkTory";
    },[])

  
    
//debugger
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors ] = useState({});

   // if(errorsState){
     //   setErrors(errorsState)
    //}
 const dispatch = useDispatch();

    const userData = {
        email,
        password
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const check = () => {
        const { email, password }  = userData
    if(email && password  ){
        dispatch(loginUser(userData))
    }
    else{
        alert("ENTER YOUR DETAILS TO CONTINUE")
    }

}
    return(
        <Fragment>
            <Navbar/>
           <div> 
           <form onSubmit={handleSubmit} method="POST" action="/api/user/login">
              <div className="form-control">
                   <label htmlFor="Email">Email</label>
                   <input type="email" 
                          name="email"
                          error={errors.email}  
                          value={email}
                          onChange={(e) => {
                              setEmail(e.target.value)

                          }} 
                          className={classnames("", {
                    invalid: errors.email
                  })}
                  />
 
              </div>
              <div className="form-control">
                   <label htmlFor="Password">Password</label>
                   <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
                   <input type="password" 
                          name="password"
                          error={errors.password}
                          value={password}
                          onChange={(e) => {
                              setPassword(e.target.value)

                          }} 
                          className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                  />
 
              </div>
              <button type="submit" onClick={() => check()} className="submit-btn"><strong>Log In</strong></button>
              <br/>
              <p>Don't yet have an account ? <Link to="/signin">Sign up here</Link></p>
              </form>
           </div>
        </Fragment>
    )
}

LogIn.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

export default withRouter(LogIn)