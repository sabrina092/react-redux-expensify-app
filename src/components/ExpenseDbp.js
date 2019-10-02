import React from 'react' 
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpensesListFilters';
import ExpensesSummary from './ExpensesSummary';
 
export const ExpenseDashboardPage =()=>(
    <div>
      <ExpensesSummary/>
      <ExpenseListFilters/>
      <ExpenseList/>
    </div>
)

export default ExpenseDashboardPage;
