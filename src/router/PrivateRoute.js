import {
    Route,
    Redirect
  } from 'react-router-dom';
  
  function PrivateRoute({ children, isAuthenticated, ...rest }) {
    return (
      <Route
        {...rest}
        render={
          ({ location }) => (
            isAuthenticated
              ? (
                children
              ) : (
                <Redirect
                  to="/login"
                />
              ))
        }
      />
    );
  }
  
  export default PrivateRoute;