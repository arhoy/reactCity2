import React from 'react';
import {Route, Redirect} from 'react-router-dom';
const PrivateRoutes = ({user, component:Comp,...rest}) => {
    return (
        
            <Route
                {...rest}
                component = {(props)=> (
                    user ? 
                    <Comp {...props} user = {user}/> :
                    <Redirect to  = "/signin"/>
                )}
            />
        
    );
};

export default PrivateRoutes;


// return the dashboard route, only if the user is authenicated or not
// When landing on a restricted page, if the user has signed in, make them go the appropriate page, else make them go the sign in page.