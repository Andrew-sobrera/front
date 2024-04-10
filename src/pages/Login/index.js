import React, { useState } from "react";

import { Container, Title } from "../../styles/GlobalStyles";
import FormLogin from "../../components/FormLogin";


export default function Login(){

    const handleSubmit = (email, password) => {
        console.log(email, password)
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
