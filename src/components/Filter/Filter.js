import React from 'react';
import PropTypes from 'prop-types';
import contactsAction from '../../app/contacts/contact-action';
import { connect } from 'react-redux';
import s from './Filter.module.css';
const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Фильтр по имени
    <input type="text" value={value} onChange={onChange} className={s.input} />
  </label>
);
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
// export default Filter;
const mapStateToProps = state => ({ value: state.contacts.filter });
const mapDispatchToProps=dispatch=>({
  onChange: e=> dispatch(contactsAction.changeContact(e.target.value))
});
export default connect(mapStateToProps,mapDispatchToProps)(Filter)