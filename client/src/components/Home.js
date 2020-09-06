import React,{Fragment} from "react";
import Navbar from "./Navbar"
import {Link,useHistory} from "react-router-dom";
import "../styles/Home.css"
import { Box } from "@chakra-ui/core";
//import { Button,ButtonGroup } from "@chakra-ui/core";
import { useSelector } from "react-redux"
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../redux/actions/authActions";
import store from "../redux/store"

export default function Home(){
   
    const history = useHistory()
    const auth = useSelector(state => state.auth);
    // Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  console.log(decoded.exp)
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/login";
  }
}


if(auth.isAuthenticated){
  history.push("/dashboard")
}

    return(
        <Fragment>
        <Navbar/>
            <div class="home-component">
            <h1>Welcome to Linktory</h1>
           
            <div className="hero">
            <Box bg="red" w="100%" p={4} color="white">
                <p>Tired of storing links in the browser?</p>
                <p>Get a secure account for storing and
                 visiting your favourite and most used sites easily.</p>
                 </Box>
            </div>
           
            
            <p className="onboard-link"><Link to="/login">Login </Link> 
            <br/>
             <Link to="/signin"> Create an account</Link></p>
            </div>
            <span><Link to="/dashboard">Dashboard</Link></span>
        </Fragment>
    )
}