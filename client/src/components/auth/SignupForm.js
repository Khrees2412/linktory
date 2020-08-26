import React,{useState, useEffect, Fragment} from "react";
import Navbar from "../Navbar"
import "../../styles/Onboard.css";
//import { Box } from "@chakra-ui/core";
import {Link} from "react-router-dom"

export default function SignIn(){

    useEffect(() => {
        document.title = "Sign Up | LinkTory"
    })

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors ] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <Fragment>
            <Navbar/>
           <div> 
            
               <form onSubmit={handleSubmit} method="POST" action="/register">
               <div class="form-control">
                   <label htmlFor="Name">Name</label>
                   <input type="text" 
                          name="name"
                          error={errors.name}  
                          value={name}
                          onChange={(e) => {
                              setName(e.target.value)

                          }}/>
              </div>
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
              <div class="form-control">
                   <label htmlFor="Confirm-Password">Confirm Your Password</label>
                   <input type="password" 
                          name="password2"
                          error={errors.password2}    
                          value={password2}
                          onChange={(e) => {
                              setPassword2(e.target.value)

                          }}/>
              </div>
              <button type="submit" className="submit-btn" ><strong>Sign In</strong></button>
              <br/>
              <p>Already signed up ? <Link to="/login">Log in</Link></p>
              </form>
           </div>
        </Fragment>
    )
}