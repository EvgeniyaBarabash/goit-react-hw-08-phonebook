import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contact-action';
import { getFilter } from '../../redux/contacts/contacts-selector';
import s from './Filter.module.css';
import { Form } from 'react-bootstrap';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label> Фильтр по имени</Form.Label>
        <Form.Control
          type="text"
          value={value}
          onChange={e => dispatch(changeFilter(e.target.value))}
          className={s.input}
        />
      </Form.Group>
    </Form>
  );
}
