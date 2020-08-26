import React,{useState, useEffect, Fragment} from "react";
import Navbar from "../Navbar"
import "../../styles/Onboard.css";
//import { Box } from "@chakra-ui/core";
import {Link} from "react-router-dom"

export default function LogIn(){

    { useEffect(() => {
        document.title = "Login | LinkTory"
    })}

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors ] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <Fragment>
            <Navbar/>
           <div> 
           <form onSubmit={handleSubmit} method="POST" action="/user/login">
              <div class="form-control">
                   <label htmlFor="Email">Email</label>
                   <input type="email" 
                          name="email"
                          error={errors.email}  
                          value={email}
                          onChange={(e) => {
                              setEmail(e.target.value)

                          }} />
              </div>
              <div class="form-control">
                   <label htmlFor="Password">Password</label>
                   <input type="password" 
                          name="password"
                          error={errors.password}
                          value={password}
                          onChange={(e) => {
                              setPassword(e.target.value)

                          }} />
              </div>
              <button type="submit" className="submit-btn"><strong>Log In</strong></button>
              <br/>
              <p>Don't yet have an account ? <Link to="/signin">Sign up here</Link></p>
              </form>
           </div>
        </Fragment>
    )
}
