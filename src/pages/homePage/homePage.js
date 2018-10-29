import React from 'react';
import classes from './homePage.css';
import Featured from '../../components/Featured/Featured';
import Matches from '../../components/Matches/Matches';
import MeetPlayer from '../../components/MeetPlayers/MeetPlayers';
import Promo from '../../components/Promo/Promo';


const homePage = () => {
    return (
        <div className = {classes.homePage}>
            <Featured/>
            <Matches/>
            <MeetPlayer/>
            <Promo/>
        
        </div>
    );
};

export default homePage;