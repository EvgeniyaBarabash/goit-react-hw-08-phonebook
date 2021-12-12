import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import contactReducer from './contacts/contact-reducer';

 export const store = configureStore({
    reducer:contactReducer,
  });
 