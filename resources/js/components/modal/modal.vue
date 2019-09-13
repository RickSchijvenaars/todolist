<template>
    <div class="js-modal-container">
        <div class="modal js-modal">
            <div class="modal-wrap">
                <div class="modal-inner">
                    <button 
                        type="button" 
                        class="modal-close js-modal-close" 
                        aria-label="sluiten"
                        @click="showModal = false"
                    >
                        &times;
                    </button>
                    <div class="modal-content">
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
                            <button class="todo-form-button" type="submit">Add</button>
                        </form>
                    </div>
                </div>
                <div class="modal-bg js-review-modal-close"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
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
                });
                this.description = '';
                this.id += 1;
            },
        },
    };
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
}

.modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgba(44, 47, 54, 0.75);
}

.modal-wrap {
    display: flex;
    height: 100%;
}

.modal-inner {
    position: relative;
    z-index: 4;
    width: 100%;
    height: 100%;
    max-height: 100%;
    padding: 40px;
    margin: auto;
    overflow-y: scroll;
    background-color: #fff;
}

.modal-close {
    position: absolute;
    top: 10px;
    right: 15px;
    z-index: 5;
    width: auto;
    font-size: 25px;
    color: #000;
    background-color: transparent;
    border: 0;
}

.modal-open {
    overflow: hidden;

    .modal {
        display: block;
    }
}
</style>