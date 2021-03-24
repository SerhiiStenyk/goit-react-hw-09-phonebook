import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/selectors';
import Loader from '../components/Loader/Loader';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import Container from '../components/Container/Container';

export default function RegisterPage () {
    const Loading = useSelector(authSelectors.getLoading);
    return (
        
        <Container>
             {Loading ? <Loader/> : <RegisterForm/> }
        </Container>
    );
};