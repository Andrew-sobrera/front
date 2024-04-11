import React, { useState } from 'react';
import { Button, Input, Label, FormGroup } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FormLoginStyled } from './styled'

export default function FormLogin( { onChange } ) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        onChange(email, password, e)
    }

    const handleChangeEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail)
    }

    const handleChangePassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword)
    }

    return (

        <FormLoginStyled>
            <FormGroup>
                <Label
                    for="exampleEmail"
                    hidden
                >
                    Email
                </Label>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label
                    for="examplePassword"
                    hidden
                >
                    Password
                </Label>
                <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                />
            </FormGroup>
            {''}
            <Button onClick={(e) => handleLogin(e)}>
                Logar
            </Button>
        </FormLoginStyled>
    )
}