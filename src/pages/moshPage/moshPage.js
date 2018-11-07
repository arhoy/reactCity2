import React from 'react';
import Counters from '../../components/Counters/Counters';
import classes from './moshPage.css';

const moshPage = () => {
    return (
        <div className = {classes.moshPage}>
                <Counters/>
        </div>
    );
};

export default moshPage;