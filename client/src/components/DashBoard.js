import React, { Fragment } from "react"
import {NavLink} from "react-router-dom"
import "../styles/Dashboard.css"
 
export default function DashBoard(){
    return(
        <Fragment>
            <div className="dash-container">
            <div className="dash-link">
                <NavLink  to="/view_links">View All Links</NavLink>
            </div>
            <div className="dash-link">
                <NavLink  to="/add_Link">Add New Link</NavLink>
            </div>
            <div className="dash-link">
                <NavLink  to="/settings">Settings</NavLink>
            </div>
            {/* 
            <div className="dash-link">
            <NavLink  to="/logout">Log Out</NavLink>
            </div>
            */}
            <div className="dash-link">
                <button className="logout-btn">LOG OUT</button>
            </div>
            </div>
        </Fragment>
    )
}