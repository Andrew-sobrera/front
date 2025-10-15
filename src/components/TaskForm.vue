<template>
    <form @submit.prevent="submitForm" class="task-form">
        <h2 class="task-form__title">
            {{ isEditing ? 'Editar Tarefa' : 'Adicionar Nova Tarefa' }}
        </h2>

        <input type="text" v-model="formData.title" placeholder="Título da Tarefa (obrigatório)" required
            class="task-form__input">

        <textarea v-model="formData.description" placeholder="Descrição (opcional)" rows="3"
            class="task-form__input task-form__textarea"></textarea>

        <div class="task-form__actions">
            <button type="submit" :disabled="!formData.title.trim()"
                class="task-form__button task-form__button--primary"
                :class="{ 'task-form__button--disabled': !formData.title.trim() }">
                {{ isEditing ? 'Salvar Edição' : 'Adicionar Tarefa' }}
            </button>

            <button v-if="isEditing" type="button" @click="cancelEdit"
                class="task-form__button task-form__button--secondary">
                Cancelar
            </button>
        </div>
    </form>
</template>

<script setup>
import { ref, watch, computed, defineProps, defineEmits, defineExpose } from 'vue';

const props = defineProps({
    editingTask: {
        type: Object,
        default: null
    }
});

const emit = defineEmits(['save-task']);

const initialFormData = {
    id: null,
    title: '',
    description: ''
};

const formData = ref({ ...initialFormData });

const isEditing = computed(() => !!props.editingTask && !!props.editingTask.id);

watch(() => props.editingTask, (newTask) => {
    if (newTask) {
        formData.value = {
            id: newTask.id,
            title: newTask.title,
            description: newTask.description || ''
        };
    }
}, { immediate: true });

function resetForm() {
    formData.value = { ...initialFormData };
}

function submitForm() {
    emit('save-task', { ...formData.value });
}

function cancelEdit() {
    emit('save-task', null);
    resetForm();
}

defineExpose({
    resetForm
});
</script>

<style scoped>
.task-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.task-form__title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #495057;
    margin-bottom: 15px;
}

.task-form__input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ced4da;
    border-radius: 6px;
    box-sizing: border-box;
    transition: border-color 0.2s;
}

.task-form__input:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.task-form__actions {
    display: flex;
    gap: 15px;
    padding-top: 10px;
}

.task-form__button {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
}

.task-form__button--primary {
    background-color: var(--primary-color);
    color: white;
}

.task-form__button--primary:hover:not(.task-form__button--disabled) {
    background-color: #0056b3;
}

.task-form__button--secondary {
    background-color: #6c757d;
    color: white;
}

.task-form__button--secondary:hover {
    background-color: #5a6268;
}

.task-form__button--disabled {
    background-color: #ced4da;
    color: #6c757d;
    cursor: not-allowed;
}
</style>