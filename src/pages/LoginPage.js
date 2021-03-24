import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm/LoginForm';
import Container from '../components/Container/Container';
import authSelectors from '../redux/auth/selectors';
import Loader from '../components/Loader/Loader';

export default function LoginPage() {
    const Loading = useSelector(authSelectors.getLoading);
    return (
        <Container>
            {Loading ? <Loader/> : <LoginForm/> } 
        </Container>
    );
};
