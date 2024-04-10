import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Nav = styled.nav`

    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    

    .icons{
        background: ${primaryColor};
        width: 100%;
        padding: 2%;
        display: flex;
        align-items: center;
        justify-content: right;
    }

    .links{
        background: ${primaryColor};
        padding: 2%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: left;
    }

    a{
        color: #fff;
        margin: 0 10px 0; 
        font-weight: bold;
        text-decoration: none;
    }

    
`