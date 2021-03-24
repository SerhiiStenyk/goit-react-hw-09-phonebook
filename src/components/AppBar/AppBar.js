import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import authSelectors from '../../redux/auth/selectors';
import animation from '../animations.module.css';
import s from './AppBar.module.css';
import { MdContactPhone } from "react-icons/md";

export default function AppBar() {
    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
    return (
        <header className={s.header}>
            <CSSTransition
                in={true}
                appear={true}
                classNames={animation}
                timeout={1000}
                unmountOnExit
            >
                <NavLink
                    to="/"
                    exact
                    className={s.title}
                >
                    Phonebook
                    </NavLink>
            </CSSTransition>
            {isAuthenticated && (<NavLink
                to="/contacts"
                exact
                className={s.link}
                activeClassName={s.linkActive}
            >
                <MdContactPhone className={s.icon}/>
            </NavLink>)}
            
            { isAuthenticated ? <UserMenu /> : <AuthNav />}
        </header>
    );
};