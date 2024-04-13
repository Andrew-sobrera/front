import React from "react";

//import { Container } from "../../styles/GlobalStyles";
import { Container } from "./styled";
import { UserComponent } from '../../components/UserComponent';


export default function User(){

    return (
        <>
            <Container>
                <UserComponent></UserComponent>
            </Container>
        </>
    );
}
