import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {});

const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  loading,
  error,
  filter,
});

// import { combineReducers } from 'redux';
// import types from './types';
// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact, changeFilter } from './actions';

// const items = createReducer([], {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [deleteContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   items,
//   filter,
// });
