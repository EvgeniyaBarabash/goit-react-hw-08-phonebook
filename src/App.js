// import { useState} from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import FormEditor from 'components/Form/FormEditor';
import Filter from 'components/Filter/Filter';
export default function App() {
  return (
    <div className="wrapper">
      <h2 className="title">Phonebook</h2>
      <FormEditor />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
