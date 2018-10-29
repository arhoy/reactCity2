import React, { Component } from 'react';
import classes from './Matches.css';
import {firebaseMatches} from '../../resources/firebase';
import {reverseArray, firebaseLooper} from '../UI/Util/Helpers';
import Match from './Match/Match';
import Slide from 'react-reveal/Slide';

class Matches extends Component {
    state = {
        matches: []
    }

    componentDidMount(){
        firebaseMatches.limitToLast(6).once('value')
            .then((snapshot)=>{
                const matches = firebaseLooper(snapshot);
         
                this.setState({matches: reverseArray(matches)});
            })
    }
    showMatches = (matches) =>(
        matches ? 
            matches.map((match)=>(
                <Slide bottom key = {match.id}>
                     <Match
                         match = {match}
                    />

                </Slide>
           
            ))
            :null
    )

    render() {
        console.log(this.state)
        return (
            <div className = {classes.Matches}>
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Matches;