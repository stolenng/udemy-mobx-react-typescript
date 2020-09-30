import {action, computed, observable} from "mobx";
import Todo from "./todo";
import {getEnv} from "mobx-easy";
import {RootEnv} from "../../helpers/create-store";

export default class TodoStore {
    @observable
    todoList: Todo[] = [];

    constructor() {
        // reaction(
        //     () => this.todoList.length,
        //     () => console.log(`Current Todo Count: ${this.todoList.length}, Done Todos: ${this.completedTodos}, Incomplete Todos: ${this.incompleteTodos}`)
        // );
        //
        // when(
        //     () => this.todoList.length > 0 && this.todoList.every(todo => todo.isCompleted),
        //     () => console.log(`Congratulations !`)
        // );
    }

    async addTodo(name: string, userId: number) {
        const {todoService} = getEnv<RootEnv>();

        await todoService.addTodo();

        this._addTodo(name, userId);
    }

    @action
    private _addTodo(name: string, userId: number) {
        this.todoList.push(new Todo(name, userId, this));
    }

    getUserTodos(userId: number) {
        return this.todoList.filter(todo => todo.userId === userId);
    }

    getTodo(id: number) {
        return this.todoList.find(todo => todo.id === id);
    }

    async removeTodo(id: number) {
        const {todoService} = getEnv<RootEnv>();

        await todoService.removeTodo();

        this._removeTodo(id);
    }

    @action
    private _removeTodo(id: number) {
        const todoToRemove = this.getTodo(id);

        if (todoToRemove) {
            todoToRemove.dispose();
            const todoToRemoveIndex = this.todoList.indexOf(todoToRemove);
            this.todoList.splice(todoToRemoveIndex, 1);
        }
    }

    @computed
    get completedTodos() {
        return this.todoList.filter(todo => todo.isCompleted);
    }

    @computed
    get incompleteTodos() {
        return this.todoList.filter(todo => !todo.isCompleted);
    }
}
