import React from "react";
import { useDispatch } from 'react-redux'
import { get } from 'loadsh'


import { Container, Title } from "../../styles/GlobalStyles";
import FormLogin from "../../components/FormLogin";
import * as actions from '../../store/modules/auth/actions'


export default function Login(props){
    const dispatch = useDispatch()
    const prevPath = get(props, 'location.state.prevPath', '/')
    
    const handleSubmit = (email, password) => {
       dispatch(actions.loginRequest({ email, password, prevPath }))
    }

    return (
        <>
            <Container>
                <Title>Login</Title>
                <FormLogin onChange={handleSubmit}></FormLogin>
            </Container>
        </>
    );
}
