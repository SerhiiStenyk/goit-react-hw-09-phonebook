import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import operations from '../redux/contacts/operations';
import selectors from '../redux/contacts/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import Loader from '../components/Loader/Loader.jsx';
import Container from '../components/Container/Container';
import styles from '../components/animations.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getContacts);
  const isLoading = useSelector(selectors.getLoading);
  useEffect(() => {
    dispatch(operations.fetchContacts())
  },[dispatch]);
  return (
    <Container>
                
      <ContactForm />
    
      <CSSTransition
        in={contacts.length > 1}
        classNames={styles}
        timeout={250}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      {isLoading && <Loader />}
        
      <CSSTransition
        in={contacts.length > 0}
        classNames={styles}
        timeout={250}
        unmountOnExit
      >
        <ContactList />
      </CSSTransition>
    </Container>
  );
};