import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactError,
  addContactSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from '../contacts/contact-action';

axios.defaults.baseURL =
  'https://61bf061fb25c3a00173f4c43.mockapi.io/contacts/';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

const addContact =
  ({ name, number }) =>
  dispatch => {
    const contact = {
      name,
      number,
    };
    dispatch(addContactRequest());
    axios
      .post('contacts', contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error)));
  };

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};
export default contactsOperations;
