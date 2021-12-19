import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactError,
  addContactSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeContact,
} from '../contacts/contact-action';
const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
  [changeContact]: (state, { payload }) => payload,
});
const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});
const error = createReducer(null, {
  [fetchContactsError]: error => console.log(error),
  [addContactError]: error => console.log(error),
  [deleteContactError]: error => console.log(error),
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
