import React, { Fragment,useContext } from "react"
import "../styles/Dashboard.css"
import { ItemContext } from "../context/AddContext"

export function ViewLinks(){
    const [items, setItems] = useContext(ItemContext)
    const removeItem = index => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
      };
    return (
        <Fragment>
           
                {items.map((item,index) => (
                    <div className="item">
                <h1 key={index}>{item.title}</h1>
                <br/>
                <a key={index} href={item.link} target="_blank"
                rel="noopener noreferrer" >
                {item.link}</a>
                <br/>
                <button onClick={() => removeItem(index) }>  X </button>
                </div>))}
           
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

export function LogOut(){
    return (
        <Fragment>
            <h1>Log Out Component</h1>
        </Fragment>
    )
}