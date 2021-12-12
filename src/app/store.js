import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactReducer from './contacts/contact-reducer';
const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
