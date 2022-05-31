import React, { Children } from "react";
import  classes from './Input.module.css'

const MyInput = ({children, ...props}) => {

    return (
         <input className={classes.inpt} {...props}/>
 
    );
}



export default MyInput;