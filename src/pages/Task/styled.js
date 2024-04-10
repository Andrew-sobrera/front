import styled from "styled-components";

export const TaskContainer = styled.div`
    padding: 20px;

    div{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        
    }
    
`

export const Buttons = styled.div`
    display: flex;

`

export const Text = styled.input`
    display: flex;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    width: 100%; 
    padding: 5px;
    text-align: center;
    font-size: large;
    font-family:sans-serif;
`;

export const FormTask = styled.form`
    display: flex;
`

export const Button = styled.button`
    margin-top: 10px;
    padding: 5px; /* ou ajuste conforme necessário */
    display: inline-block; /* para que o botão respeite o alinhamento vertical */
    vertical-align: middle; /* alinha o botão verticalmente com o texto */
    background-color: transparent; /* para que o botão fique sem cor de fundo */
    border: 5px; /* remove a borda do botão */
    cursor: pointer; /* mostra o cursor como pointer quando passar sobre o botão */
`;

export const BtnDelete = styled.button`
    background-color: transparent;
    color: red; 
    border: none; 
    cursor: pointer; 
`;

