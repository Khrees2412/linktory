import React,{Fragment} from "react";
import Navbar from "./Navbar"
import {Link,useHistory} from "react-router-dom";
import "../styles/Home.css"
import { Box } from "@chakra-ui/core";
//import { Button,ButtonGroup } from "@chakra-ui/core";
import { useSelector } from "react-redux"
export default function Home(){
   
    const history = useHistory()
    const auth = useSelector(state => state.auth);
  

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
           
            
            <p className="onboard-link"><Link to="/login">LOG IN HERE </Link> OR <Link to="/signin"> SIGN UP HERE</Link></p>
            </div>
            <span><Link to="/dashboard">Dashboard</Link></span>
        </Fragment>
    )
}