import React, { Component } from 'react';
import classes from '../Cards/Cards'
import Player1 from '../../../resources/images/players/player_to_upload/DEF/tosin_adarabioyo.png';
// import {easePolyOut} from 'd3-ease';
// import Animate from 'react-move/Animate';


class Cards extends Component {

    showAnimateCards = () =>(
        <div className = {classes.Cards}
            style = {{
                background:` white url(${Player1}) no-repeat`,
                backgroundSize: 'contain',
                height: '200px',
                width: '200px'
            }}
        >

        </div>
    )
    render() {
        return (
            <div>
                {this.showAnimateCards()}
            </div>
        );
    }
}

export default Cards;