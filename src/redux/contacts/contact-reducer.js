import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { fetchContacts, deleteContact, addContact } from './contacts-operation';
import { changeContact } from './contact-action';
const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
  [changeContact]: (state, { payload }) => payload,
});
const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});
const error = createReducer(null, {
  [fetchContacts.rejected]: error => console.log(error),
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: error => console.log(error),
  [addContact.pending]: () => null,
  [deleteContact.rejected]: error => console.log(error),
  [deleteContact.pending]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
