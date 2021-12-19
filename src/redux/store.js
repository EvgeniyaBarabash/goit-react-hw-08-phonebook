import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/contact-reducer';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
export default store;
