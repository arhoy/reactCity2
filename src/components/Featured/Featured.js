import React, { Component } from 'react';
import classes from './Featured.css';
import Stripes from './Stripes/Stripes';
import Text from './Text/Text';
class Featured extends Component {
    render() {
        return (
            <div className = {classes.Featured}>
                <Stripes/>
                <Text/>
            </div>
        );
    }
}

export default Featured;