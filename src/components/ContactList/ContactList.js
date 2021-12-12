import React from 'react';
import s from './ContactList.module.css';
import contactsAction from '../../app/contacts/contact-action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const ContactList = ({ contacts, onDeleteContacts }) => {
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
              onClick={() => onDeleteContacts(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};
// export default ContactList;
  const getVisibleContact = (contacts, filter) => {
    const nomalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nomalizedFilter),
    );
  };
const mapStateToProps = ({ items, filter })=>({
  contacts: getVisibleContact(items,filter),
});
const mapDispatchToProps=dispatch=>({
  onDeleteContacts: e=>dispatch(contactsAction.deleteContact(e.target.value))
});
export default connect(mapStateToProps,mapDispatchToProps)(ContactList)