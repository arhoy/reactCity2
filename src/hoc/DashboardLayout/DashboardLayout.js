import React from 'react';
import classes from './DashboardLayout.css';
import DashboardDrawer from '../../components/Dashboard/DashBoardDrawer/DashBoardDrawer';


const DashboardLayout = (props) => {
    return (
        <div className = {classes.DashboardLayout}>
            <div className = {classes.Side}>
                <DashboardDrawer/>
            </div>
            
             <div className = {classes.Main}>
                 {props.children}
             </div>
           
        </div>
    );
};

export default DashboardLayout;