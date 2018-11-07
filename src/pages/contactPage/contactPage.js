import React from 'react';
import classes from './contactPage.css';
import ContactData from '../../components/ContactData/ContactData';


const contactPage = () => {
    return (
        <div className = {classes.contactPage}>
            <div className = {classes.row1}>
                Row 1
            </div>
            <div className = {classes.row2}>
            <ContactData/>
            </div>
            <div className = {classes.row3}>
                Hellow Row 3
            </div>
     
        </div>
    );
};

export default contactPage;