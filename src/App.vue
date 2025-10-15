<template>
  <div id="app" class="app-container">

    <div class="main-card">
      <h1 class="main-title">Minhas Tarefas</h1>

      <TaskForm ref="taskFormRef" :editingTask="editingTask" @save-task="handleSaveTask" class="task-form-wrapper" />

      <TaskList :tasks="tasks" @edit-task="prepareEdit" @delete-task="deleteTask" @toggle-status="toggleTaskStatus" />

      <p v-if="isLoading" class="feedback-loading">
        Carregando tarefas...
      </p>

      <p v-if="error" class="feedback-error">
        Erro: {{ error }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TaskList from './components/TaskList.vue';
import TaskForm from './components/TaskForm.vue';

const tasks = ref([]);
const editingTask = ref(null);
const isLoading = ref(false);
const error = ref(null);
const taskFormRef = ref(null);

const API_BASE_URL = 'http://localhost:8000/api/tasks';

async function fetchTasks() {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) throw new Error(`Falha ao buscar tarefas: ${response.statusText}`);
    const result = await response.json();
    tasks.value = result.data;
  } catch (err) {
    error.value = err.message || 'Erro de rede ao carregar tarefas.';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
}

async function handleSaveTask(taskData) {
  if (!taskData) {
    editingTask.value = null;
    return;
  }

  let method = 'POST';
  let url = API_BASE_URL;

  if (taskData.id) {
    method = 'PUT';
    url = `${API_BASE_URL}/${taskData.id}`;
  }

  try {
    const response = await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData)
    });

    if (!response.ok) throw new Error(`Falha ao ${method === 'POST' ? 'criar' : 'editar'} a tarefa: ${response.statusText}`);

    await fetchTasks();
    editingTask.value = null;

    if (taskFormRef.value) {
      taskFormRef.value.resetForm();
    }

  } catch (err) {
    error.value = err.message || 'Erro ao salvar a tarefa.';
    console.error(err);
  }
}

async function deleteTask(taskId) {
  if (!confirm('Tem certeza que deseja excluir esta tarefa?')) return;

  try {
    const response = await fetch(`${API_BASE_URL}/${taskId}`, { method: 'DELETE' });
    if (!response.ok) throw new Error(`Falha ao excluir: ${response.statusText}`);

    tasks.value = tasks.value.filter(task => task.id !== taskId);

  } catch (err) {
    error.value = err.message || 'Erro ao excluir a tarefa.';
    console.error(err);
  }
}

async function toggleTaskStatus(task) {
  const originalStatus = task.status;
  task.status = originalStatus === 0 ? 1 : 0;

  const newStatus = task.status;
  const updateData = {
    status: newStatus
  };

  try {
    const response = await fetch(`${API_BASE_URL}/${task.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData)
    });

    if (!response.ok) throw new Error(`Falha ao atualizar o status: ${response.statusText}`);

  } catch (err) {
    error.value = err.message || 'Erro ao mudar o status da tarefa.';
    console.error(err);
    task.status = originalStatus;
  }
}

function prepareEdit(task) {
  editingTask.value = { ...task };
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(fetchTasks);

</script>

<style>
:root {
  --primary-color: #007bff;
  --success-color: #28a745;
  --danger-color: #dc3545;
  --warning-color: #ffc107;
  --bg-color: #f8f9fa;
  --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg-color);
  margin: 0;
}

.app-container {
  min-height: 100vh;
  padding: 40px 20px;
}

.main-card {
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  box-shadow: var(--card-shadow);
  border-radius: 12px;
  padding: 30px;
}

.main-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 25px;
  text-align: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
}

.task-form-wrapper {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #eaf6ff;
  border-left: 5px solid var(--primary-color);
  border-radius: 8px;
}

.feedback-loading,
.feedback-error {
  text-align: center;
  padding: 15px;
  margin-top: 20px;
  border-radius: 5px;
  font-weight: 600;
}

.feedback-error {
  color: var(--danger-color);
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
}

.feedback-loading {
  color: var(--primary-color);
}
</style>