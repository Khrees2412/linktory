import React, { Fragment} from "react"
import {NavLink} from "react-router-dom"
import "../styles/Dashboard.css"
import { logoutUser } from "../redux/actions/authActions";
import {useDispatch } from "react-redux"


export default function DashBoard(){
    const dispatch = useDispatch()

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
                <button className="logout-btn" onClick={() => dispatch(logoutUser())}>LOG OUT</button>
            </div>

            </div>
        </Fragment>
        
    )
}