import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDbp';
import AddExpense from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import helpPage from '../components/helpPage';
import NotFoundPage from '../components/notFoundPage';
import Header from '../components/Header';
import { LoginPage } from '../components/loginPage'


const AppRouter =()=>(
  <BrowserRouter>
  <div>
    <Header/>
      <Switch>
       <Route path="/" component = {LoginPage} exact = {true}/>
       <Route path ="/dashboard" component = {ExpenseDashboardPage}/>
       <Route path="/create" component = {AddExpense}/>
       <Route path="/edit/:id" component = {EditExpensePage}/>
       <Route path ="/help" component = {helpPage}/>
       <Route component={NotFoundPage}/>
     </Switch>
   </div>
  </BrowserRouter>
)

export default AppRouter;