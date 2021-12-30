import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from '../components/ContactList/ContactList';
import FormEditor from '../components/Form/FormEditor';
import Filter from '../components/Filter/Filter';
import { fetchContacts } from '../redux/contacts/contacts-operation';
import { getLoading } from '../redux/contacts/contacts-selector';
import Loading from 'components/Loader/Loading';
import s from './Views.module.css';

export default function ContactView() {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={s.contactsView}>
      <h2 className={s.titlePadding}>Phonebook</h2>
      <FormEditor />
      <h2 className={s.titlePadding}>Contacts</h2>
      <Filter />
      <ContactList />
      {loading && <Loading />}
    </div>
  );
}
