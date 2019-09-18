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
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>

);
ReactDOM.render(jsx, document.getElementById('app'));





 //ReactDOM.render(template, document.getElementById('app'));