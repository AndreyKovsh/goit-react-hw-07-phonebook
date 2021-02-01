import { useSelector, useDispatch } from 'react-redux';
import * as ContactOperations from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);
  const onDeleteContact = id => dispatch(ContactOperations.deleteContact(id));

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            <b>{name} </b>
            <em>{number}</em>
          </p>
          <button type="button" onClick={() => onDeleteContact(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contacts/contacts-actions';
// import { getVisibleContacts, getContacts } from '../../redux/contacts/contacts-selectors';

// const ContactList = () => {
//   const dispatch = useDispatch();
//   const visibleContacts = useSelector(getVisibleContacts);
//   const contacts = useSelector(getContacts);

//   return (
//     <ul>
//       {visibleContacts.map(({ id, name, number }) => (
//         <li key={id}>
//           <p>
//             <b>{name} </b>
//             <em>{number}</em>
//           </p>
//           <button type="button" onClick={() => dispatch(deleteContact(id))}>
//             delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactList;

// function ContactList({ contacts, onDeleteContact }) {
//   return (
//     <ul>
//       {contacts.map(({ id, name, number }) => (
//         <li key={id}>
//           <p>
//             <b>{name} </b>

//             <em>{number}</em>
//           </p>
//           <button type="button" onClick={() => onDeleteContact(id)}>
//             Удалить
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ContactList;
