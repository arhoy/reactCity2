import React from 'react';
import classes from './GoogleMaps.css';

const GoogleMaps = () => {
    return (
        <div className = {classes.GoogleMaps}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31427.78434766792!2d-113.55983947310264!3d53.56504916921728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a021612ba9acf9%3A0xd660439968c95baf!2sTELUS+World+of+Science!5e0!3m2!1sen!2sca!4v1540314176904" 
                width="100%" 
                height="450" 
                frameBorder="0"
                allowFullScreen>
                
            </iframe>
            <div className = {classes.Location}>
                <span>Location</span>
            </div>
        

        </div>
    );
};

export default GoogleMaps;