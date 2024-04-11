import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import { toast } from "react-toastify";

import { Container, Title } from "../../styles/GlobalStyles";
import { TaskContainer, Text, FormTask, Button, BtnDelete, Buttons } from "./styled";
import axios from '../../services/axios'
import Loading from "../../components/Loading";

export default function Task(){
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(e){
        setIsLoading(true)
        e.preventDefault();

        try {
              const taskData = {
                tarefas: taskInput
            };

            await axios.post(`/tasks`, taskData);
            setSubmitSuccess(true);

            setTaskInput('');

            setIsLoading(false)

            toast.success('Tarefa salva com sucesso!');

        } catch (error) {
            console.log('Erro ao deletar tarefa:', error);
        }finally{
            setIsLoading(false)
        }
        
    }

    async function handleDelete(taskId) {
        try {
            setIsLoading(true)
            await axios.delete(`/tasks/${taskId}`);
            
            setTasks(tasks.filter(task => task.id !== taskId));
            setIsLoading(false)
            toast.success('Tarefa excluída com sucesso!');
        } catch (error) {
            console.log('Erro ao deletar tarefa:', error);
        }finally{
            setIsLoading(false)
        }
    }

    const handleChecked = async(taskId, isChecked, tarefa) => {
        try {
            setIsLoading(true)
            await axios.put(`/tasks/${taskId}`, { check: isChecked });

            // Atualiza o estado das tarefas
            setTasks(prevTasks =>
                prevTasks.map(task =>
                    task.id === taskId ? { ...task, check: isChecked } : task
                )
            );
            setIsLoading(false)
            toast.success(`Tarefa ${tarefa} realizada`)
        } catch (error) {
            console.log('Erro ao atualizar tarefa:', error);
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        async function getData(){
            try {
                setIsLoading(true)
                const response = await axios.get('/tasks')
                setTasks(response.data)
                setIsLoading(false)
            } catch (error) {
                console.log('erro');
            }finally{
                setIsLoading(false)
            }
        }

        getData();
        setSubmitSuccess(false);
    }, [submitSuccess]);
    return (
        <>
            <Loading isLoading={isLoading} />
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
