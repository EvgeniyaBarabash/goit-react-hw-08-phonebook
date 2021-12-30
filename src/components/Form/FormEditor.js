import { useState } from 'react';
import s from './FormEditor.module.css';
import {addContact} from '../../redux/contacts/contacts-operation';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selector';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

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
      : dispatch(addContact({ name, number }));
    clearForm();
  };
  const clearForm = () => {
    setName('');
    setNumber('');
  };
  return (
    <div>
    <Form onSubmit={handleSubmit} className={s.input}>
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control
          type="name"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        value={name}
        />
      </Form.Group>
      <Form.Group className="mb-3"  controlId="formBasicEmail" >
        <Form.Control
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
            placeholder="Number"
            value={number}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
      Add Contact
      </Button>
    </Form>
  </div>
  );
}
