import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction(
  'contacts/fetchcontactsRequest',
);

export const fetchContactSuccess = createAction(
  'contacts/fetchcontactsSuccess',
);

export const fetchContactError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');

export const addContactSuccess = createAction('contacts/addContactSuccess');

export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);

export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);

export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacs/changeFilter');

// import shortid from 'shortid';
// import { createAction } from '@reduxjs/toolkit';
// import { ADD, DELETE, CHANGE_FILTER } from './types';

// export const addContact = createAction(ADD, (name, number) => ({
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// }));
// export const deleteContact = createAction(DELETE);

// export const changeFilter = createAction(CHANGE_FILTER);

// export default { addContact, deleteContact, changeFilter };
