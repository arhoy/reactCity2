import React from 'react';
import MatchBlock from './MatchBlock/MatchBlock';
import classes from './Match.css';


const Match = ({match}) => {
    return (
        <div className = {classes.Match}>
    
            <div className = {classes.Match__elem_team}>
                    <div>{match.away}</div>
                    <div>{match.awayThmb}</div>
            </div>

            <div className = {classes.Match__elem_result}>
                <div>{match.resultAway}</div>
            </div>

            <div className = {classes.Match__elem_team}>
                <div>{match.local}</div>
                <div className = {classes.Match__icon}
                    style = {{
                        background:`url(../../../resources/images/team_icons/huddersfield.png) no-repeat center`,
                        width: '25px',
                        height: '25px'
                    }}
                >
                          <div className="icon" style={{background:`url(/images/team_icons/${match.awayThmb}.png)`}}></div>
                    
                </div>
            </div>
            <div className = {classes.Match__elem_result}>{match.resultLocal}</div>
                
        </div>
    );
};

export default Match;