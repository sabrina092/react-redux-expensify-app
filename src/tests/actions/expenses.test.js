import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense,startEditExpense, removeExpense,setExpenses,startSetExpenses,startRemoveExpense } from '../../actions/expense';
import expenses from '../fixtures/expenses'
import { database } from 'firebase';

const createMockStore = configureMockStore([thunk]);
 
//  //beforeEach((done) => {
//      const expensesData = {};
//      expenses.forEach(({id, description, note, amount, createdAt}) => {
//         expensesData[id]= {description, note, amount, createdAt}
//      })
//      database().ref('expenses').set(expensesData).then(() =>(done))
// // })

test('should setup remove expense action object', () => { 
   const action = removeExpense({ id :'123abc'});
   expect(action).toEqual({
       type: 'REMOVE_EXPENSE',
       id: '123abc'
   });
});

test('should setup Remove expense from firebase',(done) => {
     const store = createMockStore({})
     const id = expenses[2].id;
     store.dispatch(startRemoveExpense({id})).then(()=> {
       const actions = store.getActions();
       expect(actions[0].toEqual({
           type:'REMOVE_EXPENSE',
           id
       }));
       return database.ref(`expenses/${id}`).once('value')
        }).then((snapshot) =>{
           expect(snapshot.val()).toBeFalsy();
           done();
     })
         
});


// test('should setup edit expense action object',() => {
//      const action = editExpense ('123abc',{ note:'New note value'});
//      expect(action).toEqual({
//         type: 'EDIT_EXPENSE',
//         id: '123abc',
//         updates: {
//             note: 'New note value'
//         }
//     });
// });

test('should edit expense from firebase',(done)=>{
    const store = createMockStore({});
    const id = expenses[0].id
    const updates = {amount: 20000}
    store.dispatch(startEditExpense(id,updates)).then(()=>{
       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type:'EDIT_EXPENSE',
           id,
           updates
       });
       return database.ref(`expense/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
    })
});

// test('should setup add expense action object with provided values', () => {
    
//     const action = addExpense(expenses[2]);

//     expect(action).toEqual({
//         type : 'ADD_EXPENSE',
//         expense : expenses[2]
//     });
// });

// test('should setup add expense action object with default values',()=> {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//           id: expect.any(String),
//           description: '',
//           note: '',
//           amount: 0,
//           createdAt: 0
//         }
//     });
// });
// test('should setup startAddexpense action object with provided values', () =>{
//     const action = startAddExpense(expenses[2]);
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense: expenses[2]
//     })
// });

test('should add expense to database and store', (done)=> {
     const store = createMockStore({});
     const expenseData = {
      description:'rent',
      amount:4000,
      note:'this will be added',
      createdAt: 100

     };
     store.dispatch(startAddExpense(expenseData)).then(() => {
         const actions = store.getActions();
         expect(actions[0]).toEqual({
             type:'ADD_EXPENSE',
             expense:{
                 id:expect.any(String),
                 ...expenseData
             }
         });
          return database().ref(`expenses/${actions[0].expense.id}`).once('value');
          }).then((snapshot)=>{
             expect(snapshot.val()).toEqual(expenseData )
             done();
         
       })
}); 


test('should add expense to database with defaults value and store',(done)=> {
    const store = createMockStore({});
    const expenseDefaults = {
     description:'',
     amount:0,
     note:'',
     createdAt: 0

    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseDefaults
            }
        });
         return database().ref(`expenses/${actions[0].expense.id}`).once('value');
         }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseDefaults )
            done();
        
      })
}); 

// test('should setup set expense action object with data',()=> {
//   const action = startSetExpenses(expenses);
//   expect(action).toEqual({
//       type:'SET_EXPENSES',
//       expenses
//   })
// })