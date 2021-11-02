import { lazy } from 'react';
import DashboardPage from '../views/DashboardPage';
import Loanees from '../views/Loanees';
import Loans from '../views/Loans';


const routes = [
  {
    path: 'loans',
    component: ()=> <Loans/>,
    exact: true
  },
  {
    path: 'loanees',
    component: ()=><Loanees/>,
    exact: true
  },
  {
    path: 'dashboard',
    component:()=><DashboardPage/>,
    exact: true
  }
];

export default routes;