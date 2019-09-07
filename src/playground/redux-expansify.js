import { createStore, combineReducers } from 'redux';






const getVisibleExpenses = (expenses,{ text,sortBy,startDate,endDate }) => {
    return expenses.filter ((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createAt < b.createdAt ? 1 : -1;
        } else if (sortBy ==='amount'){
            return a.createAt < b.createdAt ? 1 : -1;
        }
    })
};

store.subscribe (() =>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description:'Rent',amount: 200, createdAt:0 }));
const expenseTwo = store.dispatch(addExpense({description:'coffee',amount:25, createdAt:21000}));

//store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//store.dispatch(editExpense(expenseTwo.expense.id, { amount : 500 }));

//store.dispatch(setTextfilter('rent'));
//store.dispatch(setTextfilter());

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(90));
//store.dispatch(setStartDate());
//store.dispatch((setEndDate(999)));


const demoState = {
    expenses :[{
        id: 'e90mD932',
        description: 'new items available',
        note: 'dataum will be ready.',
        amount: 53400,
        createdAt: 0
    }],
    filters:{
        text: 'items',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined

    }

};