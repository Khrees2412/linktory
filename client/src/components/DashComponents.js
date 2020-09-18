import React, { Fragment, useEffect} from "react"
import "../styles/Dashboard.css"
//import { ItemContext } from "../context/AddContext", ?useContext 
import Dashboard from "./DashBoard"
import {useSelector, useDispatch} from "react-redux";
import {fetchAll} from "./../redux/actions/linkActions"

export function ViewLinks(){

    //const [items, setItems] = useContext(ItemContext)
   // const removeItem = index => {
   //     const newItems = [...items];
     //   newItems.splice(index, 1);
       // setItems(newItems);};
       const items = useSelector(state => state.links)
       const dispatch = useDispatch()
       useEffect(() => {
        dispatch(fetchAll())
       },[])
    return (
        <Fragment>
           <Dashboard/>
           <div className="view">
                {items.map((item,index) => (
                    <div className="item">
                <h1 key={index}>{item.title}</h1>
                <br/>
                <a key={index} href={item.url} target="_blank"
                rel="noopener noreferrer" >
                {item.url}</a>
                <br/>
                <button className="delete-btn" onClick={dispatch(index) }>  X </button>
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

