import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './UserMenu.module.css';
import authSelectors from '../../redux/auth/selectors';
import authOperations from '../../redux/auth/operations';
import { BsBoxArrowRight } from "react-icons/bs";

export default function UserMenu() {
  const email = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logOut());
  return (
    <div className={s.container}>
      <span className={s.name}>{email}</span>
      <button className={s.btn} type="button" onClick={onLogout}>
        <BsBoxArrowRight className={s.icon} />
      </button>
    </div>
  );
};

