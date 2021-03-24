import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/contacts/actions';
import s from './Filter.module.css';
import selectors from '../../redux/contacts/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);
  const onChange = (e) => { dispatch(actions.changeFilter(e.target.value)) };
  return (
    <label className={s.filter}>
      Find contacts by name
      <input className={s.input} type="text" value={value} onChange={onChange} />
    </label>
  );
};