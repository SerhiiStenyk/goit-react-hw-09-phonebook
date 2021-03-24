import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './LoginForm.module.css';
import authOperations from '../../redux/auth/operations';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
    return (
      <div>
        <h1 className={s.title}>Log In</h1>
        <form
          onSubmit={handleSubmit}
          className={s.form}
          autoComplete="off"
        >
          <label className={s.label}>
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              required
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
              onChange={handleChange}
            />
          </label>

          <button className={s.btn} type="submit">Login</button>
        </form>
      </div>
    );
};