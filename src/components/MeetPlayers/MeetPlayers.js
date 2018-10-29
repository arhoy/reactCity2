import React, { Component } from 'react';
import classes from './MeetPlayers.css'
import {Tag} from '../../components/UI/Tag/Tag';
import {Link} from 'react-router-dom';
import Reveal from 'react-reveal/Reveal';
import Cards from './Cards/Cards';


class MeetPlayers extends Component {
    state = {
        show:false
    }
    render() {
        return (
            <Reveal
            fraction={0.7}
            onReveal={()=>{
                console.log('what the fuck')
                this.setState({
                    show:true
                })
            }}
            >
                <div className = {classes.MeetPlayers}>
                    <div className = {classes.LHS}>
                            <Cards/>
                    </div>

                    <div className = {classes.RHS}>
                            <div className = {classes.Tag}>
                                    <Tag
                                        bckColor = 'rgb(17, 23, 45)'
                                        color = 'white'
                                    >
                                        Meet
                                    </Tag>
                            </div>
                            <div className = {classes.Tag}>
                                    <Tag
                                        bckColor = 'rgb(17, 23, 45)'
                                        color = 'white'
                                    >
                                        The
                                    </Tag>
                            </div>
                            <div className = {classes.Tag}>
                                    <Tag
                                        bckColor = 'rgb(17, 23, 45)'
                                        color = 'white'
                                    >
                                        Players
                                    </Tag>
                            </div>
                            <div className = {classes.CTA}>
                                <Link to = '/'>
                                    Meet Them Here
                                </Link>
                            </div>
                        
                        
                    </div>
                </div>
            </Reveal>
         
        );
    }
}

export default MeetPlayers;