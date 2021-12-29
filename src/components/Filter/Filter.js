import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {changeFilter} from '../../redux/contacts/contact-action';
import { getFilter } from '../../redux/contacts/contacts-selector';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Фильтр по имени
      <input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className={s.input}
      />
    </label>
  );
}
