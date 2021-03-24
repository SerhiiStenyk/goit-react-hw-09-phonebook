import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import s from './ContactForm.module.css';
import Notification from '../Notification/Notification';
import errorStyles from '../Notification/Notification.module.css';
import operations from '../../redux/contacts/operations';
import selectors  from '../../redux/contacts/selectors';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default: return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const duplicate = contacts.some(
      item => item.name === name,
    );
    if (duplicate) return toggleError();
    dispatch(operations.addContact({ name, number }));
    setName('');
    setNumber('');
  };
  const toggleError = () => {
    setError(true)
    setTimeout(() => { setError(false) }, 2000);
  };
    return (
      <>
        <CSSTransition
          in={error}
          classNames={errorStyles}
          timeout={250}
          unmountOnExit
        >
          <Notification/>
        </CSSTransition>
        <form
          className={s.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label className={s.label}>
            {' '}
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              required
              value={name}
              onChange={handleChange}
            />
          </label>
          <label className={s.label}>
            {' '}
            Phone
            <input
              className={s.input}
              type="tel"
              name="number"
              pattern="[0-9]+"
              required
              value={number}
              onChange={handleChange}
            />
          </label>
          <button className={s.btn} type="submit">
            {' '}
            Add contact
          </button>
        </form>
      </>
    );
};