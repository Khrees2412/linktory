import React, {Fragment,useState,useContext} from "react"
import {TitleContext,LinkContext,ItemContext} from "../context/AddContext";


export default function AddLink(){
    const [title, setTitle] = useContext(TitleContext);
    const [link, setLink] = useContext(LinkContext);
    const [items, setItems] = useContext(ItemContext)

    const onChangeTitle = (e) =>{
         setTitle(e.target.value)
    }
    const onChangeLink = (e) =>{
        setLink(e.target.value)
    }
    const addLink = (title,link) => {
        const newItems = [...items,{title,link}];
        setItems(newItems)
        }
    const [modal, setModal] = useState(false)
    return(
       
        <Fragment>
            <div className="add">
           <div className="title">
               <label htmlFor="Title">Title</label>
               <input 
                      type="text" 
                      maxLength="100" 
                      placeholder="Must not be more than 50 characters long "
                      value={title}
                      onChange={onChangeTitle}
                      
                      />
            </div> 
            
            <div className="link">
            <label htmlFor="Link">Link</label>
               <input 
               type="text"  
               placeholder="Must begin with 'https' or 'http' "
               value={link}
               onChange={onChangeLink}

               />
               
               {/*<a href={link} target="_blank" rel="noopener noreferrer" >{link}</a>*/}
            </div> 
            <button 
            className="btn" 
            type="submit" 
            onClick={() => {
                setModal(!modal);
                        if(!link || !title) {
                alert(" Please fill both input fields!! ");
                        return;
                }
               
                addLink(title,link)
                setLink("");
                setTitle("");;
            }}>ADD</button>
            </div>
            <div className="modal" 
                 style={{
                display:modal ? "block": "none",
                backgroundColor: "black",
                color:"white",
                padding: "15px",
                width: "20%",
                height: "50%",
                margin:"auto"
                        }}>
                <p> Link Added </p>
                <button className="modal-btn"  onClick={() => setModal(false)}>X</button>
            </div>


            
        </Fragment>
       
    )
}