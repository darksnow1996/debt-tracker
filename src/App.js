import logo from './logo.svg';
import './App.css';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';
import DashBoard from './views/Dashboard';
import AddLoanee from './views/Loanees/AddLoanee';
import DashboardPage from './views/DashboardPage';
import LoanRecords from './views/Loanees/LoanRecords';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Loanees from './views/Loanees';
import Loans from './views/Loans';
import "@material-tailwind/react/tailwind.css";

function App() {

  
  return (
 <BrowserRouter>
   <Switch>
     <Route path="/"  exact>
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
     </Route>
   </Switch>
 </BrowserRouter>
  );
}

export default App;
