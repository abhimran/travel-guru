import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { nameContex} from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [name, setName, handleClick, loggedInUser, setLoggedInUser] = useContext(nameContex)
    return (
         <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;