import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from '../components/ContactList/ContactList';
import FormEditor from '../components/Form/FormEditor';
import Filter from '../components/Filter/Filter';
import { fetchContacts } from '../redux/contacts/contacts-operation';
import { getLoading } from '../redux/contacts/contacts-selector';

export default function ContactView(){
    const dispatch = useDispatch();
    const loading = useSelector(getLoading);
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
    return (
      <div>
        <h2 >Phonebook</h2>
        <FormEditor />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        {loading && <h1>Загружаем...</h1>}
      </div>
)}