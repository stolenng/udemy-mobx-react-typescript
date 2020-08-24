import {action, computed, observable, reaction, when} from "mobx";

let runningId = 0;

class Todo {
    id: number = runningId++;

    @observable
    name: string;
    @observable
    isCompleted: boolean = false;

    private readonly disposer: () => void;

    constructor(name: string) {
        this.name = name;

        this.disposer = reaction(
            () => this.isCompleted,
            () => console.log(`${this.id}-Todo: ${this.name} changed to ${this.isCompleted ? 'Done' : 'Incomplete'}`)
        );
    }

    @action
    toggleTodo() {
        this.isCompleted = !this.isCompleted;
    }

    @action
    updateName(name: string) {
        this.name = name;
    }

    dispose() {
        this.disposer();
    }
}

class TodoList {
    @observable
    todoList: Todo[] = [];

    constructor() {
        reaction(
            () => this.todoList.length,
            () => console.log(`Current Todo Count: ${this.todoList.length}, Done Todos: ${this.completedTodos}, Incomplete Todos: ${this.incompleteTodos}`)
        );

        when(
            () => this.todoList.length > 0 && this.todoList.every(todo => todo.isCompleted),
            () => console.log(`Congratulations !`)
        );
    }

    @action
    addTodo(name: string) {
        this.todoList.push(new Todo(name));
    }

    getTodo(name: string) {
        return this.todoList.find(todo => todo.name === name);
    }

    @action
    removeTodo(name: string) {
        const todoToRemove = this.getTodo(name);

        if (todoToRemove) {
            todoToRemove.dispose();
            const todoToRemoveIndex = this.todoList.indexOf(todoToRemove);
            this.todoList.splice(todoToRemoveIndex, 1);
        }
    }

    @computed
    get completedTodos() {
        return this.todoList.filter(todo => todo.isCompleted).length;
    }

    @computed
    get incompleteTodos() {
        return this.todoList.filter(todo => !todo.isCompleted).length;
    }
}


const todoList = new TodoList();

todoList.addTodo('Learn Mobx!');
todoList.addTodo('Finish The Course!');
todoList.addTodo('Add some Review!');
todoList.addTodo('Go Play Outside');

todoList.getTodo('Learn Mobx!')?.toggleTodo();
todoList.getTodo('Finish The Course!')?.toggleTodo();
todoList.getTodo('Add some Review!')?.toggleTodo();


todoList.removeTodo('Go Play Outside');
