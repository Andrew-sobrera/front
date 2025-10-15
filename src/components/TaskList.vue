<template>
    <div class="task-list-container">

        <h2 class="list-title">Tarefas Pendentes ({{ pendingTasks.length }})</h2>
        <ul class="task-list">
            <TaskItem v-for="task in pendingTasks" :key="task.id" :task="task" @edit="$emit('edit-task', task)"
                @delete="$emit('delete-task', task.id)" @toggle="$emit('toggle-status', task)" />
            <p v-if="pendingTasks.length === 0" class="empty-list">Nenhuma tarefa pendente. Comece uma!</p>
        </ul>

        <h2 class="list-title list-title--completed">Tarefas Concluídas ({{ completedTasks.length }})</h2>
        <ul class="task-list">
            <TaskItem v-for="task in completedTasks" :key="task.id" :task="task" @edit="$emit('edit-task', task)"
                @delete="$emit('delete-task', task.id)" @toggle="$emit('toggle-status', task)" />
            <p v-if="completedTasks.length === 0" class="empty-list">Nenhuma tarefa concluída ainda.</p>
        </ul>

    </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue';
import TaskItem from './TaskItem.vue';

const props = defineProps({
    tasks: {
        type: Array,
        required: true
    }
});

defineEmits(['edit-task', 'delete-task', 'toggle-status']);

const pendingTasks = computed(() =>
    props.tasks.filter(t => t.status === 0)
);

const completedTasks = computed(() =>
    props.tasks.filter(t => t.status === 1)
);
</script>

<style scoped>
.task-list-container {
    margin-top: 30px;
}

.list-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: #495057;
    border-bottom: 2px solid #ccc;
    padding-bottom: 5px;
    margin-top: 30px;
    margin-bottom: 15px;
}

.list-title--completed {
    border-color: var(--success-color);
}

.task-list {
    list-style: none;
    padding: 0;
}

.empty-list {
    color: #6c757d;
    font-style: italic;
    padding: 15px;
    background-color: #f1f1f1;
    border-radius: 6px;
}
</style>