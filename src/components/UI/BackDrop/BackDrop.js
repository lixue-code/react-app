import React from 'react'
import classes from './BackDrop.module.css'
import  ReactDOM  from 'react-dom'
export default function BackDrop(props) {

    const backDropRoot = document.getElementById('backDropRoot')
    return (
        ReactDOM.createPortal(<div 
            {...props}
            className={`${classes.BackDrop} ${props.className}`}>
            {props.children}
        </div>,backDropRoot)  
    )
}
