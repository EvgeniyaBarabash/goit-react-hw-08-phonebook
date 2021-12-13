import React from 'react';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import contactsAction from '../../redux/contacts/contact-action';
import { getVisibleContacts } from '../../redux/contacts/contacts-selector';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <p className={s.text}>
              {name}: {number}
            </p>
            <button
              type="button"
              className={s.btn}
              onClick={() => dispatch(contactsAction.deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
