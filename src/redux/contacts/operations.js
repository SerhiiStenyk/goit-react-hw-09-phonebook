/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import actions from './actions';

const fetchContacts = () => dispatch => {
    dispatch(actions.fetchContactsRequest());
    axios
        .get('/contacts')
        .then(({ data }) => dispatch(actions.fetcContactsSuccess(data)))
        .catch(error => dispatch(actions.fetcContactsError(error.message)));
};
const addContact = ({ name, number }) => dispatch => {
    const contact = {
        name,
        number
    };
        dispatch(actions.addContactRequest());
    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(actions.addContactSuccess(data)))
        .catch(error => dispatch(actions.addContactError(error.message)));
};
const deleteContact = contactId => dispatch => {
    dispatch(actions.deleteContactRequest());
    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(actions.deleteContactSuccess(contactId)))
        .catch(error => dispatch(actions.deleteContactError(error.message)));
};
export default {
    addContact,
    deleteContact,
    fetchContacts
};