import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import * as ContactOperations from '../../redux/contacts/contacts-actions';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const change = e => dispatch(ContactOperations.changeFilter(e.target.value));

  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={change} />
    </label>
  );
}

// import React from 'react';

// const Filter = ({ value, onChange }) => (
//   <label>
//     Find contacts by name
//     <input type="text" value={value} onChange={onChange} />
//   </label>
// );

// export default Filter;
