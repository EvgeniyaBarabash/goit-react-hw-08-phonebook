import { useState } from 'react';
import s from './FormEditor.module.css';
import contactsOperation from '../../redux/contacts/contacts-operation';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selector';
export default function FormEditor() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    contacts.map(contact => contact.name).includes(name)
      ? alert(`${name} is already in contacts`)
      : dispatch(contactsOperation.addContact({ name, number }));
    clearForm();
  };
  const clearForm = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.title} htmlFor="user-name">
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleChange}
        value={name}
        id="user-name"
        className={s.input}
      />

      <label className={s.title} htmlFor="user-number">
        Number
      </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={handleChange}
        value={number}
        id="user-number"
        className={s.input}
      />

      <button type="submit" className={s.btn}>
        Add Contact
      </button>
    </form>
  );
}
