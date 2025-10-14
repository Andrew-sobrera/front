<template>
    <li :class="['task-item', { 'task-item--completed': task.status === 'concluída' }]">
        <div class="task-item__info">

            <input type="checkbox" :checked="task.status === 1" @change="$emit('toggle')" class="task-item__checkbox">

            <div class="task-item__details">
                <h3 class="task-item__title">{{ task.title }}</h3>

                <p v-if="task.description" class="task-item__description">
                    {{ task.description }}
                </p>

                <small class="task-item__date">
                    Criada em: {{ formatDate(task.created_at) }}
                </small>
            </div>
        </div>

        <div class="task-item__actions">
            <button @click="$emit('edit')" class="task-item__button task-item__button--edit">
                Editar
            </button>
            <button @click="$emit('delete')" class="task-item__button task-item__button--delete">
                Excluir
            </button>
        </div>
    </li>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    task: { type: Object, required: true }
});

defineEmits(['edit', 'delete', 'toggle']);

function formatDate(dateString) {
    // Garante que a data seja formatada corretamente e trata valores nulos ou vazios
    if (!dateString) return 'Data Indisponível';
    try {
        return new Date(dateString).toLocaleDateString('pt-BR');
    } catch {
        return dateString; // Retorna a string original se falhar o parse
    }
}
</script>

<style scoped>
.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 12px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
    border-left: 5px solid var(--primary-color);
    transition: all 0.2s ease-in-out;
}

.task-item:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.task-item--completed {
    border-left-color: var(--success-color);
    background-color: #e9f7ee;
    opacity: 0.9;
}

.task-item--completed .task-item__title {
    text-decoration: line-through;
    color: #6c757d;
}

.task-item__info {
    display: flex;
    align-items: flex-start;
    flex-grow: 1;
}

.task-item__checkbox {
    width: 20px;
    height: 20px;
    margin-right: 15px;
    flex-shrink: 0;
    cursor: pointer;
    margin-top: 2px;
}

.task-item__title {
    font-size: 1.15rem;
    font-weight: 600;
    margin: 0;
    color: #343a40;
}

.task-item__description {
    margin: 5px 0 0;
    font-size: 0.9rem;
    color: #555;
}

.task-item__date {
    display: block;
    margin-top: 5px;
    font-size: 0.8rem;
    color: #999;
}

.task-item__actions {
    display: flex;
    gap: 10px;
    flex-shrink: 0;
}

.task-item__button {
    padding: 8px 15px;
    border: none;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
}

.task-item__button--edit {
    background-color: var(--warning-color);
    color: #333;
}

.task-item__button--edit:hover {
    background-color: #e0a800;
}

.task-item__button--delete {
    background-color: var(--danger-color);
    color: white;
}

.task-item__button--delete:hover {
    background-color: #c82333;
}

/* Responsividade simples */
@media (max-width: 600px) {
    .task-item {
        flex-direction: column;
        align-items: flex-start;
    }

    .task-item__info {
        margin-bottom: 10px;
        width: 100%;
    }

    .task-item__actions {
        width: 100%;
        justify-content: flex-end;
    }
}
</style>