//import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
//import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import classes from './DashBoardDrawer.css';
import {firebase} from '../../../resources/firebase';

import React from 'react';

const DashBoardDrawer = () => {

    const logoutHandler = () =>{
        firebase.auth().signOut()
            .then(()=>{
                console.log('log out');
            })
            .catch(err=>{
                console.log('there was an error',err);
            })
        
    }
    return (
        <div className = {classes.DashBoardDrawer}>

                <Link to = '/Players'><ListItem>Players</ListItem></Link>
                <Link to = '/dashboard_matches/edit_match'><ListItem>Add Match</ListItem></Link>
                <ListItem button className = {classes.menuButton} button onClick = {logoutHandler} >Log Out</ListItem>
        </div>
    
    );
};

export default DashBoardDrawer;