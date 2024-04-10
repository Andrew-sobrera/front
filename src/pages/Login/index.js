import React from "react";
import { useDispatch } from 'react-redux'

import { Container, Title } from "../../styles/GlobalStyles";
import FormLogin from "../../components/FormLogin";
import * as exampleActions from '../../store/modules/example/actions'


export default function Login(){

    const dispatch = useDispatch()
    const handleSubmit = (email, password) => {
       dispatch(exampleActions.clicaBotao())
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
