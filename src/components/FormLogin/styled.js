import styled from "styled-components";
import { primaryColor } from '../../config/colors'

import { Form, Button } from 'reactstrap';


export const FormLoginStyled = styled(Form)`

    width: 70%;
    display: block;
    align-items: center;
    justify-content: center;
    padding-left: 30%;

    Button{
        cursor: pointer;
        width: 100%;
        background-color: ${primaryColor};
    }

    Button:hover{
        background-color: green;
    }

`