
import React, { Component } from 'react';
import {easePolyOut} from 'd3-ease';
import Animate from 'react-move/Animate';
import classes from './Stripes.css';
class Stripes extends Component {

    state = {
        stripes: [
            {background:'#98c5e9',left: 120, rotate: 24,top:-260,delay:0},
            {background:'white',left: 360, rotate: 24,top:-400,delay:200},
            {background:'#98c5e9',left: 600, rotate: 24,top:-500,delay:400},
        ]
    }

    showStripes = () =>(
        this.state.stripes.map((stripe,i)=>(
            <Animate
                key = {i}
                show = {true}
                start = {{
                    background: 'white',
                    opacity:0,
                    left:0,
                    rotate:0,
                    top:0
                    
                }}
                enter = {{
                    background: stripe.background,
                    opacity: [1],
                    left: [stripe.left],
                    top:[stripe.top],
                    rotate:[stripe.rotate],
                    timing: {delay: stripe.delay,duration: 200,ease:easePolyOut}
                }}
            >
            
            {
                ({background,opacity,rotate,left,top})=>{
                    return (
                        <div
                            className = {classes.Stripes}
                            style = {{
                                background,
                                opacity,
                                transform: `rotate(${rotate}deg) translate(${left}px,${top}px)`
                            }}
                            >
             
                         </div>
                    )
                }
                       
                
            }

            </Animate>
          
        ))

    )

    
    render() {
        return (
            <div className = {classes.Stripes}>
                {this.showStripes()}
            </div>
        );
    }
}

export default Stripes;