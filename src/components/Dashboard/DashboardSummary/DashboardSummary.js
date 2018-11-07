// add or edit matches
import React, { Component } from 'react';
import DashboardLayout from '../../../hoc/DashboardLayout/DashboardLayout';
import classes from './DashboardSummary.css';

class DashboardSummary extends Component {
    render() {
        return (
            <DashboardLayout>
                  <div className = {classes.DashboardSummary}>
                            <h2>This is the dashboard</h2>
                    </div>

            </DashboardLayout>
           
        );
    }
}

export default DashboardSummary;