import React from 'react';
import {Route, Redirect} from 'react-router-dom';
const PublicRoutes = ({user,component:Comp, ...rest}) => {
    return (
        <div>
            <Route
                {...rest}
                component = {(props)=>(
                  rest.restricted ?
                  (
                      user ?
                      <Redirect to = "/dashboard"/>
                      :
                      <Comp {...props} user = {user}/> // going to original page of user
                  )

                  :
                     <Comp {...props} user = {user}/> // going to original page of user
                )}
            />
        </div>
    );
};

export default PublicRoutes;



// if the user is has already signed in, and they are going to the sign in page, then redirect them to the dashboard page.