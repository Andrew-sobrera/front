import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormContactStyle } from './styled';

function FormContact({ onChange }) {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const toggle = () => setModal(!modal);

    const handleSave = () => {
        toggle(); // Fechar o modal após salvar
        onChange(name, lastName, email); // Passar o novo nome para o componente pai ou outro componente
    };

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
    };

    const handleLastNameChange = (e) => {
      const newLastName = e.target.value;
      setLastName(newLastName);
    };

    const handleEmailChange = (e) => {
      const newLastName = e.target.value;
      setLastName(newLastName);
    };

    return (
        <div>
            <Button color="success" onClick={toggle}>
                Criar Contato
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Criar Contato</ModalHeader>
                <ModalBody>
                    <FormContactStyle>
                        <div><input type='text' value={name} onChange={handleNameChange} placeholder='Nome' /></div>
                        <div><input type='text' value={lastName} onChange={handleLastNameChange}  placeholder='Sobrenome' /></div>
                        <div><input type='email' value={email} onChange={handleEmailChange} placeholder='Email' /></div>
                        <div><input type='number' placeholder='Celular' /></div>
                        <div><input type='File' /></div>
                    </FormContactStyle>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSave}>
                        Salvar
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default FormContact;
