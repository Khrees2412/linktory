import React,{Fragment} from "react";
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <Fragment>
    <nav className="home-navbar">
        <div className="brand-logo">
          <strong>LINKTORY</strong>
        </div>
        <ul class="menu">
          <li><a href="#">Use-cases</a></li>
          <li><a href="#">About</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
    </nav>
        </Fragment>
    )
}
