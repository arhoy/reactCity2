import React from 'react';
import LogoImage from '../../../resources/images/CAT.png';
import classes from './Logo.css';
import {Link} from 'react-router-dom';

const Logo = (props) => {
    let template = <div className = {classes.Logo}>
                        D
                    </div>;

    if(props.linkExists){
        template = <Link to = {props.linkTo}>{template}</Link>   
    }
 
    return (
        <div className = {classes.LogoHolder}
            style = {{
                background: `url(${LogoImage}) no-repeat center`,
                width: props.width,
                height: props.height
            }}
        >
            {template}
        </div>
    );
};

export default Logo;