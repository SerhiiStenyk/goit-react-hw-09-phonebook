import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';
import operations from '../../redux/contacts/operations';
import selectors from '../../redux/contacts/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.findContact);
  const deleteContact = (id) => dispatch(operations.deleteContact(id));

  return (
    <TransitionGroup component="ul" className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} timeout={250} classNames={s}>
          <ContactListItem
          key={id}
          name={name}
          number={number}
          id={id}
          deleteContact={deleteContact}
        />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};