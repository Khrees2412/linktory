import React, { Fragment,useContext } from "react"
import "../styles/Dashboard.css"
import { ItemContext } from "../context/AddContext"
import Dashboard from "./DashBoard"

export function ViewLinks(){

    const [items, setItems] = useContext(ItemContext)
    const removeItem = index => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
      };
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
                <button className="delete-btn" onClick={() => removeItem(index) }>  X </button>
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

