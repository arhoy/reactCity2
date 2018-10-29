import React from 'react';
import classes from './matchesPage.css';
import Matches from '../../components/Matches/Matches';
import {Tag} from '../../components/UI/Tag/Tag';

const matchesPage = () => {
    return (
        <div className = {classes.matchesPage}>
            <div className = {classes.row1}>
                    <Tag
                        bckColor = 'red'
                        color = 'white'
                        width = '8rem'
                        height = '4rem'

                    >
                        Matches
                    </Tag>
            </div>
            <div className = {classes.row2}>
                   <Matches/>
            </div>
            <div className = {classes.row3}>
                    <Tag
                        bckColor = 'orangered'
                        color = 'white'
                        width = '8rem'
                        height = '4rem'
                        link = {true}
                        linkTo = '/team'
                    >
                        Team
                    </Tag>
            </div>
     
        </div>
    );
};

export default matchesPage;