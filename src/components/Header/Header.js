import React, { Component } from 'react';
import classes from './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';
import Logo from '../UI/Logo/Logo';

class Header extends Component {
    render() {
        return (
            <div className = {classes.Header}>
                   <AppBar className = {classes.AppBar}>
                        <Toolbar className = {classes.Toolbar}>
                            <div>
                                <Logo
                                    linkExists = {true} 
                                    linkTo = '/'
                                    height = '50px'
                                    width = '50px'
                                />
                            </div>
                            <div>
                                <Link to = '/basic'><Button colors = "inherit">Basic</Button></Link>
                                <Link to = '/matches'><Button colors = "inherit">Matches</Button></Link>
                                <Link to = '/signin'><Button colors = "inherit">Sign in</Button></Link>
                                <Link to = '/contact'><Button colors = "inherit">Contact</Button></Link>
                                <Link to = '/dashboard_matches/edit_match'><Button colors = "inherit">Edit Match</Button></Link>
                            </div>
                        
                        </Toolbar>
                   </AppBar>
            </div>
         
        );
    }
}

export default Header;