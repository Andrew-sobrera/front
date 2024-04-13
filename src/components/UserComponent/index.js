import React from "react"
import { CardBody, CardTitle, CardSubtitle, CardLink, Card } from 'reactstrap'

import { CardStyled } from './styled'
import { useSelector } from 'react-redux'

export function UserComponent() {

    const user = useSelector(state => state.auth.user)
    return (

        <CardStyled
            style={{
                width: '18rem'
            }}
        >
            <CardBody>
                <CardTitle tag="h5">
                    { user.nome }
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    { user.email }
                </CardSubtitle>
            </CardBody>
            <img
                alt="Card cap"
                src={user.img}
                width="100%"
            />
            <CardBody>
                <CardLink href="#">
                    Adicionar / Trocar Foto
                </CardLink>
            </CardBody>
        </CardStyled>
    )
}