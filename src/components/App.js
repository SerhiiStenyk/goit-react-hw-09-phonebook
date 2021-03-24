import React, { lazy, Suspense, useEffect } from 'react';
import {Route, Switch } from 'react-router';
import { useDispatch } from 'react-redux';
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import authOperations from '../redux/auth/operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export default function App () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch]);
    return (
      <Container>

        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PrivateRoute path="/contacts" redirectTo="/login" component={ContactsPage} />
            <PublicRoute path="/login" restricted redirectTo="/contacts" component={LoginPage} />
            <PublicRoute path="/register" restricted redirectTo="/contacts" component={RegisterPage} />
          </Switch>
        </Suspense>

      </Container>
    );
};