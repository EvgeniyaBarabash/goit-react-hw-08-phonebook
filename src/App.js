import { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from './components/ContactList/ContactList';
import FormEditor from 'components/Form/FormEditor';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from './redux/contacts/contacts-operation';
import { getLoading } from 'redux/contacts/contacts-selector';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="wrapper">
      <h2 className="title">Phonebook</h2>
      <FormEditor />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
      {loading && <h1>Загружаем...</h1>}
    </div>
  );
}
