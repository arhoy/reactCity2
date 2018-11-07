import React, { Component } from 'react';
import classses from './signInPage.css'
import SignIn from '../../components/SignIn/SignIn';

class signInPage extends Component {
    render() {
        return (
            <div className = {classses.signInPage}>
                <SignIn/>
            </div>
        );
    }
}

export default signInPage;