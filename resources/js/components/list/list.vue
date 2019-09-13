<template>
    <div class="todo-container">
        <!-- <button class="todo-list-button" @click="showModal = true">+</button> -->
        <form 
            class="todo-form" 
            v-on:submit.prevent="addItem"
        >
            <input 
                required
                class="todo-form-input" 
                placeholder="Type item.." 
                type="text" 
                v-model="description"
            >
            <button class="todo-form-button" type="submit">Add</button>
        </form>
        <ul class="todo-list">
            <li 
                class="todo-list-item"
                :class="todo.done ? 'done': 'undone'" 
                v-for="(todo, key) in todos"
                v-bind:key="key" 
            >
                <div>
                    <input 
                        type="checkbox" 
                        v-model="todo.done"
                        class="todo-list-item-checkbox"
                    >
                    <span class="todo-list-item-text"> 
                        {{todo.description}} 
                    </span>
                    <button
                        @click="deleteItem(key)" 
                        class="todo-list-item-delete"
                    >
                        &times;
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
                description: '',
                id: 0,
                todos: [],
            };
        },
        methods: {
            addItem() {
                this.todos.push({
                    id: this.id,
                    description: this.description,
                    done: false,
                });
                localStorage.setItem('todos', JSON.stringify(this.todos));
                this.description = '';
                this.id += 1;
            },
            deleteItem(id) {
                this.todos.splice(id, 1);
                localStorage.setItem('todos', JSON.stringify(this.todos));
            },
            getItems() {
                if (localStorage.getItem('todos')) {
                    const x = localStorage.getItem('todos');
                    this.todos = JSON.parse(x);
                }
            },
        },
        mounted() {
            this.getItems();
        },
    };
</script>

<style lang="scss" scoped>
    .todo {
        &-container {
            position: relative;
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: 100vh;
            margin: auto;
            background-color: #fff;
            border: 1px solid $white-lilac;
            border-radius: 10px;

            @include respond-to(medium) {
                top: 100px;
                width: 360px;
                min-height: 600px;
            }
        }

        &-list {
            display: flex;
            flex-direction: column-reverse;
            padding: 0;
            list-style-type: none;

            &-item {
                padding: 16px 20px;
                border-bottom: 1px solid $white-lilac;

                &.done {
                    color: $zanah;
                    background-color: $moss-green;
                }

                &-text {
                    margin: 20px;
                    font-size: 19px;
                    font-weight: lighter;
                    vertical-align: middle;
                }
                
                &-checkbox {
                    appearance: none;
                    position: relative;
                    display: inline-block;
                    padding: 9px;
                    vertical-align: middle;
                    background-color: #fafafa;
                    border: 1px solid #cacece;
                    border-radius: 3px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0 -15px 10px -12px rgba(0, 0, 0, 0.05);

                    &:active {
                        color: #99a1a7;
                        background-color: #e9ecee;
                        border: 1px solid #adb8c0;
                        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0 -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.1);
                    }

                    &:checked::after {
                        position: absolute;
                        top: 0;
                        left: 3px;
                        width: 100%;
                        height: 100%;
                        font-size: 14px;
                        color: #99a1a7;
                        content: '';
                        background-image: url(/img/checkmark.svg);
                        background-size: contain;
                    }
                }

                &-delete {
                    float: right;
                    margin-right: 25px;
                    vertical-align: middle;

                    .done & {
                        color: #fff;
                    }
                }
            }

            &-button {
                position: absolute;
                bottom: -35px;
                display: inline-block;
                width: 70px;
                height: 70px;
                font-size: 40px;
                color: #fff;
                background-color: $porsche;
                border-radius: 50%;
            }
        }

        &-form {
            padding: 20px;
            border-bottom: 1px solid $white-lilac;

            &-button {
                float: right;
                padding: 8px 20px;
                font-weight: 400;
                color: #fff;
                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
                background-color: $porsche;
                border-radius: 4px;
            }

            &-input {
                padding: 8px 0;
            }
        }
    }
</style> 