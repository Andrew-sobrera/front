import React, { useState } from "react";
import { Container, Title } from "../../styles/GlobalStyles";
import FormContact from "../../components/FormContact";

export default function Contact(){

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleChange = (newName, newLastName, newEmail) => {
        setName(newName);
        setLastName(newLastName)
        saveData(newName,newLastName); // Chamada da função para salvar os dados com o novo nome
    };

    function saveData(name, lastName) {
        // Aqui você pode implementar a lógica para salvar os dados, por exemplo, enviá-los para um servidor
        console.log("Salvando dados aqui:", name);
        console.log("Salvando dados aqui:", lastName);
    }

    return (
        <Container>
            <Title>Contatos</Title>
            <FormContact onChange={handleChange} />
        </Container>
    );
}
