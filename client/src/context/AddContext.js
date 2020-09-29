import React, { createContext, useState } from 'react'

export const TitleContext = createContext()
export const UrlContext = createContext()
export const ItemContext = createContext()

export const TitleProvider = ({ children }) => {
    const [title, setTitle] = useState('')

    return (
        <TitleContext.Provider value={[title, setTitle]}>
            {children}
        </TitleContext.Provider>
    )
}
export const UrlProvider = ({ children }) => {
    const [url, setUrl] = useState('')

    return (
        <UrlContext.Provider value={[url, setUrl]}>
            {children}
        </UrlContext.Provider>
    )
}

export const ItemProvider = ({ children }) => {
    const [items, setItems] = useState([])

    return (
        <ItemContext.Provider value={[items, setItems]}>
            {children}
        </ItemContext.Provider>
    )
}

//const [items, setItems] = useContext(ItemContext)
// const removeItem = index => {
//     const newItems = [...items];
//   newItems.splice(index, 1);
// setItems(newItems);};
// const [data, setData] = useState([])
