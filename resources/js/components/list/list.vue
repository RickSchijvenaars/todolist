<template>
    <div class="todo-container">
        <form 
            class="todo-form" 
            v-on:submit.prevent="addItem"
        >
            <input 
                class="todo-form-input" 
                placeholder="Type item.." 
                type="text" 
                v-model="description"
            >
            <button class="todo-form-button">+ Add</button>
        </form>
        <ul class="todo-list">
            <li 
                class="todo-list-item" 
                v-bind:key="todo.id" 
                v-for="(todo, index) in todos"
            >
                <div>
                    <v-checkbox 
                        color="green" 
                        v-model="taskDone" 
                        :value="`${todo.item}`" 
                        :label="`${todo.item}`"
                    >
                    </v-checkbox>
                    <button 
                        @click="todos.splice(index, 1)" 
                        class="close"
                    >
                        Delete
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'List',
        data() {
            return {
                title: '',
                taskDone: [],
                description: '',
                id: 0,
                todos: [],
            };
        },
        methods: {
            addItem() {
                this.todos.push({
                    id: this.id,
                    item: this.description,
                });
                this.description = '';
                this.id += 1;
            },
            deleteItem(id) {
                this.todos.splice(id, 1);
            },
        },
    };
</script>

<style lang="scss" scoped>

</style>