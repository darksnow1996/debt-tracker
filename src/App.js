import logo from './logo.svg';
import './App.css';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';

import DashboardPage from './views/DashboardPage';

import { Switch, Router, Route,Redirect } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Loanees from './views/Loanees';
import Loans from './views/Loans';
import "@material-tailwind/react/tailwind.css";
import { ToastProvider } from 'react-toast-notifications';
import PublicRoute from './router/PublicRoute';
import PrivateRoute from './router/PrivateRoute';
import ProtectedRoutes from './router/ProtectedRoutes';

import authService from './data/authentication/index'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import routes from './router/routes';


const history = createBrowserHistory();
 function App() {
   const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
   //const state = useSelector((state)=>state.auth)
   //console.log(state)
  //const [isAuthenticated, setIsAuthenticated] =useState(isAuthenticatedState)

  
  return (
    
<ToastProvider autoDismiss={true}>
<Router history={history}>
   <Switch >
   <Redirect exact from="/" to="/login" />
   <PublicRoute
            path="/login"
            isAuthenticated={isAuthenticated}
          >
            <Login />
          </PublicRoute>
          <PublicRoute
            path="/register"
            isAuthenticated={isAuthenticated}
          >
            <Register />
          </PublicRoute>
          {routes.map(({ component: Component, path, exact }) => (
        <PrivateRoute
          path={`/${path}`}
          key={path}
          isAuthenticated={isAuthenticated}
          exact={exact}          
          
        >
          <Component />
        </PrivateRoute>
      ))}
          {/* <PrivateRoute
            path="/"
            isAuthenticated={isAuthenticated}
          >
            <ProtectedRoutes/>
          </PrivateRoute> */}
          {/* <Route path="*">
            <NoFoundComponent />
          </Route> */}
     {/* <Route path="/"  exact>
       <Login></Login>
     </Route>
     <Route path="/login"  exact>
       <Login></Login>
     </Route>
     <Route path="/register"  exact>
       <Register></Register>
     </Route>
     <Route path="/dashboard"  exact>
      <DashboardPage/>
     </Route>
     <Route path="/loanees">
     <Loanees/>
     </Route>
     <Route path="/loans">
    <Loans/>
     </Route> */}
   </Switch>
 </Router>
</ToastProvider>


  );
}

export default App;
