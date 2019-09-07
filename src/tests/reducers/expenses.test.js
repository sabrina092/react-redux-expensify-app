import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',() => {
     const state = expensesReducer(undefined, {type:'@@INIT'});
     expect(state).toEqual([]);
});

test('should remove expense by Id',() => {
     const action = {
         type:'REMOVE_EXPENSE',
         id: expenses[1].id
     };
    const state = expensesReducer(expenses, action)
       
     expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if Id not found',() => {
     const action = {
         type:'REMOVE_EXPENSE',
         id: '-1'
     };
    const state = expensesReducer(expenses, action)
       
     expect(state).toEqual(expenses);
});

test('should add expense',() => {
     const expense = {
          id: '149',
          description: 'Lotus',
          note:' ',
          amount: 190,
          createdAt: 330
     };
     const action ={
          type:'ADD_EXPENSE',
          expense
     }
    const state = expensesReducer(expenses, action);  
     expect(state).toEqual([...expenses, expense]);
});

test('should edit expense',() => {
     const amount = 100
     const action = {
         type:'EDIT_EXPENSE',
         id: expenses[1].id,
         updates: {
            amount
          }
      };
         
     const state = expensesReducer(expenses, action);  
     expect(state[1].amount).toEqual(amount);
});


test('should not edit expense if expenses not found',() => {
     const amount = 20000
     const action = {
         type:'EDIT_EXPENSE',
         id:'-1',
         updates:{
              amount
         }
      };

     const state = expensesReducer(expenses, action);  
     expect(state).toEqual(expenses);
});
