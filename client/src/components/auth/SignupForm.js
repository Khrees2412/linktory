import React,
{
useState, 
useEffect, 
Fragment
} from "react";
import PropTypes from "prop-types";
import classnames from "classnames"
import {useDispatch,useSelector} from "react-redux"
import Navbar from "../Navbar"
import "../../styles/Onboard.css";
//import { Box } from "@chakra-ui/core";
import {Link,withRouter,useHistory} from "react-router-dom"
import { registerUser } from "../../redux/actions/authActions"

function SignIn(){

    const history = useHistory()
    const auth = useSelector(state => state.auth);
    const errorsState = useSelector(state => state.errors)

    if(auth.isAuthenticated){
        history.push("/dashboard")
    }

    useEffect(() => {
        document.title = "Sign Up | LinkTory";

    })

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors ] = useState({})

    if(!errorsState){
        setErrors(errorsState)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const newUser= {
        name,
        email,
        password,
        password2,
        errors
    }

    const dispatch = useDispatch();

    return(
        <Fragment>
            <Navbar/>
           <div> 
            
               <form onSubmit={handleSubmit} method="POST" action="/api/user/register">
               <div className="form-control">
                   <label htmlFor="Name">Name</label>
                   <input type="text" 
                          name="name"
                          error={errors.name}  
                          value={name}
                          onChange={(e) => {
                              setName(e.target.value)

                          }}
                          className={classnames("", {
                    invalid: errors.name
                  })}
                  />
              </div>
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
                   <input type="password" 
                          name="password"
                          error={errors.password}
                          value={password}
                          onChange={(e) => {
                              setPassword(e.target.value)

                          }} 
                          className={classnames("", {
                    invalid: errors.password
                  })}
                  />
              </div>
              <div class="form-control">
                   <label htmlFor="Confirm-Password">Confirm Your Password</label>
                   <input type="password" 
                          name="password2"
                          error={errors.password2}    
                          value={password2}
                          onChange={(e) => {
                              setPassword2(e.target.value)

                          }}
                          className={classnames("", {
                    invalid: errors.password2
                  })}
                  />
              </div>
              <button type="submit" onClick={() => dispatch(registerUser(newUser, history))}
               className="submit-btn" ><strong>Sign In</strong></button>
              <br/>
              <p>Already signed up ? <Link to="/login">Log in</Link></p>
              </form>
           </div>
        </Fragment>
    )
}


SignIn.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

export default  withRouter(SignIn);