import React from 'react';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operation';
import { getVisibleContacts } from '../../redux/contacts/contacts-selector';
import { Button } from 'react-bootstrap';

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
            <Button
              type="button"
              className={s.btn}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
