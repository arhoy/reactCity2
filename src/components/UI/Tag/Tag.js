import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Tag.css';
// Tag needs to be imported as {Tag}
export const Tag = (props) => {
    const template = 
        <div className = {classes.Tag}
             style = {{
                 background: props.bckColor,
                 color: props.color,
                 width: props.width,
                 height: props.height
             }}
        >
            {props.children}
        </div>;

    if(props.link){
        return (
            <Link to = {props.linkTo}> {template} </Link>
        )
    }
    else{
        return template;
    }
};

