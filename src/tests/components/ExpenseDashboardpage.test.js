import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseDashboardPage } from '../../components/ExpenseDbp';
 
test ('should render ExpenseDbp correctly',() =>{
    const wrapper = shallow (<ExpenseDashboardPage/>);
    expect (wrapper).toMatchSnapshot();
});
