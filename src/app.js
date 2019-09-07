//import {square,add} from  './utils';
//import isSenior,{isAdult,isDrink} from './person';

//console.log("app.js is running app,,,");
//console.log(isAdult(4));
//console.log(isDrink(23));
//console.log(isSenior(120));

//import validator from 'validator';
//console.log(validator.isEmail('test'));
//console.log(validator.isEmail('test@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expense';
import { setTextfilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 3000 }));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 200}));
store.dispatch(addExpense({description: 'Rent bill', amount: 8000 }));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);
 
//console.log(store.getState());

const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>

);
ReactDOM.render(jsx, document.getElementById('app'));





 //ReactDOM.render(template, document.getElementById('app'));