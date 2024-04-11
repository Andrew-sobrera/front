import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'loadsh'

import { Title , Container } from "../../styles/GlobalStyles";
import FormLogin from "../../components/FormLogin";
import * as actions from '../../store/modules/auth/actions'
import Loading from '../../components/Loading'


export default function Login(props){
    const dispatch = useDispatch()
    const prevPath = get(props, 'location.state.prevPath', '/')
    const isLoading = useSelector(state => state.auth.isLoading)
    
    const handleSubmit = (email, password) => {
       dispatch(actions.loginRequest({ email, password, prevPath }))
    }

    return (
        <>
        <Loading  isLoading={isLoading}/>
            <Container>
                <Title>Login</Title>
                <FormLogin onChange={handleSubmit}></FormLogin>
            </Container>
        </>
    );
}
