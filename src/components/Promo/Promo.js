import React, { Component } from 'react';
import classes from './Promo.css';
import Jersey from '../../resources/images/jersey.jpg';
import Email from '../Email/Email';
import Zoom from 'react-reveal/Zoom';


class Promo extends Component {
    render() {
        return (
            <Zoom>
               <div className = {classes.Promo}>
                    <div className = {classes.Promo_describe} >
                        Win A Jersey
                    </div>
                    <div className = {classes.Promo_picture} >
                        <img src={Jersey} alt=""/>
                    </div>
                    <div className = {classes.Promo_email} >
                        <Email/>
                    </div>
                </div>
            </Zoom>
         
        );
    }
}

export default Promo;