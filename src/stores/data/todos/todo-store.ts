import {action, computed, observable, reaction, when} from "mobx";
import RootStore from "../../root-store";
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
        const {todoService, isDev} = getEnv<RootEnv>();

        if (!isDev) {
            await todoService.addTodo()
        }

        this._addTodo(name, userId);
    }

    private _addTodo(name: string, userId: number) {
        this.todoList.push(new Todo(name, userId, this));
    }

    getUserTodos(userId: number) {
        return this.todoList.filter(todo => todo.userId === userId);
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
        return this.todoList.filter(todo => todo.isCompleted);
    }

    @computed
    get incompleteTodos() {
        return this.todoList.filter(todo => !todo.isCompleted);
    }
}
