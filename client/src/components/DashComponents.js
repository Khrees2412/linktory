import React, { Fragment, useEffect, useState} from "react"
import "../styles/Dashboard.css"
//import { ItemContext } from "../context/AddContext", ?useContext 
import Dashboard from "./DashBoard"
import {useSelector, useDispatch} from "react-redux";
import {fetchAll, deleteLink} from "./../redux/actions/linkActions"
import axios from "axios"

export function ViewLinks(){

    //const [items, setItems] = useContext(ItemContext)
   // const removeItem = index => {
   //     const newItems = [...items];
     //   newItems.splice(index, 1);
       // setItems(newItems);};
      // const [data, setData] = useState([])
       const items = useSelector(state => state.links.items)
       const dispatch = useDispatch()
       useEffect(() => {
           document.title = "Your Dashboard"
        dispatch(fetchAll())
        //axios.get('/api/user/view_links')
       // .then( res => setData(res.data.data))

       },[] )
    return (
        <Fragment>
           <Dashboard/>
           <div className="view">
                {items.map((item,index) => (
                    <div className="item">
                <h1 key={index + 1}>{item.title}</h1>
                <br/>
                <a key={index} href={item.url} target="_blank"
                rel="noopener noreferrer" >
                {item.url}</a>
                <br/>
                <button className="delete-btn" 
                onClick={ () => dispatch(deleteLink(item._id))}>
                      X </button>
                </div>))}
                </div>
        </Fragment>
    )
}



export function Settings(){
    return (
        <Fragment>
            <h1>Settings Component</h1>
        </Fragment>
    )
}

