import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsAction from './contact-action';
const items = createReducer([], {
  [contactsAction.addContact]: (state, { payload }) => [...state, payload],
  [contactsAction.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
  [contactsAction.changeContact]: (state, { payload }) => payload,
});
export default combineReducers({
  items,
  filter,
});
