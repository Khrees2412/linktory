import React, { Fragment, useEffect, useState } from 'react'
import '../styles/Dashboard.css'
//import { ItemContext } from "../context/AddContext", ?useContext
import Dashboard from './DashBoard'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAll, deleteLink } from './../redux/actions/linkActions'

export function ViewLinks() {
    const items = useSelector((state) => state.links.items)
    const dispatch = useDispatch()
    useEffect(() => {
        document.title = 'All Links'
        dispatch(fetchAll())
    }, [])
    return (
        <Fragment>
            <Dashboard />
            <div className="view">
                {items.map((item, index) => (
                    <div className="item">
                        <h1 key={index + 1}>{item.title}</h1>
                        <br />
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.url}
                        </a>
                        <br />
                        <button
                            className="delete-btn"
                            onClick={() => dispatch(deleteLink(item._id))}
                        >
                            X{' '}
                        </button>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export function Settings() {
    return (
        <Fragment>
            <h1>Change your username</h1>
        </Fragment>
    )
}
