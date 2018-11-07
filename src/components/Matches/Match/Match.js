import React from 'react';
import classes from './Match.css';



const Match = ({match}) => {
    let matchSpecs = 'On: ';
    if(match.final === "Yes"){
        matchSpecs = 'Played: ';
    }
    return (
        <div className = {classes.Match}>
            <div className = {classes.MatchDate}> {matchSpecs} {match.date}</div>
            <div className = {[classes.MatchLocal,classes.Team].join(' ')}> <img alt = "" src={window.location.origin + `/images/team_icons/${match.localThmb}.png`}/><div>{match.local}</div> </div>
            <div className = {[classes.MatchAway,classes.Team].join(' ')}><img alt = "" src={window.location.origin + `/images/team_icons/${match.awayThmb}.png`}/><div>{match.away}</div></div>
            <div className = {[classes.Result,classes.ResultLocal].join(' ')}> <div>{match.resultLocal}</div> </div>
            <div className = {[classes.Result,classes.ResultAway].join(' ')}> <div>{match.resultAway}</div> </div>
            <div className = {classes.MatchStadium}>{match.stadium}</div>
        </div>
    );
};

export default Match;