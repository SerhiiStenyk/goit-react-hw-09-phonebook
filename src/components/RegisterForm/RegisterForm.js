import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './RegisterForm.module.css';
import authOperations from '../../redux/auth/operations';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default: return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
    return (
      <div>
        <h1 className={s.title}>Registration</h1>
        <form
          onSubmit={handleSubmit}
          className={s.form}
          autoComplete="off"
        >
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              required
              placeholder="Example"
              pattern="[a-zA-z]+"
              minLength = "4"
              onChange={handleChange}
            />
          </label>

          <label className={s.label}>
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              required
              placeholder="example@mail.com"
              onChange={handleChange}
            />
          </label>

          <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              required
              pattern="[a-zA-Z0-9]+"
              placeholder="Example1"
              minLength = "6"
              onChange={handleChange}
            />
          </label>

          <button className={s.btn} type="submit">Register</button>
        </form>
      </div>
    );
};