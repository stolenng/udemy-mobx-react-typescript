//@ts-nocheck
import {action, computed, observable} from "mobx";

const TodoStore = function () {
    this.todoList = observable.array([]);


    this.addTodo = action((name: string, userId: number) => {
        this.todoList.push(new Todo(name, userId, this));
    });

    this.completedTodos = computed(() => {
        return this.todoList.filter(todo => todo.isCompleted);
    });

    this.incompleteTodos = computed(() => {
        return this.todoList.filter(todo => !todo.isCompleted);
    });
}

const Todo = function ({id, userId, todoStore}) {
    this.id = id;
    this.userId = userId;
    this.todoStore = todoStore;

    const _name = observable.box('');
    const _isCompleted = observable.box(false);

    this.name = _name.value;
    this.isCompleted = _isCompleted.value;

    this.remove = () => {
        this.todoStore.removeTodo(this.id);
    }

    this.toggleTodo = action(() => {
        this.isCompleted = !this.isCompleted;
    });

    this.dispose = () => {
        this.disposer();
    }
}

const mobxWithFunctions = {
    TodoStore,
    Todo
}

// To use it, Import in "index.tsx"
// this code:
// //@ts-ignore
// const todoStoreFunction = new mobxWithFunctions.TodoStore();
// todoStoreFunction.addTodo('Test');
// console.log(todoStoreFunction)

export {
    mobxWithFunctions
};