import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import { toast } from "react-toastify";

import { Container, Title } from "../../styles/GlobalStyles";
import { TaskContainer, Text, FormTask, Button, BtnDelete, Buttons } from "./styled";
import axios from '../../services/axios'

export default function Task(){
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();

        try {
              const taskData = {
                tarefas: taskInput
            };

            await axios.post(`/tasks`, taskData);
            setSubmitSuccess(true);
            setTaskInput('');
            toast.success('Tarefa salva com sucesso!');
        } catch (error) {
            console.log('Erro ao deletar tarefa:', error);
        }
        
    }

    async function handleDelete(taskId) {
        try {
            await axios.delete(`/tasks/${taskId}`);
            
            setTasks(tasks.filter(task => task.id !== taskId));
            toast.success('Tarefa excluída com sucesso!');
        } catch (error) {
            console.log('Erro ao deletar tarefa:', error);
        }
    }

    const handleChecked = async(taskId, isChecked, tarefa) => {
        try {

            await axios.put(`/tasks/${taskId}`, { check: isChecked });

            // Atualiza o estado das tarefas
            setTasks(prevTasks =>
                prevTasks.map(task =>
                    task.id === taskId ? { ...task, check: isChecked } : task
                )
            );

            toast.success(`Tarefa ${tarefa} realizada`)
        } catch (error) {
            console.log('Erro ao atualizar tarefa:', error);
        }
    }

    useEffect(() => {
        async function getData(){
            try {
                const response = await axios.get('/tasks')
                setTasks(response.data)
            } catch (error) {
                console.log('erro');
            }
        }

        getData();
        setSubmitSuccess(false);
    }, [submitSuccess]);
    return (
        <>
            <Container>
                <Title>Lista de Tarefas</Title>
                <FormTask onSubmit={handleSubmit}  action="#" className="form">
                    <Text 
                        type="text"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                    />
                    <Button type="submit"><IoSend size={15} /></Button>
                </FormTask>
                <TaskContainer>
                    { tasks.map(task => (
                        <div 
                            key={task.id}>{ task.tarefas }
                            <Buttons>
                                 <input 
                                    type="checkbox"
                                    checked={task.check}
                                    onChange={(e) => handleChecked(task.id, e.target.checked, task.tarefas)}  
                                />
                                <BtnDelete onClick={() => handleDelete(task.id)}><AiFillDelete size={16} /></BtnDelete>
                            </Buttons>
                            
                        </div>
                    )) }
                </TaskContainer>
            </Container>
        </>
    );
}
