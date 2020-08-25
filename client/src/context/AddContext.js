import React, {createContext, useState} from "react"

export const TitleContext = createContext()
export const LinkContext = createContext()
export const ItemContext = createContext()



export const TitleProvider = ({children}) => {
    const [title, setTitle] = useState("");
    
  return(
    <TitleContext.Provider value={[title,setTitle]}>
        {children}
    </TitleContext.Provider>
   )

 }
 export const LinkProvider = ({children}) => {
  const [link, setLink] = useState("");
 
return(
  <LinkContext.Provider value={[link, setLink]}>
      {children}
  </LinkContext.Provider>
 )

}
 
export const ItemProvider = ({children}) => {
  const [items, setItems] = useState([]);
 
return(
  <ItemContext.Provider value={[items, setItems]}>
      {children}
  </ItemContext.Provider>
 )

}
 

