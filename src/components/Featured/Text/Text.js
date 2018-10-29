
import React, { Component } from 'react';
import classes from './Text.css';
import Animate from 'react-move/Animate';
import {easePolyOut} from 'd3-ease';
import FeaturedPlayer from '../../../resources/images/featured_player.png';

class Text extends Component {

    animateNumber = () =>(
        <Animate
            show = {true}
            start = {{
                opacity:0,
                rotate:0
            }}
            enter={{
                opacity: [1],
                rotate: [360],
                timing:{duration: 1000,ease:easePolyOut}
            }}
        >
            {({opacity,rotate})=>{
                return (
                    <div 
                        className = {classes.Text_number}
                        style = {{
                            opacity,
                            transform: `translate(27px,0px) rotateY(${rotate}deg)`
                        }}
                    >3
                    </div>
                )
            }}
        </Animate>
    )

    animateFirst = () =>(
        <Animate
            show = {true}
            start = {{
                opacity:0,
                x:1200,
                y:300
            }}
            enter={{
                opacity: [1],
                timing:{duration: 500,ease:easePolyOut},
                x:[30],
                y:[300]
            }}
        >
            {({opacity,x,y})=>{
                return (
                    <div 
                        className = {classes.Text_blurb}
                        style = {{
                            opacity,
                            transform: `translate(${x}px,${y}px)`
                        }}
                    >Time League Champs
                    </div>
                )
            }}
        </Animate>
    )

    animateSecond = () =>(
        <Animate
            show = {true}
            start = {{
                opacity:0,
                x:1500,
                y:300
            }}
            enter={{
                opacity: [1],
                timing:{duration: 500,ease:easePolyOut, delay: 300},
                x:[30],
                y:[300]
            }}
        >
            {({opacity,x,y})=>{
                return (
                    <div 
                        className = {classes.Text_blurb}
                        style = {{
                            opacity,
                            transform: `translate(${x}px,${y}px)`
                        }}
                    >Boltham FC
                    </div>
                )
            }}
        </Animate>
    )
    animatePlayer = () =>(
        <Animate
            show = {true}
            start = {{
                opacity:0
            }}
            enter={{
                opacity: [1],
                timing:{duration: 500,ease:easePolyOut, delay: 800}
            }}
        >
            {({opacity})=>{
                return (
                    <div 
                        className = {classes.Text_player}
                        style = {{
                            opacity,
                            background: `url(${FeaturedPlayer}) no-repeat center`

                        }}
                    >
                    </div>
                )
            }}
        </Animate>
    )

    render() {
        return (
            <div className = {classes.Text}>
                {this.animateNumber()}
                {this.animateFirst()}
                {this.animateSecond()}
                {this.animatePlayer()}
            </div>
        );
    }
}

export default Text;