import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header =({startLogout})=>(
    <header>
      <h1>Expensify </h1>
      <NavLink to ="/" activeClassName="is-active">Go ExpenseDashboardPage</NavLink>
      <NavLink to ="/create" activeClassName="is-active">Go AddExpense</NavLink>
      <button onClick = { startLogout }> Logout </button>
    </header>
  );
  const mapDispacthToProps =(dispatch)=> ({
     startLogout: ()=> dispatch(startLogout())
  })
  export default connect(undefined, mapDispacthToProps)(Header);