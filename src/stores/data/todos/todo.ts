import {action, observable, reaction} from "mobx";
import TodoStore from "./todo-store";

let runningId = 0;

export default class Todo {
    id: number;

    userId: number;

    @observable
    name: string;
    @observable
    isCompleted: boolean = false;

    private readonly disposer: () => void;
    private readonly todoStore: TodoStore;

    constructor(name: string, userId: number, todoStore: TodoStore) {
        this.id = runningId++;
        this.name = name;
        this.userId = userId;
        this.todoStore = todoStore;

        this.disposer = reaction(
            () => this.isCompleted,
            () => console.log(`${this.id}-Todo: ${this.name} changed to ${this.isCompleted ? 'Done' : 'Incomplete'}`)
        );
    }

    remove() {
        this.todoStore.removeTodo(this.name);
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
