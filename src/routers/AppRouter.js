import React from 'react';
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDbp';
import AddExpense from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import helpPage from '../components/helpPage';
import NotFoundPage from '../components/notFoundPage';
import LoginPage from '../components/loginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const  history = createHistory();

const AppRouter =() => (
  <Router history = {history}>
  <div> 
      <Switch>
       <PublicRoute path="/" component = {LoginPage} exact = {true}/>
       <PrivateRoute path ="/dashboard" component = {ExpenseDashboardPage}/>
       <PrivateRoute path="/create" component = {AddExpense}/>
       <PrivateRoute path="/edit/:id" component = {EditExpensePage}/>
       <Route path ="/help" component = {helpPage}/>
       <Route component={NotFoundPage}/>
     </Switch>
   </div>
  </Router>
)

export default AppRouter;