import React from 'react';
import { NavLink } from 'react-router-dom';

const Header =()=>(
    <header>
      <h1>Expensify </h1>
      <NavLink to ="/" activeClassName="is-active">Go ExpenseDashboardPage</NavLink>
      <NavLink to ="/create" activeClassName="is-active">Go AddExpense</NavLink>
      <NavLink to ="/edit" activeClassName="is-active">Go EditExpensePage</NavLink>
      <NavLink to ="/help" activeClassName="is-active">Go helpPage</NavLink>
    </header>
  )
  export default Header;