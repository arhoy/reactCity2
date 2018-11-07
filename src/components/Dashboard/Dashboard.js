import React, { Component } from 'react';
import DashBoardTable from './DashboardTable/DashboardTable';
import DashboardLayout from '../../hoc/DashboardLayout/DashboardLayout';
import classes from './Dashboard.css';
class Dashboard extends Component {
    render() {
        return (
            <DashboardLayout> 
            
                <h2>Your Dashboard Summary</h2>
                <div className = {classes.Dashboard}>
                        <DashBoardTable/>
                </div>       
                     
            </DashboardLayout>
        );
    }
}

export default Dashboard;